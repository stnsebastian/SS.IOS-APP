const CACHE_NAME = 'sif-ss-iphone-v5.09';
const LOCAL_ASSETS = [
  './',
  './index.html',
  './manual_usuario.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  './apple-touch-icon.svg'
];

const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SIF SS iPhone iOS] Instalando caché offline...');
      await cache.addAll(LOCAL_ASSETS);
      for (const url of EXTERNAL_ASSETS) {
        try {
          const resp = await fetch(url, { mode: 'cors' });
          if (resp && (resp.status === 200 || resp.type === 'opaque')) {
            await cache.put(url, resp);
          }
        } catch (e) {
          console.warn('[SIF SS iPhone iOS] Aviso CDN:', url);
        }
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SIF SS iPhone iOS] Eliminando caché antigua:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Estrategia Network-First (Primero Internet, si no hay internet o falla, usa Caché Offline)
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Actualiza la caché en segundo plano con la nueva versión en línea
        if (event.request.method === 'GET' && networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Si no hay internet, busca en la caché
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

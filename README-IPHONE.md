# SIF-SS // Sistema Integral Forense — Versión Apple iPhone & iOS Safari

Versión especializada de la aplicación forense de la **BICRIM San Javier (PDI)** diseñada y optimizada específicamente para funcionar de manera nativa en dispositivos **Apple iPhone e iOS Safari**.

---

## ✨ Características Especiales para iOS / iPhone

1. **Soporte de Pantalla Completa & Safe Area (Notch e Isla Dinámica)**:
   - Uso de `env(safe-area-inset-top)` y `env(safe-area-inset-bottom)` para que la interfaz se adapte perfectamente al diseño de los modelos iPhone modernas (sin cortar barras ni botones).
2. **Prevención del Auto-Zoom de Safari**:
   - Campos de entrada, selectores y formularios configurados con un tamaño de fuente mínimo de 16px para evitar que iOS Safari amplíe automáticamente la pantalla al escribir.
3. **Integración con Apple Share Sheet (`navigator.share`)**:
   - Al tocar compartir o enviar reporte rápido, si estás en iPhone / iPad, se abre el **menú nativo de compartir de Apple (Share Sheet)** permitiendo enviar el informe por **AirDrop, WhatsApp, Correo Institucional, Mensajes o Archivos**.
4. **GPS de Alta Precisión en iOS**:
   - Botón dedicado **"GPS iOS"** configurado para solicitar coordenadas GPS precisas aprovechando los permisos nativos de localización de Safari.
5. **PWA Offline con Instalador Guiado para iOS**:
   - Guía interactiva paso a paso para instalar la app en la pantalla principal del iPhone usando el botón **Compartir (<i class="fa-solid fa-arrow-up-from-bracket"></i>) -> "Agregar a inicio" (<i class="fa-regular fa-square-plus"></i>)**.
6. **Cadena de Custodia y Menús Institucionales Desplegables**:
   - **Registro NUE y CUNOCO**: Listas desplegables y campos de folio y recepción institucional.
   - **Tipo Específico y Signos Clínicos**: Selección estandarizada e interactiva optimizada para pickers táctiles de iOS Safari.

---

## 📲 Cómo instalar en iPhone (PWA Offline)

1. Abre `index.html` (o el enlace del servidor donde esté alojado) en **Safari** de tu iPhone.
2. Toca el botón central **Compartir** (<i class="fa-solid fa-arrow-up-from-bracket"></i>) en la barra inferior de Safari.
3. Desliza hacia abajo y toca **"Agregar a inicio" (Add to Home Screen)**.
4. Toca **"Agregar"** en la esquina superior derecha.
5. ¡Listo! La app aparecerá con su icono oficial en la pantalla de inicio de tu iPhone y funcionará **100% offline en el sitio del suceso**.

---

## 📁 Estructura del Proyecto (`SS IPHONE`)
- `index.html`: Estructura HTML optimizada con meta tags para iOS (`apple-mobile-web-app-capable`, `apple-touch-icon`).
- `styles.css`: Estilos táctiles adaptados para iPhone (`-webkit-overflow-scrolling: touch`, `min-height: 44px` en botones).
- `app.js`: Lógica forense completa (5 pestañas, Body Mapper, exportación PDF/Word, Apple Share Sheet, almacenamiento offline independiente).
- `apple-touch-icon.svg`: Icono institucional optimizado para la pantalla de inicio del iPhone.
- `manifest.json` y `sw.js`: Configuración PWA para funcionamiento sin conexión a internet.

# Grupo Rhino — Manual de identidad

Sitio responsive, estático e interactivo. React + TypeScript + Vite.
No se publicó en GitHub ni en un alojamiento externo.

## Ver sin instalar
Abrí `ABRIR-MANUAL.html` con doble clic. Esta versión autónoma incluye imágenes y descargas. La copia al portapapeles puede estar limitada por el navegador al usar archivos locales; mostrará el código para copiarlo manualmente.

## Desarrollo
Requiere Node 22 o posterior.

```bash
npm ci
npm run dev
```

## Compilación
```bash
npm run build
npm run preview
```

`dist/` contiene la versión para alojamiento estático. Rutas relativas compatibles con subcarpetas.

## GitHub Pages
1. Creá un repositorio y subí el contenido de esta carpeta (incluida `.github`). No subas node_modules.
2. Usá la rama `main`.
3. En Settings → Pages seleccioná GitHub Actions como origen.
4. El workflow `.github/workflows/deploy.yml` compila y publica al hacer push a main. También puede ejecutarse manualmente.
5. La URL final la informa el trabajo deploy. No es necesario configurar dominio.

## Edición
- `src/content.ts`: brief, navegación, personalidad, principios, colores y publicaciones.
- `src/main.tsx`: secciones, textos complementarios e interacciones.
- `src/style.css`: diseño, responsive, animaciones e impresión.
- `public/assets/`: originales, SVG, PNG y paquete descargable.

## Tipografías
- **Principal: Glofte (Regular)**. Titulares, citas, números y probador.
- **Suplementaria: Satoshi**. Cuerpos de texto, interfaz y etiquetas. Se carga desde Fontshare.
- Todo se declara en `public/assets/fonts/fonts.css`. Para activar Glofte, copiar el archivo de la fuente en `public/assets/fonts/` como `Glofte-Regular.otf` (y opcionalmente `Glofte-Regular.woff2`). No hace falta tocar código. Más detalle en `public/assets/fonts/LEEME.txt`.
- Mientras Glofte no esté en esa carpeta, la web muestra Satoshi o una sans serif del sistema en su lugar.
- Para alojar Satoshi en el propio sitio: descargar la familia desde fontshare.com y reemplazar el `@import` de `fonts.css` por `@font-face` locales.
- La fuente no se incluye en el kit descargable.

## Recursos
Los SVG conservan los trazados del PDF Grupo-Rhino_Imagotipo_Blanco-sobre-Negro, incluido su lettering convertido a contornos por el exportador PDF. Símbolo y lettering se separaron por sus límites visibles. Se normalizaron colores a los HEX indicados por el usuario. 
Los cuatro PDF se renombraron según su contenido real (los nombres originales no coincidían con los colores). Solo se actualizó el título interno del documento; el dibujo no se tocó. Los PNG tienen transparencia. El kit (`rhino-recursos.zip`) contiene 12 SVG, 12 PNG, 4 PDF y una muestra PNG de Glofte, organizados en carpetas con nombres `Grupo-Rhino_Tipo_Color`; no incluye la fuente.

## Estado y límites
Brief, logo, paleta y fuente: suministrados. Personalidad, voz, aplicaciones, variantes celestes/verticales, área de protección y mínimos digitales: propuestas para aprobar. Mínimos de impresión pendientes de prueba física.
Mockups e interfaces son conceptuales, no testimonios ni productos operativos. Datos de la interfaz son ilustrativos.
Los contrastes fueron calculados: blanco/azul 13,73:1; azul/celeste 7,31:1; negro/blanco 18,42:1.

## Verificación realizada
- Compilación TypeScript y Vite.
- Vista de escritorio y ancho móvil 390 px.
- Sin imágenes rotas ni desbordamiento horizontal en las vistas comprobadas.
- Selector de variantes, fondos, guías, modal de publicaciones y selector de descargas.
- ZIP y existencia de recursos.
- Respeto de prefers-reduced-motion y estilos de impresión. La paginación impresa puede variar por navegador.

## Entrega
`ABRIR-MANUAL.html` es una instantánea autónoma de esta versión. Los cambios futuros deben compilarse; esa instantánea no se actualiza automáticamente.

## Cambios de la última revisión
- Créditos en el pie de página (Agustín). Editar en `src/main.tsx`, bloque `.credits`.
- Portada sin círculos ni líneas guía alrededor del logo.
- Se eliminó el bloque Propósito / Público / Propuesta de valor y el apartado "Estado del manual".
- Probador de tamaño de texto corregido para celular (ahora es un campo que se ajusta en varias líneas).
- Símbolos nuevos (rinoceronte y contorno) en "Lenguaje visual", con descarga en SVG. Archivos: `public/assets/simbolo-*.svg`.
- Mockups reales en "En contexto": `public/assets/mockup-*.jpg` (optimizados desde los originales).
- Textos reescritos en un tono más cercano.

## Ajustes posteriores
- Se quitó "Así habla Rhino", la sección "Un símbolo. Todo un lenguaje." (patrón, conexión, encuadre e íconos) y los mockups "Datos" e "Identificación del espacio".
- La sección 06 quedó como "Símbolos" (rinoceronte y contorno).
- Donde el logo aparecía con baja opacidad (web de ejemplo, portada de redes, publicación 5), ahora va el símbolo de contorno (`simbolo-contorno-blanco.svg`).

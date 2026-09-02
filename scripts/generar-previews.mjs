#!/usr/bin/env node
/**
 * (PENDIENTE - mejora futura, ver seccion 8 de estructura-actualizada.md)
 *
 * Idea: con Playwright, abrir cada pagina /plantillas/<id>/ del build,
 * tomar una captura .webp y grabar unos segundos de scroll como .webm,
 * guardando ambos en public/previews/<id>.(webp|webm).
 *
 * Pasos para implementarlo:
 *   1. npm i -D playwright && npx playwright install chromium
 *   2. npm run build  (genera dist/)
 *   3. Servir dist/ (p. ej. `npx serve dist`) o usar file:// sobre dist/plantillas/<id>/index.html
 *   4. Por cada id de la coleccion:
 *        - page.setViewportSize({ width: 1280, height: 800 })
 *        - page.screenshot({ path: `public/previews/${id}.webp`, type: 'webp' })
 *        - grabar video (context con recordVideo) haciendo scroll suave y
 *          convertir a .webm corto (ffmpeg) si hace falta.
 *
 * Por ahora las previews se agregan a mano en public/previews/.
 */
console.log(
  'generar-previews: pendiente. Agrega las previews a mano en public/previews/ por ahora.\n' +
    'Ver instrucciones dentro de este archivo y en public/previews/README.md',
);

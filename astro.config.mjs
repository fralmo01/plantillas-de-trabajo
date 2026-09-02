// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por el dominio real del showroom cuando lo publiques.
  site: 'https://tu-showroom.example',

  // Cada ruta se emite como carpeta con su propio index.html:
  //   /plantillas/restaurante-gourmet/index.html
  // HTML plano, sin fetch en el navegador para armar la pagina.
  build: {
    format: 'directory',
  },

  // Sin integraciones de framework: todo es .astro -> HTML estatico.
  // Si algun dia una plantilla necesita React/Vue/Svelte, se agrega aqui
  // y solo esa isla carga JS; el resto del sitio sigue siendo HTML plano.
  integrations: [],
});

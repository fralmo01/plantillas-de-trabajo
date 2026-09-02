import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Coleccion "plantillas" = el registro autogenerado del catalogo.
 *
 * No hay lista central que mantener a mano: Astro descubre cada
 * `src/plantillas/<id>/ficha.json` con el glob loader. Agregar una
 * plantilla = crear su carpeta con su `ficha.json`. El catalogo,
 * los filtros y la pagina de la plantilla aparecen solos.
 *
 * El `id` de cada entrada es el nombre de la carpeta (no "carpeta/ficha").
 */
const plantillas = defineCollection({
  loader: glob({
    pattern: '*/ficha.json',
    base: './src/plantillas',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.string(),
    descripcion: z.string(),
    // Rutas dentro de /public. Si el archivo aun no existe, la tarjeta
    // muestra un placeholder sin romperse.
    thumbnail: z.string(),
    previewVideo: z.string().optional(),
    tags: z.array(z.string()).default([]),
    paleta: z.array(z.string()).default([]),
    destacada: z.boolean().default(false),
    // Muestra la insignia "NUEVO" en la tarjeta del catalogo.
    nuevo: z.boolean().default(false),
    // Estilo de referencia en el que se basa la plantilla.
    inspiradoEn: z.string().optional(),
    // Menor = aparece antes en la grilla.
    orden: z.number().default(100),
  }),
});

export const collections = { plantillas };

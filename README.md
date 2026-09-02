# Catálogo de Plantillas Web (Showroom) — Astro

Showroom de plantillas web modernas y modulares. Dos niveles, misma regla en ambos: **cero conflicto de CSS/JS entre plantillas** y **ningún `index.html` que crezca sin control**.

![Catálogo de Plantillas](./assets/preview.png)

La diferencia con la versión vainilla + Vite: **Astro compone todo en tiempo de compilación**. El HTML que se sirve ya viene armado y plano — no hay `fetch` en el navegador para pegar las secciones, así que no puede "romperse" por carga asíncrona, y cada página de plantilla funciona de forma ultra rápida y aislada.

---

## Arranque

```bash
npm install
npm run dev        # http://localhost:4321
```

| Comando | Que hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera `dist/` — HTML estatico, una carpeta por ruta |
| `npm run preview` | Sirve el `dist/` ya compilado |
| `npm run nueva-plantilla -- --id x --titulo "X" --categoria y` | Crea una plantilla desde el boilerplate |

---

## Como esta organizado

```text
proyecto/
├── public/
│   ├── favicon.svg
│   └── previews/                     # <id>.webp (miniatura) + <id>.webm (video hover)
│       ├── _placeholder.svg          # fallback si falta la miniatura
│       └── README.md
├── src/
│   ├── content.config.ts             # esquema + auto-registro de plantillas (glob loader)
│   ├── layouts/
│   │   ├── CatalogoLayout.astro       # cascaron del PORTAL (unico que trae CSS del portal)
│   │   └── PlantillaLayout.astro      # cascaron minimo de CADA plantilla (sin CSS del portal)
│   ├── styles/                        # tokens + grilla + filtros DEL PORTAL
│   │   ├── tokens.css
│   │   ├── catalogo.css
│   │   └── filtros.css
│   ├── components/
│   │   └── catalogo/                  # piezas del portal, no de las plantillas
│   │       ├── CabeceraSitio.astro
│   │       ├── BarraFiltros.astro     # categorias calculadas solas desde las fichas
│   │       └── TarjetaPlantilla.astro # preview imagen/video + click a la plantilla
│   ├── pages/
│   │   ├── index.astro               # ESQUELETO — no se vuelve a tocar al agregar plantillas
│   │   └── plantillas/
│   │       └── [id].astro            # 1 ruta dinamica -> 1 pagina estatica por plantilla
│   └── plantillas/                    # UNA CARPETA POR PLANTILLA, todo junto y aislado
│       ├── _boilerplate/              # base para clonar (el "_" la excluye del catalogo)
│       │   ├── LEEME.md
│       │   ├── ficha.example.json
│       │   ├── Plantilla.astro
│       │   ├── estilos.css
│       │   └── secciones/*.astro
│       ├── restaurante-gourmet/
│       │   ├── ficha.json            # <- esto la registra en el catalogo
│       │   ├── Plantilla.astro       # solo ordena las secciones
│       │   ├── estilos.css           # tokens propios, scopeados bajo .tpl-restaurante-gourmet
│       │   └── secciones/
│       │       ├── Cabecera.astro
│       │       ├── Hero.astro
│       │       ├── Menu.astro
│       │       ├── Testimonios.astro
│       │       ├── Contacto.astro
│       │       └── PiePagina.astro
│       └── corporativo-abogados/
│           └── ... (mismo patron)
├── scripts/
│   ├── nueva-plantilla.mjs           # clona el boilerplate + crea la ficha
│   └── generar-previews.mjs          # (pendiente) capturas/videos con Playwright
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Como se traduce cada idea del plan a Astro

| Plan original (vainilla + Vite) | Aca (Astro) |
| --- | --- |
| `index.html` madre vacio + `main.js` que arma todo en el navegador | `src/pages/index.astro` — Astro arma el catalogo **en build**, sale HTML plano |
| Ficha `.json` por plantilla + `import.meta.glob` | Coleccion de contenido con `glob()` loader sobre `src/plantillas/*/ficha.json` |
| `public/templates/<id>/index.html` + `secciones/*.html` + `cargar-secciones.js` (fetch en runtime) | `src/plantillas/<id>/Plantilla.astro` + `secciones/*.astro`, compuestas **en build**. Sin fetch. |
| CSS/JS aislado "a mano" por convencion | `<style>` de cada `.astro` scopeado automaticamente; tokens de cada plantilla bajo su wrapper `.tpl-<id>` |
| `scripts/nueva-plantilla.js` | `scripts/nueva-plantilla.mjs` (`npm run nueva-plantilla`) |
| Preview imagen + video en la tarjeta, video carga en hover | Igual, en `TarjetaPlantilla.astro` |
| Click = plantilla completa en pestaña nueva | Igual (`target="_blank"` hacia `/plantillas/<id>/`) |

---

## Agregar una plantilla nueva

```bash
npm run nueva-plantilla -- --id barberia-clasica --titulo "Barberia Clasica" --categoria servicios
```

Eso crea `src/plantillas/barberia-clasica/` con su `ficha.json`, el
wrapper CSS `.tpl-barberia-clasica` y las secciones listas para editar.

No se toca `src/pages/` ni `src/pages/index.astro`. Al guardar:

- la tarjeta aparece en el catalogo,
- el filtro "servicios" aparece solo si no existia,
- la pagina `/plantillas/barberia-clasica/` queda navegable.

Falta solo dejar `public/previews/barberia-clasica.webp` (y opcional
`.webm`). Mientras tanto la tarjeta usa el placeholder.

---

## Aislamiento de estilos — por que no se filtran

1. Cada `<style>` dentro de un `.astro` lo scopea Astro con un hash de
   clase: nada de esa seccion escapa a otra.
2. Los tokens de cada plantilla (`estilos.css`) se declaran **bajo el
   wrapper `.tpl-<id>`**, no en `:root`, asi dos plantillas pueden usar
   `--bg` sin pisarse.
3. Las paginas de plantilla usan `PlantillaLayout.astro`, que **no
   importa** ningun CSS del portal.
4. El portal vive en `src/styles/` + `src/components/catalogo/` y nunca
   se importa desde `src/plantillas/`.

---

## Notas

- Requiere Node 18.20+ / 20.3+ / 22+.
- El plan largo esta en `estructura-actualizada.md`.
- `scripts/generar-previews.mjs` es un stub: automatizar capturas con
  Playwright queda como mejora futura.

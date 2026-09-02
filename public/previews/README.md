# public/previews/

Aca van las vistas previas de cada plantilla, con el mismo nombre que
la carpeta de la plantilla:

```
restaurante-gourmet.webp   # miniatura fija (obligatoria)
restaurante-gourmet.webm   # video corto en loop, muteado (opcional)
corporativo-abogados.webp
corporativo-abogados.webm
```

- La tarjeta muestra el `.webp` por defecto y reproduce el `.webm` al hacer hover.
- Si falta el `.webp`, la tarjeta cae a `_placeholder.svg` sin romperse.
- Si falta el `.webm`, la tarjeta simplemente no reproduce nada.

Formatos sugeridos: `.webp` ~1280x800, `.webm` (VP9) de 4-8 s, sin audio, < 2 MB.
La generacion automatica con Playwright queda como mejora futura
(ver `scripts/` y la seccion 8 de `estructura-actualizada.md`).

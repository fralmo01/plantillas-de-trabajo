# _boilerplate

Base para crear una plantilla nueva rapido. Empieza con `_`, asi
Astro **no** la registra en el catalogo ni le genera pagina.

## Crear una plantilla a partir de esto

Automatico (recomendado):

```bash
npm run nueva-plantilla -- --id barberia-clasica --titulo "Barberia Clasica" --categoria servicios
```

Manual:

1. Copia esta carpeta a `src/plantillas/<id>/`.
2. Renombra `ficha.example.json` a `ficha.json` y completa los campos.
3. Listo: la tarjeta y la pagina `/plantillas/<id>/` aparecen solas.

Nunca hay que editar `src/pages/` ni `src/pages/index.astro`.

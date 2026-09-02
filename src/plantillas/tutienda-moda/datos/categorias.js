export const categorias = {
  colecciones: {
    titulo: 'Colecciones',
    intro: 'Todas nuestras líneas en un solo lugar: urbano, básico, denim y ediciones especiales.',
    subcategorias: ['Novedades', 'Denim', 'Básicos', 'Urbano', 'Ediciones', 'Accesorios'],
    precio: [19, 359],
  },
  mujer: {
    titulo: 'Mujer',
    intro: 'Blusas, jeans, casacas y más para cada momento de tu día.',
    subcategorias: [
      'Polos y tops',
      'Jeans',
      'Short y faldas',
      'Blusas',
      'Poleras y chompas',
      'Pantalones',
      'Casacas',
      'Vestidos y enterizos',
      'Calzados',
      'Accesorios',
    ],
    precio: [14, 360],
  },
  hombre: {
    titulo: 'Hombre',
    intro: 'Camisas, polos, pantalones y abrigo con calce moderno.',
    subcategorias: [
      'Camisas',
      'Polos',
      'Pantalones',
      'Jeans',
      'Casacas y chompas',
      'Shorts',
      'Ropa interior',
      'Calzados',
      'Accesorios',
    ],
    precio: [19, 329],
  },
  kids: {
    titulo: 'Kids',
    intro: 'Ropa cómoda y resistente para niñas y niños.',
    subcategorias: ['Niña', 'Niño', 'Polos', 'Jeans', 'Abrigo', 'Conjuntos', 'Accesorios'],
    precio: [15, 189],
  },
  comics: {
    titulo: 'Comics',
    intro: 'Colección de licencias y personajes en polos, buzos y accesorios.',
    subcategorias: ['Superhéroes', 'Animé', 'Clásicos', 'Videojuegos', 'Polos', 'Buzos'],
    precio: [29, 159],
  },
  sale: {
    titulo: 'Sale',
    intro: 'Precios rebajados por tiempo limitado. Mientras dure el stock.',
    subcategorias: ['Hasta 30%', 'Hasta 50%', '3 x S/ 139', 'Outlet', 'Última talla'],
    precio: [9, 199],
  },
};

export const grupos = [
  { titulo: 'Tallas', opciones: ['XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34'] },
  { titulo: 'Descuentos', opciones: ['10% o más', '20% o más', '30% o más', '50% o más'] },
  { titulo: 'Temporada', opciones: ['Verano', 'Otoño', 'Invierno', 'Primavera', 'Todo el año'] },
  { titulo: 'Género', opciones: ['Mujer', 'Hombre', 'Unisex', 'Niña', 'Niño'] },
  { titulo: 'Estilo', opciones: ['Urbano', 'Casual', 'Formal', 'Deportivo', 'Denim'] },
  { titulo: 'Fit', opciones: ['Slim', 'Regular', 'Oversize', 'Wide leg', 'Skinny'] },
];

export const ordenarPor = [
  'Relevancia',
  'Menor precio',
  'Mayor precio',
  'Más nuevos',
  'Mayor descuento',
];

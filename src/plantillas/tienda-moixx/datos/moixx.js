const u = (id, w = 700, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const MOIXX_IMG = {
  // Hero collage paneles
  'mx-hero-1': '1515886657613-9f3515b0c78f', // Modelo editorial moda chic
  'mx-hero-2': '1539109136881-3be0616acf4b', // Vestido y elegancia
  'mx-hero-3': '1509631179647-0177331693ae', // Traje sastre y estilo contemporaneo

  // Grid categorias
  'mx-cat-1': '1551803091-e20673f15770', // Blusas y Camisas
  'mx-cat-2': '1496747611176-843222e1e57c', // Nueva Coleccion - Vestidos y Enterizos
  'mx-cat-3': '1503342217505-b0a15ec3261c', // Polos y Tops
  'mx-cat-4': '1591047139829-d91aecb6caea', // Blazers
  'mx-cat-5': '1544441893-675973e31985', // Casacas y Abrigos
  'mx-cat-6': '1541099649105-f69ad21f3246', // Pantalones y Jeans

  // Banners editoriales
  'mx-banner-pantalones': '1509631179647-0177331693ae',
  'mx-banner-estilo': '1469334031218-e382a71b716b',

  // New arrivals
  'mx-p1': '1509631179647-0177331693ae', // Chaleco Sastre Gabriela
  'mx-p2': '1544441893-675973e31985', // Casaca Bomber Lia
  'mx-p3': '1551803091-e20673f15770', // Blusa Manga Corta Tory
  'mx-p4': '1503342217505-b0a15ec3261c', // Polo Manga 3/4 Coralee
  'mx-p5': '1496747611176-843222e1e57c', // Maxi Vestido Dallery
  'mx-p6': '1521572267360-ee0c2909d518', // Polo Manga Corta Raynira
  'mx-p7': '1539109136881-3be0616acf4b', // Polo Manga Larga Carol
  'mx-p8': '1515886657613-9f3515b0c78f', // Midi Vestido Adelaida

  // Catalogo
  'mx-c1': '1503342217505-b0a15ec3261c', // Polo Manga Cero Avery
  'mx-c2': '1551803091-e20673f15770', // Blusa Manga Larga Dalia
  'mx-c3': '1509631179647-0177331693ae', // Pantalon Wide Leg Francy
  'mx-c4': '1591047139829-d91aecb6caea', // Chaleco Sastre Gabriela
  'mx-c5': '1544441893-675973e31985', // Casaca Bomber Lia
  'mx-c6': '1551803091-e20673f15770', // Blusa Manga Corta Tory
  'mx-c7': '1503342217505-b0a15ec3261c', // Polo Manga 3/4 Coralee
  'mx-c8': '1496747611176-843222e1e57c', // Maxi Vestido Dallery
  'mx-c9': '1515886657613-9f3515b0c78f', // Midi Vestido Adelaida
  'mx-c10': '1583496661160-fb5886a0aaaa', // Falda Lapiz Renata
  'mx-c11': '1591047139829-d91aecb6caea', // Blazer Cruzado Valentina
  'mx-c12': '1509631179647-0177331693ae', // Pantalon Recto Camel
};

export const getMoixxImg = (seed, w = 700, h = 900) => {
  const id = MOIXX_IMG[seed] || '1515886657613-9f3515b0c78f';
  return u(id, w, h);
};

export const img = getMoixxImg;

export const marca = {
  nombre: 'tienda.com',
};

export const whatsapp = {
  numero: '51987123456',
  mensaje: 'Hola tienda.com, quisiera ayuda con mi compra',
};

export const anuncio = 'Envio GRATIS por compras mayores a S/ 200';

export const navPrincipal = [
  { t: 'New', href: '#new-arrivals' },
  {
    t: 'Ropa',
    menu: 'ropa',
    columnas: [
      { t: 'Todo Ropa', links: ['Nueva Coleccion', 'Bestsellers', 'Sale / Ultimas Unidades', 'Workwear Collection'] },
      { t: 'Todo Tops', links: ['Blusas y Camisas', 'Polos y Tops', 'Chompas y Cardigans', 'Abrigos y Casacas'] },
      { t: 'Todo Bottoms', links: ['Pantalones y Jeans', 'Faldas y Shorts', 'Ropa Deportiva'] },
      { t: 'Todo Vestidos', links: ['Vestidos Nueva Coleccion', 'Vestidos Bestsellers', 'Enterizos'] },
      { t: 'Por Tallas', links: ['XSmall', 'Small', 'Medium', 'Large', 'XLarge'] },
    ],
  },
  {
    t: 'Tops',
    menu: 'tops',
    columnas: [{ t: 'Tops', links: ['Blusas y Camisas', 'Polos y Tops', 'Chompas y Cardigans', 'Abrigos y Casacas', 'Conjuntos'] }],
  },
  {
    t: 'Bottoms',
    menu: 'bottoms',
    columnas: [{ t: 'Bottoms', links: ['Pantalones y Jeans', 'Faldas y Shorts', 'Ropa Deportiva', 'Ropa para Dormir'] }],
  },
  {
    t: 'Vestidos',
    menu: 'vestidos',
    columnas: [{ t: 'Vestidos', links: ['Vestidos Nueva Coleccion', 'Vestidos Bestsellers', 'Enterizos', 'Vestidos Ultimas Unidades'] }],
  },
  {
    t: 'Accesorios',
    menu: 'accesorios',
    columnas: [
      { t: 'Todo Accesorios', links: ['Accesorios Nueva Coleccion', 'Best Sellers', 'Ultimas Unidades'] },
      { t: 'Complementos', links: ['Bolsos y Carteras', 'Billeteras y Monederos', 'Medias y Pantys', 'Correas'] },
      { t: 'Accesorios', links: ['Gorras y Sombreros', 'Bufandas y Panuelos', 'Lentes de Sol'] },
    ],
  },
  { t: 'Sale', href: '#new-arrivals', destacado: true },
];

export const heroCollage = {
  campana: 'LUMEN',
  tagline: 'Estilo que brilla contigo',
  cta: 'Shop now',
  paneles: [
    { seed: 'mx-hero-1', img: getMoixxImg('mx-hero-1', 700, 900) },
    { seed: 'mx-hero-2', img: getMoixxImg('mx-hero-2', 700, 900) },
    { seed: 'mx-hero-3', img: getMoixxImg('mx-hero-3', 700, 900) },
  ],
};

export const gridsCategoria = [
  [
    { t: 'Blusas y Camisas', n: 45, seed: 'mx-cat-1', img: getMoixxImg('mx-cat-1', 700, 900) },
    { t: 'Nueva Coleccion - Vestidos y Enterizos', n: 32, seed: 'mx-cat-2', img: getMoixxImg('mx-cat-2', 700, 900) },
    { t: 'Polos y Tops', n: 81, seed: 'mx-cat-3', img: getMoixxImg('mx-cat-3', 700, 900) },
  ],
  [
    { t: 'Blazers', n: 18, seed: 'mx-cat-4', img: getMoixxImg('mx-cat-4', 700, 900) },
    { t: 'Casacas y Abrigos', n: 24, seed: 'mx-cat-5', img: getMoixxImg('mx-cat-5', 700, 900) },
    { t: 'Pantalones y Jeans', n: 52, seed: 'mx-cat-6', img: getMoixxImg('mx-cat-6', 700, 900) },
  ],
];

export const bannerPantalones = {
  seed: 'mx-banner-pantalones',
  img: getMoixxImg('mx-banner-pantalones', 1600, 700),
  titulo: 'Pantalones Clasicos',
};

export const bannerEstilo = {
  seed: 'mx-banner-estilo',
  img: getMoixxImg('mx-banner-estilo', 1600, 700),
  titulo: 'Con Estilo',
  sub: 'Disenos que se adaptan a ti',
  cta: 'Shop now',
};

export const filtrosTipo = ['Blusas', 'Vestidos', 'Pantalones', 'Blazers', 'Polos', 'Faldas'];
export const filtrosColor = [
  { nombre: 'Negro', hex: '#1a1a1a' },
  { nombre: 'Vino', hex: '#5b1f2b' },
  { nombre: 'Camel', hex: '#c9a876' },
  { nombre: 'Azul', hex: '#3a5a78' },
  { nombre: 'Blanco', hex: '#f5f2ea' },
];
export const filtrosTalla = ['XS', 'S', 'M', 'L', 'XL'];
export const ordenarPor = ['Mas relevantes', 'Mas vendidos', 'Alfabeticamente, A-Z', 'Precio, menor a mayor', 'Precio, mayor a menor'];
export const sugerenciasBusqueda = ['vestido', 'blazer', 'blusa', 'pantalon', 'falda'];

export const newArrivals = [
  { nombre: 'Chaleco Sastre Gabriela', precio: 153.99, antes: 219.9, seed: 'mx-p1', img: getMoixxImg('mx-p1', 500, 650), tipo: 'Blazers' },
  { nombre: 'Casaca Bomber Lia', precio: 146.99, antes: 209.9, seed: 'mx-p2', img: getMoixxImg('mx-p2', 500, 650), tipo: 'Blazers' },
  { nombre: 'Blusa Manga Corta Tory', precio: 159.9, seed: 'mx-p3', img: getMoixxImg('mx-p3', 500, 650), tipo: 'Blusas' },
  { nombre: 'Polo Manga 3/4 Coralee', precio: 109.9, seed: 'mx-p4', img: getMoixxImg('mx-p4', 500, 650), tipo: 'Polos' },
  { nombre: 'Maxi Vestido Dallery', precio: 229.9, seed: 'mx-p5', img: getMoixxImg('mx-p5', 500, 650), tipo: 'Vestidos' },
  { nombre: 'Polo Manga Corta Raynira', precio: 99.9, seed: 'mx-p6', img: getMoixxImg('mx-p6', 500, 650), tipo: 'Polos' },
  { nombre: 'Polo Manga Larga Carol', precio: 99.9, seed: 'mx-p7', img: getMoixxImg('mx-p7', 500, 650), tipo: 'Polos' },
  { nombre: 'Midi Vestido Adelaida', precio: 259.9, seed: 'mx-p8', img: getMoixxImg('mx-p8', 500, 650), tipo: 'Vestidos' },
];

export const catalogo = [
  { nombre: 'Polo Manga Cero Avery', precio: 89.9, seed: 'mx-c1', img: getMoixxImg('mx-c1', 500, 650), tipo: 'Polos', tags: ['polo', 'top'] },
  { nombre: 'Blusa Manga Larga Dalia', precio: 149.9, seed: 'mx-c2', img: getMoixxImg('mx-c2', 500, 650), tipo: 'Blusas', tags: ['blusa', 'top'] },
  { nombre: 'Pantalon Wide Leg Francy', precio: 219.9, seed: 'mx-c3', img: getMoixxImg('mx-c3', 500, 650), tipo: 'Pantalones', tags: ['pantalon', 'wide leg'] },
  { nombre: 'Chaleco Sastre Gabriela', precio: 153.99, antes: 219.9, seed: 'mx-c4', img: getMoixxImg('mx-c4', 500, 650), tipo: 'Blazers', tags: ['chaleco', 'sastre'] },
  { nombre: 'Casaca Bomber Lia', precio: 146.99, antes: 209.9, seed: 'mx-c5', img: getMoixxImg('mx-c5', 500, 650), tipo: 'Blazers', tags: ['casaca', 'bomber'] },
  { nombre: 'Blusa Manga Corta Tory', precio: 159.9, seed: 'mx-c6', img: getMoixxImg('mx-c6', 500, 650), tipo: 'Blusas', tags: ['blusa'] },
  { nombre: 'Polo Manga 3/4 Coralee', precio: 109.9, seed: 'mx-c7', img: getMoixxImg('mx-c7', 500, 650), tipo: 'Polos', tags: ['polo'] },
  { nombre: 'Maxi Vestido Dallery', precio: 229.9, seed: 'mx-c8', img: getMoixxImg('mx-c8', 500, 650), tipo: 'Vestidos', tags: ['vestido', 'maxi'] },
  { nombre: 'Midi Vestido Adelaida', precio: 259.9, seed: 'mx-c9', img: getMoixxImg('mx-c9', 500, 650), tipo: 'Vestidos', tags: ['vestido', 'midi'] },
  { nombre: 'Falda Lapiz Renata', precio: 119.9, antes: 139.9, seed: 'mx-c10', img: getMoixxImg('mx-c10', 500, 650), tipo: 'Faldas', tags: ['falda'] },
  { nombre: 'Blazer Cruzado Valentina', precio: 249.9, seed: 'mx-c11', img: getMoixxImg('mx-c11', 500, 650), tipo: 'Blazers', tags: ['blazer'] },
  { nombre: 'Pantalon Recto Camel', precio: 189.9, antes: 229.9, seed: 'mx-c12', img: getMoixxImg('mx-c12', 500, 650), tipo: 'Pantalones', tags: ['pantalon'] },
];

export const footerCols = [
  { t: 'Atencion al cliente', links: ['Formas de pago', 'Metodos de Envio', 'Giftcard', 'Cambios & Devoluciones', 'Guia de Tallas', 'Preguntas frecuentes (FAQ)', 'Contactanos'] },
  { t: 'Sobre Nosotros', links: ['Quienes somos', 'Clientes Felices', 'Nuestras Tiendas', 'Ventas Mayoristas', 'Trabaja con nosotros', 'Blog'] },
];

export const soles = (n) => 'S/. ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

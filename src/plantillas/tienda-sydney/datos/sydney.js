const u = (id, w = 700, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const SYDNEY_IMG = {
  // Mega menu banners
  'sy-mega-1': '1515886657613-9f3515b0c78f', // Pijamas Esenciales
  'sy-mega-2': '1534528741775-53994a69daeb', // Lo Mejor Para Ella
  'sy-mega-3': '1507003211169-0a1dd7228f2d', // Basicos de Algodon
  'sy-mega-4': '1492562080023-ab3db95bfbce', // Comodidad Total
  'sy-mega-5': '1522771739844-6a9f6d5f14af', // Suave Como Algodon (Bebes)
  'sy-mega-6': '1503454537195-1dcabb73ffb9', // Aventura y Comodidad (Ninos)
  'sy-mega-7': '1505693416388-ac5ce068fe85', // Tu Hogar en Algodon
  'sy-mega-8': '1523381210434-271e8be1f52b', // Ahorra en Pack

  // Hero slides
  'sy-hero-1': '1515886657613-9f3515b0c78f', // Bodys Para Dama
  'sy-hero-2': '1518611012118-696072aa579a', // Pijamas de Invierno
  'sy-hero-3': '1489987707025-afc232f7ea0f', // Basicos Esenciales

  // Categorias destacadas
  'sy-cat-hombre': '1507003211169-0a1dd7228f2d',
  'sy-cat-mujer': '1534528741775-53994a69daeb',
  'sy-cat-bebes': '1522771739844-6a9f6d5f14af',
  'sy-cat-ninos': '1503454537195-1dcabb73ffb9',
  'sy-cat-hogar': '1505693416388-ac5ce068fe85',
  'sy-cat-pack': '1523381210434-271e8be1f52b',

  // Promo descuento & Tiles
  'sy-promo-dscto': '1469334031218-e382a71b716b',
  'sy-tile-hombre': '1492562080023-ab3db95bfbce',
  'sy-tile-mujer': '1515886657613-9f3515b0c78f',
  'sy-nuevo': '1489987707025-afc232f7ea0f',

  // Testimonios
  'sy-test-1': '1544005313-94ddf0286df2',
  'sy-test-2': '1580489944761-15a19d654956',
  'sy-test-3': '1573496359142-b8d87734a5a2',

  // Blog
  'sy-blog-1': '1582533561050-ded29c29e604',
  'sy-blog-2': '1606787366850-de6330128bfc',
  'sy-blog-3': '1517677208171-0bc6725a3e60',

  // Catalogo
  'sy-p1': '1582533561050-ded29c29e604', // Trusa para Dama Clasica - Pack x3
  'sy-p2': '1574015974293-817f0ebebb74', // Bikini para Dama - Coleccion Isabella
  'sy-p3': '1586350977771-b3b0abd50c82', // Medias Sport Tobillera Unisex - Pack x3
  'sy-p4': '1582533561050-ded29c29e604', // Bikini para Dama High
  'sy-p5': '1583743814966-8936f5b7be1a', // Boxer para Caballero - Pack x3
  'sy-p6': '1521572267360-ee0c2909d518', // Camiseta Termica para Hombre
  'sy-p7': '1515886657613-9f3515b0c78f', // Body para Dama Manga Larga
  'sy-p8': '1518611012118-696072aa579a', // Pijama Conjunto para Dama
  'sy-p9': '1492562080023-ab3db95bfbce', // Pijama Conjunto para Caballero
  'sy-p10': '1522771739844-6a9f6d5f14af', // Body para Bebe Manga Corta - Pack x3
  'sy-p11': '1503454537195-1dcabb73ffb9', // Polo Basico para Nino
  'sy-p12': '1505693416388-ac5ce068fe85', // Sabanas 100% Algodon Queen
  'sy-p13': '1616627547584-bf28cee262db', // Toallas de Algodon Pack x2
  'sy-p14': '1523381210434-271e8be1f52b', // Pack Familiar Basicos x6
  'sy-p15': '1539109136881-3be0616acf4b', // Cafarena para Dama Basica
  'sy-p16': '1541099649105-f69ad21f3246', // Jean Recto para Caballero
};

export const getSydneyImg = (seed, w = 700, h = 900) => {
  const id = SYDNEY_IMG[seed] || '1489987707025-afc232f7ea0f';
  return u(id, w, h);
};

export const img = getSydneyImg;

export const marca = {
  nombre: 'tienda.com',
  sub: 'Ropa de Algodon',
  desde: 1974,
};

export const whatsapp = {
  numero: '51987654321',
  visible: '987 654 321',
  mensaje: 'Hola tienda.com, quiero comprar por chat',
};

export const ticker = [
  'Envio gratis a toda Lima Metropolitana por compras mayores a S/ 299.90',
  'Hasta 3 cuotas sin intereses con tarjetas BBVA, BCP y Diners Club',
  'Productos de 100% algodon',
  'Eleva tu comodidad con nuestras colecciones',
  'Envio gratis a todo el Peru por compras seleccionadas',
];

export const navPrincipal = [
  {
    t: 'Mujer',
    menu: 'mujer',
    columnas: [
      { t: 'Ropa Interior', links: ['Ropa interior sin costura', 'Calzones', 'Brasier y Tops', 'Medias'] },
      { t: 'Pijamas', links: ['Conjuntos', 'Pantalones y Shorts', 'Camisones', 'Pantuflas'] },
      { t: 'Casual', links: ['Bodys', 'Polos', 'Cafarenas', 'Jeans'] },
    ],
    banners: [
      { t: 'Pijamas Esenciales', seed: 'sy-mega-1', img: getSydneyImg('sy-mega-1', 400, 500) },
      { t: 'Lo Mejor Para Ella', seed: 'sy-mega-2', img: getSydneyImg('sy-mega-2', 400, 500) },
    ],
  },
  {
    t: 'Hombre',
    menu: 'hombre',
    columnas: [
      { t: 'Ropa Interior', links: ['Boxers', 'Cacheteros', 'Camisetas', 'Medias'] },
      { t: 'Pijamas', links: ['Conjuntos', 'Pantalones', 'Shorts'] },
      { t: 'Casual', links: ['Polos', 'Camisas', 'Jeans'] },
    ],
    banners: [
      { t: 'Basicos de Algodon', seed: 'sy-mega-3', img: getSydneyImg('sy-mega-3', 400, 500) },
      { t: 'Comodidad Total', seed: 'sy-mega-4', img: getSydneyImg('sy-mega-4', 400, 500) },
    ],
  },
  {
    t: 'Bebes',
    menu: 'bebes',
    columnas: [
      { t: 'Recien Nacido', links: ['Bodys', 'Ajuares', 'Pijamas'] },
      { t: 'Accesorios', links: ['Baberos', 'Mantas', 'Gorros'] },
    ],
    banners: [{ t: 'Suave Como Algodon', seed: 'sy-mega-5', img: getSydneyImg('sy-mega-5', 400, 500) }],
  },
  {
    t: 'Ninos y Ninas',
    menu: 'ninos',
    columnas: [
      { t: 'Ninos', links: ['Polos', 'Ropa Interior', 'Pijamas'] },
      { t: 'Ninas', links: ['Polos', 'Ropa Interior', 'Pijamas'] },
    ],
    banners: [{ t: 'Aventura y Comodidad', seed: 'sy-mega-6', img: getSydneyImg('sy-mega-6', 400, 500) }],
  },
  {
    t: 'Hogar',
    menu: 'hogar',
    columnas: [{ t: 'Dormitorio', links: ['Sabanas', 'Cobertores', 'Almohadas', 'Toallas'] }],
    banners: [{ t: 'Tu Hogar en Algodon', seed: 'sy-mega-7', img: getSydneyImg('sy-mega-7', 400, 500) }],
  },
  {
    t: 'Pack',
    menu: 'pack',
    columnas: [{ t: 'Packs', links: ['Pack Familiar', 'Pack Dama', 'Pack Caballero', 'Pack Ninos'] }],
    banners: [{ t: 'Ahorra en Pack', seed: 'sy-mega-8', img: getSydneyImg('sy-mega-8', 400, 500) }],
  },
];

export const heroSlides = [
  {
    kicker: 'Elige tu favorito',
    titulo: 'Bodys Para Dama',
    sub: 'Donde la moda se encuentra con la comodidad.',
    cta1: 'Comprar Bodys',
    cta2: 'Ver Ofertas',
    seed: 'sy-hero-1',
    img: getSydneyImg('sy-hero-1', 1600, 750),
  },
  {
    kicker: 'Nueva coleccion',
    titulo: 'Pijamas de Invierno',
    sub: 'Calidez y suavidad 100% algodon para tus noches.',
    cta1: 'Comprar Pijamas',
    cta2: 'Ver Ofertas',
    seed: 'sy-hero-2',
    img: getSydneyImg('sy-hero-2', 1600, 750),
  },
  {
    kicker: 'Para toda la familia',
    titulo: 'Basicos Esenciales',
    sub: 'Ropa interior y casual para cada dia.',
    cta1: 'Comprar Ahora',
    cta2: 'Ver Ofertas',
    seed: 'sy-hero-3',
    img: getSydneyImg('sy-hero-3', 1600, 750),
  },
];

export const categoriasDestacadas = [
  { t: 'Ropa de Hombre', seed: 'sy-cat-hombre', img: getSydneyImg('sy-cat-hombre', 400, 500) },
  { t: 'Ropa para Mujer', seed: 'sy-cat-mujer', img: getSydneyImg('sy-cat-mujer', 400, 500) },
  { t: 'Ropa para Bebes', seed: 'sy-cat-bebes', img: getSydneyImg('sy-cat-bebes', 400, 500) },
  { t: 'Ropa para Ninos y Ninas', seed: 'sy-cat-ninos', img: getSydneyImg('sy-cat-ninos', 400, 500) },
  { t: 'Hogar', seed: 'sy-cat-hogar', img: getSydneyImg('sy-cat-hogar', 400, 500) },
  { t: 'Pack', seed: 'sy-cat-pack', img: getSydneyImg('sy-cat-pack', 400, 500) },
];

export const promoDscto = {
  seed: 'sy-promo-dscto',
  img: getSydneyImg('sy-promo-dscto', 900, 600),
  dscto: '30%',
  nota: '(producto seleccionado)',
  sub: 'Aprovecha los descuentos de temporada.',
  cta: 'Ver Descuentos',
};

export const marqueeTexto = ['100% ALGODON', 'SIENTETE COMODO'];

export const tilesGenero = [
  { t: 'Ropa para Hombre', sub: 'Encuentra el producto ideal.', seed: 'sy-tile-hombre', img: getSydneyImg('sy-tile-hombre', 900, 550) },
  { t: 'Ropa para Mujer', sub: 'Descubre las tendencias.', seed: 'sy-tile-mujer', img: getSydneyImg('sy-tile-mujer', 900, 550) },
];

export const nuevoBanner = {
  titulo: 'Descubre lo Nuevo',
  sub: 'Descubre la magia del 100% algodon en persona y en paginas. Visita nuestras tiendas y explora el catalogo para una experiencia completa.',
  cta: 'Ver Catalogo',
  seed: 'sy-nuevo',
  img: getSydneyImg('sy-nuevo', 1600, 700),
};

export const testimonios = [
  { nombre: 'Lizbeth G.', estrellas: 5, texto: 'Lo mejor en ropa de algodon.', seed: 'sy-test-1', img: getSydneyImg('sy-test-1', 120, 120) },
  { nombre: 'Amparito P.', estrellas: 5, texto: 'Excelente calidad de algodon en todas las prendas, los pantalones de dormir son muy buenos y calientitos.', seed: 'sy-test-2', img: getSydneyImg('sy-test-2', 120, 120) },
  { nombre: 'Alice B.', estrellas: 5, texto: 'Excelente calidad, la ropa tiene lindos disenos y es muy abrigadora.', seed: 'sy-test-3', img: getSydneyImg('sy-test-3', 120, 120) },
];

export const blogPosts = [
  { t: 'Como elegir tu ropa interior ideal', seed: 'sy-blog-1', img: getSydneyImg('sy-blog-1', 600, 420) },
  { t: 'Los beneficios del algodon organico', seed: 'sy-blog-2', img: getSydneyImg('sy-blog-2', 600, 420) },
  { t: 'Cuidados para que tu ropa dure mas', seed: 'sy-blog-3', img: getSydneyImg('sy-blog-3', 600, 420) },
];

export const beneficios = [
  { t: 'Envios rapidos', d: 'Llegamos a todo el Peru.' },
  { t: 'Compras seguras', d: 'Compra de manera 100% segura.' },
  { t: 'Cambios y devoluciones', d: 'Te ayudamos en lo que necesites.' },
  { t: 'Soporte 24/7', d: 'Brindamos atencion personalizada.' },
];

export const footerCols = [
  { t: 'Mi Cuenta', links: ['Pedidos', 'Direcciones', 'Detalles de la cuenta'] },
  { t: 'La Empresa', links: ['Nosotros', 'Nuestras tiendas', 'Cuidado y Mantencion', 'Preguntas frecuentes', 'Contacto'] },
  { t: 'Legales', links: ['Terminos y condiciones', 'Politica de privacidad', 'Politicas de envio', 'Cambios y devoluciones'] },
];

export const colores = ['#1a1a1a', '#e8b4c8', '#8a9bb0', '#c9a876', '#ffffff'];

export const catalogo = [
  { nombre: 'Trusa para Dama Clasica - Pack x3', precio: 51, seed: 'sy-p1', img: getSydneyImg('sy-p1', 500, 600), categoria: 'Ropa Interior', genero: 'Mujer', tags: ['trusa', 'ropa interior', 'calzon'] },
  { nombre: 'Bikini para Dama - Coleccion Isabella', precio: 39, antes: 44, tag: '-11%', seed: 'sy-p2', img: getSydneyImg('sy-p2', 500, 600), categoria: 'Ropa Interior', genero: 'Mujer', tags: ['bikini', 'ropa interior'] },
  { nombre: 'Medias Sport Tobillera Unisex - Pack x3', precio: 39, antes: 42, tag: '-7%', seed: 'sy-p3', img: getSydneyImg('sy-p3', 500, 600), categoria: 'Medias', genero: 'Unisex', tags: ['medias'] },
  { nombre: 'Bikini para Dama High - Coleccion Isabella', precio: 39, antes: 44, tag: '-11%', seed: 'sy-p4', img: getSydneyImg('sy-p4', 500, 600), categoria: 'Ropa Interior', genero: 'Mujer', tags: ['bikini', 'ropa interior'] },
  { nombre: 'Boxer para Caballero - Pack x3', precio: 55, seed: 'sy-p5', img: getSydneyImg('sy-p5', 500, 600), categoria: 'Ropa Interior', genero: 'Hombre', tags: ['boxer', 'ropa interior'] },
  { nombre: 'Camiseta Termica para Hombre', precio: 45, antes: 55, tag: '-18%', seed: 'sy-p6', img: getSydneyImg('sy-p6', 500, 600), categoria: 'Casual', genero: 'Hombre', tags: ['camiseta', 'termica'] },
  { nombre: 'Body para Dama Manga Larga', precio: 69, seed: 'sy-p7', img: getSydneyImg('sy-p7', 500, 600), categoria: 'Casual', genero: 'Mujer', tags: ['body'] },
  { nombre: 'Pijama Conjunto para Dama', precio: 89, antes: 109, tag: '-18%', seed: 'sy-p8', img: getSydneyImg('sy-p8', 500, 600), categoria: 'Pijamas', genero: 'Mujer', tags: ['pijama', 'conjunto'] },
  { nombre: 'Pijama Conjunto para Caballero', precio: 89, seed: 'sy-p9', img: getSydneyImg('sy-p9', 500, 600), categoria: 'Pijamas', genero: 'Hombre', tags: ['pijama', 'conjunto'] },
  { nombre: 'Body para Bebe Manga Corta - Pack x3', precio: 59, seed: 'sy-p10', img: getSydneyImg('sy-p10', 500, 600), categoria: 'Recien Nacido', genero: 'Bebes', tags: ['body', 'bebe'] },
  { nombre: 'Polo Basico para Nino', precio: 35, seed: 'sy-p11', img: getSydneyImg('sy-p11', 500, 600), categoria: 'Casual', genero: 'Ninos', tags: ['polo'] },
  { nombre: 'Sabanas 100% Algodon Queen', precio: 129, antes: 159, tag: '-19%', seed: 'sy-p12', img: getSydneyImg('sy-p12', 500, 600), categoria: 'Dormitorio', genero: 'Hogar', tags: ['sabanas', 'hogar'] },
  { nombre: 'Toallas de Algodon Pack x2', precio: 49, seed: 'sy-p13', img: getSydneyImg('sy-p13', 500, 600), categoria: 'Dormitorio', genero: 'Hogar', tags: ['toallas', 'hogar'] },
  { nombre: 'Pack Familiar Basicos x6', precio: 149, antes: 189, tag: '-21%', seed: 'sy-p14', img: getSydneyImg('sy-p14', 500, 600), categoria: 'Packs', genero: 'Unisex', tags: ['pack', 'familiar'] },
  { nombre: 'Cafarena para Dama Basica', precio: 42, seed: 'sy-p15', img: getSydneyImg('sy-p15', 500, 600), categoria: 'Casual', genero: 'Mujer', tags: ['cafarena'] },
  { nombre: 'Jean Recto para Caballero', precio: 99, antes: 129, tag: '-23%', seed: 'sy-p16', img: getSydneyImg('sy-p16', 500, 600), categoria: 'Casual', genero: 'Hombre', tags: ['jean'] },
];

export const filtrosGenero = ['Mujer', 'Hombre', 'Bebes', 'Ninos', 'Hogar', 'Unisex'];
export const filtrosCategoria = ['Ropa Interior', 'Pijamas', 'Casual', 'Medias', 'Recien Nacido', 'Dormitorio', 'Packs'];
export const ordenarPor = ['Mas vendidos', 'Menor precio', 'Mayor precio', 'Mayor descuento'];
export const sugerenciasBusqueda = ['bikini', 'boxer', 'pijama', 'sabanas', 'jean'];

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const u = (id, w = 600, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const WONG_IMG = {
  // Hero slides
  'wg-hero-1': '1593784991095-a205069470b6', // Smart TV 75" NANO 4K UHD
  'wg-hero-2': '1593359677879-a4bb92f829d1', // TV 55" UHD Google TV
  'wg-hero-3': '1528928441742-b4ccac1bb04c', // Smart TV 50" Mini LED
  'wg-hero-4': '1584568694244-14fbdf83bd30', // Refrigeradora Side by Side LG

  // Categorias circulares gourmet
  'wg-cat-tec': '1505740420928-5e560c06d30e', // Tecnologia
  'wg-cat-beb': '1510812431401-41d2bd2722f3', // Vinos y Licores
  'wg-cat-fru': '1610832958506-aa56368176cf', // Frutas y Verduras Selectas
  'wg-cat-hog': '1585421514738-01798e348b17', // Cuidado del Hogar
  'wg-cat-lac': '1486297678162-eb2a19b0a32d', // Quesos y Lacteos Finos
  'wg-cat-pan': '1509440159596-0249088772ff', // Panaderia Artesanal
  'wg-cat-des': '1540420773420-3366772f4999', // Despensa Gourmet
  'wg-cat-con': '1501443762994-82bd5dace89a', // Gelatos y Congelados
  'wg-cat-car': '1607623814075-e51df1bdc82f', // Carnes Finas y Cortes

  // Banners promocionales
  'wg-promo-1': '1555244162-803834f70033', // Tendencias Gourmet / Charcuteria
  'wg-promo-2': '1522337360788-8b13dee7a37e', // Maquinas de afeitar y belleza
  'wg-promo-3': '1585421514738-01798e348b17', // Limpieza del hogar

  // Mundos
  'wg-mundo-1': '1556742049-0a67e5577ff0', // tienda.com Plus VIP
  'wg-mundo-2': '1517248135467-4c7edcad34c4', // Beneficios del mes / Restaurantes
  'wg-mundo-3': '1515488042361-ee00e0ddd4e4', // Mundo Infantil
  'wg-mundo-4': '1495474472287-4d71bcdd2085', // Nuestro Cafe de especialidad
  'wg-mundo-5': '1513519245088-0e12902e5a38', // Coleccion Hogar
  'wg-mundo-6': '1522337360788-8b13dee7a37e', // Belleza Selecta

  // Plus suscripcion
  'wg-plus-cta': '1556742049-0a67e5577ff0',

  // Carrusel socios Plus
  'wg-p-plus1': '1607623814075-e51df1bdc82f', // Carne Molida de Bisteck Nacional
  'wg-p-plus2': '1519708227418-c8fd9a32b7a2', // Filete de Salmon Fresco
  'wg-p-plus3': '1495474472287-4d71bcdd2085', // Cafe Instantaneo Premium
  'wg-p-plus4': '1604503468506-a8da13d82791', // Pechuga de Pollo sin Espinazo
  'wg-p-plus5': '1534939561126-855b8675edd7', // Filete de Tilapia Extra

  // Tabs categorias
  'wg-tab-tv': '1593784991095-a205069470b6',
  'wg-tab-comp': '1496181133206-80ce9b88a853',
  'wg-tab-blanca': '1584568694244-14fbdf83bd30',
  'wg-tab-peq': '1570222094114-d054a817e56b',
  'wg-tab-fru': '1610832958506-aa56368176cf',
  'wg-tab-lac': '1486297678162-eb2a19b0a32d',
  'wg-tab-beb': '1510812431401-41d2bd2722f3',
  'wg-tab-limp': '1585421514738-01798e348b17',
  'wg-tab-muebles': '1555041469-a586c61ea9bc',
  'wg-tab-dorm': '1505693416388-ac5ce068fe85',
  'wg-tab-cocina': '1556911220-e15b29be8c8f',
  'wg-tab-decor': '1513519245088-0e12902e5a38',

  // Marcas
  'wg-marca-1': '1511707171634-5f897ff02aa9', // Motorola / Smartphones
  'wg-marca-2': '1496181133206-80ce9b88a853', // Lenovo / Laptops
  'wg-marca-3': '1522337360788-8b13dee7a37e', // Siegen / Belleza
  'wg-marca-4': '1570222094114-d054a817e56b', // Oster / Electrodomesticos
  'wg-marca-5': '1556911220-e15b29be8c8f', // Indurama / Cocinas
  'wg-marca-6': '1584568694244-14fbdf83bd30', // Mabe / Linea blanca

  // App banner
  'wg-app': '1526367790999-0150786686a2',

  // Productos catalogo
  'wg-p-tv1': '1593359677879-a4bb92f829d1',
  'wg-p-tv2': '1593784991095-a205069470b6',
  'wg-p-tv3': '1528928441742-b4ccac1bb04c',
  'wg-p-tv4': '1545454675-3531b543be5d',
  'wg-p-tv5': '1593359677879-a4bb92f829d1',
  'wg-p-tab1': '1544244015-0df4b3ffc6b0',
  'wg-p-lap1': '1496181133206-80ce9b88a853',
  'wg-p-cel1': '1511707171634-5f897ff02aa9',
  'wg-p-imp1': '1612815154858-a5ab0c8b3b4e',
  'wg-p-desp1': '1474979266404-7eaacbcd87c5',
  'wg-p-desp2': '1586201375761-83865001e31c',
  'wg-p-desp3': '1554866585-cd94860890b7',
  'wg-p-desp4': '1550583724-b2692b85b150',
  'wg-p-desp5': '1585842378054-ee2e52f94ba2',
  'wg-p-desp6': '1550583724-b2692b85b150',
  'wg-p-desp7': '1488477181946-6428a0291777',
  'wg-p-ele1': '1584568694244-14fbdf83bd30',
  'wg-p-ele2': '1626806787461-102c1bfaaea1',
  'wg-p-ele3': '1556911220-e15b29be8c8f',
  'wg-p-ele4': '1585659722983-3a675dabf23d',
  'wg-p-ele5': '1570222094114-d054a817e56b',
};

export const getWongImg = (seed, w = 600, h = 600) => {
  const id = WONG_IMG[seed] || '1542838132-92c53300491e';
  return u(id, w, h);
};

export const img = getWongImg;

export const marca = {
  nombre: 'tienda.com',
  sub: 'Plus',
  tel: '(01) 613 8888',
  correo: 'ayuda@tienda.com',
  ciudad: 'Lima, Peru',
};

export const menuCategorias = [
  {
    cat: 'Supermercado',
    icono: 'carrito',
    sub: [
      'Frutas y Verduras',
      'Carnes, Pollos y Pescados',
      'Desayuno',
      'Lacteos y Huevos',
      'Embutidos y Fiambres',
      'Abarrotes',
      'Panaderia y Pasteleria',
      'Comidas y Rostizados',
      'Congelados',
      'Bebidas',
      'Cervezas, Vinos y Licores',
      'Limpieza',
      'Higiene, Salud y Belleza',
    ],
  },
  {
    cat: 'Electrodomesticos',
    icono: 'electro',
    sub: ['Refrigeradoras', 'Cocinas', 'Lavadoras', 'Microondas', 'Aire acondicionado', 'Pequenos electrodomesticos'],
  },
  {
    cat: 'Tecnologia',
    icono: 'tecno',
    sub: ['TV video y audio', 'Computo y telefonia', 'Impresoras', 'Gaming', 'Accesorios de computo'],
  },
  {
    cat: 'Hogar y Bazar',
    icono: 'hogar',
    sub: ['Muebles', 'Decoracion', 'Cocina y menaje', 'Organizacion', 'Ferreteria'],
  },
  {
    cat: 'Dormitorio',
    icono: 'dormitorio',
    sub: ['Colchones', 'Camas', 'Sabanas', 'Almohadas', 'Cobertores'],
  },
  {
    cat: 'Ninos y Bebes',
    icono: 'bebes',
    sub: ['Panales', 'Formulas', 'Ropa de bebe', 'Coches y sillas', 'Juguetes para bebe'],
  },
  {
    cat: 'Mascotas',
    icono: 'mascotas',
    sub: ['Alimento para perros', 'Alimento para gatos', 'Arena y accesorios', 'Snacks para mascotas'],
  },
  {
    cat: 'La Jugueteria',
    icono: 'juguetes',
    sub: ['Munecas', 'Vehiculos a escala', 'Juegos de mesa', 'Peluches', 'Aire libre'],
  },
  {
    cat: 'Deportes y Aire Libre',
    icono: 'deportes',
    sub: ['Fitness', 'Ciclismo', 'Camping', 'Ropa deportiva'],
  },
];

export const heroSlides = [
  {
    kicker: 'Despacho desde 24 horas',
    titulo: 'Smart TV 75" NANO 4K UHD AI',
    sub: '14 cuotas sin intereses pagando con Tarjeta tienda.com.',
    precioAntes: 1999,
    precioOferta: 1899,
    cuota: 135.64,
    seed: 'wg-hero-1',
    img: getWongImg('wg-hero-1', 900, 600),
    marcaProd: 'LG',
  },
  {
    kicker: 'Delivery gratis',
    titulo: 'TV 55" UHD Google TV',
    sub: 'Despacho desde 24 horas y delivery gratis a todo Lima.',
    precioAntes: 949,
    precioOferta: 899,
    cuota: 64.21,
    seed: 'wg-hero-2',
    img: getWongImg('wg-hero-2', 900, 600),
    marcaProd: 'TCL',
  },
  {
    kicker: 'Precio online',
    titulo: 'Smart TV 50" Mini LED',
    sub: 'Vision AI con procesador Mini LED de ultima generacion.',
    precioAntes: 1249,
    precioOferta: 1149,
    cuota: 82.07,
    seed: 'wg-hero-3',
    img: getWongImg('wg-hero-3', 900, 600),
    marcaProd: 'SAMSUNG',
  },
  {
    kicker: 'Hasta 40% dcto.',
    titulo: 'Refrigeradora Side by Side 509L',
    sub: 'Multi Air Flow para conservar tus alimentos por mas tiempo.',
    precioAntes: 3099,
    precioOferta: 1649,
    cuota: 118.6,
    seed: 'wg-hero-4',
    img: getWongImg('wg-hero-4', 900, 600),
    marcaProd: 'LG',
  },
];

export const categoriasCirculares = [
  { t: 'Tecnologia', seed: 'wg-cat-tec', img: getWongImg('wg-cat-tec', 300, 300) },
  { t: 'Bebidas', seed: 'wg-cat-beb', img: getWongImg('wg-cat-beb', 300, 300) },
  { t: 'Frutas y Verduras', seed: 'wg-cat-fru', img: getWongImg('wg-cat-fru', 300, 300) },
  { t: 'Cuidado del Hogar', seed: 'wg-cat-hog', img: getWongImg('wg-cat-hog', 300, 300) },
  { t: 'Lacteos y huevos', seed: 'wg-cat-lac', img: getWongImg('wg-cat-lac', 300, 300) },
  { t: 'Panaderia', seed: 'wg-cat-pan', img: getWongImg('wg-cat-pan', 300, 300) },
  { t: 'Despensa', seed: 'wg-cat-des', img: getWongImg('wg-cat-des', 300, 300) },
  { t: 'Congelados', seed: 'wg-cat-con', img: getWongImg('wg-cat-con', 300, 300) },
  { t: 'Carnes y chorizos', seed: 'wg-cat-car', img: getWongImg('wg-cat-car', 300, 300) },
];

export const bannersPromo = [
  { titulo: 'Tendencias', sub: 'lo mas buscado en un solo lugar', seed: 'wg-promo-1', img: getWongImg('wg-promo-1', 700, 400) },
  { titulo: 'Hasta 20% dcto.', sub: 'en maquinas de afeitar y repuestos', seed: 'wg-promo-2', img: getWongImg('wg-promo-2', 700, 400) },
  { titulo: 'Hasta 30% dcto.', sub: 'en limpieza del hogar', seed: 'wg-promo-3', img: getWongImg('wg-promo-3', 700, 400) },
];

export const mundos = [
  { t: 'tienda.com Plus', seed: 'wg-mundo-1', img: getWongImg('wg-mundo-1', 400, 280) },
  { t: 'Beneficios del mes', seed: 'wg-mundo-2', img: getWongImg('wg-mundo-2', 400, 280) },
  { t: 'Mundo Infantil', seed: 'wg-mundo-3', img: getWongImg('wg-mundo-3', 400, 280) },
  { t: 'Nuestro Cafe', seed: 'wg-mundo-4', img: getWongImg('wg-mundo-4', 400, 280) },
  { t: 'Coleccion Hogar', seed: 'wg-mundo-5', img: getWongImg('wg-mundo-5', 400, 280) },
  { t: 'Belleza Selecta', seed: 'wg-mundo-6', img: getWongImg('wg-mundo-6', 400, 280) },
];

export const plusSuscripcion = {
  titulo: 'Suscribete a tienda.com Plus y aprovecha las mejores ofertas!',
  cta: 'Prueba 15 dias gratis!',
  seed: 'wg-plus-cta',
  img: getWongImg('wg-plus-cta', 800, 450),
};

export const plusBeneficios = {
  kicker: '3 beneficios potentes del mes',
  items: [
    { nombre: 'Restaurantes', dcto: 35 },
    { nombre: 'Belleza y spa', dcto: 30 },
    { nombre: 'Moda y accesorios', dcto: 15 },
  ],
};

export const carrusel3 = {
  id: 'plus-frescos',
  banner: { kicker: 'Solo para socios', titulo: 'Lo mejor de tienda.com Plus', cta: 'Ver todo' },
  productos: [
    { nombre: 'Carne Molida de Bisteck Nacional x kg', precio: 39.9, antes: 74.5, tag: '-46%', seed: 'wg-p-plus1', img: getWongImg('wg-p-plus1', 400, 400) },
    { nombre: 'Filete de Salmon Fresco x kg', precio: 69.9, seed: 'wg-p-plus2', img: getWongImg('wg-p-plus2', 400, 400) },
    { nombre: 'Cafe Instantaneo Premium 190g', precio: 34.5, antes: 42.2, tag: '-18%', seed: 'wg-p-plus3', img: getWongImg('wg-p-plus3', 400, 400) },
    { nombre: 'Pechuga de Pollo sin Espinazo x kg', precio: 16.9, antes: 18.9, tag: '-11%', seed: 'wg-p-plus4', img: getWongImg('wg-p-plus4', 400, 400) },
    { nombre: 'Filete de Tilapia Extra x kg', precio: 69.5, antes: 73.5, tag: '-5%', seed: 'wg-p-plus5', img: getWongImg('wg-p-plus5', 400, 400) },
  ],
};

export const tabsCategorias = [
  {
    t: 'Electro/Tecnologia',
    items: [
      { t: 'TV video y audio', seed: 'wg-tab-tv', img: getWongImg('wg-tab-tv', 400, 300) },
      { t: 'Computo y telefonia', seed: 'wg-tab-comp', img: getWongImg('wg-tab-comp', 400, 300) },
      { t: 'Linea blanca', seed: 'wg-tab-blanca', img: getWongImg('wg-tab-blanca', 400, 300) },
      { t: 'Pequenos electrodomesticos', seed: 'wg-tab-peq', img: getWongImg('wg-tab-peq', 400, 300) },
    ],
  },
  {
    t: 'Supermercado',
    items: [
      { t: 'Frutas y Verduras', seed: 'wg-tab-fru', img: getWongImg('wg-tab-fru', 400, 300) },
      { t: 'Lacteos y Huevos', seed: 'wg-tab-lac', img: getWongImg('wg-tab-lac', 400, 300) },
      { t: 'Bebidas', seed: 'wg-tab-beb', img: getWongImg('wg-tab-beb', 400, 300) },
      { t: 'Limpieza', seed: 'wg-tab-limp', img: getWongImg('wg-tab-limp', 400, 300) },
    ],
  },
  {
    t: 'Hogar/Bazar',
    items: [
      { t: 'Muebles', seed: 'wg-tab-muebles', img: getWongImg('wg-tab-muebles', 400, 300) },
      { t: 'Dormitorio', seed: 'wg-tab-dorm', img: getWongImg('wg-tab-dorm', 400, 300) },
      { t: 'Cocina y menaje', seed: 'wg-tab-cocina', img: getWongImg('wg-tab-cocina', 400, 300) },
      { t: 'Decoracion', seed: 'wg-tab-decor', img: getWongImg('wg-tab-decor', 400, 300) },
    ],
  },
];

export const carrusel1 = {
  id: 'tv-audio',
  banner: { kicker: 'Ofertas de la semana', titulo: 'TV, video y audio', cta: 'Ver todo' },
  productos: [
    { nombre: 'Televisor TCL 55" UHD Google TV', precio: 899, antes: 1049, tag: '-14%', seed: 'wg-p-tv1', img: getWongImg('wg-p-tv1', 400, 400) },
    { nombre: 'Televisor LG 65" NANO 4K UHD AI Smart TV 2026', precio: 1599, antes: 2299, tag: '-30%', seed: 'wg-p-tv2', img: getWongImg('wg-p-tv2', 400, 400) },
    { nombre: 'Televisor Samsung Smart TV 32" HD', precio: 499, antes: 599, tag: '-17%', seed: 'wg-p-tv3', img: getWongImg('wg-p-tv3', 400, 400) },
    { nombre: 'Barra de sonido Samsung 2.1 canales', precio: 349, antes: 449, tag: '-22%', seed: 'wg-p-tv4', img: getWongImg('wg-p-tv4', 400, 400) },
    { nombre: 'Televisor TCL 43" UHD Google TV', precio: 749, antes: 899, tag: '-17%', seed: 'wg-p-tv5', img: getWongImg('wg-p-tv5', 400, 400) },
  ],
};

export const carrusel2 = {
  id: 'despensa',
  banner: { kicker: 'Ahorra en tu compra', titulo: 'Despensa y bebidas', cta: 'Ver todo' },
  productos: [
    { nombre: 'Aceite vegetal Primor 1L', precio: 12.9, seed: 'wg-p-desp1', img: getWongImg('wg-p-desp1', 400, 400) },
    { nombre: 'Arroz extra Costeno 5kg', precio: 22.5, antes: 26.9, tag: '-16%', seed: 'wg-p-desp2', img: getWongImg('wg-p-desp2', 400, 400) },
    { nombre: 'Gaseosa Coca-Cola 3L', precio: 9.9, seed: 'wg-p-desp3', img: getWongImg('wg-p-desp3', 400, 400) },
    { nombre: 'Leche evaporada Gloria pack x6', precio: 18.9, antes: 21.9, tag: '-14%', seed: 'wg-p-desp4', img: getWongImg('wg-p-desp4', 400, 400) },
    { nombre: 'Detergente Bolivar 4kg', precio: 24.9, seed: 'wg-p-desp5', img: getWongImg('wg-p-desp5', 400, 400) },
  ],
};

export const marcas = [
  { t: 'Motorola, ZTE, Xiaomi y Honor', sub: 'Hasta 32% dcto. en smartphones', seed: 'wg-marca-1', img: getWongImg('wg-marca-1', 500, 300) },
  { t: 'Lenovo, HP y Asus', sub: '25% dcto. en laptops', seed: 'wg-marca-2', img: getWongImg('wg-marca-2', 500, 300) },
  { t: 'Siegen Specialist', sub: 'Cuidado personal en oferta', seed: 'wg-marca-3', img: getWongImg('wg-marca-3', 500, 300) },
  { t: 'Oster', sub: 'Crea para siempre', seed: 'wg-marca-4', img: getWongImg('wg-marca-4', 500, 300) },
  { t: 'Indurama', sub: 'Linea blanca con 14 cuotas sin interes', seed: 'wg-marca-5', img: getWongImg('wg-marca-5', 500, 300) },
  { t: 'Mabe', sub: 'Electrodomesticos para tu hogar', seed: 'wg-marca-6', img: getWongImg('wg-marca-6', 500, 300) },
];

export const footerCols = [
  {
    t: 'Tiendas Online',
    links: ['Beneficios', 'Como Comprar', 'Mis Pedidos', 'Medios de Pago', 'Servicios de Entrega', 'Preguntas Frecuentes', 'Terminos y Condiciones', 'Catalogos'],
  },
  {
    t: 'Nosotros',
    links: ['Bienvenidos a tienda.com', 'Ventas Corporativas', 'Codigo de Etica'],
  },
  {
    t: 'Contactanos',
    links: ['Nuestras Tiendas', 'Consultas y Sugerencias', 'Telefonos', 'Revisa tu boleta'],
  },
];

export const seoBloques = [
  {
    t: 'tienda.com Plus',
    p: 'Encuentra y compra online tus productos de supermercado y electrohogar y recibelos en casa. Suscribete a tienda.com Plus y obten despacho gratis, descuentos exclusivos y beneficios en restaurantes, belleza y moda.',
  },
  {
    t: 'Compra lo ultimo en tecnologia',
    p: 'Renueva tu television, laptop o electrodomestico. Encuentra el equipo potente que necesitas al mejor precio, con marcas reconocidas y 14 cuotas sin intereses.',
  },
  {
    t: 'Lo mejor para mascotas y el hogar',
    p: 'No nos olvidamos de tus mascotas. Encuentra alimento seco y humedo, snacks, arena y todo lo que necesitas para tu hogar en un solo lugar.',
  },
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const catalogo = [
  { nombre: 'Televisor TCL 55" UHD Google TV', precio: 899, antes: 1049, tag: '-14%', seed: 'wg-p-tv1', img: getWongImg('wg-p-tv1', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'TCL', tags: ['tv', 'television'] },
  { nombre: 'Televisor LG 65" NANO 4K UHD AI Smart TV 2026', precio: 1599, antes: 2299, tag: '-30%', seed: 'wg-p-tv2', img: getWongImg('wg-p-tv2', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'LG', tags: ['tv', 'television'] },
  { nombre: 'Televisor Samsung Smart TV 32" HD', precio: 499, antes: 599, tag: '-17%', seed: 'wg-p-tv3', img: getWongImg('wg-p-tv3', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'Samsung', tags: ['tv', 'television'] },
  { nombre: 'Barra de sonido Samsung 2.1 canales', precio: 349, antes: 449, tag: '-22%', seed: 'wg-p-tv4', img: getWongImg('wg-p-tv4', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'Samsung', tags: ['audio', 'sonido'] },
  { nombre: 'Televisor TCL 43" UHD Google TV', precio: 749, antes: 899, tag: '-17%', seed: 'wg-p-tv5', img: getWongImg('wg-p-tv5', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'TCL', tags: ['tv', 'television'] },
  { nombre: 'Tablet Lenovo Tab One MediaTek Helio', precio: 439, antes: 649, tag: '-32%', seed: 'wg-p-tab1', img: getWongImg('wg-p-tab1', 400, 400), departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Lenovo', tags: ['tablet', 'computo'] },
  { nombre: 'Laptop Lenovo IdeaPad Slim 3', precio: 1499, antes: 1899, tag: '-21%', seed: 'wg-p-lap1', img: getWongImg('wg-p-lap1', 400, 400), departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Lenovo', tags: ['laptop', 'notebook', 'computo'] },
  { nombre: 'Smartphone Motorola G67 4GB+256GB', precio: 849, antes: 899, tag: '-6%', seed: 'wg-p-cel1', img: getWongImg('wg-p-cel1', 400, 400), departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Motorola', tags: ['celular', 'smartphone', 'telefono'] },
  { nombre: 'Impresora Multifuncional HP Smart Tank 750', precio: 999, antes: 1599, tag: '-38%', seed: 'wg-p-imp1', img: getWongImg('wg-p-imp1', 400, 400), departamento: 'Tecnologia', categoria: 'Impresoras', marca: 'HP', tags: ['impresora'] },
  { nombre: 'Aceite vegetal Primor 1L', precio: 12.9, seed: 'wg-p-desp1', img: getWongImg('wg-p-desp1', 400, 400), departamento: 'Supermercado', categoria: 'Abarrotes', marca: 'Primor', tags: ['aceite'] },
  { nombre: 'Arroz extra Costeno 5kg', precio: 22.5, antes: 26.9, tag: '-16%', seed: 'wg-p-desp2', img: getWongImg('wg-p-desp2', 400, 400), departamento: 'Supermercado', categoria: 'Abarrotes', marca: 'Costeno', tags: ['arroz'] },
  { nombre: 'Gaseosa Coca-Cola 3L', precio: 9.9, seed: 'wg-p-desp3', img: getWongImg('wg-p-desp3', 400, 400), departamento: 'Supermercado', categoria: 'Bebidas', marca: 'Coca-Cola', tags: ['gaseosa', 'bebida'] },
  { nombre: 'Leche evaporada Gloria pack x6', precio: 18.9, antes: 21.9, tag: '-14%', seed: 'wg-p-desp4', img: getWongImg('wg-p-desp4', 400, 400), departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Gloria', tags: ['leche'] },
  { nombre: 'Detergente Bolivar 4kg', precio: 24.9, seed: 'wg-p-desp5', img: getWongImg('wg-p-desp5', 400, 400), departamento: 'Supermercado', categoria: 'Limpieza', marca: 'Bolivar', tags: ['detergente', 'limpieza'] },
  { nombre: 'Leche evaporada Nestle pack x6', precio: 19.9, seed: 'wg-p-desp6', img: getWongImg('wg-p-desp6', 400, 400), departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Nestle', tags: ['leche'] },
  { nombre: 'Yogurt Gloria Fresa 1L', precio: 8.9, antes: 10.5, tag: '-15%', seed: 'wg-p-desp7', img: getWongImg('wg-p-desp7', 400, 400), departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Gloria', tags: ['yogurt', 'lacteo'] },
  { nombre: 'Refrigeradora LG Side by Side 509L', precio: 1649, antes: 3099, tag: '-47%', seed: 'wg-p-ele1', img: getWongImg('wg-p-ele1', 400, 400), departamento: 'Electrodomesticos', categoria: 'Refrigeradoras', marca: 'LG', tags: ['refrigeradora', 'nevera'] },
  { nombre: 'Lavadora Samsung 17kg', precio: 1349, antes: 2149, tag: '-37%', seed: 'wg-p-ele2', img: getWongImg('wg-p-ele2', 400, 400), departamento: 'Electrodomesticos', categoria: 'Lavadoras', marca: 'Samsung', tags: ['lavadora'] },
  { nombre: 'Cocina Indurama 4 hornillas', precio: 799, seed: 'wg-p-ele3', img: getWongImg('wg-p-ele3', 400, 400), departamento: 'Electrodomesticos', categoria: 'Cocinas', marca: 'Indurama', tags: ['cocina'] },
  { nombre: 'Microondas Oster 20L', precio: 289, antes: 349, tag: '-17%', seed: 'wg-p-ele4', img: getWongImg('wg-p-ele4', 400, 400), departamento: 'Electrodomesticos', categoria: 'Pequenos electrodomesticos', marca: 'Oster', tags: ['microondas'] },
  { nombre: 'Licuadora Oster Clasica', precio: 149, seed: 'wg-p-ele5', img: getWongImg('wg-p-ele5', 400, 400), departamento: 'Electrodomesticos', categoria: 'Pequenos electrodomesticos', marca: 'Oster', tags: ['licuadora'] },
];

export const filtrosDepartamento = ['Tecnologia', 'Supermercado', 'Electrodomesticos'];
export const filtrosCategoria = ['TV video y audio', 'Computo y telefonia', 'Impresoras', 'Abarrotes', 'Bebidas', 'Lacteos y Huevos', 'Limpieza', 'Refrigeradoras', 'Lavadoras', 'Cocinas', 'Pequenos electrodomesticos'];
export const filtrosMarca = ['LG', 'TCL', 'Samsung', 'Lenovo', 'Motorola', 'HP', 'Primor', 'Costeno', 'Coca-Cola', 'Gloria', 'Nestle', 'Bolivar', 'Indurama', 'Oster'];
export const ordenarPor = ['Relevancia', 'Menor precio', 'Mayor precio', 'Mayor descuento'];
export const sugerenciasBusqueda = ['televisor', 'leche', 'refrigeradora', 'laptop', 'detergente'];

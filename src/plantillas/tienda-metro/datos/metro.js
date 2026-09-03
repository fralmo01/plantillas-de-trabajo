const u = (id, w = 600, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const METRO_IMG = {
  // Hero slides
  'tm-hero-1': '1593784991095-a205069470b6', // Smart TV 75" NANO 4K UHD
  'tm-hero-2': '1593359677879-a4bb92f829d1', // TV 55" UHD Google TV
  'tm-hero-3': '1528928441742-b4ccac1bb04c', // Smart TV 50" Mini LED
  'tm-hero-4': '1584568694244-14fbdf83bd30', // Refrigeradora Side by Side LG

  // Categorias circulares
  'tm-cat-tec': '1505740420928-5e560c06d30e', // Tecnologia
  'tm-cat-beb': '1551024709-8f23befc6f87', // Bebidas
  'tm-cat-fru': '1610832958506-aa56368176cf', // Frutas y Verduras
  'tm-cat-hog': '1585421514738-01798e348b17', // Cuidado del Hogar
  'tm-cat-lac': '1550583724-b2692b85b150', // Lacteos y huevos
  'tm-cat-pan': '1509440159596-0249088772ff', // Panaderia
  'tm-cat-des': '1540420773420-3366772f4999', // Despensa
  'tm-cat-con': '1501443762994-82bd5dace89a', // Congelados
  'tm-cat-car': '1607623814075-e51df1bdc82f', // Carnes y chorizos

  // Banners promocionales
  'tm-promo-1': '1540420773420-3366772f4999', // Frutas y verduras
  'tm-promo-2': '1566576912321-d58ddd7a6088', // Jugueteria
  'tm-promo-3': '1505740420928-5e560c06d30e', // Accesorios de computo y telefonia

  // Mundos
  'tm-mundo-1': '1515488042361-ee00e0ddd4e4', // Mundo Metrito
  'tm-mundo-2': '1542751371-adc38448a05e', // Metro Gamer Fest
  'tm-mundo-3': '1522337360788-8b13dee7a37e', // Cuidado Personal
  'tm-mundo-4': '1505693416388-ac5ce068fe85', // Mundo Colchones
  'tm-mundo-5': '1556910103-1c02745aae4d', // Cuisine & Co
  'tm-mundo-6': '1578916171728-46686eac8d58', // Marcas Auspiciadoras

  // Tabs categorias
  'tm-tab-tv': '1593784991095-a205069470b6',
  'tm-tab-comp': '1496181133206-80ce9b88a853',
  'tm-tab-blanca': '1584568694244-14fbdf83bd30',
  'tm-tab-peq': '1570222094114-d054a817e56b',
  'tm-tab-fru': '1610832958506-aa56368176cf',
  'tm-tab-lac': '1550583724-b2692b85b150',
  'tm-tab-beb': '1551024709-8f23befc6f87',
  'tm-tab-limp': '1585421514738-01798e348b17',
  'tm-tab-muebles': '1555041469-a586c61ea9bc',
  'tm-tab-dorm': '1505693416388-ac5ce068fe85',
  'tm-tab-cocina': '1556911220-e15b29be8c8f',
  'tm-tab-decor': '1513519245088-0e12902e5a38',

  // Marcas
  'tm-marca-1': '1511707171634-5f897ff02aa9', // Motorola / Smartphones
  'tm-marca-2': '1496181133206-80ce9b88a853', // Lenovo / Laptops
  'tm-marca-3': '1522337360788-8b13dee7a37e', // Siegen / Cuidado personal
  'tm-marca-4': '1570222094114-d054a817e56b', // Oster / Electrodomesticos
  'tm-marca-5': '1556911220-e15b29be8c8f', // Indurama / Cocinas
  'tm-marca-6': '1584568694244-14fbdf83bd30', // Mabe / Linea blanca

  // App banner
  'tm-app': '1526367790999-0150786686a2',

  // Productos catalogo
  'tm-p-tv1': '1593359677879-a4bb92f829d1', // TV TCL 55" UHD
  'tm-p-tv2': '1593784991095-a205069470b6', // TV LG 65" NANO 4K
  'tm-p-tv3': '1528928441742-b4ccac1bb04c', // TV Samsung 32" HD
  'tm-p-tv4': '1545454675-3531b543be5d', // Soundbar Samsung 2.1
  'tm-p-tv5': '1593359677879-a4bb92f829d1', // TV TCL 43" UHD
  'tm-p-tab1': '1544244015-0df4b3ffc6b0', // Tablet Lenovo Tab
  'tm-p-lap1': '1496181133206-80ce9b88a853', // Laptop Lenovo IdeaPad
  'tm-p-cel1': '1511707171634-5f897ff02aa9', // Smartphone Motorola
  'tm-p-imp1': '1612815154858-a5ab0c8b3b4e', // Impresora HP Smart Tank
  'tm-p-desp1': '1474979266404-7eaacbcd87c5', // Aceite vegetal Primor 1L
  'tm-p-desp2': '1586201375761-83865001e31c', // Arroz extra Costeno 5kg
  'tm-p-desp3': '1554866585-cd94860890b7', // Gaseosa Coca-Cola 3L
  'tm-p-desp4': '1550583724-b2692b85b150', // Leche evaporada Gloria pack x6
  'tm-p-desp5': '1585842378054-ee2e52f94ba2', // Detergente Bolivar 4kg
  'tm-p-desp6': '1550583724-b2692b85b150', // Leche evaporada Nestle
  'tm-p-desp7': '1488477181946-6428a0291777', // Yogurt Gloria Fresa 1L
  'tm-p-ele1': '1584568694244-14fbdf83bd30', // Refrigeradora LG Side by Side
  'tm-p-ele2': '1626806787461-102c1bfaaea1', // Lavadora Samsung 17kg
  'tm-p-ele3': '1556911220-e15b29be8c8f', // Cocina Indurama 4 hornillas
  'tm-p-ele4': '1585659722983-3a675dabf23d', // Microondas Oster 20L
  'tm-p-ele5': '1570222094114-d054a817e56b', // Licuadora Oster Clasica
};

export const getMetroImg = (seed, w = 600, h = 600) => {
  const id = METRO_IMG[seed] || '1542838132-92c53300491e';
  return u(id, w, h);
};

export const img = getMetroImg;

export const marca = {
  nombre: 'tienda.com',
  sub: 'Market',
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
    seed: 'tm-hero-1',
    img: getMetroImg('tm-hero-1', 900, 600),
    marcaProd: 'LG',
  },
  {
    kicker: 'Delivery gratis',
    titulo: 'TV 55" UHD Google TV',
    sub: 'Despacho desde 24 horas y delivery gratis a todo Lima.',
    precioAntes: 949,
    precioOferta: 899,
    cuota: 64.21,
    seed: 'tm-hero-2',
    img: getMetroImg('tm-hero-2', 900, 600),
    marcaProd: 'TCL',
  },
  {
    kicker: 'Precio online',
    titulo: 'Smart TV 50" Mini LED',
    sub: 'Vision AI con procesador Mini LED de ultima generacion.',
    precioAntes: 1249,
    precioOferta: 1149,
    cuota: 82.07,
    seed: 'tm-hero-3',
    img: getMetroImg('tm-hero-3', 900, 600),
    marcaProd: 'SAMSUNG',
  },
  {
    kicker: 'Hasta 40% dcto.',
    titulo: 'Refrigeradora Side by Side 509L',
    sub: 'Multi Air Flow para conservar tus alimentos por mas tiempo.',
    precioAntes: 3099,
    precioOferta: 1649,
    cuota: 118.6,
    seed: 'tm-hero-4',
    img: getMetroImg('tm-hero-4', 900, 600),
    marcaProd: 'LG',
  },
];

export const categoriasCirculares = [
  { t: 'Tecnologia', seed: 'tm-cat-tec', img: getMetroImg('tm-cat-tec', 300, 300) },
  { t: 'Bebidas', seed: 'tm-cat-beb', img: getMetroImg('tm-cat-beb', 300, 300) },
  { t: 'Frutas y Verduras', seed: 'tm-cat-fru', img: getMetroImg('tm-cat-fru', 300, 300) },
  { t: 'Cuidado del Hogar', seed: 'tm-cat-hog', img: getMetroImg('tm-cat-hog', 300, 300) },
  { t: 'Lacteos y huevos', seed: 'tm-cat-lac', img: getMetroImg('tm-cat-lac', 300, 300) },
  { t: 'Panaderia', seed: 'tm-cat-pan', img: getMetroImg('tm-cat-pan', 300, 300) },
  { t: 'Despensa', seed: 'tm-cat-des', img: getMetroImg('tm-cat-des', 300, 300) },
  { t: 'Congelados', seed: 'tm-cat-con', img: getMetroImg('tm-cat-con', 300, 300) },
  { t: 'Carnes y chorizos', seed: 'tm-cat-car', img: getMetroImg('tm-cat-car', 300, 300) },
];

export const bannersPromo = [
  { titulo: 'Hasta 25% dcto.', sub: 'en frutas y verduras', seed: 'tm-promo-1', img: getMetroImg('tm-promo-1', 700, 400) },
  { titulo: 'Hasta 70% dcto.', sub: 'en la jugueteria', seed: 'tm-promo-2', img: getMetroImg('tm-promo-2', 700, 400) },
  { titulo: 'Precio desde S/ 14.90', sub: 'en accesorios de computo y telefonia', seed: 'tm-promo-3', img: getMetroImg('tm-promo-3', 700, 400) },
];

export const mundos = [
  { t: 'Mundo Metrito', seed: 'tm-mundo-1', img: getMetroImg('tm-mundo-1', 400, 280) },
  { t: 'Metro Gamer Fest', seed: 'tm-mundo-2', img: getMetroImg('tm-mundo-2', 400, 280) },
  { t: 'Cuidado Personal', seed: 'tm-mundo-3', img: getMetroImg('tm-mundo-3', 400, 280) },
  { t: 'Mundo Colchones', seed: 'tm-mundo-4', img: getMetroImg('tm-mundo-4', 400, 280) },
  { t: 'Cuisine & Co', seed: 'tm-mundo-5', img: getMetroImg('tm-mundo-5', 400, 280) },
  { t: 'Marcas Auspiciadoras', seed: 'tm-mundo-6', img: getMetroImg('tm-mundo-6', 400, 280) },
];

export const tabsCategorias = [
  {
    t: 'Electro/Tecnologia',
    items: [
      { t: 'TV video y audio', seed: 'tm-tab-tv', img: getMetroImg('tm-tab-tv', 400, 300) },
      { t: 'Computo y telefonia', seed: 'tm-tab-comp', img: getMetroImg('tm-tab-comp', 400, 300) },
      { t: 'Linea blanca', seed: 'tm-tab-blanca', img: getMetroImg('tm-tab-blanca', 400, 300) },
      { t: 'Pequenos electrodomesticos', seed: 'tm-tab-peq', img: getMetroImg('tm-tab-peq', 400, 300) },
    ],
  },
  {
    t: 'Supermercado',
    items: [
      { t: 'Frutas y Verduras', seed: 'tm-tab-fru', img: getMetroImg('tm-tab-fru', 400, 300) },
      { t: 'Lacteos y Huevos', seed: 'tm-tab-lac', img: getMetroImg('tm-tab-lac', 400, 300) },
      { t: 'Bebidas', seed: 'tm-tab-beb', img: getMetroImg('tm-tab-beb', 400, 300) },
      { t: 'Limpieza', seed: 'tm-tab-limp', img: getMetroImg('tm-tab-limp', 400, 300) },
    ],
  },
  {
    t: 'Hogar/Bazar',
    items: [
      { t: 'Muebles', seed: 'tm-tab-muebles', img: getMetroImg('tm-tab-muebles', 400, 300) },
      { t: 'Dormitorio', seed: 'tm-tab-dorm', img: getMetroImg('tm-tab-dorm', 400, 300) },
      { t: 'Cocina y menaje', seed: 'tm-tab-cocina', img: getMetroImg('tm-tab-cocina', 400, 300) },
      { t: 'Decoracion', seed: 'tm-tab-decor', img: getMetroImg('tm-tab-decor', 400, 300) },
    ],
  },
];

export const carrusel1 = {
  id: 'tv-audio',
  banner: { kicker: 'Ofertas de la semana', titulo: 'TV, video y audio', cta: 'Ver todo' },
  productos: [
    { nombre: 'Televisor TCL 55" UHD Google TV', precio: 899, antes: 1049, tag: '-14%', seed: 'tm-p-tv1', img: getMetroImg('tm-p-tv1', 400, 400) },
    { nombre: 'Televisor LG 65" NANO 4K UHD AI Smart TV 2026', precio: 1599, antes: 2299, tag: '-30%', seed: 'tm-p-tv2', img: getMetroImg('tm-p-tv2', 400, 400) },
    { nombre: 'Televisor Samsung Smart TV 32" HD', precio: 499, antes: 599, tag: '-17%', seed: 'tm-p-tv3', img: getMetroImg('tm-p-tv3', 400, 400) },
    { nombre: 'Barra de sonido Samsung 2.1 canales', precio: 349, antes: 449, tag: '-22%', seed: 'tm-p-tv4', img: getMetroImg('tm-p-tv4', 400, 400) },
    { nombre: 'Televisor TCL 43" UHD Google TV', precio: 749, antes: 899, tag: '-17%', seed: 'tm-p-tv5', img: getMetroImg('tm-p-tv5', 400, 400) },
  ],
};

export const carrusel2 = {
  id: 'despensa',
  banner: { kicker: 'Ahorra en tu compra', titulo: 'Despensa y bebidas', cta: 'Ver todo' },
  productos: [
    { nombre: 'Aceite vegetal Primor 1L', precio: 12.9, seed: 'tm-p-desp1', img: getMetroImg('tm-p-desp1', 400, 400) },
    { nombre: 'Arroz extra Costeno 5kg', precio: 22.5, antes: 26.9, tag: '-16%', seed: 'tm-p-desp2', img: getMetroImg('tm-p-desp2', 400, 400) },
    { nombre: 'Gaseosa Coca-Cola 3L', precio: 9.9, seed: 'tm-p-desp3', img: getMetroImg('tm-p-desp3', 400, 400) },
    { nombre: 'Leche evaporada Gloria pack x6', precio: 18.9, antes: 21.9, tag: '-14%', seed: 'tm-p-desp4', img: getMetroImg('tm-p-desp4', 400, 400) },
    { nombre: 'Detergente Bolivar 4kg', precio: 24.9, seed: 'tm-p-desp5', img: getMetroImg('tm-p-desp5', 400, 400) },
  ],
};

export const marcas = [
  { t: 'Motorola, ZTE, Xiaomi y Honor', sub: 'Hasta 32% dcto. en smartphones', seed: 'tm-marca-1', img: getMetroImg('tm-marca-1', 500, 300) },
  { t: 'Lenovo, HP y Asus', sub: '25% dcto. en laptops', seed: 'tm-marca-2', img: getMetroImg('tm-marca-2', 500, 300) },
  { t: 'Siegen Specialist', sub: 'Cuidado personal en oferta', seed: 'tm-marca-3', img: getMetroImg('tm-marca-3', 500, 300) },
  { t: 'Oster', sub: 'Crea para siempre', seed: 'tm-marca-4', img: getMetroImg('tm-marca-4', 500, 300) },
  { t: 'Indurama', sub: 'Linea blanca con 14 cuotas sin interes', seed: 'tm-marca-5', img: getMetroImg('tm-marca-5', 500, 300) },
  { t: 'Mabe', sub: 'Electrodomesticos para tu hogar', seed: 'tm-marca-6', img: getMetroImg('tm-marca-6', 500, 300) },
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
    t: 'tienda.com Market',
    p: 'Encuentra y compra online tus productos de supermercado y electrohogar y recibelos en casa. Selecciona tus marcas favoritas en tecnologia, electrodomesticos, cervezas y licores, mascotas y disfruta de grandes descuentos.',
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
  { nombre: 'Televisor TCL 55" UHD Google TV', precio: 899, antes: 1049, tag: '-14%', seed: 'tm-p-tv1', img: getMetroImg('tm-p-tv1', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'TCL', tags: ['tv', 'television'] },
  { nombre: 'Televisor LG 65" NANO 4K UHD AI Smart TV 2026', precio: 1599, antes: 2299, tag: '-30%', seed: 'tm-p-tv2', img: getMetroImg('tm-p-tv2', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'LG', tags: ['tv', 'television'] },
  { nombre: 'Televisor Samsung Smart TV 32" HD', precio: 499, antes: 599, tag: '-17%', seed: 'tm-p-tv3', img: getMetroImg('tm-p-tv3', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'Samsung', tags: ['tv', 'television'] },
  { nombre: 'Barra de sonido Samsung 2.1 canales', precio: 349, antes: 449, tag: '-22%', seed: 'tm-p-tv4', img: getMetroImg('tm-p-tv4', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'Samsung', tags: ['audio', 'sonido'] },
  { nombre: 'Televisor TCL 43" UHD Google TV', precio: 749, antes: 899, tag: '-17%', seed: 'tm-p-tv5', img: getMetroImg('tm-p-tv5', 400, 400), departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'TCL', tags: ['tv', 'television'] },
  { nombre: 'Tablet Lenovo Tab One MediaTek Helio', precio: 439, antes: 649, tag: '-32%', seed: 'tm-p-tab1', img: getMetroImg('tm-p-tab1', 400, 400), departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Lenovo', tags: ['tablet', 'computo'] },
  { nombre: 'Laptop Lenovo IdeaPad Slim 3', precio: 1499, antes: 1899, tag: '-21%', seed: 'tm-p-lap1', img: getMetroImg('tm-p-lap1', 400, 400), departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Lenovo', tags: ['laptop', 'notebook', 'computo'] },
  { nombre: 'Smartphone Motorola G67 4GB+256GB', precio: 849, antes: 899, tag: '-6%', seed: 'tm-p-cel1', img: getMetroImg('tm-p-cel1', 400, 400), departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Motorola', tags: ['celular', 'smartphone', 'telefono'] },
  { nombre: 'Impresora Multifuncional HP Smart Tank 750', precio: 999, antes: 1599, tag: '-38%', seed: 'tm-p-imp1', img: getMetroImg('tm-p-imp1', 400, 400), departamento: 'Tecnologia', categoria: 'Impresoras', marca: 'HP', tags: ['impresora'] },
  { nombre: 'Aceite vegetal Primor 1L', precio: 12.9, seed: 'tm-p-desp1', img: getMetroImg('tm-p-desp1', 400, 400), departamento: 'Supermercado', categoria: 'Abarrotes', marca: 'Primor', tags: ['aceite'] },
  { nombre: 'Arroz extra Costeno 5kg', precio: 22.5, antes: 26.9, tag: '-16%', seed: 'tm-p-desp2', img: getMetroImg('tm-p-desp2', 400, 400), departamento: 'Supermercado', categoria: 'Abarrotes', marca: 'Costeno', tags: ['arroz'] },
  { nombre: 'Gaseosa Coca-Cola 3L', precio: 9.9, seed: 'tm-p-desp3', img: getMetroImg('tm-p-desp3', 400, 400), departamento: 'Supermercado', categoria: 'Bebidas', marca: 'Coca-Cola', tags: ['gaseosa', 'bebida'] },
  { nombre: 'Leche evaporada Gloria pack x6', precio: 18.9, antes: 21.9, tag: '-14%', seed: 'tm-p-desp4', img: getMetroImg('tm-p-desp4', 400, 400), departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Gloria', tags: ['leche'] },
  { nombre: 'Detergente Bolivar 4kg', precio: 24.9, seed: 'tm-p-desp5', img: getMetroImg('tm-p-desp5', 400, 400), departamento: 'Supermercado', categoria: 'Limpieza', marca: 'Bolivar', tags: ['detergente', 'limpieza'] },
  { nombre: 'Leche evaporada Nestle pack x6', precio: 19.9, seed: 'tm-p-desp6', img: getMetroImg('tm-p-desp6', 400, 400), departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Nestle', tags: ['leche'] },
  { nombre: 'Yogurt Gloria Fresa 1L', precio: 8.9, antes: 10.5, tag: '-15%', seed: 'tm-p-desp7', img: getMetroImg('tm-p-desp7', 400, 400), departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Gloria', tags: ['yogurt', 'lacteo'] },
  { nombre: 'Refrigeradora LG Side by Side 509L', precio: 1649, antes: 3099, tag: '-47%', seed: 'tm-p-ele1', img: getMetroImg('tm-p-ele1', 400, 400), departamento: 'Electrodomesticos', categoria: 'Refrigeradoras', marca: 'LG', tags: ['refrigeradora', 'nevera'] },
  { nombre: 'Lavadora Samsung 17kg', precio: 1349, antes: 2149, tag: '-37%', seed: 'tm-p-ele2', img: getMetroImg('tm-p-ele2', 400, 400), departamento: 'Electrodomesticos', categoria: 'Lavadoras', marca: 'Samsung', tags: ['lavadora'] },
  { nombre: 'Cocina Indurama 4 hornillas', precio: 799, seed: 'tm-p-ele3', img: getMetroImg('tm-p-ele3', 400, 400), departamento: 'Electrodomesticos', categoria: 'Cocinas', marca: 'Indurama', tags: ['cocina'] },
  { nombre: 'Microondas Oster 20L', precio: 289, antes: 349, tag: '-17%', seed: 'tm-p-ele4', img: getMetroImg('tm-p-ele4', 400, 400), departamento: 'Electrodomesticos', categoria: 'Pequenos electrodomesticos', marca: 'Oster', tags: ['microondas'] },
  { nombre: 'Licuadora Oster Clasica', precio: 149, seed: 'tm-p-ele5', img: getMetroImg('tm-p-ele5', 400, 400), departamento: 'Electrodomesticos', categoria: 'Pequenos electrodomesticos', marca: 'Oster', tags: ['licuadora'] },
];

export const filtrosDepartamento = ['Tecnologia', 'Supermercado', 'Electrodomesticos'];
export const filtrosCategoria = ['TV video y audio', 'Computo y telefonia', 'Impresoras', 'Abarrotes', 'Bebidas', 'Lacteos y Huevos', 'Limpieza', 'Refrigeradoras', 'Lavadoras', 'Cocinas', 'Pequenos electrodomesticos'];
export const filtrosMarca = ['LG', 'TCL', 'Samsung', 'Lenovo', 'Motorola', 'HP', 'Primor', 'Costeno', 'Coca-Cola', 'Gloria', 'Nestle', 'Bolivar', 'Indurama', 'Oster'];
export const ordenarPor = ['Relevancia', 'Menor precio', 'Mayor precio', 'Mayor descuento'];
export const sugerenciasBusqueda = ['televisor', 'leche', 'refrigeradora', 'laptop', 'detergente'];

const img = (seed, w = 600, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

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
    sub: '14 cuotas sin intereses pagando con Tarjeta Cencosud.',
    precioAntes: 1999,
    precioOferta: 1899,
    cuota: 135.64,
    seed: 'tm-hero-1',
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
    marcaProd: 'LG',
  },
];

export const categoriasCirculares = [
  { t: 'Tecnologia', seed: 'tm-cat-tec' },
  { t: 'Bebidas', seed: 'tm-cat-beb' },
  { t: 'Frutas y Verduras', seed: 'tm-cat-fru' },
  { t: 'Cuidado del Hogar', seed: 'tm-cat-hog' },
  { t: 'Lacteos y huevos', seed: 'tm-cat-lac' },
  { t: 'Panaderia', seed: 'tm-cat-pan' },
  { t: 'Despensa', seed: 'tm-cat-des' },
  { t: 'Congelados', seed: 'tm-cat-con' },
  { t: 'Carnes y chorizos', seed: 'tm-cat-car' },
];

export const bannersPromo = [
  { titulo: 'Hasta 25% dcto.', sub: 'en frutas y verduras', seed: 'tm-promo-1' },
  { titulo: 'Hasta 70% dcto.', sub: 'en la jugueteria', seed: 'tm-promo-2' },
  { titulo: 'Precio desde S/ 14.90', sub: 'en accesorios de computo y telefonia', seed: 'tm-promo-3' },
];

export const mundos = [
  { t: 'Mundo Metrito', seed: 'tm-mundo-1' },
  { t: 'Metro Gamer Fest', seed: 'tm-mundo-2' },
  { t: 'Cuidado Personal', seed: 'tm-mundo-3' },
  { t: 'Mundo Colchones', seed: 'tm-mundo-4' },
  { t: 'Cuisine & Co', seed: 'tm-mundo-5' },
  { t: 'Marcas Auspiciadoras', seed: 'tm-mundo-6' },
];

export const tabsCategorias = [
  {
    t: 'Electro/Tecnologia',
    items: [
      { t: 'TV video y audio', seed: 'tm-tab-tv' },
      { t: 'Computo y telefonia', seed: 'tm-tab-comp' },
      { t: 'Linea blanca', seed: 'tm-tab-blanca' },
      { t: 'Pequenos electrodomesticos', seed: 'tm-tab-peq' },
    ],
  },
  {
    t: 'Supermercado',
    items: [
      { t: 'Frutas y Verduras', seed: 'tm-tab-fru' },
      { t: 'Lacteos y Huevos', seed: 'tm-tab-lac' },
      { t: 'Bebidas', seed: 'tm-tab-beb' },
      { t: 'Limpieza', seed: 'tm-tab-limp' },
    ],
  },
  {
    t: 'Hogar/Bazar',
    items: [
      { t: 'Muebles', seed: 'tm-tab-muebles' },
      { t: 'Dormitorio', seed: 'tm-tab-dorm' },
      { t: 'Cocina y menaje', seed: 'tm-tab-cocina' },
      { t: 'Decoracion', seed: 'tm-tab-decor' },
    ],
  },
];

export const carrusel1 = {
  id: 'tv-audio',
  banner: { kicker: 'Ofertas de la semana', titulo: 'TV, video y audio', cta: 'Ver todo' },
  productos: [
    { nombre: 'Televisor TCL 55" UHD Google TV', precio: 899, antes: 1049, tag: '-14%', seed: 'tm-p-tv1' },
    { nombre: 'Televisor LG 65" NANO 4K UHD AI Smart TV 2026', precio: 1599, antes: 2299, tag: '-30%', seed: 'tm-p-tv2' },
    { nombre: 'Televisor Samsung Smart TV 32" HD', precio: 499, antes: 599, tag: '-17%', seed: 'tm-p-tv3' },
    { nombre: 'Barra de sonido Samsung 2.1 canales', precio: 349, antes: 449, tag: '-22%', seed: 'tm-p-tv4' },
    { nombre: 'Televisor TCL 43" UHD Google TV', precio: 749, antes: 899, tag: '-17%', seed: 'tm-p-tv5' },
  ],
};

export const carrusel2 = {
  id: 'despensa',
  banner: { kicker: 'Ahorra en tu compra', titulo: 'Despensa y bebidas', cta: 'Ver todo' },
  productos: [
    { nombre: 'Aceite vegetal Primor 1L', precio: 12.9, seed: 'tm-p-desp1' },
    { nombre: 'Arroz extra Costeno 5kg', precio: 22.5, antes: 26.9, tag: '-16%', seed: 'tm-p-desp2' },
    { nombre: 'Gaseosa Coca-Cola 3L', precio: 9.9, seed: 'tm-p-desp3' },
    { nombre: 'Leche evaporada Gloria pack x6', precio: 18.9, antes: 21.9, tag: '-14%', seed: 'tm-p-desp4' },
    { nombre: 'Detergente Bolivar 4kg', precio: 24.9, seed: 'tm-p-desp5' },
  ],
};

export const marcas = [
  { t: 'Motorola, ZTE, Xiaomi y Honor', sub: 'Hasta 32% dcto. en smartphones', seed: 'tm-marca-1' },
  { t: 'Lenovo, HP y Asus', sub: '25% dcto. en laptops', seed: 'tm-marca-2' },
  { t: 'Siegen Specialist', sub: 'Cuidado personal en oferta', seed: 'tm-marca-3' },
  { t: 'Oster', sub: 'Crea para siempre', seed: 'tm-marca-4' },
  { t: 'Indurama', sub: 'Linea blanca con 14 cuotas sin interes', seed: 'tm-marca-5' },
  { t: 'Mabe', sub: 'Electrodomesticos para tu hogar', seed: 'tm-marca-6' },
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
  { nombre: 'Televisor TCL 55" UHD Google TV', precio: 899, antes: 1049, tag: '-14%', seed: 'tm-p-tv1', departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'TCL', tags: ['tv', 'television'] },
  { nombre: 'Televisor LG 65" NANO 4K UHD AI Smart TV 2026', precio: 1599, antes: 2299, tag: '-30%', seed: 'tm-p-tv2', departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'LG', tags: ['tv', 'television'] },
  { nombre: 'Televisor Samsung Smart TV 32" HD', precio: 499, antes: 599, tag: '-17%', seed: 'tm-p-tv3', departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'Samsung', tags: ['tv', 'television'] },
  { nombre: 'Barra de sonido Samsung 2.1 canales', precio: 349, antes: 449, tag: '-22%', seed: 'tm-p-tv4', departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'Samsung', tags: ['audio', 'sonido'] },
  { nombre: 'Televisor TCL 43" UHD Google TV', precio: 749, antes: 899, tag: '-17%', seed: 'tm-p-tv5', departamento: 'Tecnologia', categoria: 'TV video y audio', marca: 'TCL', tags: ['tv', 'television'] },
  { nombre: 'Tablet Lenovo Tab One MediaTek Helio', precio: 439, antes: 649, tag: '-32%', seed: 'tm-p-tab1', departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Lenovo', tags: ['tablet', 'computo'] },
  { nombre: 'Laptop Lenovo IdeaPad Slim 3', precio: 1499, antes: 1899, tag: '-21%', seed: 'tm-p-lap1', departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Lenovo', tags: ['laptop', 'notebook', 'computo'] },
  { nombre: 'Smartphone Motorola G67 4GB+256GB', precio: 849, antes: 899, tag: '-6%', seed: 'tm-p-cel1', departamento: 'Tecnologia', categoria: 'Computo y telefonia', marca: 'Motorola', tags: ['celular', 'smartphone', 'telefono'] },
  { nombre: 'Impresora Multifuncional HP Smart Tank 750', precio: 999, antes: 1599, tag: '-38%', seed: 'tm-p-imp1', departamento: 'Tecnologia', categoria: 'Impresoras', marca: 'HP', tags: ['impresora'] },
  { nombre: 'Aceite vegetal Primor 1L', precio: 12.9, seed: 'tm-p-desp1', departamento: 'Supermercado', categoria: 'Abarrotes', marca: 'Primor', tags: ['aceite'] },
  { nombre: 'Arroz extra Costeno 5kg', precio: 22.5, antes: 26.9, tag: '-16%', seed: 'tm-p-desp2', departamento: 'Supermercado', categoria: 'Abarrotes', marca: 'Costeno', tags: ['arroz'] },
  { nombre: 'Gaseosa Coca-Cola 3L', precio: 9.9, seed: 'tm-p-desp3', departamento: 'Supermercado', categoria: 'Bebidas', marca: 'Coca-Cola', tags: ['gaseosa', 'bebida'] },
  { nombre: 'Leche evaporada Gloria pack x6', precio: 18.9, antes: 21.9, tag: '-14%', seed: 'tm-p-desp4', departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Gloria', tags: ['leche'] },
  { nombre: 'Detergente Bolivar 4kg', precio: 24.9, seed: 'tm-p-desp5', departamento: 'Supermercado', categoria: 'Limpieza', marca: 'Bolivar', tags: ['detergente', 'limpieza'] },
  { nombre: 'Leche evaporada Nestle pack x6', precio: 19.9, seed: 'tm-p-desp6', departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Nestle', tags: ['leche'] },
  { nombre: 'Yogurt Gloria Fresa 1L', precio: 8.9, antes: 10.5, tag: '-15%', seed: 'tm-p-desp7', departamento: 'Supermercado', categoria: 'Lacteos y Huevos', marca: 'Gloria', tags: ['yogurt', 'lacteo'] },
  { nombre: 'Refrigeradora LG Side by Side 509L', precio: 1649, antes: 3099, tag: '-47%', seed: 'tm-p-ele1', departamento: 'Electrodomesticos', categoria: 'Refrigeradoras', marca: 'LG', tags: ['refrigeradora', 'nevera'] },
  { nombre: 'Lavadora Samsung 17kg', precio: 1349, antes: 2149, tag: '-37%', seed: 'tm-p-ele2', departamento: 'Electrodomesticos', categoria: 'Lavadoras', marca: 'Samsung', tags: ['lavadora'] },
  { nombre: 'Cocina Indurama 4 hornillas', precio: 799, seed: 'tm-p-ele3', departamento: 'Electrodomesticos', categoria: 'Cocinas', marca: 'Indurama', tags: ['cocina'] },
  { nombre: 'Microondas Oster 20L', precio: 289, antes: 349, tag: '-17%', seed: 'tm-p-ele4', departamento: 'Electrodomesticos', categoria: 'Pequenos electrodomesticos', marca: 'Oster', tags: ['microondas'] },
  { nombre: 'Licuadora Oster Clasica', precio: 149, seed: 'tm-p-ele5', departamento: 'Electrodomesticos', categoria: 'Pequenos electrodomesticos', marca: 'Oster', tags: ['licuadora'] },
];

export const filtrosDepartamento = ['Tecnologia', 'Supermercado', 'Electrodomesticos'];
export const filtrosCategoria = ['TV video y audio', 'Computo y telefonia', 'Impresoras', 'Abarrotes', 'Bebidas', 'Lacteos y Huevos', 'Limpieza', 'Refrigeradoras', 'Lavadoras', 'Cocinas', 'Pequenos electrodomesticos'];
export const filtrosMarca = ['LG', 'TCL', 'Samsung', 'Lenovo', 'Motorola', 'HP', 'Primor', 'Costeno', 'Coca-Cola', 'Gloria', 'Nestle', 'Bolivar', 'Indurama', 'Oster'];
export const ordenarPor = ['Relevancia', 'Menor precio', 'Mayor precio', 'Mayor descuento'];
export const sugerenciasBusqueda = ['televisor', 'leche', 'refrigeradora', 'laptop', 'detergente'];

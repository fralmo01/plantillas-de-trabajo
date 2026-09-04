const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  earbudsGris: '1606741965326-cb990ae01bb2',
  earbudsGrisFondo: '1600294037681-c80b4cb5b434',
  earbudsVerde: '1655560378428-7605bda51749',
  earbudsAzulRojo: '1606220945770-b5b6c2c55bf1',
  earbudsNegroFondoOscuro: '1578319439584-104c94d37305',
  earbudsGradiente: '1610438235354-a6ae5528385c',

  parlanteAmarillo: '1589256469067-ea99122bbdc4',
  parlanteArcoiris: '1589003077984-894e133dabab',
  parlanteBlancoMadera: '1582978571763-2d039e56f0c3',
  parlanteOscuroCloseup: '1507878566509-a0dbe19677a5',
  parlanteOvaladoBlanco: '1547052178-7f2c5a20c332',
  parlanteAzulOscuro: '1520860100614-a714deb4805f',
  parlantePurpuraBokeh: '1598034989845-48532781987e',
  parlanteDorado: '1621266034770-74d35534f9ae',
  parlanteNegroRectangular: '1594501432907-91214bfdd928',
  parlanteNegroExterior: '1572183717150-0ca8073a2457',

  telefonoRosaCable: '1629385359375-886444e67724',
  telefonoAmarilloUnbox: '1573739022854-abceaeb585dc',
  telefonoLineaArte: '1631115539462-61c21920cbf9',
  telefonoArenaConchas: '1553666273-3e54c90baf09',
  telefonoManoPlantas: '1619274664124-32a49251fbaa',
  telefonoAzulFlores: '1663042092427-fde6ca201ed0',
  telefonoPantallaColorida: '1663042092427-fde6ca201ed0',

  laptopMaderaAbierta: '1541807084-5c52b6b3adef',
  laptopTecladoColorido: '1525547719571-a2d4ac8945e2',
  laptopSiluetaOscura: '1531297484001-80022131f5a1',
  laptopGrisLateral: '1588872657578-7efd1f1555ed',
  laptopBlancoAbierto: '1629131726692-1accd0c53ce0',
  laptopTecladoNeon: '1542393545-10f5cde2c810',
  laptopPantallaColorAbstracta: '1603302576837-37561b2e2302',
  laptopPantallaRosaMorada: '1610465299993-e6675c9f9efa',

  tvControlBorroso: '1560169897-fc0cdbdfa4d5',
  tvEstatica: '1631408657211-f485611484af',

  controlGradiente: '1612287230202-1ff1d85d1bdf',
  manosControlFutbol: '1493711662062-fa541adb3fc8',
  controlBlancoModerno: '1509198397868-475647b2a1e5',
  controlOscuroCloseup: '1552820728-8b83bb6b773f',
  setupGamerColorido: '1600861194942-f883de0dfe96',
  controlMoradoNeon: '1586182987320-4f376d39d787',
  controlNegroClasico: '1592840496694-26d035b52b48',
  manosControlTvBorrosa: '1486572788966-cfd3df1f5b42',

  smartwatchBlancoMinimal: '1523275335684-37898b6baf30',
  smartwatchMunecaAgua: '1508685096489-7aacd43bd3b1',
  smartwatchVerdeTeal: '1660844817855-3ecc7ef21f12',
  smartwatchNegroCuadrado: '1637160151663-a410315e4e75',

  tabletLapizOscuro: '1527698266440-12104e498b76',
  tabletManoDibujo: '1542751110-97427bbecf20',
  tabletManoTocando: '1557825835-70d97c4aa567',

  altavozNegroRedondo: '1519558260268-cde7e03a0152',
  altavozGrisBorroso: '1529359744902-86b2ab9edaea',
  altavozBlancoAlto: '1586078875290-c22eb791ad5d',
  dispositivosBlancosNegros: '1558089687-f282ffcbc126',

  sillonCueroPlanta: '1612372606404-0ab33e7187ee',
  sillaAzulModerna: '1541558869434-2840d308329a',
  sillaCueroEscritorio: '1563253746-350a0a877afa',
  sillaDetalleRueda: '1505797149-43b0069ec26b',
  escritorioSillaGris: '1657757996603-acec063f1d9b',

  routerBlanco: '1516044734145-07ca8eef8731',
  routerNegro: '1606904825846-647eb07f5be2',
  routerMalla: '1554098415-4052459dc340',

  monitorEscritorio: '1587831990711-23ca6441447b',
  monitorDobleSetup: '1619597455322-4fbbd820250a',
  monitorOscuroRGB: '1614624533048-a9c2f9cb5a96',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Tecno',
  tel: '01-700 8899',
  correo: 'ventas@tienda.com',
  ciudad: 'Lima, Peru',
};

export const ubicacion = 'San Isidro, Lima';

export const navUtilidad = ['Ofertas', 'Smart Home', 'Ventas Corporativas', 'Tiendas', 'Ayuda'];

export const subnav = [
  { t: 'Audifonos', ico: 'audifonos' },
  { t: 'Celulares', ico: 'celular' },
  { t: 'Tablets', ico: 'tablet' },
  { t: 'Televisores', ico: 'tv' },
  { t: 'Laptops', ico: 'laptop' },
  { t: 'Parlantes', ico: 'parlante' },
  { t: 'Smartwatch', ico: 'reloj' },
];

export const categoriasMenu = [
  {
    cat: 'Audio',
    ico: 'audifonos',
    sub: ['Audifonos', 'Parlantes', 'Microfonos', 'Barras de sonido', 'Accesorios de audio', 'Instrumentos musicales'],
  },
  {
    cat: 'Celulares y Accesorios',
    ico: 'celular',
    sub: ['Smartphones', 'Fundas y protectores', 'Cargadores', 'Power banks', 'Memorias', 'Smartwatch'],
  },
  {
    cat: 'Gamer',
    ico: 'gamer',
    sub: ['Consolas', 'Controles', 'Sillas gamer', 'Audifonos gamer', 'Mouse y teclados', 'Monitores gamer'],
  },
  {
    cat: 'Computo',
    ico: 'laptop',
    sub: ['Laptops', 'Tablets', 'Monitores', 'Impresoras y escaneres', 'Accesorios', 'Software'],
  },
  {
    cat: 'Smart Home',
    ico: 'casa',
    sub: ['Parlantes inteligentes', 'Camaras de seguridad', 'Iluminacion', 'Enchufes inteligentes', 'Sensores', 'Conectividad'],
  },
  {
    cat: 'TV y Video',
    ico: 'tv',
    sub: ['Smart TV', 'Proyectores', 'Soportes de TV', 'Convertidores', 'Barras de sonido', 'Streaming'],
  },
  {
    cat: 'Electrohogar',
    ico: 'hogar',
    sub: ['Aspiradoras', 'Ventiladores', 'Climatizacion', 'Cocina', 'Cuidado personal', 'Planchado'],
  },
  {
    cat: 'Fotografia',
    ico: 'camara',
    sub: ['Camaras', 'Drones', 'Accesorios de fotografia', 'Trípodes', 'Memorias', 'Iluminacion'],
  },
];

export const marcasChip = ['NEXOTECH', 'ZENTRASOUND', 'PIXCORE', 'ORBITPLAY', 'VOLTIA'];

export const heroSlides = [
  {
    kicker: 'Parlantes',
    titulo: 'Siente la potencia',
    pct: '30%',
    img: u(IMG.parlantePurpuraBokeh, 1400),
    productos: [
      { nombre: 'ZentraSound Go 5', precio: 169, antes: 199, dscto: '-38%', img: u(IMG.parlanteAmarillo, 300) },
      { nombre: 'ZentraSound Charge 6', precio: 599, antes: 899, dscto: '-33%', img: u(IMG.parlanteOscuroCloseup, 300) },
      { nombre: 'ZentraSound Partybox 720', precio: 2999, antes: 5999, dscto: '-50%', img: u(IMG.parlanteArcoiris, 300) },
    ],
  },
  {
    kicker: 'Celulares',
    titulo: 'Renueva tu celular hoy',
    pct: '65%',
    img: u(IMG.telefonoPantallaColorida, 1400),
    productos: [
      { nombre: 'NexoTech Prime 14', precio: 1799, antes: 2499, dscto: '-28%', img: u(IMG.telefonoAmarilloUnbox, 300) },
      { nombre: 'NexoTech Air 3', precio: 999, antes: 1499, dscto: '-33%', img: u(IMG.telefonoManoPlantas, 300) },
      { nombre: 'NexoTech Nova X', precio: 2499, antes: 3299, dscto: '-24%', img: u(IMG.telefonoAzulFlores, 300) },
    ],
  },
  {
    kicker: 'Laptops',
    titulo: 'Potencia para crear',
    pct: '40%',
    img: u(IMG.laptopPantallaColorAbstracta, 1400),
    productos: [
      { nombre: 'PixCore Book Air', precio: 3499, antes: 4299, dscto: '-19%', img: u(IMG.laptopBlancoAbierto, 300) },
      { nombre: 'PixCore Studio 14', precio: 4999, antes: 6499, dscto: '-23%', img: u(IMG.laptopGrisLateral, 300) },
      { nombre: 'PixCore Play RGB', precio: 3799, antes: 4999, dscto: '-24%', img: u(IMG.laptopTecladoNeon, 300) },
    ],
  },
];

export const tresDestacados = [
  {
    titulo: 'Lo ultimo',
    dscto: '-8%',
    nombre: 'Consola portatil OrbitPlay Rog',
    precio: 3549,
    antes: 3899,
    precioWeb: 3549,
    img: u(IMG.controlBlancoModerno, 500),
  },
  {
    titulo: 'Ofertas bombas',
    dscto: '-15%',
    nombre: 'Parlante bluetooth ZentraSound',
    precio: 1649,
    antes: 1999,
    precioWeb: 1649,
    img: u(IMG.parlanteNegroRectangular, 500),
  },
  {
    titulo: 'Lo mas vendido',
    dscto: '-72%',
    nombre: 'Licencia digital Voltia Office',
    precio: 49.9,
    antes: 179,
    precioWeb: null,
    img: u(IMG.monitorEscritorio, 500),
  },
];

export const ofertaRelampagoMin = 15;

export const ofertaRelampago = [
  { marca: 'ORBITPLAY', nombre: 'Monitor plano Orbit Essential 24" IPS', precio: 279, antes: 449, dscto: '38% DSCTO', img: u(IMG.monitorDobleSetup) },
  { marca: 'PIXCORE', nombre: 'Tablet PixCore Tab 5G 11", 128GB', precio: 979, antes: 1089, dscto: '10% DSCTO', img: u(IMG.tabletManoTocando) },
  { marca: 'NEXOTECH', nombre: 'Audifonos NexoTech Pro 3ra Gen', precio: 999, antes: 1199, dscto: '17% DSCTO', img: u(IMG.earbudsGradiente) },
  { marca: 'VOLTIA', nombre: 'Camara Voltia ZV-1F para vlogs', precio: 1799, antes: 2299, dscto: '22% DSCTO', img: u(IMG.telefonoLineaArte) },
];

export const bannersPromo = [
  { titulo: 'Seguridad', sub: 'Manten tu espacio seguro y conectado hasta 70% dscto', img: u(IMG.altavozNegroRedondo, 760), cta: 'Descubrelo aqui' },
  { titulo: 'Wearables', sub: '40% mas pequeno, mas potente que nunca', img: u(IMG.smartwatchVerdeTeal, 760), cta: 'Descubrelo aqui' },
  { titulo: 'Gaming', sub: 'Nueva linea de setups gamer', img: u(IMG.setupGamerColorido, 760), cta: 'Descubrelo aqui' },
];

export const categoriasBloques = [
  {
    nombre: 'Computo',
    bannerTitulo: 'Actualiza todo tu espacio de computo',
    bannerDscto: 'Hasta 50% de dscto',
    bannerImg: u(IMG.monitorOscuroRGB, 900),
    subcats: [
      { t: 'Tablets', img: u(IMG.tabletLapizOscuro, 200) },
      { t: 'Laptops', img: u(IMG.laptopMaderaAbierta, 200) },
      { t: 'Impresoras y escaneres', img: u(IMG.routerBlanco, 200) },
      { t: 'Monitores', img: u(IMG.monitorEscritorio, 200) },
      { t: 'Accesorios', img: u(IMG.earbudsNegroFondoOscuro, 200) },
      { t: 'Software', img: u(IMG.laptopPantallaRosaMorada, 200) },
    ],
    productos: [
      { marca: 'PIXCORE', nombre: 'Computadora PixCore iMac 24" M4 16GB, 256GB SSD', precio: 5799, antes: 7999, dscto: '28% DSCTO', img: u(IMG.laptopBlancoAbierto) },
      { marca: 'ORBITPLAY', nombre: 'Monitor plano Orbit Essential 24" IPS', precio: 279, antes: 449, dscto: '38% DSCTO', img: u(IMG.monitorDobleSetup) },
      { marca: 'PIXCORE', nombre: 'PixBook Air 13" (2026), Chip M5, 512GB SSD', precio: 5099, antes: 5999, dscto: '15% DSCTO', img: u(IMG.laptopSiluetaOscura) },
      { marca: 'PIXCORE', nombre: 'PixTab Air 11" 128GB, 12GB RAM', precio: 3099, antes: null, dscto: null, img: u(IMG.tabletManoDibujo) },
      { marca: 'PIXCORE', nombre: 'Mini PC PixCore Desktop M4, 16GB', precio: 4549, antes: 5299, dscto: '14% DSCTO', img: u(IMG.laptopTecladoColorido) },
      { marca: 'PIXCORE', nombre: 'Computadora PixCore iMac 24" M4, 256GB', precio: 5799, antes: 7999, dscto: '28% DSCTO', img: u(IMG.laptopPantallaColorAbstracta) },
    ],
  },
  {
    nombre: 'Hogar',
    bannerTitulo: 'Convierte tu espacio en un smart home',
    bannerDscto: 'Hasta 45% de dscto',
    bannerImg: u(IMG.altavozBlancoAlto, 900),
    subcats: [
      { t: 'Smart home', img: u(IMG.altavozGrisBorroso, 200) },
      { t: 'Conectividad', img: u(IMG.routerNegro, 200) },
      { t: 'Seguridad', img: u(IMG.dispositivosBlancosNegros, 200) },
      { t: 'Iluminacion', img: u(IMG.altavozNegroRedondo, 200) },
    ],
    productos: [
      { marca: 'ORBITPLAY', nombre: 'Parlante inteligente Orbit Home Mini', precio: 149, antes: 199, dscto: '25% DSCTO', img: u(IMG.altavozNegroRedondo) },
      { marca: 'VOLTIA', nombre: 'Router mesh Voltia Wave 3 unidades', precio: 449, antes: 599, dscto: '25% DSCTO', img: u(IMG.routerMalla) },
      { marca: 'VOLTIA', nombre: 'Camara de seguridad Voltia 360', precio: 129, antes: 189, dscto: '32% DSCTO', img: u(IMG.dispositivosBlancosNegros) },
      { marca: 'ORBITPLAY', nombre: 'Parlante inteligente Orbit Studio', precio: 399, antes: 549, dscto: '27% DSCTO', img: u(IMG.altavozBlancoAlto) },
    ],
  },
  {
    nombre: 'Gaming',
    bannerTitulo: 'Todo para tu setup gamer',
    bannerDscto: 'Hasta 55% de dscto',
    bannerImg: u(IMG.setupGamerColorido, 900),
    subcats: [
      { t: 'Controles', img: u(IMG.controlNegroClasico, 200) },
      { t: 'Sillas gamer', img: u(IMG.sillaAzulModerna, 200) },
      { t: 'Monitores gamer', img: u(IMG.monitorOscuroRGB, 200) },
      { t: 'Audifonos gamer', img: u(IMG.earbudsVerde, 200) },
    ],
    productos: [
      { marca: 'ORBITPLAY', nombre: 'Control inalambrico OrbitPlay Edge', precio: 249, antes: 329, dscto: '24% DSCTO', img: u(IMG.controlBlancoModerno) },
      { marca: 'ORBITPLAY', nombre: 'Control OrbitPlay Classic', precio: 179, antes: 229, dscto: '22% DSCTO', img: u(IMG.controlNegroClasico) },
      { marca: 'NEXOTECH', nombre: 'Audifonos gamer NexoTech Surge', precio: 219, antes: 289, dscto: '24% DSCTO', img: u(IMG.controlMoradoNeon) },
      { marca: 'ORBITPLAY', nombre: 'Silla gamer OrbitPlay Racer', precio: 899, antes: 1299, dscto: '31% DSCTO', img: u(IMG.sillaAzulModerna) },
    ],
  },
];

export const seoTexto = {
  col1: {
    titulo: 'Bienvenido a tienda.com Tecno',
    parrafos: [
      'En tienda.com nos preocupamos por ofrecerte los mejores productos tecnologicos a los mejores precios. Date una vuelta por nuestro amplio catalogo y encuentra todo lo que necesitas para el trabajo, los estudios, tu entretenimiento y tu comodidad.',
      'Tenemos las ultimas novedades en articulos de audio, video, sistemas de seguridad, mundo gamer, computadoras y dispositivos smart. En nuestra web encontraras los mejores modelos de smartphones, audifonos, TV, laptops, tablets, smartwatches, tabletas graficas, impresoras, drones, juguetes, cuidado personal y mucho mas.',
      'Convierte tu casa en una smart home con nuestros parlantes inteligentes e iluminacion inteligente. Contamos con todo lo necesario para renovar tu hogar: aspiradoras robot, interruptores smart, pantallas inteligentes, portaretratos inteligentes, entre otros.',
    ],
  },
  col2: {
    titulo: 'Mundo gamer',
    parrafos: [
      'En nuestra categoria gamer encontraras laptops, monitores, accesorios gamer, sillas, mesas, muebles ergonomicos, equipos de streaming, consolas y videojuegos. Lo mejor para tus partidas de juego: productos especializados en gamer para que juegues como un profesional.',
      'Las laptops gamer y All in One cuentan con las caracteristicas perfectas para un uso de alto rendimiento. Una gran capacidad de memoria RAM y almacenamiento interno con los mejores procesadores. Trabajamos con marcas reconocidas y de calidad.',
      'Todos estos dispositivos y accesorios estan hechos especialmente para su uso en el gaming. Adquiere camaras web, coolers, microfonos, mouse, mouse pads, teclados gamer y otros complementos que haran aun mas especial tu setup.',
    ],
  },
};

export const footerCols1 = ['Quienes somos', 'Canales de atencion', 'Compra facil y seguro', 'Metodos de pago'];
export const footerCols2 = [
  'Nuestras tiendas',
  'Cobertura de delivery',
  'Certificado de garantia',
  'Bases legales',
  'Terminos y condiciones',
  'Politicas de privacidad',
  'Politicas de uso de cookies',
  'Politicas de cambios y devoluciones',
];
export const footerCols3 = ['Factura electronica', 'Ventas corporativas', 'Vende con nosotros', 'Disponibilidad de productos'];
export const footerCols4 = ['Mis compras', 'Cases y micas', 'Outlet', 'Catalogos', 'Blogs'];

export const pagoMetodos = ['Visa', 'Mastercard', 'Amex', 'Diners', 'Yape', 'Plin'];

export const chatCanned = [
  'Con gusto te ayudo. Buscas audio, celulares, computo, gaming o smart home?',
  'Tenemos ofertas relampago por tiempo limitado, revisalas antes de que se agoten.',
  'Puedes filtrar por marca, precio y caracteristicas en cada categoria.',
  'Aceptamos Visa, Mastercard, Amex, Diners, Yape y Plin. La compra es 100% segura.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

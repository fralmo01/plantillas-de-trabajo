const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  heroCarreteraMontana: '1612380635197-a025736ddba1',
  heroCanonBus: '1600278553756-63bb83d95c0c',
  heroCaravanaBuses: '1786272992146-af8da8134835',
  busAutopistaAerea: '1786545638379-2c556a8ab23b',

  interiorSiluetas: '1509749837427-ac94a2553d0e',
  interiorPasilloRojo: '1520105072000-f44fc083e508',
  interiorPasajeros: '1494515843206-f3117d3f51b7',
  interiorPasilloDia: '1607424064879-708250e57647',
  interiorVerde: '1532939163844-547f958e91b4',
  interiorVentana: '1515616428283-3c97ebd69070',
  interiorNeon: '1545185105-a81262517cf4',
  interiorNaranja: '1570125909994-e06d01047c28',
  interiorRojo: '1531270279937-aca3e712ad01',
  interiorAzul: '1584664862155-6f754011bb1b',

  truckRojoCarga: '1682033239487-30f076c82232',
  truckCabina: '1682033239272-6b60b828a9a2',
  truckRojoDesierto: '1785761607942-c0f9d41a74e0',
  truckContenedorAtardecer: '1763373979401-326443b807e8',
  truckSiluetaAtardecer: '1774116196662-a9e1e4fa1612',
  truckMontana: '1734903251820-c781932299f8',
  truckAmarilloPaquetes: '1717616171263-de4808015831',

  andesLlamas: '1668538528234-71adcc6687af',
  andesCarretera: '1568729670692-0d2de9a3c027',
  andesPersonaMirando: '1603820629413-490cd9c98cd6',
  andesNubesPicos: '1474903914960-c3f6602ebb5a',
  andesMiradorCruces: '1663188628620-d65f494e7a2a',
  andesDesierto: '1553460475-164f956cf303',
  andesPastor: '1568517923212-0d83da4ecd91',

  colonialCuscoAereo: '1768757980570-3b3d28960bd5',
  colonialCiudadAerea: '1775854791105-a1420ec87dc3',
  colonialFestival: '1780620589761-907f0b642c9e',

  selvaCascada1: '1628809662062-c45de6d0b627',
  selvaCascadaHojas: '1718632496137-a41cf1bd8050',
  selvaCascadaRio: '1695736581895-c4803323ebb6',

  costaCiudadAcantilado: '1577587230708-187fdbef4d91',
  costaAereaCiudad: '1531968455001-5c5272a41129',
  costaAereaParque: '1533219346979-3030e2810f5b',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Transportes',
  tel: '01-7168000',
  correo: 'info@tienda.com',
  ciudad: 'Lima, Peru',
};

export const navPrincipal = [
  { t: 'Nuestros servicios', href: '#servicios' },
  { t: 'Destinos', href: '#destinos' },
  { t: 'Promociones', href: '#descuentos' },
  { t: 'Encomiendas', href: '#encomiendas' },
];

export const menuLateral = [
  { t: 'Inicio', href: '#top' },
  { t: 'Nosotros', href: '#experiencia' },
  { t: 'Nuestros servicios', href: '#servicios' },
  { t: 'Destinos', href: '#destinos' },
  { t: 'Envios', href: '#encomiendas' },
  { t: 'Promociones', href: '#descuentos' },
  { t: 'Preguntas frecuentes', href: '#footer' },
  { t: 'Transporte de personal', href: '#servicios' },
  { t: 'Transporte turistico', href: '#destinos' },
  { t: 'Rastrea tu envio', href: '#encomiendas' },
  { t: 'Contacto', href: '#footer' },
];

export const heroSlides = [
  {
    pct: '20%',
    desc: 'Dscto con cupon web',
    leyenda: 'Usando tus tarjetas bancarias',
    img: u(IMG.heroCaravanaBuses, 1400),
  },
  {
    pct: '',
    desc: 'Viaja seguro, viaja con nosotros',
    leyenda: 'Flota moderna y conductores certificados a nivel nacional',
    img: u(IMG.heroCanonBus, 1400),
  },
  {
    pct: '',
    desc: 'Conoce el Peru en un viaje comodo',
    leyenda: 'Rutas a mas de 20 destinos con la mejor atencion',
    img: u(IMG.busAutopistaAerea, 1400),
  },
];

export const ciudadesDestino = [
  'AYACUCHO', 'BAGUA GRANDE', 'BARRANCA', 'BELLAVISTA', 'CAJAMARCA', 'CASMA',
  'CHACHAPOYAS', 'CHICLAYO', 'HUANCAYO', 'HUANUCO', 'HUARAZ', 'JAEN',
  'JUANJUI', 'LA MERCED', 'MOYOBAMBA', 'OXAPAMPA', 'RIOJA', 'TARAPOTO',
  'TRUJILLO', 'VILLA RICA',
];

export const descuentos = [
  {
    pct: '20%',
    titulo: 'Dscto con cupon web',
    sub: 'Usando tus tarjetas bancarias en la compra de tu pasaje.',
    img: u(IMG.heroCarreteraMontana, 760),
  },
  {
    pct: '15%',
    titulo: 'Adicional pagando en linea',
    sub: 'Valido solo comprando por la pagina web.',
    img: u(IMG.busAutopistaAerea, 760),
  },
  {
    pct: '10%',
    titulo: 'En tu primera compra',
    sub: 'Registrate y obten el descuento en tu primer viaje.',
    img: u(IMG.andesCarretera, 760),
  },
];

export const encomiendas = {
  titulo: 'Envia sobres, paquetes y',
  tituloDestacado: 'encomiendas',
  sub: 'a mas de 50 agencias a nivel nacional todos los dias del ano de forma facil y segura.',
  img: u(IMG.truckRojoDesierto, 1400),
};

export const experiencia = {
  titulo: 'Haz de tus viajes una gran',
  tituloDestacado: 'experiencia con seguridad y comodidad',
  img: u(IMG.interiorNaranja, 1400),
  amenidades: [
    { ico: 'asiento', label: 'Asientos reclinables' },
    { ico: 'entretenimiento', label: 'Entretenimiento a bordo' },
    { ico: 'usb', label: 'Cargador USB' },
  ],
};

export const destinos = [
  { ciudad: 'Huaraz', precio: 60, img: u(IMG.andesNubesPicos, 640) },
  { ciudad: 'Barranca', precio: 45, img: u(IMG.costaCiudadAcantilado, 640) },
  { ciudad: 'Cajamarca', precio: 110, img: u(IMG.colonialCuscoAereo, 640) },
  { ciudad: 'Chachapoyas', precio: 95, img: u(IMG.selvaCascada1, 640) },
  { ciudad: 'Chiclayo', precio: 70, img: u(IMG.costaAereaCiudad, 640) },
  { ciudad: 'Huanuco', precio: 50, img: u(IMG.andesMiradorCruces, 640) },
  { ciudad: 'Trujillo', precio: 90, img: u(IMG.costaAereaParque, 640) },
  { ciudad: 'La Merced', precio: 80, img: u(IMG.selvaCascadaHojas, 640) },
  { ciudad: 'Tarapoto', precio: 120, img: u(IMG.selvaCascadaRio, 640) },
  { ciudad: 'Ayacucho', precio: 65, img: u(IMG.colonialFestival, 640) },
];

export const servicios = [
  {
    nombre: 'Premier',
    img: u(IMG.interiorNaranja, 900),
    amenidades: ['usb', 'asiento', 'entretenimiento'],
  },
  {
    nombre: 'Presidencial',
    img: u(IMG.interiorRojo, 900),
    amenidades: ['asiento', 'clima', 'almohada'],
  },
  {
    nombre: 'Ejecutivo Vip',
    img: u(IMG.interiorAzul, 900),
    amenidades: ['asiento', 'clima', 'almohada'],
  },
  {
    nombre: 'Economico',
    img: u(IMG.interiorVerde, 900),
    amenidades: ['asiento', 'clima', 'filas'],
  },
];

export const metodosPago = ['Visa', 'Mastercard', 'Amex', 'Diners', 'Yape', 'Plin'];

export const footerEnlaces1 = ['Nosotros', 'Nuestros servicios', 'Destinos', 'Promociones', 'Blog'];
export const footerEnlaces2 = [
  'Facturacion electronica',
  'Terminos y condiciones de viaje',
  'Terminos y condiciones de encomiendas',
  'Codigo de etica y buena conducta',
  'Libro de reclamaciones',
];

export const footerInfo = {
  direccion: 'Av. Principal 740, Lima, Peru',
  telefono: '01-7168000',
  correo: 'info@tienda.com',
};

export const chatCanned = [
  'Con gusto te ayudo. Buscas comprar un pasaje, enviar una encomienda o conocer nuestros servicios?',
  'Puedes buscar tu ruta desde el buscador superior: elige origen, destino y fecha de viaje.',
  'Para rastrear un envio, usa el codigo de tu encomienda en la seccion Envios.',
  'Aceptamos Visa, Mastercard, Amex, Diners, Yape y Plin. La compra es 100% segura.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

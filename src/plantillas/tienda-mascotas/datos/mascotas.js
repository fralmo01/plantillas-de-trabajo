const u = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  bulldogAmarillo: u('1583511655857-d19b40a7a54e'),
  perrosCaminando: u('1548199973-03cce0bbc87b'),
  perroNarizClose: u('1615751072497-5f5169febe17'),
  hombreAbrazoPerro: u('1522276498395-f4f68f7f8454'),
  bulldogAzul: u('1583337130417-3346a1be7dee'),
  beagleAireLibre: u('1543466835-00a7907e9de1'),
  cachorroAlmohada: u('1560807707-8cc77767d783'),
  tresCachorros: u('1444212477490-ca407925329e'),
  grooming: u('1450778869180-41d0601e046e'),
  perroCollarRosado: u('1596492784531-6e6eb5ea9993'),
  cachorroCollarAzul: u('1601979031925-424e53b6caaa'),
  bulldogAmarilloFondo: u('1583512603805-3cc6b41f3edb'),
  cuyes: u('1548767797-d8c844163c4c'),
  perroSaltandoPremio: u('1552053831-71594a27632d'),
  bulldogVerde: u('1598133894008-61f7fdb8cc3a'),
  perroPanuelo: u('1587764379873-97837921fd44'),
  gatoNaranja: u('1573865526739-10659fec78a5'),
  goldenParque: u('1633722715463-d30f4f325e24'),
  gatoBlancoEscalones: u('1495360010541-f48722b34f7d'),
  hamster: u('1425082661705-1834bfd09dca'),
  dosCorgis: u('1560743641-3914f2c45636'),
  shihTzuPanuelo: u('1583511655826-05700d52f4d9'),
  gatoAtigradoSofa: u('1518791841217-8f162f1e1131'),
  gatitoMirando: u('1595433707802-6b2626ef1c91'),
  dormitorioPerros: u('1601758003122-53c40e686a19'),
  perroSalchicha: u('1512546148165-e50d714a565a'),
  pugRojo: u('1517423440428-a5a00ad493e8'),
  perroPlaya: u('1587300003388-59208cc962cb'),
  gatoNaranjaSofa: u('1592194996308-7b43878e84a6'),
  huesosRosado: u('1568640347023-a616a30bc3bd'),
  gatoAtigradoNaranja: u('1519052537078-e6302a4968d4'),
  cachorroDorado: u('1576201836106-db1758fd1c97'),
  gatoLentesOscuro: u('1571566882372-1598d88abd90'),
  sofaNaranjaJuguete: u('1567016432779-094069958ea5'),
  perroLenguaFuera: u('1544568100-847a948585b9'),
  conejoBlanco: u('1585110396000-c9ffd4e4b308'),
  gatoPanueloAmarillo: u('1543852786-1cf6624b9987'),
  cachorroPelotaPasto: u('1594149929911-78975a43d4f5'),
  perroJuguetePeluche: u('1591946614720-90a587da4a36'),
  corgiCachorroBlanco: u('1600077106724-946750eeaf3c'),
  huskyClose: u('1568572933382-74d440642117'),
  gatitoCama: u('1533743983669-94fa5c4338ec'),
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Mascotas',
  tel: '01-700 5588',
  correo: 'pedidos@tienda.com',
};

export const anuncio = '10% dto. en tu primera compra web! Usa el codigo BIENVENIDO10';

export const navUtilidad = [
  { t: 'Compra por telefono', v: marca.tel },
];

export const categoriasMenu = [
  {
    cat: 'Perro',
    ico: 'perro',
    grupos: [
      { titulo: 'Alimentos', items: ['Alimento seco', 'Alimento humedo', 'Dietas veterinarias', 'Snacks y premios', 'Alimento natural'] },
      { titulo: 'Accesorios', items: ['Camas y mantas', 'Collares, arneses y correas', 'Platos y bebederos', 'Transportadores y viajes', 'Ropa y accesorios'] },
      { titulo: 'Juguetes', items: ['Peluches', 'Mordedores y flexibles', 'Lanzadores y pelotas', 'Cuerdas'] },
      { titulo: 'Farmacia e higiene', items: ['Antiparasitarios', 'Farmacia y salud', 'Peluqueria e higiene', 'Panales', 'Cuidado dental'] },
    ],
  },
  {
    cat: 'Gato',
    ico: 'gato',
    grupos: [
      { titulo: 'Alimentos', items: ['Alimento seco', 'Alimento humedo', 'Dietas veterinarias', 'Snacks y premios', 'Alimento natural'] },
      { titulo: 'Arena y accesorios', items: ['Arena para gato', 'Areneros', 'Accesorios para arena'] },
      { titulo: 'Accesorios', items: ['Juguetes', 'Camas y mantas', 'Rascadores y gimnasios', 'Collares y correas', 'Transportadores y viajes'] },
      { titulo: 'Farmacia e higiene', items: ['Antiparasitarios', 'Farmacia y salud', 'Peluqueria e higiene', 'Relajacion y catnip'] },
    ],
  },
];

export const marcasChip = ['TERRACLEAN', 'PAWXTRA', 'FELIXTRA', 'ZILLAPAW', 'ZILLACAT', 'CORENUTRI', 'WILDCOAT'];

export const ofertasNav = [
  { titulo: 'Precios Bomba', items: ['Alimento perro', 'Alimento gato', 'Arenas', 'Snacks'] },
  { titulo: 'Super Days', items: ['Ofertas perro', 'Ofertas gato'] },
  { titulo: 'Liquidacion', items: ['Liquidacion perro', 'Liquidacion gato', 'Otras mascotas'] },
];

export const heroSlides = [
  {
    kicker: 'ARENAS',
    titulo: 'TerraClean aglomerante, todo en 2x1',
    pct: '2X1',
    img: IMG.dosCorgis,
    productos: [
      { nombre: 'TerraClean Aglomerante Talco 20kg', precio: 44.95, antes: 89.9 },
      { nombre: 'TerraClean Silice Cristal 5kg', precio: 32.5, antes: 58.9 },
      { nombre: 'TerraClean Aroma Lavanda 10kg', precio: 39.9, antes: 69.9 },
    ],
  },
  {
    kicker: 'ALIMENTO',
    titulo: 'WildCoat, la fuerza de lo natural',
    pct: '30%',
    img: IMG.huskyClose,
    productos: [
      { nombre: 'WildCoat Adulto Cordero 15kg', precio: 119.9, antes: 169.9 },
      { nombre: 'WildCoat Esterilizado Gato 12kg', precio: 119.9, antes: 149.9 },
      { nombre: 'WildCoat Adulto Pollo 15kg', precio: 107.9, antes: 164.9 },
    ],
  },
  {
    kicker: 'CAMAS Y MANTAS',
    titulo: '2x1 en camas y mantas PawNest',
    pct: '2X1',
    img: IMG.cachorroAlmohada,
    productos: [
      { nombre: 'PawNest Cama Ortopedica M', precio: 89.9, antes: 159.9 },
      { nombre: 'PawNest Manta Polar 1.5m', precio: 39.9, antes: 69.9 },
      { nombre: 'PawNest Cojin Redondo XL', precio: 99.9, antes: 179.9 },
    ],
  },
  {
    kicker: 'GATOS',
    titulo: 'Todo arboles y rascadores, 30% dto',
    pct: '30%',
    img: IMG.gatoAtigradoSofa,
    productos: [
      { nombre: 'FelixTra Rascador Torre 1.4m', precio: 209.93, antes: 299.9 },
      { nombre: 'FelixTra Arbol Multiplataforma', precio: 179.9, antes: 259.9 },
      { nombre: 'FelixTra Cama Rascador Ovalada', precio: 69.9, antes: 99.9 },
    ],
  },
];

export const beneficios = [
  { ico: 'camion', titulo: 'Delivery Gratis', sub: 'Por compras mayores a S/90.' },
  { ico: 'reloj', titulo: 'Delivery Express', sub: 'En 2 horas.' },
  { ico: 'tienda', titulo: 'Retiro en tienda', sub: '¡Gratis!' },
  { ico: 'usuario', titulo: 'Asesoria Especializada', sub: 'Resolvemos tus dudas.' },
];

export const ofertasCards = [
  { badge: '2x1', tag: 'Exclusivo web', titulo: '2x1 en pañales para perro', img: IMG.cachorroCollarAzul },
  { badge: '20%', tag: 'Dcto.', titulo: '20% dcto en alimento natural GnawFurr', img: IMG.huesosRosado },
  { badge: '2x1', tag: 'Exclusivo web', titulo: '2x1 en arenas TerraClean', img: IMG.gatitoMirando },
];

export const selloTexto = '¿Sabias que nuestras marcas exclusivas de alimento y arena tienen satisfaccion garantizada? Si tu o tu mascota no quedan 100% satisfechos, puedes solicitar el cambio o la devolucion.';

export const etapaVida = [
  { titulo: 'Especial Cachorros', img: IMG.tresCachorros },
  { titulo: 'Especial Gatitos', img: IMG.gatitoCama },
  { titulo: 'Especial Seniors', img: IMG.perroLenguaFuera },
];

export const comboGrid = [
  { badge: '4x3', titulo: 'Snacks perro y gato', sub: '¡Todo en snacks!', img: IMG.perroSaltandoPremio },
  { badge: '40%', dscto: 'Dcto.', titulo: 'Pañales Pawnest', sub: '¡Ahorra mas en pañales!', img: IMG.cachorroCollarAzul },
  { badge: '5+1', gratis: 'Gratis', titulo: 'Alimento humedo perro', sub: '¡Las mejores marcas!', img: IMG.bulldogAmarilloFondo },
  { badge: '3x2', titulo: 'Arenas TerraClean', sub: '¡Lo que necesita tu gato!', img: IMG.gatoNaranjaSofa },
];

export const seguro = {
  titulo: 'Seguro Patas Protegidas',
  sub: 'Respaldado por una aseguradora aliada',
  desde: 21,
  detalle: 'Seguro para perros y gatos que se adapta a sus necesidades.',
  img: IMG.hombreAbrazoPerro,
};

export const productosCarrusel = [
  { marca: 'TerraClean', nombre: 'Adulto Cordero Raza Med/Gran 15kg', precio: 56.9, antes: 79.9, dscto: '29%', img: IMG.bulldogAmarillo },
  { marca: 'TerraClean', nombre: 'Cuidado de Esterilizados 10kg', precio: 35.9, antes: 55.9, dscto: '35%', img: IMG.gatoBlancoEscalones },
  { marca: 'WildCoat', nombre: 'Adulto Con Pollo 15kg', precio: 107.9, antes: 164.9, dscto: '35%', img: IMG.huskyClose },
  { marca: 'CoreNutri', nombre: 'Menu Gato Salmon 10kg', precio: 84.9, antes: 129.9, dscto: '35%', img: IMG.gatoAtigradoNaranja },
  { marca: 'PawXtra', nombre: 'Adulto Cordero Alimento Seco 12kg', precio: 42.32, antes: 65.9, dscto: '36%', img: IMG.perroSalchicha },
  { marca: 'ZillaPaw', nombre: 'Puppy Formula Cachorro 12kg', precio: 65.9, antes: 99.9, dscto: '34%', img: IMG.corgiCachorroBlanco },
  { marca: 'FelixTra', nombre: 'Adulto Sterilised Salmon 3kg', precio: 39.9, antes: 59.9, dscto: '33%', img: IMG.gatoNaranja },
  { marca: 'GnawFurr', nombre: 'Snack Natural Cordero x10', precio: 19.9, antes: 29.9, dscto: '33%', img: IMG.perroPanuelo },
];

export const servicios = [
  { ico: 'pin', titulo: 'Localiza tu tienda tienda.com', sub: '¡Recuerda que puedes traer a tu mascota!' },
  { ico: 'tijera', titulo: 'Baño y peluqueria canina', sub: 'Pon guapo a tu perrito con nuestro servicio.' },
  { ico: 'catalogo', titulo: 'Descubre nuestro catalogo', sub: 'Ahorra con estas ofertas del mes.' },
];

export const seoTexto = {
  titulo: 'tienda.com - tienda para mascotas fisica y online',
  parrafos: [
    'Somos tienda.com, una cadena de tiendas para mascotas en Peru, con delivery express y miles de productos para hacer feliz a tu mascota. Nuestro principal objetivo es brindar todo lo que una mascota necesita y sueña para ser feliz.',
    'Detras de tienda.com hay un equipo de personas especializadas y amantes de las mascotas, para cuidar minuciosamente la eleccion y recomendacion de los productos que ofrecemos.',
  ],
  subsecciones: [
    { titulo: 'Delivery gratis y rapido', texto: 'Delivery regular: Gratis por compras mayores a S/90. Delivery express: recibe tu pedido en menos de 2 horas. Retiro en tienda: podras comprar en linea y retirar tu pedido sin costo.' },
    { titulo: 'Comida perro y gatos', texto: 'Trabajamos con las mejores marcas de alimento para tu perro y gato. Podras encontrar tus marcas favoritas como TerraClean, WildCoat, CoreNutri, PawXtra y muchas mas.' },
    { titulo: 'Farmacos', texto: 'Encuentra los medicamentos que tu perro y gato necesitan en las mejores marcas y al mejor precio, como antipulgas y vitaminas que reforzaran su sistema inmunologico.' },
    { titulo: 'Diversion y mas', texto: 'Tenemos la mayor variedad de juguetes y accesorios. Rascadores para gatos y peluches que se convertiran en los mejores amigos de tu regalon.' },
  ],
};

export const footerCols = {
  tienda: {
    titulo: 'Localiza tu tienda',
    texto: 'Somos una familia de tiendas en Lima y provincias, siempre tendras una tienda.com cerca. ¡Encuentra la mas cercana!',
  },
  ayuda: { titulo: 'Ayuda', items: ['Rastrea tu pedido', 'Preguntas frecuentes'] },
  guia: {
    titulo: 'Guia de Compra',
    items: ['Informacion de envio', 'Preguntas frecuentes', 'Terminos y condiciones de uso', 'Legales campañas', 'Ganadores sorteos'],
  },
  contacto: {
    titulo: 'Contacto',
    mail: 'pedidos@tienda.com',
    tel: marca.tel,
    whatsapp: 'Escribenos por WhatsApp',
    horario1: 'Lunes a sabados. 8am - 9pm',
    horario2: 'Domingo 8am - 8pm',
    denuncias: 'Canal de Denuncias',
  },
  marca: { titulo: 'tienda.com', items: ['Acerca de tienda.com', 'Politica de Privacidad'] },
};

export const chatCanned = [
  '¡Hola! Soy el asistente de tienda.com. ¿Buscas algo para tu perro, gato u otra mascota?',
  'Tenemos alimento, arena, accesorios y farmacia con delivery gratis desde S/90.',
  'Cuentame la raza y edad de tu mascota y te recomiendo el mejor producto.',
  'Puedes revisar el detalle de precios y stock directo en cada categoria del menu. ¿Te ayudo con algo mas?',
];

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

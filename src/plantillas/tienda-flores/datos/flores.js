const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  poppies: '1490750967868-88aa4486c946',
  rosasPink: '1519378058457-4c29a0a2efac',
  rosaUnica: '1518895949257-7621c3c786d7',
  girasol: '1470509037663-253afd7f0f51',
  girasol2: '1597848212624-a19eb35e2651',
  girasolManojo: '1455659817273-f96807779a8a',
  tulipanPink: '1520763185298-1b434c919102',
  tulipanes: '1561181286-d3fee7d55364',
  tulipanesRB: '1468327768560-75b778cbb551',
  lilaVaso: '1502977249166-824b3a8a4d6d',
  ramoColor: '1526047932273-341f2a7631f9',
  rosasArcoiris: '1508610048659-a06b669e3321',
  floristeria: '1487070183336-b863922373d4',
  rosasNaranja: '1457089328109-e5d9bd499191',
  ramoPastel: '1563241527-3004b7be0ffd',
  arregloRojo: '1533616688419-b7a585564566',
  margarita: '1606041008023-472dfb5e530f',
  peonias: '1464982326199-86f32f81b211',
  rosasRojas: '1494972308805-463bc619d34e',
  cerezo: '1522748906645-95d8adfd52c7',
  regaloMano: '1512909006721-3d6018887383',
  cajaRegalo: '1549465220-1a8b9238cd48',
  lazos: '1607344645866-009c320b63e0',
  peluche: '1559454403-b8fb88521f11',
  fresasChoc: '1563729784474-d77dbb933a9e',
  personaSonrie: '1587556930799-8dca6fad6d41',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Flores & Regalos',
  tel: '(01) 700 5000',
  correo: 'pedidos@tienda.com',
  ciudad: 'Lima, Peru',
};

export const topLinks = ['Ayuda 24h', 'Rastrea tu pedido', 'Nuestras tiendas'];

export const navPrincipal = [
  { t: 'Prime', href: '#novedades' },
  { t: 'Home', href: '#top' },
  { t: 'Forever', href: '#categorias' },
  { t: 'Memories', href: '#mas-vendidos' },
  { t: 'Ocasiones', href: '#ocasiones' },
  { t: 'Delivery 1 hora', href: '#garantias' },
];

export const megaMenu = [
  {
    cat: 'Ocasiones',
    sub: ['Amor y romance', 'Aniversario', 'Cumpleanos', 'Condolencias', 'Nacimientos', 'Agradecimiento', 'Mejorate pronto', 'Graduacion'],
  },
  {
    cat: 'Cajas',
    sub: ['Cajas de rosas', 'Sombrereras', 'Cajas con chocolates', 'Cajas premium', 'Mini cajas'],
  },
  {
    cat: 'Ramos',
    sub: ['Ramos de rosas', 'Ramos de tulipanes', 'Ramos de girasoles', 'Ramos variados', 'Ramos preservados'],
  },
  {
    cat: 'Arreglos',
    sub: ['Con flores variadas', 'Con girasoles', 'Con mini rosas', 'Con petalos', 'Con tulipanes', 'Con liliums', 'Linea premium'],
  },
  {
    cat: 'Plantas',
    sub: ['Orquideas', 'Suculentas', 'Plantas de interior', 'Terrarios', 'Bonsai'],
  },
  {
    cat: 'Condolencias',
    sub: ['Coronas funebres', 'Arreglos de pie', 'Ramos de condolencia', 'Cruces florales'],
  },
  {
    cat: 'Peluches',
    sub: ['Osos clasicos', 'Peluches gigantes', 'Peluches con proposito', 'Personajes'],
  },
  {
    cat: 'Chocolates',
    sub: ['Cajas de bombones', 'Chocolates artesanales', 'Trufas', 'Chocolates + flores'],
  },
  {
    cat: 'Tortas y Desayunos',
    sub: ['Tortas de cumpleanos', 'Desayunos sorpresa', 'Cheesecakes', 'Cupcakes'],
  },
  {
    cat: 'Complementos',
    sub: ['Globos metalicos', 'Tarjetas dedicatoria', 'Vinos y espumantes', 'Fresas con chocolate'],
  },
];

export const ocasiones = [
  { t: 'Amor', img: u(IMG.rosasRojas, 300) },
  { t: 'Aniversario', img: u(IMG.ramoColor, 300) },
  { t: 'Condolencias', img: u(IMG.rosasNaranja, 300) },
  { t: 'Cumpleanos', img: u(IMG.regaloMano, 300) },
  { t: 'Graduacion', img: u(IMG.peluche, 300) },
  { t: 'Mejorate pronto', img: u(IMG.margarita, 300) },
  { t: 'Nacimientos', img: u(IMG.cerezo, 300) },
  { t: 'Agradecimiento', img: u(IMG.ramoPastel, 300) },
];

export const categorias = [
  { t: 'Flores variadas', img: u(IMG.poppies, 420) },
  { t: 'Girasoles', img: u(IMG.girasol, 420) },
  { t: 'Packs', img: u(IMG.cajaRegalo, 420) },
  { t: 'Rosas', img: u(IMG.rosasPink, 420) },
  { t: 'Tulipanes', img: u(IMG.tulipanes, 420) },
];

export const novedades = [
  { nombre: 'Arreglo Corazon Rosas y Flores', precio: 159, antes: 199, tag: '-20%', img: u(IMG.arregloRojo) },
  { nombre: 'Mini Arreglo Sunshine', precio: 139, img: u(IMG.girasol2) },
  { nombre: 'Ramo Primavera y Peluche', precio: 188, img: u(IMG.ramoPastel) },
  { nombre: 'Caja tienda.com con 9 Rosas', precio: 110, img: u(IMG.rosasPink) },
  { nombre: 'Box de Tulipanes Pastel', precio: 145, img: u(IMG.tulipanesRB) },
  { nombre: 'Ramo de Peonias Premium', precio: 220, img: u(IMG.peonias) },
];

export const destacados = [
  { nombre: 'Ramo con 25 Rosas Rojas', precio: 159, img: u(IMG.rosasRojas) },
  { nombre: 'Arreglo Kero Rosas y Tulipanes', precio: 850, antes: 999, tag: '-15%', img: u(IMG.rosasNaranja) },
  { nombre: 'Sombrerera Negra con 60 Rosas', precio: 409, img: u(IMG.rosasPink) },
  { nombre: 'Arreglo de Tulipanes y Peluche', precio: 208.99, antes: 258, tag: '-19%', img: u(IMG.tulipanes) },
  { nombre: 'Sombrerera Romance de Rosas', precio: 359, img: u(IMG.peonias) },
  { nombre: 'Bouquet Girasoles del Campo', precio: 129, img: u(IMG.girasolManojo) },
  { nombre: 'Caja Corazon con Chocolates', precio: 99, img: u(IMG.fresasChoc) },
  { nombre: 'Flores Variadas de Estacion', precio: 119, img: u(IMG.poppies) },
];

export const masVendidos = [
  { nombre: 'Sombrerera Rosada con 6 Tulipanes', precio: 167, img: u(IMG.tulipanPink) },
  { nombre: 'Caja tienda.com con 9 Rosas', precio: 110, img: u(IMG.rosasPink) },
  { nombre: 'Ramo de 12 Rosas Premium', precio: 149, img: u(IMG.rosasRojas) },
  { nombre: 'Peluche Oso Clasico 40cm', precio: 89, img: u(IMG.peluche) },
  { nombre: 'Arreglo Amor Eterno', precio: 199, img: u(IMG.ramoColor) },
  { nombre: 'Box Primaveral con Chocolates', precio: 175, img: u(IMG.lazos) },
];

export const heroSlides = [
  {
    kicker: 'Packs con proposito',
    titulo: 'Packs llenos de abrazos',
    sub: 'Combina flores frescas con un peluche solidario y suma una causa a tu regalo.',
    cta: 'Descubre aqui',
    img: u(IMG.ramoColor, 1400),
  },
  {
    kicker: 'Condolencias',
    titulo: 'Un adios lleno de amor',
    sub: 'Arreglos y coronas funebres con entrega el mismo dia en Lima.',
    cta: 'Compra aqui',
    img: u(IMG.rosasNaranja, 1400),
  },
  {
    kicker: 'Delivery 1 hora',
    titulo: 'Rosas que enamoran',
    sub: 'Cajas y sombrereras de rosas con envio express en menos de 60 minutos.',
    cta: 'Ver rosas',
    img: u(IMG.rosasRojas, 1400),
  },
];

export const heroLateral = {
  titulo: 'Regala un abrazo',
  sub: 'Coleccion solidaria',
  cta: 'Ver aqui',
  img: u(IMG.ramoPastel, 720),
};

export const banners = [
  { titulo: 'Hermosas cajas de rosas', sub: 'Desde S/ 110', img: u(IMG.rosasRojas, 760) },
  { titulo: 'Elegantes ramos', sub: 'Rosas, tulipanes y girasoles', img: u(IMG.ramoPastel, 760) },
  { titulo: 'Tiernos peluches', sub: 'El complemento perfecto', img: u(IMG.peluche, 760) },
];

export const garantias = [
  { t: 'Delivery el mismo dia', d: 'Pedidos antes de las 6 p. m. llegan hoy.' },
  { t: 'Cobertura en todo Lima', d: 'Y envios a provincias coordinados.' },
  { t: 'Tarjeta dedicatoria gratis', d: 'Escribe tu mensaje al finalizar la compra.' },
  { t: 'Pago 100% seguro', d: 'Tarjetas, banca movil y PagoEfectivo.' },
];

export const disclaimers = [
  'Fotos referenciales. El producto puede variar segun disponibilidad de flores de estacion.',
  'Prohibida la venta de bebidas alcoholicas a menores de edad. Tomar bebidas alcoholicas en exceso es danino.',
];

export const pagoMetodos = ['Visa', 'Mastercard', 'Amex', 'BBVA', 'BCP', 'Interbank', 'PagoEfectivo'];

export const footerCols = [
  { t: 'Cuenta', links: ['Informacion personal', 'Mis pedidos', 'Mis direcciones', 'Rastrea tu pedido'] },
  { t: 'Politicas', links: ['Atencion 24h en la web', 'Terminos y condiciones', 'Politica de entrega y devolucion', 'Nosotros'] },
  { t: 'Informacion', links: ['Ubica nuestras tiendas', 'Recojo en tienda', 'Catalogos', 'Libro de reclamaciones'] },
];

export const chatCanned = [
  'Con gusto te ayudo. Puedes elegir por ocasion (amor, cumpleanos, condolencias) o por tipo (rosas, tulipanes, cajas).',
  'Nuestro delivery express llega en menos de 1 hora dentro de Lima. Fuera de Lima coordinamos la fecha contigo.',
  'Todos los arreglos incluyen tarjeta de dedicatoria sin costo. La escribes al finalizar la compra.',
  'Puedes pagar con tarjeta, banca movil o PagoEfectivo. La compra es 100% segura.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

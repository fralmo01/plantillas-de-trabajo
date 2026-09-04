const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  clippersFlatlay: '1599351431613-18ef1fdd27e1',
  clipperBotellaTijeras: '1648221122323-572c13a31663',
  clipperCorteEspalda: '1599351431408-433ef72fe40b',
  manoClipperNegro: '1604355240616-5e907f42b431',
  peineCorteDetalle: '1606333259737-6da197890fa2',
  herramientasNaranja: '1549271568-e87e07c5406b',
  barberoTatuado: '1493256338651-d82f7acb2b38',
  clipperComboFlatlay: '1599351431408-433ef72fe40b',
  herramientasNaranja2: '1624981014681-47c20b7bb67b',
  navajaAfeitado: '1672642150228-3fcd5826ec26',
  clipperCortePrimerPlano: '1640301133543-41fe25ad6450',
  barberoBarbaClipper: '1585581905588-9e91f63bdd47',
  clipperNucaDetalle: '1635273051839-003bf06a8751',
  clipperRecorte: '1648221122323-572c13a31663',
  clipperVintageMano: '1585581905588-9e91f63bdd47',

  barberiaVentanaLuz: '1775494165568-42c0fbb4c782',
  barberiaEleganteSillas: '1781455793310-8427c96454c7',
  barberoCortandoModerno: '1759134198561-e2041049419c',
  barberoClienteCapa: '1627238773196-423495d97424',
  barberiaVentanaCalle: '1627238772768-e3d0ccb1adb0',
  barberiaIndustrialOscura: '1761064039763-0d9aa5124510',
  barberiaAzulModerna: '1786057424913-6954b0f424af',

  goteroAceiteBarba: '1775127596257-1b913f6d32da',
  goteroAceiteBarba2: '1775127596288-9249a530cab7',
  hombreAceiteBarba: '1672761431756-4ec00cf7162a',
  hombrePeinandoBarba: '1672761431763-02233500ea2f',
  toallaSprayAceite: '1673350963924-cb4267d9b6eb',
  manoFrascoAceite: '1673350963997-fc802e774580',

  sillaEstudioNegra: '1611313151697-d626e818dddf',
  herramientasFlatlayNegro: '1638383258375-0d294725071b',
  sillaVintageCuero: '1512690459411-b9245aed614b',
  sillasRayadas: '1629881544138-c45fc917eb81',
  sillaCromadaVintage: '1621645582931-d1d3e6564943',
  barberiaLadrilloEstaciones: '1675599193990-33d71150902b',
  herramientasFlatlayCuero: '1638383257653-4217e9161b11',
  capaColgada: '1638383257225-f810a62c634e',
  salonModernoSillas: '1703792686930-9efa64a9c6c5',
  barberiaVintageRoja: '1592647420148-bfcc177e2117',
  barberiaOscuraFilas: '1576168056582-0a851a87ab8e',
  sillasVintageMadera: '1672257493626-038f96997ade',

  jarAmbar1: '1702724122836-9d06306f83b1',
  jarAmbar2: '1702724122793-37ff49fee252',
  jarTealC: '1634449277883-534da4f7c97a',
  jarTealC2: '1634449277780-81ab99e85416',
  goteroMockup: '1702724122866-8898b15ebeac',
  jarBlancoGenerico: '1697384653769-e9baced40514',
  jarNanaDome: '1600482418123-22c2ebb6029b',
  jarAmbar3: '1702724122866-8898b15ebeac',

  manosTijerasAnillos: '1624981014681-47c20b7bb67b',
  kitHerramientasOscuro: '1638383257653-4217e9161b11',
  carritoHerramientas: '1758887260983-c171388cf56f',
  herramientasBN: '1549271568-e87e07c5406b',
  tijerasDoradasRosa: '1589876518759-5b460cabcc4c',
  tijerasPeineMadera: '1593269211259-b2367de7dba6',
  barberoCortandoRizado: '1787008543379-91aaa64b0003',
  herramientasMaderaFlatlay: '1783908688260-0c47404926f3',
  peineCorteCano: '1783908700793-ea8b35d6d53a',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Barberia',
  tel: '(01) 555 0199',
  correo: 'ventas@tienda.com',
  ciudad: 'Lima, Peru',
};

export const anunciosTicker = [
  'Envio GRATIS por compras mayores a S/ 100 en Lima Metropolitana.',
  'Acumula puntos y canjealos por productos.',
  'Nuevo ingreso: linea de ceras profesionales.',
  'Retiro gratis en tienda en San Isidro y Surco.',
];

export const navPrincipal = [
  { t: 'Lo Nuestro', href: '#novedades' },
  { t: 'En Oferta', href: '#novedades' },
  { t: 'Liquidaciones', href: '#destacados' },
];

export const navSecundaria = [
  { t: 'Preguntas Frecuentes', href: '#footer' },
  { t: 'Tiendas', href: '#footer' },
];

export const megaMenu = {
  columnas: [
    {
      t: 'Maquinas',
      links: ['IronBlade', 'SteelPro', 'Forge', 'UrbanCut', 'NorthCut', 'ClipperMax', 'Ver Todo'],
    },
    {
      t: 'Cuidado Personal',
      links: ['BlackWax', 'Forge Grooming', 'UrbanCare', 'NorthBeard', 'ClipperCare', 'DailyBarber', 'Ver Todo'],
    },
    {
      t: 'Accesorios',
      links: ['Capas', 'Tijeras', 'Repuestos', 'Suministros', 'Desinfeccion', 'Peines', 'Sillas', 'Ver Todo'],
    },
  ],
  promos: [
    { t: 'BEST SELLERS', sub: 'LOS FAVORITOS', img: u(IMG.clippersFlatlay, 480) },
    { t: 'ACCESORIOS', sub: 'CAPAS, TIJERAS Y MAS', img: u(IMG.tijerasPeineMadera, 480) },
    { t: 'SALE', sub: 'OFERTAS POR TIEMPO LIMITADO', img: u(IMG.sillaVintageCuero, 480) },
  ],
};

export const marcasChip = [
  'IRONBLADE', 'STEELPRO', 'FORGE', 'URBANCUT', 'NORTHCUT',
  'BLACKWAX', 'CLIPPERMAX', 'DAILYBARBER', 'NORTHBEARD', 'URBANCARE',
];

export const heroSlides = [
  {
    tema: 'violeta',
    kicker: 'Nuevo ingreso',
    titulo: 'Ceras Profesionales',
    sub: 'Fijacion, brillo y acabado mate para cada estilo de corte.',
    cta: 'Ver ceras',
    img: u(IMG.jarAmbar1, 900),
  },
  {
    tema: 'coral',
    kicker: 'Liquidacion',
    titulo: 'Ofertas de Liquidacion',
    sub: 'Hasta 40% de descuento en productos seleccionados.',
    cta: 'Ver ofertas',
    img: u(IMG.goteroAceiteBarba, 900),
  },
  {
    tema: 'ambar',
    kicker: 'Coleccion sillas',
    titulo: 'Sillas Premium',
    sub: 'Comodidad y estilo para tu barberia, modelos clasicos y modernos.',
    cta: 'Ver sillas',
    img: u(IMG.sillaVintageCuero, 900),
  },
];

export const loNuestro = [
  { nombre: 'Cera BlackWax 150ml Aqua W1', precio: 14, marca: 'BLACKWAX', img: u(IMG.jarAmbar1) },
  { nombre: 'Cera BlackWax 150ml Aqua W2', precio: 14, marca: 'BLACKWAX', img: u(IMG.jarAmbar2) },
  { nombre: 'Cera BlackWax 150ml Matte W3', precio: 14, marca: 'BLACKWAX', img: u(IMG.jarTealC) },
  { nombre: 'Cera BlackWax 150ml Cream R1', precio: 17, marca: 'BLACKWAX', img: u(IMG.jarTealC2) },
  { nombre: 'Gel Fijador BlackWax 200ml', precio: 19, marca: 'BLACKWAX', img: u(IMG.goteroMockup) },
  { nombre: 'Pomada BlackWax Clay 100g', precio: 18, marca: 'BLACKWAX', img: u(IMG.jarBlancoGenerico) },
];

export const ofertas = [
  { nombre: 'Combo IronBlade Clipper + Trimmer', precio: 799, antes: 939, tag: '-15%', marca: 'IRONBLADE', img: u(IMG.clippersFlatlay) },
  { nombre: 'Trimmer SteelPro Digital', precio: 249, antes: 299, tag: '-17%', marca: 'STEELPRO', img: u(IMG.clipperComboFlatlay) },
  { nombre: 'Set Tijeras UrbanCut Pro', precio: 129, antes: 169, tag: '-24%', marca: 'URBANCUT', img: u(IMG.tijerasDoradasRosa) },
  { nombre: 'Capa NorthCut Premium', precio: 45, antes: 65, tag: '-31%', marca: 'NORTHCUT', img: u(IMG.capaColgada) },
  { nombre: 'Aceite ClipperCare 120ml', precio: 10, antes: 15, tag: '-33%', marca: 'CLIPPERCARE', img: u(IMG.manoFrascoAceite) },
  { nombre: 'Silla ForgeChair Clasica', precio: 1899, antes: 2299, tag: '-17%', marca: 'FORGE', img: u(IMG.sillaVintageCuero) },
];

export const destacados = [
  { nombre: 'Clipper IronBlade Boost Negro', precio: 549, marca: 'IRONBLADE', img: u(IMG.manoClipperNegro) },
  { nombre: 'Trimmer SteelPro 2296', precio: 89, marca: 'STEELPRO', img: u(IMG.clipperCortePrimerPlano) },
  { nombre: 'Aceite Lubricante ClipperCare 120ml', precio: 10, marca: 'CLIPPERCARE', img: u(IMG.manoFrascoAceite) },
  { nombre: 'Acondicionador NorthBeard Keratin', precio: 50, marca: 'NORTHBEARD', img: u(IMG.toallaSprayAceite) },
  { nombre: 'Tijera de Precision UrbanCut', precio: 139, marca: 'URBANCUT', img: u(IMG.tijerasDoradasRosa) },
  { nombre: 'Peine de Madera DailyBarber', precio: 19, marca: 'DAILYBARBER', img: u(IMG.tijerasPeineMadera) },
  { nombre: 'Navaja Clasica ForgeShave', precio: 79, marca: 'FORGE', img: u(IMG.peineCorteDetalle) },
  { nombre: 'Set Herramientas UrbanCare', precio: 165, marca: 'URBANCARE', img: u(IMG.herramientasFlatlayNegro) },
];

export const masVendidos = [
  { nombre: 'Combo Trimmer + Clipper SteelPro', precio: 620, marca: 'STEELPRO', img: u(IMG.clipperBotellaTijeras) },
  { nombre: 'Gotero Aceite Barba NorthBeard', precio: 35, marca: 'NORTHBEARD', img: u(IMG.goteroAceiteBarba2) },
  { nombre: 'Kit Herramientas ClipperMax', precio: 189, marca: 'CLIPPERMAX', img: u(IMG.kitHerramientasOscuro) },
  { nombre: 'Carrito de Herramientas UrbanCare', precio: 459, marca: 'URBANCARE', img: u(IMG.carritoHerramientas) },
  { nombre: 'Set Tijera y Peine DailyBarber', precio: 99, marca: 'DAILYBARBER', img: u(IMG.tijerasPeineMadera) },
  { nombre: 'Capa Profesional NorthCut', precio: 59, marca: 'NORTHCUT', img: u(IMG.capaColgada) },
];

export const categoriasBanner = [
  { t: 'Ceras y Pomadas', sub: 'Fijacion y brillo', img: u(IMG.jarAmbar3, 760) },
  { t: 'Maquinas y Trimmers', sub: 'Corte de precision', img: u(IMG.manoClipperNegro, 760) },
  { t: 'Tijeras y Accesorios', sub: 'Capas, peines y mas', img: u(IMG.tijerasPeineMadera, 760) },
  { t: 'Sillas de Barberia', sub: 'Comodidad premium', img: u(IMG.sillasRayadas, 760) },
];

export const marcaDestacada = {
  titulo: 'Linea IronBlade Digital',
  sub: 'Maquinas profesionales con motor brushless y bateria de larga duracion para jornadas completas.',
  cta: 'Ver coleccion',
  img: u(IMG.herramientasNaranja, 900),
  productos: [
    { nombre: 'IronBlade Pro Clipper', precio: 549, img: u(IMG.manoClipperNegro, 300) },
    { nombre: 'IronBlade Trimmer SC', precio: 349, img: u(IMG.clipperCortePrimerPlano, 300) },
    { nombre: 'IronBlade Nano Trimmer', precio: 289, img: u(IMG.clipperVintageMano, 300) },
    { nombre: 'IronBlade Combo Set', precio: 799, img: u(IMG.clippersFlatlay, 300) },
  ],
};

export const coleccionSillas = {
  titulo: 'Coleccion de Sillas',
  sub: 'Modelos clasicos y modernos para equipar tu barberia.',
  cta: 'Ver productos',
  img: u(IMG.barberiaVintageRoja, 1400),
  modelos: ['LUXORY', 'MONTANA', 'HARLEY', 'IMPERIAL', 'ROBLE'],
};

export const capasBanner = {
  titulo: 'Capas con diseno exclusivo',
  sub: 'Estampados unicos para destacar en tu sillon, resistentes y faciles de limpiar.',
  cta: 'Ver todo',
  img: u(IMG.barberoClienteCapa, 1400),
};

export const beneficios = [
  { t: 'Acumula puntos por cada compra', ico: 'puntos' },
  { t: 'Envios a nivel nacional', ico: 'envio' },
  { t: 'Delivery y recojo en tienda', ico: 'delivery' },
];

export const instagram = {
  handle: '@tienda.combarberia',
  imgs: [
    u(IMG.barberiaVentanaLuz, 400),
    u(IMG.barberoTatuado, 400),
    u(IMG.herramientasNaranja2, 400),
    u(IMG.barberiaAzulModerna, 400),
    u(IMG.sillaCromadaVintage, 400),
    u(IMG.barberoCortandoRizado, 400),
  ],
};

export const pagoMetodos = ['Visa', 'Mastercard', 'Amex', 'Diners'];

export const footerLinks = [
  'Terminos y Condiciones',
  'Politica de Privacidad',
  'Politica de Suscripcion al Newsletter',
  'Cambios y Devoluciones',
  'Garantia',
  'Envios',
  'Libro de Reclamaciones',
];

export const chatCanned = [
  'Con gusto te ayudo. Buscas maquinas, ceras, accesorios o sillas de barberia?',
  'Tenemos envio gratis por compras mayores a S/ 100 en Lima Metropolitana.',
  'Puedes revisar la garantia y politica de cambios en el pie de pagina.',
  'Aceptamos Visa, Mastercard, Amex y Diners. La compra es 100% segura.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

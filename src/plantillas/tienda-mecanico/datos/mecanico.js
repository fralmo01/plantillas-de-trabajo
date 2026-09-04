const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  toolboxAbierta: '1580401884879-27237ae4468e',
  toolboxOscura: '1583126162406-643011b3f69f',
  llavesPila: '1640682841767-cdfce3aea6e0',
  mecanicoAbriendoCajon: '1603227705974-d28935099891',
  juegoDadosFlatlay: '1615746363486-92cd8c5e0a90',
  mecanicoOverolRojo: '1677938438599-a55528c41b2c',
  cajonDadosCromo: '1639262866392-61772f053ffb',
  manoAbriendoCajonNegro: '1603227685935-3f66d0f35440',
  toolboxVintage: '1658486001685-470e5bb3176c',

  multimetroCables: '1553873002-785d775854c9',
  multimetroAzulMaleta: '1564942513760-da4dc8da3d47',
  protoboardMultimetro: '1517420704952-d9f39e95b43e',
  multimetroVintageBN: '1592824316568-ccca7536a6c8',
  multimetroAzulMano: '1619345371662-fccc15cc4814',
  multimetroAmarilloMadera: '1650420790860-429e356f3194',
  protoboardMano: '1565608438257-fac3c27beb36',
  multimetroAmarilloClose: '1710194572710-bbd92a2d3f9c',
  multimetroDialMadera: '1636434588571-2b8df139f504',

  cargadorAutoNoche: '1732193889021-09243bd55d09',
  manosCablesMotor: '1597766353939-9d782bde7a2f',
  cargadorAutoDia: '1732193888581-037520363346',
  pinzasMotorRojas: '1597766325363-f5576d851d6a',
  bateriaVerdePinzas: '1676337167752-2062c6ca7366',
  camionetaCablesBateria: '1613935652232-974b5d7463f0',
  manosPinzasMotor: '1597766321604-9de3ff9e93e2',
  pinzasMotorAtardecer: '1597766347634-277bf2c89c32',
  cablesMotorCapo: '1535190458486-5fc153d35688',

  camionetaTallerBajo: '1723099971299-3789db53604c',
  motoRepOscura: '1636761358757-0a616eb9e17e',
  manosCableNaranja: '1599256872237-5dcc0fbe9668',
  juegoDadosMaletaAzul: '1599256631012-9c2b32bfa8bc',
  llavesColgadasPared: '1599256630445-67b5772b1204',
  tallerBancoAmplio: '1676018366904-c083ed678e60',
  botaPedal: '1618783129985-dd97dbe4ad99',
  juegoDadosMaletaNegra: '1599256630570-afdac5a9b863',
  maletaLlavesCase: '1637640125496-31852f042a60',

  alicatesMultiherramienta: '1672033282598-662d5a93b9f4',
  navajaCuero: '1639107992653-ab60d34c25fb',
  herramientasRelojero: '1555859230-93d6c47fe787',
  panelHerramientasMadera: '1595499591024-bf6ca07ca95f',

  laptopVolanteDiagnostico: '1581091872370-1c203d690c43',
  tabletManoDiagnostico: '1623682783900-fea916dcba74',
  laptopTableroReloj: '1659576048262-940d9c1c84fe',
  dinamometroTallerAzul: '1658351354155-e854d19233e0',
  tableroAzulClose: '1580893022652-231ff7f2ef41',
  hombreTabletCamara: '1547301312-c7e8c883af16',
  motorAzulClose: '1670611154935-a4e7d12c3c00',

  pistolaPinturaMadera: '1647426994723-ab685e4b8c77',
  aerografoMadera: '1629048733170-b4b3c5ec1eda',
  aerosolesColor: '1542850513-59adaf9b9b35',

  neumaticoLuzNaranja: '1640503849111-824da434b2f4',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Mecanico',
  tel: '(01) 700 8899',
  correo: 'ventas@tienda.com',
  ciudad: 'Lima, Peru',
};

export const anunciosTop = 'ARMA TU TALLER CON NOSOTROS: DISTRIBUIDORES DE LAS MEJORES MARCAS';

export const marcasChip = ['DIAGPRO', 'VOLTMAX', 'FORZATOOLS', 'TRACKLINE', 'POWERGRIP', 'AUTOFORCE'];

export const navPrincipal = [
  { t: 'Nosotros', href: '#nosotros' },
  { t: 'Productos', href: '#productos' },
  { t: 'Ofertas', href: '#ofertas' },
];

export const heroSlides = [
  {
    kicker: 'DIAGPRO',
    watermark: 'MX900TS',
    titulo: 'MAXICHECK MX900TS',
    sub: 'Escaner de diagnostico multimarca con pantalla tactil y actualizaciones en la nube.',
    cta: 'Ver equipo',
    img: u(IMG.laptopVolanteDiagnostico, 1200),
  },
  {
    kicker: 'POWERGRIP',
    watermark: 'BOOSTER',
    titulo: 'TODO LO QUE NECESITAS PARA TU TALLER',
    sub: 'Boosters, arrancadores y cargadores de bateria para equipar tu taller de principio a fin.',
    cta: 'Ver booster',
    img: u(IMG.pinzasMotorRojas, 1200),
  },
  {
    kicker: 'TRACKLINE',
    watermark: 'TALLER',
    titulo: 'COCHES PORTAHERRAMIENTAS PROFESIONALES',
    sub: 'Organiza tu taller con gavetas resistentes y acabado premium.',
    cta: 'Ver coches',
    img: u(IMG.toolboxOscura, 1200),
  },
];

export const categorias = [
  { t: 'Equipos de diagnostico', ico: 'diagnostico' },
  { t: 'Manometros de medicion', ico: 'manometro' },
  { t: 'Coches portaherramientas', ico: 'portaherramientas' },
  { t: 'Booster arrancador y cargador de bateria', ico: 'booster' },
  { t: 'Equipos de alineacion, balanceo y desenllante', ico: 'alineacion' },
  { t: 'Equipos de planchado y pintura', ico: 'pintura' },
  { t: 'Herramientas manuales, neumaticas y especiales', ico: 'herramientas' },
  { t: 'Lamparas de trabajo profesionales', ico: 'lamparas' },
  { t: 'Car wash', ico: 'carwash' },
  { t: 'Equipos de patio', ico: 'patio' },
];

export const ofertasDestacadas = [
  {
    tag: 'SEMANA DEL MECANICO',
    marca: 'DIAGPRO',
    nombre: 'MAXICHECK MX900 12V',
    detalle: 'Incluye punta logica AT9135',
    regalo: 'REGALO',
    precio: 2190,
    antes: null,
    img: u(IMG.dinamometroTallerAzul, 700),
  },
  {
    tag: 'SEMANA DEL MECANICO',
    marca: 'DIAGPRO',
    nombre: 'MAXISYS 12/24V MS908S3',
    detalle: 'Llevate 3 obsequios: compresimetro y punta logica',
    regalo: null,
    precio: 5950,
    antes: 6490,
    img: u(IMG.tableroAzulClose, 700),
  },
  {
    tag: 'SEMANA DEL MECANICO — LAUNCH',
    marca: 'DIAGPRO',
    nombre: 'SCANNER PROFESIONAL 12/24V PRO3 LINK',
    detalle: 'Oferta insuperable por tiempo limitado',
    regalo: 'REGALO: PROBADOR DE BATERIAS BST360',
    precio: 5490,
    antes: 5999,
    img: u(IMG.motorAzulClose, 700),
  },
];

export const loNuevo = {
  titulo: 'LO NUEVO TRACKLINE',
  productos: [
    { nombre: 'DiagPad IX Link', sub: 'Scanner Profesional Avanzado', img: u(IMG.laptopVolanteDiagnostico, 500) },
    { nombre: 'DiagPro3 Link', sub: 'Scanner multimarca profesional avanzado', img: u(IMG.tabletManoDiagnostico, 500) },
    { nombre: 'S2 SensorBox', sub: 'Modulo profesional simulador de senales', img: u(IMG.dinamometroTallerAzul, 500) },
    { nombre: 'CRP Max919', sub: 'Herramienta de diagnostico avanzada', img: u(IMG.motorAzulClose, 500) },
  ],
};

export const productosDiagnostico = [
  { nombre: 'Tacometro Digital AT-8', codigo: 'AT-8', precio: 289, img: u(IMG.protoboardMultimetro) },
  { nombre: 'Multimetro Profesional VoltMax', codigo: 'DT-9919', precio: 189, img: u(IMG.multimetroAzulMaleta) },
  { nombre: 'Pinza Amperimetrica VoltMax', codigo: 'DT-362', precio: 219, img: u(IMG.multimetroAmarilloClose) },
  { nombre: 'Multimetro de Precision VoltMax', codigo: 'DT-1953', precio: 249, img: u(IMG.multimetroAzulMano) },
  { nombre: 'Manometro de Presion ForzaTools', codigo: 'FT-220', precio: 159, img: u(IMG.multimetroDialMadera) },
  { nombre: 'Multimetro Vintage VoltMax', codigo: 'DT-100', precio: 129, img: u(IMG.multimetroVintageBN) },
];

export const productosBooster = [
  { nombre: 'Booster Lithium PowerGrip Giga 12/24V', codigo: 'LITHIUM GIGA', precio: 899, img: u(IMG.cargadorAutoNoche) },
  { nombre: 'Arrancador PowerGrip SL474-12V', codigo: 'SL474', precio: 349, img: u(IMG.pinzasMotorRojas) },
  { nombre: 'Wheel Charger PowerGrip Titan 60', codigo: 'TITAN 60', precio: 799, img: u(IMG.bateriaVerdePinzas) },
  { nombre: 'PBI 2400 HD Cargo Booster', codigo: 'PBI 2400', precio: 649, img: u(IMG.camionetaCablesBateria) },
  { nombre: 'Booster Lithium PowerGrip Giga 12V', codigo: 'LITHIUM GIGA 12V', precio: 749, img: u(IMG.manosPinzasMotor) },
  { nombre: 'PBI 201 Booster 12/24V Premium', codigo: 'PBI 201', precio: 599, img: u(IMG.pinzasMotorAtardecer) },
];

export const productosTaller = [
  { nombre: 'Coche Portaherramientas TrackLine 7 Gavetas', codigo: 'TL-700', precio: 2490, img: u(IMG.toolboxAbierta) },
  { nombre: 'Set de Dados TrackLine 108 Piezas', codigo: 'TL-108', precio: 389, img: u(IMG.juegoDadosFlatlay) },
  { nombre: 'Maletin de Herramientas AutoForce', codigo: 'AF-45', precio: 259, img: u(IMG.maletaLlavesCase) },
  { nombre: 'Coche Portaherramientas TrackLine Negro', codigo: 'TL-500', precio: 2190, img: u(IMG.toolboxOscura) },
  { nombre: 'Set de Dados Cromados TrackLine', codigo: 'TL-64', precio: 199, img: u(IMG.cajonDadosCromo) },
  { nombre: 'Alicate Multiherramienta TrackLine', codigo: 'TL-M12', precio: 89, img: u(IMG.alicatesMultiherramienta) },
];

export const productosPintura = [
  { nombre: 'Pistola de Pintura ForzaTools Pro', codigo: 'FT-P200', precio: 219, img: u(IMG.pistolaPinturaMadera) },
  { nombre: 'Aerografo ForzaTools Mini', codigo: 'FT-A50', precio: 149, img: u(IMG.aerografoMadera) },
  { nombre: 'Set de Aerosoles ForzaTools', codigo: 'FT-S12', precio: 99, img: u(IMG.aerosolesColor) },
  { nombre: 'Lampara LED de Trabajo PowerGrip', codigo: 'PG-L20', precio: 129, img: u(IMG.neumaticoLuzNaranja) },
  { nombre: 'Panel de Herramientas TrackLine', codigo: 'TL-PAN', precio: 179, img: u(IMG.panelHerramientasMadera) },
  { nombre: 'Set de Precision AutoForce', codigo: 'AF-12', precio: 79, img: u(IMG.herramientasRelojero) },
];

export const marcasCarrusel = [
  { nombre: 'DIAGPRO' },
  { nombre: 'VOLTMAX' },
  { nombre: 'FORZATOOLS' },
  { nombre: 'TRACKLINE' },
  { nombre: 'POWERGRIP' },
  { nombre: 'AUTOFORCE' },
];

export const nosotros = {
  titulo: 'El Destino Integral para Equipar tu Taller',
  parrafos: [
    'En tienda.com contamos con TODOS los equipos necesarios para poner en marcha tu taller. Trabajamos con los equipos y herramientas mas modernos y de las marcas mas destacadas, asegurandote calidad y durabilidad inigualable.',
    'Como distribuidor principal de equipos de diagnostico DiagPro, te garantizamos productos de ultima generacion respaldados por soporte tecnico constante.',
    'Nuestro equipo de asesores esta listo para resolver tus consultas y guiarte en el proceso de compra. Realizamos envios a nivel nacional, rapidos y seguros.',
  ],
};

export const footerInfo = {
  direccion: 'Jiron Garcia Naranjo 178, La Victoria, Lima, Peru',
  telefonos: ['951 444 323', '951 441 935'],
};

export const chatCanned = [
  'Con gusto te ayudo. Buscas equipos de diagnostico, boosters, coches de herramientas o pintura?',
  'Trabajamos con las marcas mas destacadas del rubro y hacemos envios a nivel nacional.',
  'Puedes escribirnos por WhatsApp o llenar el formulario de contacto para una asesoria personalizada.',
  'Aceptamos coordinacion de pago y entrega segun tu ciudad. La compra es 100% segura.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

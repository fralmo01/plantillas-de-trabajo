const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  anillasApilables: '1618842676088-c4d48a6a7c9d',
  trenMadera: '1560859251-d563a49c5e4a',
  autosColor: '1725297952113-36be1c7cefb4',
  robotsMadera: '1616429777191-cc11a3c8bb2a',
  trenCarbon: '1505003098838-83ce5356c228',
  formasAmarillo: '1703581698778-2224c729135b',
  clavijaRoja: '1622403718261-bd0e7dd01216',
  bloquesAbecedario: '1568828668638-b1b4014d91a2',
  autoRosado: '1577122602163-32704f11893c',
  casaBloques: '1670000515046-9ad35ebb755d',
  ninoJugandoRepisa: '1596066190600-3af9aadaaea1',
  abaco: '1611957082141-c449bb2b4ada',
  repisaJuguetes: '1642379831546-67d5e2bf8bcc',

  monopolio: '1629760946220-5693ee4c46ac',
  repisaJuegos: '1719494206741-79831f9f4d51',
  dadosFichasVista: '1659480142923-0cd01191e0e9',
  familiaJugando: '1677188010559-0667a1ed33a0',
  fichasEstrategia: '1610890716171-6b1bb98ffd09',
  mapaJuegoMesa: '1582921017967-79d1cb6702ee',
  dadosCasitas: '1547638375-ebf04735d792',
  tableroConquista: '1585504198199-20277593b94f',
  cartasFichas: '1632501641765-e568d28b0015',
  fichasMadera: '1611891487122-207579d67d98',
  dadosLetrasJuego: '1611996575749-79a3a250f948',
  manosJugando: '1640461470346-c8b56497850a',
  dadosCayendo: '1570303345338-e1f0eddf4946',

  pulpoCroche: '1669212409006-4684413000aa',
  conejoMorado: '1625773987755-9929a8d19d10',
  caballosPeluche: '1591926828257-2eefb8aa42fa',
  dinosaurioPeluche: '1687708522434-6197bb47c933',
  osoCojin: '1641085809270-71f722611ce1',
  monoCalcetin: '1517686748843-bb360cfc62b3',
  osoBlanco: '1530325553241-4f6e7690cf36',
  peluchesMorados: '1584155828260-3791b07e6afb',
  peluchesColores: '1597939318338-f712e0604c18',
  conejoBlanco: '1561915368-cfeb344ee97f',
  ovejaBanca: '1652636347412-46f47856f540',
  peluchesColorido: '1711830000433-c77fb98f3fec',

  figurasColor: '1545558014-8692077e9b5c',
  bloquesLetras: '1535572290543-960a8046f5af',
  bloquesMSXJ: '1558907353-ceb54f3882ed',
  piezaLegoVerde: '1543878636-41918458581d',
  pilaLegoBlanco: '1560113562-a0a37ada6d91',
  bloquesMaderaApilados: '1638802538115-041e14d28d6a',
  legoDisperso: '1587654780291-39c9404d746b',
  bloquesFlatlay: '1603558431750-dfa36513aee6',
  legoTorreColor: '1644175897056-50f4d3a9a827',
  legoPila: '1672267273720-053bee27b9a2',
  manoApilando: '1541692641319-981cc79ee10a',
  bloquesManoJugando: '1575364289437-fb1479d52732',
  paredLego: '1690458775954-ad2ed96a5511',
  guitarraBloques: '1555448049-f8657e9fc8f3',
  torreLegoBlanco: '1659883718058-e03d7ec598ca',

  excavadoraAmarilla: '1632744120635-30e0e94a24ef',
  autoVintageAzul: '1566137966241-b713866d24ea',
  autosBlanco: '1613536491198-a0afa1916b3b',
  autosCaricatura: '1625039217696-403773390a30',
  autosBokeh: '1591438252948-fa5dd3701c2a',
  camionesColor: '1632435188998-d1daa340f4b3',
  autoVintageBlanco: '1581235720704-06d3acfcb36f',

  ovillosLana: '1640110739689-09b7822d6982',
  pincelesVasos: '1574095059431-815305ba05a0',
  pinturaDedos: '1613950190144-4f2a84c75e8c',
  utilesArte: '1596464716127-f2a82984de30',
  cuentasColor: '1609446154807-d56805f0e007',
  dibujoFlor: '1696527018053-3343b9853505',
  pinturaColorida: '1560421683-6856ea585c78',
  dibujoMariposa: '1620398722262-969d8f2bc875',
  cuentasMoradas: '1584515828432-06198c3196a8',
  acuarelas: '1632494057327-c492dccde461',

  trenMaderaAlfombra: '1596461404969-9ae70f2830c1',
  patoGoma: '1582845512747-e42001c95638',
  mordedores: '1654512041772-446bd165a3b3',
  bebePeluches: '1515488042361-ee00e0ddd4e4',
  osoCintaRoja: '1556012018-50c5c0da73bf',
  robotHojalata: '1546776230-bb86256870ce',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Juguetes',
  tel: '(01) 640 2200',
  correo: 'hola@tienda.com',
  ciudad: 'Lima, Peru',
};

export const anunciosTop = [
  'Envio express: pedidos antes de las 3pm de L-V',
  'Envio a domicilio a otras provincias: de 3 a 6 dias habiles',
  'Retiro gratis en tienda en San Isidro y Surco',
];

export const navPrincipal = [
  { t: 'Sigue aqui tu pedido', href: '#garantias' },
  { t: 'Gift Card', href: '#newsletter' },
];

export const megaMenu = [
  {
    cat: 'Animales y coleccionables',
    sub: ['Animales de granja', 'Dinosaurios', 'Casas y accesorios', 'Ver todo animales y coleccionables'],
  },
  {
    cat: 'Arte y manualidades',
    sub: ['Pintura y acuarelas', 'Modelado', 'Stickers y decoracion', 'Cuentas y bisuteria'],
  },
  {
    cat: 'Ciencia y experimentos',
    sub: ['Kits de robotica', 'Magnetismo', 'Laboratorio casero', 'Ciencia y naturaleza'],
  },
  {
    cat: 'Juegos de mesa',
    sub: ['Estrategia', 'Familiares', 'Cartas', 'Juegos retro'],
  },
  {
    cat: 'Juegos didacticos',
    sub: ['Bebes', 'Preescolar', 'STEM', 'Autorregulacion y calma'],
  },
  {
    cat: 'Munecas y bebes',
    sub: ['Munecas', 'Accesorios', 'Casas de munecas', 'Cochecitos'],
  },
  {
    cat: 'Vehiculos y rodados',
    sub: ['Autos a friccion', 'Rodados', 'Medios de transporte', 'Pistas'],
  },
  {
    cat: 'Juego de roles',
    sub: ['Cocina', 'Herramientas', 'Disfraces', 'Espacios de decoracion'],
  },
  {
    cat: 'Libros y cuentos',
    sub: ['Cuentos', 'Pack de actividades', 'Stickers'],
  },
  {
    cat: 'Peluches y squishies',
    sub: ['Peluches', 'Squishies', 'Antiestres'],
  },
];

export const marcasChip = ['PlayLab', 'Retono', 'ArteMax', 'Aventura Kids', 'MiniLab', 'BrickPlay'];
export const edadesChip = ['0 a 2 anos', '3 a 5 anos', '6 a 8 anos', '9 a 12 anos', '+13 anos'];
export const precioChip = ['Hasta S/ 29', 'S/ 30 a S/ 59', 'S/ 60 a S/ 99', 'S/ 100 a mas'];

export const beneficios = [
  { t: 'Recien llegados', d: 'Ultimos ingresos', ico: 'caja', color: 'verde' },
  { t: 'Envio express', d: 'Pide antes de las 3pm', ico: 'envio', color: 'oro' },
  { t: 'Pack de juegos', d: 'Mas juegos, mejor precio', ico: 'etiqueta', color: 'terracota' },
  { t: 'Baby shower', d: 'Encuentra el detalle ideal', ico: 'corazon', color: 'rosa' },
];

export const heroSlides = [
  {
    kicker: 'Novedades',
    titulo: 'Descubre lo nuevo en juegos',
    sub: 'Sets de ciencia, arte y construccion que llegaron esta semana a tienda.com.',
    cta: 'Ver novedades',
    img: u(IMG.bloquesFlatlay, 1400),
  },
  {
    kicker: 'Compra y recibe hoy',
    titulo: 'Envio express en Lima',
    sub: 'Valido en la categoria Envio Express, pedidos antes de las 3:00 pm de lunes a viernes.',
    cta: 'Comprar ahora',
    img: u(IMG.legoDisperso, 1400),
  },
  {
    kicker: 'Para toda la familia',
    titulo: 'Tardes de juegos de mesa',
    sub: 'Estrategia, cartas y clasicos para compartir en casa.',
    cta: 'Ver juegos de mesa',
    img: u(IMG.familiaJugando, 1400),
  },
];

export const tendencia = {
  titulo: 'Los squishies mas virales ya estan aqui',
  sub: 'Suaves, coleccionables y dificiles de soltar.',
  cta: 'Ver todos los modelos',
  img: u(IMG.peluchesColorido, 900),
  productos: [
    { nombre: 'Squishy Fun Serie Frutas', precio: 29.9, img: u(IMG.peluchesColores, 300) },
    { nombre: 'Squishy Fun Serie Animales', precio: 29.9, img: u(IMG.peluchesMorados, 300) },
    { nombre: 'Squishy Fun Serie Mix', precio: 29.9, img: u(IMG.conejoMorado, 300) },
  ],
};

export const novedadesPorMarca = [
  {
    marca: 'Lo nuevo de PlayLab',
    productos: [
      { nombre: 'Set de ciencia magnetica modelo oruga', precio: 69.9, img: u(IMG.legoTorreColor) },
      { nombre: 'Moldea y pinta figuras modelo osos', precio: 39.9, img: u(IMG.pinturaDedos) },
      { nombre: 'Tableta para dibujar con luz y sonido', precio: 69.9, img: u(IMG.dibujoFlor) },
      { nombre: 'Set de robotica arma un robot', precio: 69.9, img: u(IMG.robotsMadera) },
      { nombre: 'Set aprende a bordar punto cruz mini', precio: 49.9, img: u(IMG.cuentasColor) },
      { nombre: 'Set decora tu propia casa de hadas', precio: 49.9, img: u(IMG.casaBloques) },
    ],
  },
  {
    marca: 'Descubre las novedades de Retono',
    productos: [
      { nombre: 'Juego Cookies Party en lata', precio: 49.9, img: u(IMG.dadosCasitas) },
      { nombre: 'Bingo loteria en lata', precio: 119.9, img: u(IMG.cartasFichas) },
      { nombre: 'Maletin de cartas 300 fichas', precio: 299, img: u(IMG.fichasEstrategia) },
      { nombre: 'Domino gigante de madera en caja', precio: 169, img: u(IMG.bloquesAbecedario) },
      { nombre: 'Cuentas para collares modelo animales', precio: 35, img: u(IMG.cuentasMoradas) },
      { nombre: 'Juego de cartas mini travel size', precio: 9.9, img: u(IMG.dadosLetrasJuego) },
    ],
  },
];

export const destacados = [
  { nombre: 'Duelo Rapido Encuentra el Par', precio: 69, tag: 'Unidades limitadas', img: u(IMG.dadosFichasVista) },
  { nombre: 'Duelo Rapido Kids', precio: 69, tag: 'Unidades limitadas', img: u(IMG.mapaJuegoMesa) },
  { nombre: 'Virus Escapa del Contagio', precio: 60, tag: 'Unidades limitadas', img: u(IMG.tableroConquista) },
  { nombre: 'Polilla Tramposa', precio: 65, tag: 'Unidades limitadas', img: u(IMG.dadosCayendo) },
  { nombre: 'Ritmo y Musica en Lata', precio: 90, tag: 'Unidades limitadas', img: u(IMG.pilaLegoBlanco) },
  { nombre: 'Chao Pescao Cartas', precio: 80, tag: 'Unidades limitadas', img: u(IMG.legoPila) },
  { nombre: 'Kit para Reposteria Miniatura', precio: 160, tag: 'Unidades limitadas', img: u(IMG.utilesArte) },
];

export const marcasSecundarias = [
  {
    marca: 'Descubre lo mejor de MiniLab',
    productos: [
      { nombre: 'Sonajero de madera modelo animal', precio: 25, img: u(IMG.trenMaderaAlfombra) },
      { nombre: 'Pato de bano clasico', precio: 19.9, img: u(IMG.patoGoma) },
      { nombre: 'Set de mordedores blandos', precio: 29.9, img: u(IMG.mordedores) },
      { nombre: 'Peluche primeros meses suave', precio: 45, img: u(IMG.bebePeluches) },
      { nombre: 'Oso clasico con moño', precio: 39.9, img: u(IMG.osoCintaRoja) },
      { nombre: 'Robot de hojalata retro', precio: 55, img: u(IMG.robotHojalata) },
    ],
  },
  {
    marca: 'Packs disenados para multiplicar la diversion',
    productos: [
      { nombre: 'Pack 3 autos a friccion', precio: 45, img: u(IMG.autosCaricatura) },
      { nombre: 'Pack camiones de construccion', precio: 55, img: u(IMG.camionesColor) },
      { nombre: 'Excavadora a friccion XL', precio: 39.9, img: u(IMG.excavadoraAmarilla) },
      { nombre: 'Auto clasico de coleccion', precio: 29.9, img: u(IMG.autoVintageAzul) },
      { nombre: 'Pack autos deportivos x2', precio: 35, img: u(IMG.autosBokeh) },
      { nombre: 'Auto vintage edicion especial', precio: 49.9, img: u(IMG.autoVintageBlanco) },
    ],
  },
];

export const categorias = [
  { t: 'Bloques y construccion', img: u(IMG.torreLegoBlanco, 420) },
  { t: 'Peluches', img: u(IMG.osoBlanco, 420) },
  { t: 'Juegos de mesa', img: u(IMG.monopolio, 420) },
  { t: 'Arte y manualidades', img: u(IMG.acuarelas, 420) },
  { t: 'Vehiculos', img: u(IMG.autosColor, 420) },
  { t: 'Bebes', img: u(IMG.abaco, 420) },
];

export const testimonios = [
  { estrellas: 5, titulo: 'Quedo precioso y util', texto: 'Llego antes de lo esperado y a mi hija le encanto.', autor: 'Gloria N.', img: u(IMG.bloquesAbecedario, 90) },
  { estrellas: 5, titulo: 'Super satisfying', texto: 'La textura es genial, superó lo que esperaba.', autor: 'Camila R.', img: u(IMG.peluchesMorados, 90) },
  { estrellas: 5, titulo: 'Buenisimo', texto: 'Excelente calidad de materiales, lo recomiendo.', autor: 'Charlotte', img: u(IMG.figurasColor, 90) },
  { estrellas: 5, titulo: 'Excelente compra', texto: 'Muy buena atencion y el juguete es resistente.', autor: 'JC', img: u(IMG.legoDisperso, 90) },
  { estrellas: 5, titulo: 'Muy buena atencion', texto: 'Pedi dos paquetes distintos y llegaron impecables.', autor: 'Milagros del C.', img: u(IMG.dinosaurioPeluche, 90) },
  { estrellas: 5, titulo: 'Super recomendado', texto: 'Mi hijo disfruta armar todos los dias con este set.', autor: 'Jorge V.', img: u(IMG.piezaLegoVerde, 90) },
];

export const garantiasFinal = [
  { t: 'Sigue aqui tu pedido', d: 'Verifica el estado de tu orden', ico: 'pedido' },
  { t: 'Envio Express', d: 'Compra antes de las 3pm de L-V', ico: 'envio' },
  { t: 'Te ayudamos', d: 'De lunes a viernes', ico: 'ayuda' },
  { t: 'Libro de reclamaciones', d: 'Atencion garantizada', ico: 'libro' },
];

export const pagoMetodos = ['Visa', 'Mastercard', 'Amex', 'Diners'];

export const footerCols = [
  {
    t: 'Contacto web',
    links: ['Lunes a Viernes 10:00 - 19:00 hrs', 'Venta Whatsapp', marca.tel, marca.correo],
  },
  {
    t: 'Conocenos',
    links: ['Quienes somos', 'Contacto', 'Blog'],
  },
  {
    t: 'Informacion',
    links: ['Terminos y condiciones', 'Politica de despachos y cambios', 'Venta mayorista', 'Preguntas frecuentes'],
  },
];

export const tiendas = [
  { t: 'San Isidro', dir: 'Av. Pardo y Aliaga 621, San Isidro', horario: 'Lunes a Viernes 10:00 a 19:00 hrs · Sabado 10:00 a 18:00 hrs' },
  { t: 'Centro Comercial El Polo', dir: 'C.C. El Polo tienda B215, Santiago de Surco', horario: 'Lunes a Viernes 10:00 a 19:00 hrs · Sabado 10:00 a 18:00 hrs' },
];

export const chatCanned = [
  'Con gusto te ayudo. Puedes elegir por edad, marca o categoria (bloques, peluches, arte, juegos de mesa).',
  'Nuestro envio express llega el mismo dia si pides antes de las 3pm en distritos seleccionados.',
  'Puedes rastrear tu pedido desde el enlace "Sigue aqui tu pedido" en el menu principal.',
  'Aceptamos Visa, Mastercard, Amex y Diners. La compra es 100% segura.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

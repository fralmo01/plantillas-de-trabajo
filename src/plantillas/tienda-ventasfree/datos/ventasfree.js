const u = (id, w = 600, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const VF_IMG = {
  // Hero banners
  'vf-hero-1': '1581092160607-ee22621dd758', // Microscopio / Microelectrónica QIANLI
  'vf-hero-2': '1581092162384-8987c1d64718', // Fuente de alimentación digital AIFEN
  'vf-hero-3': '1512054502232-10a0a035d672', // Máquina / Reparación de Hidrogel
  'vf-hero-4': '1583863788434-e58a36330cf0', // Cables y cargadores UGREEN

  // Banner Hidrogel
  'vf-hidrogel-banner': '1512054502232-10a0a035d672',

  // Categorias circulares
  'vf-cat-1': '1512054502232-10a0a035d672', // Accesorios repara LCD
  'vf-cat-2': '1581092160607-ee22621dd758', // Accesorios soldadura
  'vf-cat-3': '1504148455328-c376907d081c', // Amolador
  'vf-cat-4': '1523275335684-37898b6baf30', // Apple Watch + Audífonos
  'vf-cat-5': '1581092162384-8987c1d64718', // Estación de calor
  'vf-cat-6': '1609081219090-a6d81d3085bf', // Baterías
  'vf-cat-7': '1583863788434-e58a36330cf0', // Cargador + cables
  'vf-cat-8': '1581092160607-ee22621dd758', // Cautín repuestos
  'vf-cat-9': '1530124566582-a618bc2615dc', // Combo herramientas
  'vf-cat-10': '1581092160607-ee22621dd758', // Herramienta apertura
  'vf-cat-11': '1581092162384-8987c1d64718', // Cuchillas bisturí
  'vf-cat-12': '1517420704952-d9f39e95b43e', // Curado UV

  // Combos taller
  'vf-combo-1': '1581092160607-ee22621dd758', // Combo mi taller profesional
  'vf-combo-2': '1530124566582-a618bc2615dc', // Combo herramientas Kit Emprendedor
  'vf-combo-3': '1581092162384-8987c1d64718', // Combo soldador básico

  // Hidrogel productos
  'vf-hg-1': '1581092162384-8987c1d64718', // Máquina presión TUOLI
  'vf-hg-2': '1512054502232-10a0a035d672', // Máquina corte hidrogel SUNSHINE
  'vf-hg-3': '1607604276583-eef5d076aa5f', // Lámina adhesivo full color
  'vf-hg-4': '1565849904461-04a58ad377e0', // Lámina anti-espía

  // Productos catálogo
  'vf-p1': '1581092160607-ee22621dd758', // Estación JBC C210
  'vf-p2': '1581092162384-8987c1d64718', // Estación SUGON T12
  'vf-p3': '1581092160607-ee22621dd758', // Estación SUGON T26D
  'vf-p4': '1581092162384-8987c1d64718', // Estación YIHUA 853D
  'vf-p5': '1517420704952-d9f39e95b43e', // Lámpara extractor humo 2UUL
  'vf-p6': '1581092160607-ee22621dd758', // Punta cautín SUGON K
  'vf-p7': '1581092160607-ee22621dd758', // Monocular AIXUN
  'vf-p8': '1581092160607-ee22621dd758', // Trinocular QIANLI 7-50x
  'vf-p9': '1581092162384-8987c1d64718', // Estación YOUYUE
  'vf-p10': '1581092160607-ee22621dd758', // Trinocular QIANLI 6x 45x
  'vf-p11': '1581092160607-ee22621dd758', // Cautín portátil YOUYUE
  'vf-p12': '1581092160607-ee22621dd758', // Kit puntas XSOLDERING
  'vf-p13': '1609081219090-a6d81d3085bf', // Batería iPhone 12 Pro Max
  'vf-p14': '1512054502232-10a0a035d672', // Pantalla OLED iPhone 13
  'vf-p15': '1583863788434-e58a36330cf0', // Cable UGREEN 65W
};

export const getVfImg = (seed, w = 600, h = 600) => {
  const id = VF_IMG[seed] || '1581092160607-ee22621dd758';
  return u(id, w, h);
};

export const img = getVfImg;

export const marca = {
  nombre: 'tienda.com',
  tiendaFisica: 'Galería El Progreso - Tienda 1986',
  direccion: 'Av. Argentina 530 - Lima Cercado',
};

export const whatsapp = {
  numero: '51945678123',
  visible: '945 678 123',
  mensajeGeneral: 'Hola tienda.com, quiero información sobre sus productos.',
  mensajeAyuda: 'Hola, necesito ayuda para elegir un producto',
  mensajeModelo: 'Hola, no encuentro el modelo que busco, ¿me ayudan?',
};

export const barraSuperior = {
  tienda: marca.tiendaFisica,
  direccion: marca.direccion,
  telefono: '941 508 011 - 955 217 413',
};

export const megaMenu = [
  {
    col: 'Microscopios',
    links: ['Microscopio accesorios', 'Microscopio binocular', 'Microscopio digital', 'Microscopio monocular', 'Microscopio trinocular', 'Sujetador de placa'],
  },
  {
    col: 'Diagnóstico',
    links: ['Multímetros & activadores', 'Programadores varios'],
  },
  {
    col: 'Estaciones',
    links: ['Estación 2 en 1', 'Estación de calor', 'Estación de soldar', 'Accesorios soldadura', 'Cautín repuestos'],
  },
  {
    col: 'Máquinas',
    links: ['Extractor burbujas/humo', 'Laminadores', 'Lavadoras'],
  },
  {
    col: 'Electrónica',
    links: ['Fuente de alimentación', 'Amolador', 'Suministros reballing', 'Stencil', 'Curado UV', 'Pin de carga'],
  },
  {
    col: 'Energía',
    links: ['Baterías', 'Cargador + cables'],
  },
  {
    col: 'Pantallas',
    links: ['Pantallas celular', 'Accesorios repara LCD', 'Suministros LCD', 'Separadores'],
  },
  {
    col: 'Hidrogel',
    links: ['Hidrogel láminas', 'Hidrogel accesorios', 'Hidrogel máquinas', 'Planchas sublimadoras'],
  },
  {
    col: 'Herramientas',
    links: ['Pinzas', 'Desarmadores', 'Cuchillas bisturí', 'Herramienta apertura'],
  },
  {
    col: 'Organizadores',
    links: ['Organizador de espacio', 'Combo herramientas', 'Mesas de trabajo'],
  },
];

export const navSecundaria = [
  { t: 'Marcas', href: '#marcas' },
  { t: 'Combos de herramientas', href: '#combos' },
  { t: 'Servicio técnico baterías', href: '#servicio' },
  { t: 'Servicio técnico Hidrogel', href: '#hidrogel' },
  { t: 'Pantallas LCD', href: '#buscar-pantallas' },
];

export const heroBanners = [
  { t: 'REPARA MEJOR', sub: 'GORILLA 6558X', chip: 'QIANLI', precio: 'S/ 1,895', seed: 'vf-hero-1', img: getVfImg('vf-hero-1', 700, 500), grande: true },
  { t: 'POTENCIA BAJO CONTROL', sub: 'AIFEN 3006 · 30V · 6A · 180W', chip: '', precio: '', seed: 'vf-hero-2', img: getVfImg('vf-hero-2', 700, 500) },
  { t: '¿TU MÁQUINA DE HIDROGEL FALLA?', sub: 'Reparación y mantenimiento especializado', chip: '', precio: '', seed: 'vf-hero-3', img: getVfImg('vf-hero-3', 700, 500) },
  { t: 'CARGA SIN LÍMITES', sub: 'Cables y cargadores UGREEN', chip: '', precio: '', seed: 'vf-hero-4', img: getVfImg('vf-hero-4', 700, 500) },
];

export const beneficios = [
  { t: 'Compra segura', sub: 'Protegemos tu compra al 100%', icono: 'escudo' },
  { t: 'Envíos rápidos', sub: 'A todo el Perú', icono: 'camion' },
  { t: 'Asesoría técnica', sub: 'Por técnicos expertos', icono: 'auricular' },
  { t: 'Garantía', sub: 'Productos originales y con garantía', icono: 'check' },
  { t: 'Tienda física', sub: 'Atención presencial en Lima Cercado', icono: 'tienda' },
];

export const marcasDestacadas = ['MECHANIC', 'SUGON', '2UUL', 'RELIFE', 'JCID', 'UGREEN', 'YCS', 'AIXUN', 'QUICK', 'JBC'];

export const categoriasCirculares = [
  { t: 'Accesorios repara LCD', seed: 'vf-cat-1', img: getVfImg('vf-cat-1', 140, 140) },
  { t: 'Accesorios soldadura', seed: 'vf-cat-2', img: getVfImg('vf-cat-2', 140, 140) },
  { t: 'Amolador', seed: 'vf-cat-3', img: getVfImg('vf-cat-3', 140, 140) },
  { t: 'Apple Watch + Audífonos', seed: 'vf-cat-4', img: getVfImg('vf-cat-4', 140, 140) },
  { t: 'Estación de calor', seed: 'vf-cat-5', img: getVfImg('vf-cat-5', 140, 140) },
  { t: 'Baterías', seed: 'vf-cat-6', img: getVfImg('vf-cat-6', 140, 140) },
  { t: 'Cargador + cables', seed: 'vf-cat-7', img: getVfImg('vf-cat-7', 140, 140) },
  { t: 'Cautín repuestos', seed: 'vf-cat-8', img: getVfImg('vf-cat-8', 140, 140) },
  { t: 'Combo herramientas', seed: 'vf-cat-9', img: getVfImg('vf-cat-9', 140, 140) },
  { t: 'Herramienta apertura', seed: 'vf-cat-10', img: getVfImg('vf-cat-10', 140, 140) },
  { t: 'Cuchillas bisturí', seed: 'vf-cat-11', img: getVfImg('vf-cat-11', 140, 140) },
  { t: 'Curado UV', seed: 'vf-cat-12', img: getVfImg('vf-cat-12', 140, 140) },
];

export const serviciosTecnicos = [
  { t: 'Cambio de batería iPhone', icono: 'bateria' },
  { t: 'Cambio de pantalla iPhone', icono: 'pantalla' },
  { t: 'Diagnóstico gratuito', icono: 'check' },
  { t: 'Recojo y entrega en tienda', icono: 'tienda' },
];

export const combosTaller = [
  { nombre: 'Combo mi taller profesionality 2026', precio: 895, antes: 1169, seed: 'vf-combo-1', img: getVfImg('vf-combo-1', 400, 300), cod: '01192' },
  { nombre: 'COMBO herramientas "Kit Emprendedor 2026"', precio: 799, antes: 1154, seed: 'vf-combo-2', img: getVfImg('vf-combo-2', 400, 300), cod: '01191' },
  { nombre: 'COMBO soldador básico', precio: 415, antes: 483, seed: 'vf-combo-3', img: getVfImg('vf-combo-3', 400, 300), cod: '01190' },
];

export const hidrogelProductos = [
  { marca: 'TUOLI', nombre: 'Máquina presión sublimado al vacío 3D multifunción TUOLI TL-X9', precio: 1685, cod: '01128', seed: 'vf-hg-1', img: getVfImg('vf-hg-1', 400, 350) },
  { marca: 'SUNSHINE', nombre: 'Máquina corte hidrogel 16 pulgadas + diseño personalizado ILIMITADO', precio: 1785, cod: '008B1', seed: 'vf-hg-2', img: getVfImg('vf-hg-2', 400, 350) },
  { marca: 'SUNSHINE', nombre: 'Lámina adhesivo imprimible full color SUNSHINE SS-057Y', precio: 295, cod: '00264', seed: 'vf-hg-3', img: getVfImg('vf-hg-3', 400, 350) },
  { marca: 'SUNSHINE', nombre: 'Lámina hidrogel ANTI-ESPÍA 7 pulgadas SUNSHINE SS-057S', precio: 630, cod: '00270', seed: 'vf-hg-4', img: getVfImg('vf-hg-4', 400, 350) },
];

export const filtrosCategoria = [
  'Estacion de soldar',
  'Estacion de calor',
  'Microscopio trinocular',
  'Microscopio monocular',
  'Cautín repuestos',
  'Extractor Burbujas/Humo',
  'Accesorios repara LCD',
  'Baterias',
  'Pantallas celular',
];
export const filtrosMarca = ['2UUL', 'QIANLI', 'SUGON', 'JBC', 'RELIFE', 'MECHANIC', 'UGREEN', 'YCS', 'AIXUN', 'QUICK'];
export const ordenarPor = ['Relevancia', 'Menor precio', 'Mayor precio', 'Más nuevos', 'Más vendidos'];
export const sugerenciasBusqueda = ['cautin', 'microscopio', 'pantalla iphone', 'bateria', 'estacion de soldar'];

export const catalogo = [
  { nombre: 'Estación de soldar cautín profesional C210 JBC CD-2SHQF', marca: 'JBC', precio: 1185, cod: '00141', categoria: 'Estacion de soldar', seed: 'vf-p1', img: getVfImg('vf-p1', 400, 400), tags: ['cautin', 'soldar', 'estacion'] },
  { nombre: 'Estación de soldar cautín profesional 2 puntas T12 SUGON', marca: 'SUGON', precio: 325, cod: '01174', categoria: 'Estacion de soldar', seed: 'vf-p2', img: getVfImg('vf-p2', 400, 400), tags: ['cautin', 'soldar'] },
  { nombre: 'Estación de soldar cautín maneral C210 profesional SUGON T26D', marca: 'SUGON', precio: 645, cod: '00133', categoria: 'Estacion de soldar', seed: 'vf-p3', img: getVfImg('vf-p3', 400, 400), tags: ['cautin', 'soldar'] },
  { nombre: 'Estación 3 en 1 fuente + cautín + pistola de calor YIHUA 853D 5A II', marca: 'YIHUA', precio: 785, cod: '01111', categoria: 'Estacion de calor', seed: 'vf-p4', img: getVfImg('vf-p4', 400, 400), tags: ['cautin', 'calor', 'fuente'] },
  { nombre: 'Lámpara LED con brazo retráctil + extractor humo smoke lamp', marca: '2UUL', precio: 195, cod: '00750', categoria: 'Extractor Burbujas/Humo', seed: 'vf-p5', img: getVfImg('vf-p5', 400, 400), tags: ['extractor', 'humo', 'lampara'] },
  { nombre: 'Punta cautín profesional serie C210 punta hacha SUGON K', marca: 'SUGON', precio: 35, cod: '00446', categoria: 'Cautín repuestos', seed: 'vf-p6', img: getVfImg('vf-p6', 400, 400), tags: ['cautin', 'punta', 'repuesto'] },
  { nombre: 'Monocular académico + cámara HD 8mp + lámpara 56 led + pantalla', marca: 'AIXUN', precio: 535, cod: '01134', categoria: 'Microscopio monocular', seed: 'vf-p7', img: getVfImg('vf-p7', 400, 400), tags: ['microscopio', 'monocular'] },
  { nombre: 'Trinocular Profesional + Zoom 7-50x + lente 10x 20mm + lampara', marca: 'QIANLI', precio: 985, cod: '01099', categoria: 'Microscopio trinocular', seed: 'vf-p8', img: getVfImg('vf-p8', 400, 400), tags: ['microscopio', 'trinocular'] },
  { nombre: 'Estación de calor 2 en 1 cautín + pistola de aire caliente 50-600w', marca: 'YOUYUE', precio: 355, cod: '01097', categoria: 'Estacion de calor', seed: 'vf-p9', img: getVfImg('vf-p9', 400, 400), tags: ['cautin', 'calor', 'pistola'] },
  { nombre: 'Trinocular Profesional + lámpara led + lente 10x-25mm + 6x 45x', marca: 'QIANLI', precio: 1465, cod: '01096', categoria: 'Microscopio trinocular', seed: 'vf-p10', img: getVfImg('vf-p10', 400, 400), tags: ['microscopio', 'trinocular'] },
  { nombre: 'Estación de soldar cautín portátil punta C210 YOUYUE 305', marca: 'YOUYUE', precio: 245, cod: '01095', categoria: 'Estacion de soldar', seed: 'vf-p11', img: getVfImg('vf-p11', 400, 400), tags: ['cautin', 'soldar', 'portatil'] },
  { nombre: 'Kit 3 puntas cautín cobre recubierto XSOLDERING 900M', marca: 'XSOLDERING', precio: 45, cod: '01094', categoria: 'Cautín repuestos', seed: 'vf-p12', img: getVfImg('vf-p12', 400, 400), tags: ['cautin', 'puntas', 'repuesto'] },
  { nombre: 'Batería iPhone 12 Pro Max capacidad original 3687 mAh', marca: 'JC', precio: 89, cod: '01050', categoria: 'Baterias', seed: 'vf-p13', img: getVfImg('vf-p13', 400, 400), tags: ['bateria', 'iphone'] },
  { nombre: 'Pantalla OLED iPhone 13 calidad incell premium', marca: 'RJ', precio: 289, cod: '01051', categoria: 'Pantallas celular', seed: 'vf-p14', img: getVfImg('vf-p14', 400, 400), tags: ['pantalla', 'iphone', 'oled'] },
  { nombre: 'Cable iPhone 65W Serie 15-16 carga rápida trenzado', marca: 'UGREEN', precio: 20, cod: '02001', categoria: 'Accesorios repara LCD', seed: 'vf-p15', img: getVfImg('vf-p15', 400, 400), tags: ['cable', 'cargador'] },
];

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

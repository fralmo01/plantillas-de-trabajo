const img = (seed, w = 500, h = 500) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const marca = {
  nombre: 'tienda.com',
  sub: 'Natural',
  tel: '+51 900 000 000',
  correo: 'contacto@tienda.com',
  ciudad: 'Lima, Peru',
};

export const navPrincipal = [
  { t: 'Inicio', href: '/' },
  { t: 'Vitaminas', menu: 'vitaminas' },
  { t: 'Suplementos', menu: 'suplementos' },
  { t: 'Abarrotes', menu: 'abarrotes' },
  { t: 'Frescos y Congelados', menu: 'frescos' },
  { t: 'Cuidado Personal', menu: 'cuidado' },
];

export const megaMenus = {
  vitaminas: {
    columnas: [
      { t: 'Vitaminas', links: ['Vitamina B', 'Vitamina C', 'Vitamina D', 'Vitamina E', 'Multivitaminicos', 'Otras vitaminas'] },
      { t: 'Bienestar', links: ['Omegas', 'Antioxidantes', 'Antiestres y Sueno', 'Otros'] },
      { t: 'Naturales', links: ['Aguaje', 'Curcuma', 'Maca Negra', 'Maca Roja', 'Moringa', 'Cardo Mariano'] },
      { t: 'Gomitas', links: ['Gomitas para adultos', 'Gomitas kids'] },
      { t: 'Digestion y Salud', links: ['Probioticos', 'Enzimas', 'Extractos', 'Otros'] },
    ],
  },
  suplementos: {
    columnas: [
      { t: 'Proteinas', links: ['Whey Protein', 'Vegana', 'Caseina', 'Claras de huevo'] },
      { t: 'Rendimiento', links: ['Creatina', 'Pre-entreno', 'BCAA', 'Glutamina'] },
      { t: 'Control de peso', links: ['Quemadores', 'Bloqueadores', 'L-Carnitina'] },
      { t: 'Accesorios', links: ['Shakers', 'Dosificadores', 'Barras y snacks'] },
    ],
  },
  abarrotes: {
    columnas: [
      { t: 'Despensa', links: ['Aceites', 'Harinas sin gluten', 'Cereales', 'Endulzantes'] },
      { t: 'Snacks', links: ['Frutos secos', 'Galletas de arroz', 'Chips saludables'] },
      { t: 'Panaderia', links: ['Panes integrales', 'Tostadas', 'Mermeladas'] },
    ],
  },
  frescos: {
    columnas: [
      { t: 'Bebidas vegetales', links: ['Leche de almendra', 'Leche de avena', 'Leche de coco'] },
      { t: 'Congelados', links: ['Hamburguesas veganas', 'Vegetales congelados', 'Postres sin azucar'] },
    ],
  },
  cuidado: {
    columnas: [
      { t: 'Rostro', links: ['Cremas faciales', 'Sueros', 'Protector solar'] },
      { t: 'Cuerpo', links: ['Jabones naturales', 'Cremas corporales', 'Desodorantes'] },
      { t: 'Higiene oral', links: ['Pasta dental sin fluor', 'Enjuague natural'] },
    ],
  },
};

export const heroSlides = [
  {
    kicker: 'Nuevo producto',
    titulo: 'Coco / Berry Matcha',
    sub: 'Matcha sabor coco y sabor fresa, prueba los nuevos matcha saborizados.',
    precio: 33.92,
    antes: 39.9,
    seed: 'org-hero-1',
  },
  {
    kicker: 'Recien llegado',
    titulo: 'Ultra Colageno Grass Fed',
    sub: 'Colageno tipo 1 y 3 en polvo, ideal para piel, cabello y articulaciones.',
    precio: 79.9,
    antes: 99.9,
    seed: 'org-hero-2',
  },
  {
    kicker: 'Lo mas top',
    titulo: 'Creatina Monohidratada',
    sub: 'Micronizada para mejor absorcion, ideal para tu rutina de gym.',
    precio: 89.9,
    antes: 109.9,
    seed: 'org-hero-3',
  },
];

export const promos = [
  { nombre: 'Omega 3 Nutricost x120caps', precio: 172.8, antes: 192, tag: '-10%', seed: 'org-p1' },
  { nombre: 'Citrato de Magnesio Premium x200gr', precio: 40.41, antes: 44.9, tag: '-10%', seed: 'org-p2' },
  { nombre: 'Avena en Hojuela sin Gluten 1.5kg', precio: 27.12, antes: 31.9, tag: '-15%', seed: 'org-p3' },
  { nombre: 'Gelatina sin Sabor x300gr 100% Natural', precio: 28.8, antes: 32, tag: '-10%', seed: 'org-p4' },
  { nombre: 'Creatina Monohidratada x500gr', precio: 98.91, antes: 109.9, tag: '-10%', seed: 'org-p5' },
  { nombre: 'Magnesio con Vitamina B6 x100tabletas', precio: 69.3, antes: 99, tag: '-30%', seed: 'org-p6' },
];

export const novedades = [
  { nombre: 'Ultra Collagen Grass Fed Peptides', precio: 79.9, antes: 99.9, tag: '-20%', seed: 'org-n1' },
  { nombre: 'Galletas de Arroz con Leche', precio: 12.5, seed: 'org-n2' },
  { nombre: 'Galletas de Arroz Integral', precio: 12.5, seed: 'org-n3' },
  { nombre: 'Pudin Proteico Sabor Vainilla', precio: 9.9, seed: 'org-n4' },
  { nombre: 'Sal Rosada del Himalaya 454g', precio: 15.9, antes: 18.7, tag: '-15%', seed: 'org-n5' },
  { nombre: 'Citrato de Potasio Premium 200g', precio: 33.5, seed: 'org-n6' },
];

export const productosSaludables = [
  { t: 'Antiedad', seed: 'org-cat-1' },
  { t: 'Antiestres', seed: 'org-cat-2' },
  { t: 'Todo para el Gym', seed: 'org-cat-3' },
  { t: 'Endulzantes', seed: 'org-cat-4' },
];

export const bannerAyuda = {
  titulo: 'Quieres ayudar al crecimiento de tus hijos?',
  destacado: 'PREMIUM HGH',
  precio: 188.72,
  antes: 235.9,
  seed: 'org-banner-hgh',
};

export const bannersDuo = [
  { titulo: 'Hasta 15% dcto.', sub: 'en proteinas y creatinas', seed: 'org-duo-1' },
  { titulo: '10% en toda la linea', sub: 'productos naturales para tu bienestar', seed: 'org-duo-2' },
];

export const categorias = [
  { t: 'Sin Gluten', seed: 'org-nc-1' },
  { t: 'Organicos', seed: 'org-nc-2' },
  { t: 'Keto y Bajos en Carbos', seed: 'org-nc-3' },
  { t: 'Veganos', seed: 'org-nc-4' },
];

export const marcas = ['La Purita', 'Smart Blends', 'Herbals & Health', "Nature's Truth", 'Nutricost', 'Lab Nutrition'];

export const footerCols = [
  { t: 'Informacion', links: ['Nosotros', 'Nuestras tiendas', 'Trabaja con nosotros'] },
  { t: 'Ayuda', links: ['Preguntas frecuentes', 'Promociones y campanas', 'Politicas de privacidad', 'Politicas de despacho', 'Terminos y condiciones'] },
];

export const chatCanned = [
  'Hola, soy el asistente de tienda.com. Puedo ayudarte a encontrar vitaminas, suplementos o productos naturales.',
  'Hacemos delivery gratis a todo el Peru por compras desde S/ 230. Tambien puedes recoger en cualquiera de nuestras tiendas.',
  'Puedes ver nuestras tiendas y horarios en la seccion "Tiendas" del menu.',
  'Aceptamos tarjetas, billeteras digitales y pago contraentrega en Lima.',
  'Un asesor humano continuara esta conversacion en breve. Gracias por escribir a tienda.com.',
];

export const tiendas = [
  {
    nombre: 'tienda.com Miraflores',
    grupo: 'natural',
    direccion: 'Av. Benavides 455, Miraflores',
    telefono: '(+51) 986 425 088',
    horario: 'Lunes a Domingo 9:00 am a 9:00 pm',
    seed: 'org-t1',
  },
  {
    nombre: 'tienda.com San Isidro',
    grupo: 'natural',
    direccion: 'Av. Gral. Salaverry 2407, San Isidro',
    telefono: '(+51) 944 209 570',
    horario: 'Lunes a Domingo 9:00 am a 9:00 pm',
    seed: 'org-t2',
  },
  {
    nombre: 'tienda.com San Borja',
    grupo: 'natural',
    direccion: 'Av. Aviacion 2449, San Borja',
    telefono: '(+51) 944 596 281',
    horario: 'Lunes a Domingo 9:00 am a 9:00 pm',
    seed: 'org-t3',
  },
  {
    nombre: 'tienda.com Surco',
    grupo: 'natural',
    direccion: 'Av. Caminos del Inca 1803, Santiago de Surco',
    telefono: '(+51) 920 517 582',
    horario: 'Lunes a Domingo 9:00 am a 9:00 pm',
    seed: 'org-t4',
  },
  {
    nombre: 'tienda.com Pueblo Libre',
    grupo: 'natural',
    direccion: 'Av. Leguia y Melendez 922, Pueblo Libre',
    telefono: '(+51) 967 195 989',
    horario: 'Lunes a Domingo 9:00 am a 9:00 pm',
    seed: 'org-t5',
  },
  {
    nombre: 'tienda.com Magdalena',
    grupo: 'natural',
    direccion: 'Jr. Bolognesi 395, Magdalena del Mar',
    telefono: '(+51) 989 960 536',
    horario: 'Lunes a Domingo 9:00 am a 9:00 pm',
    seed: 'org-t6',
  },
  {
    nombre: 'tienda.com Vitaminas Los Olivos',
    grupo: 'vitaminas',
    direccion: 'Av. Antunez de Mayolo 818, Los Olivos',
    telefono: '(+51) 932 562 949',
    horario: 'Lunes a Sabado 9:00 am a 9:00 pm, Domingo 9 am a 6 pm',
    seed: 'org-t7',
  },
  {
    nombre: 'tienda.com Vitaminas Jesus Maria',
    grupo: 'vitaminas',
    direccion: 'Av. Republica Dominicana 254, Jesus Maria',
    telefono: '(+51) 986 021 000',
    horario: 'Lunes a Sabado 9:00 am a 9:00 pm, Domingo 9 am a 6 pm',
    seed: 'org-t8',
  },
  {
    nombre: 'tienda.com Vitaminas SJL',
    grupo: 'vitaminas',
    direccion: 'Av. Gran Chimu 349-A, Urb. Zarate, San Juan de Lurigancho',
    telefono: '(+51) 907 497 685',
    horario: 'Lunes a Sabado 9:00 am a 9:00 pm, Domingo 9 am a 6 pm',
    seed: 'org-t9',
  },
  {
    nombre: 'tienda.com Vitaminas San Isidro',
    grupo: 'vitaminas',
    direccion: 'Av. Camino Real 103, San Isidro',
    telefono: '(+51) 934 206 060',
    horario: 'Lunes a Sabado 9:00 am a 9:00 pm, Domingo 9 am a 6 pm',
    seed: 'org-t10',
  },
];

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const catalogo = [
  { nombre: 'Omega 3 Nutricost x120caps', precio: 172.8, antes: 192, tag: '-10%', seed: 'org-p1', departamento: 'Vitaminas', categoria: 'Bienestar', marca: 'Nutricost', naturaleza: 'Con Gluten', tags: ['omega', 'vitaminas'] },
  { nombre: 'Citrato de Magnesio Premium x200gr', precio: 40.41, antes: 44.9, tag: '-10%', seed: 'org-p2', departamento: 'Vitaminas', categoria: 'Naturales', marca: 'Smart Blends', naturaleza: 'Sin Azucar', tags: ['magnesio', 'mineral'] },
  { nombre: 'Avena en Hojuela sin Gluten 1.5kg', precio: 27.12, antes: 31.9, tag: '-15%', seed: 'org-p3', departamento: 'Abarrotes', categoria: 'Despensa', marca: 'La Purita', naturaleza: 'Sin Gluten', tags: ['avena', 'cereal'] },
  { nombre: 'Gelatina sin Sabor x300gr 100% Natural', precio: 28.8, antes: 32, tag: '-10%', seed: 'org-p4', departamento: 'Suplementos', categoria: 'Proteinas', marca: 'Oriundos', naturaleza: 'Organico', tags: ['gelatina', 'colageno', 'proteina'] },
  { nombre: 'Creatina Monohidratada x500gr', precio: 98.91, antes: 109.9, tag: '-10%', seed: 'org-p5', departamento: 'Suplementos', categoria: 'Rendimiento', marca: 'Applied Nutrition', naturaleza: 'Sin Azucar', tags: ['creatina', 'rendimiento'] },
  { nombre: 'Magnesio con Vitamina B6 x100tabletas', precio: 69.3, antes: 99, tag: '-30%', seed: 'org-p6', departamento: 'Vitaminas', categoria: 'Bienestar', marca: 'Solgar', naturaleza: 'Vegano', tags: ['magnesio', 'vitamina b6'] },
  { nombre: 'Ultra Collagen Grass Fed Peptides', precio: 79.9, antes: 99.9, tag: '-20%', seed: 'org-n1', departamento: 'Vitaminas', categoria: 'Bienestar', marca: "Nature's Truth", naturaleza: 'Sin Gluten', tags: ['colageno', 'collagen'] },
  { nombre: 'Galletas de Arroz con Leche', precio: 12.5, seed: 'org-n2', departamento: 'Abarrotes', categoria: 'Snacks', marca: 'Dr Muller', naturaleza: 'Sin Gluten', tags: ['galletas', 'snack'] },
  { nombre: 'Galletas de Arroz Integral', precio: 12.5, seed: 'org-n3', departamento: 'Abarrotes', categoria: 'Snacks', marca: 'Dr Muller', naturaleza: 'Sin Gluten', tags: ['galletas', 'snack'] },
  { nombre: 'Pudin Proteico Sabor Vainilla', precio: 9.9, seed: 'org-n4', departamento: 'Frescos y Congelados', categoria: 'Congelados', marca: 'Hopp', naturaleza: 'Vegano', tags: ['proteina', 'postre'] },
  { nombre: 'Sal Rosada del Himalaya 454g', precio: 15.9, antes: 18.7, tag: '-15%', seed: 'org-n5', departamento: 'Abarrotes', categoria: 'Despensa', marca: 'Vivir Power Snacks', naturaleza: 'Organico', tags: ['sal'] },
  { nombre: 'Citrato de Potasio Premium 200g', precio: 33.5, seed: 'org-n6', departamento: 'Vitaminas', categoria: 'Naturales', marca: 'Smartblend', naturaleza: 'Vegano', tags: ['potasio', 'mineral'] },
  { nombre: 'Ashwagandha SriSri Tattva x60caps', precio: 45.9, seed: 'org-h1', departamento: 'Vitaminas', categoria: 'Naturales', marca: 'SriSri Tattva', naturaleza: 'Organico', tags: ['ashwagandha', 'estres'] },
  { nombre: 'Pasta Dental sin Fluor SriSri', precio: 18.5, seed: 'org-h2', departamento: 'Cuidado Personal', categoria: 'Higiene oral', marca: 'SriSri Tattva', naturaleza: 'Organico', tags: ['pasta dental', 'higiene'] },
  { nombre: 'Whey Protein Chocolate Applied Nutrition', precio: 149.9, antes: 179.9, tag: '-17%', seed: 'org-h3', departamento: 'Suplementos', categoria: 'Proteinas', marca: 'Applied Nutrition', naturaleza: 'Con Gluten', tags: ['proteina', 'whey', 'protein'] },
  { nombre: 'Leche de Almendra sin Azucar 1L', precio: 14.9, seed: 'org-h4', departamento: 'Frescos y Congelados', categoria: 'Bebidas vegetales', marca: 'Blue Llama', naturaleza: 'Vegano', tags: ['leche vegetal', 'almendra'] },
  { nombre: 'Harina de Almendra Bob\'s Red Mill 400g', precio: 32.9, seed: 'org-h5', departamento: 'Abarrotes', categoria: 'Despensa', marca: 'La Purita', naturaleza: 'Sin Gluten', tags: ['harina', 'sin gluten'] },
  { nombre: 'Endulzante Monkfruit Lakanto 100g', precio: 39.9, antes: 45.9, tag: '-13%', seed: 'org-h6', departamento: 'Abarrotes', categoria: 'Despensa', marca: 'Zana', naturaleza: 'Keto', tags: ['endulzante', 'keto'] },
];

export const filtrosDepartamento = ['Vitaminas', 'Suplementos', 'Abarrotes', 'Frescos y Congelados', 'Cuidado Personal'];
export const filtrosCategoria = ['Bienestar', 'Naturales', 'Despensa', 'Snacks', 'Proteinas', 'Rendimiento', 'Congelados', 'Bebidas vegetales', 'Higiene oral'];
export const filtrosMarca = ['Nutricost', 'Smart Blends', 'La Purita', 'Oriundos', 'Applied Nutrition', 'Solgar', "Nature's Truth", 'Dr Muller', 'Hopp', 'Vivir Power Snacks', 'Smartblend', 'SriSri Tattva', 'Blue Llama', 'Zana'];
export const filtrosNaturaleza = ['Sin Gluten', 'Sin Azucar', 'Organico', 'Vegano', 'Keto', 'Con Gluten'];
export const ordenarPor = ['Relevancia', 'Menor precio', 'Mayor precio', 'Mayor descuento'];
export const sugerenciasBusqueda = ['colageno', 'creatina', 'magnesio', 'avena', 'proteina'];

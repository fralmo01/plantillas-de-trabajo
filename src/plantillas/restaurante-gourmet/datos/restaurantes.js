export const cocinas = [
  'Biodiversidad & alturas',
  'Nikkei & omakase',
  'Criolla de autor',
  'Cevichería & fuego marino',
  'Botánica peruana',
  'Parrilla & maduraciones',
];

export const distritos = [
  {
    nombre: 'Miraflores',
    tag: 'Cuna del nikkei & alta cevichería',
    descripcion:
      'El corazón gastronómico frente al malecón: barras nikkei de clase mundial, cevicherías de culto y propuestas de vanguardia.',
    imagen: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'San Isidro',
    tag: 'Alta cocina criolla & casonas de lujo',
    descripcion:
      'Mansiones republicanas, cavas legendarias y restaurantes de autor entre olivares centenarios.',
    imagen: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Barranco',
    tag: 'Ecosistemas nativos & arte culinario',
    descripcion:
      'El distrito bohemio por excelencia, con laboratorios de biodiversidad andino-amazónica.',
    imagen: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80',
  },
  {
    nombre: 'Valle Sagrado',
    tag: 'Cocina de altura & huertos orgánicos',
    descripcion:
      'Experiencias sobre los 3.500 msnm con insumos ancestrales, tubérculos nativos y hornos de piedra.',
    imagen: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
  },
];

export const restaurantes = [
  {
    id: 'central-alturas',
    nombre: 'Ecosistemas Andinos',
    cocina: 'Biodiversidad & alturas',
    distrito: 'Barranco',
    calificacion: 4.98,
    resenas: 342,
    nivelPrecio: '$$$$',
    top50: true,
    chef: 'Virgilio & Pía',
    descripcion:
      'Un viaje sensorial por la biodiversidad peruana y sus pisos ecológicos, del mar profundo a la cordillera.',
    reconocimiento: '#1 The World’s 50 Best',
    horarios: ['19:30', '20:00', '20:30', '21:00'],
    img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'maido-nikkei',
    nombre: 'Barra Nikkei del Pacífico',
    cocina: 'Nikkei & omakase',
    distrito: 'Miraflores',
    calificacion: 4.95,
    resenas: 511,
    nivelPrecio: '$$$$',
    top50: true,
    chef: 'Micha',
    descripcion:
      'La unión del Pacífico peruano y la tradición japonesa: pescados madurados de Paita y ponzus cítricos de maracuyá.',
    reconocimiento: 'Top 10 The World’s 50 Best',
    horarios: ['13:00', '13:30', '20:00', '20:30'],
    img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'astrid-gaston',
    nombre: 'Casa Moreyra de Autor',
    cocina: 'Criolla de autor',
    distrito: 'San Isidro',
    calificacion: 4.9,
    resenas: 780,
    nivelPrecio: '$$$$',
    top50: false,
    chef: 'Gastón',
    descripcion:
      'Memoria peruana servida en una casona republicana entre olivares, con menús que recorren regiones y épocas.',
    reconocimiento: 'Latin America’s 50 Best',
    horarios: ['12:45', '13:15', '20:00', '21:15'],
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lamar-cevicheria',
    nombre: 'Cebichería del Malecón',
    cocina: 'Cevichería & fuego marino',
    distrito: 'Miraflores',
    calificacion: 4.7,
    resenas: 1240,
    nivelPrecio: '$$$',
    top50: false,
    chef: 'Gastón',
    descripcion:
      'Pesca del día sostenible, leche de tigre con ajíes nativos y brasas al sarmiento frente al mar.',
    reconocimiento: 'Guía de Oro del Perú',
    horarios: ['12:30', '13:00', '13:30', '14:00'],
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mater-botanica',
    nombre: 'Laboratorio Botánico',
    cocina: 'Botánica peruana',
    distrito: 'Barranco',
    calificacion: 4.88,
    resenas: 210,
    nivelPrecio: '$$$$',
    top50: false,
    chef: 'Pía',
    descripcion:
      'Cocina de investigación con plantas nativas, fermentos y maceraciones de hierbaluisa, muña y cacao de origen.',
    reconocimiento: 'Flor & Fauna Award',
    horarios: ['19:00', '19:30', '20:30', '21:00'],
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'merito-brasas',
    nombre: 'Parrilla & Maduraciones',
    cocina: 'Parrilla & maduraciones',
    distrito: 'San Isidro',
    calificacion: 4.6,
    resenas: 430,
    nivelPrecio: '$$$',
    top50: false,
    chef: 'Juan Luis',
    descripcion:
      'Cortes con maduración en seco de 45 días, achiote, leña de algarrobo y guarniciones de raíces andinas.',
    reconocimiento: 'Mejor parrilla de autor',
    horarios: ['20:00', '20:30', '21:00', '21:30'],
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
];

export const guias = [
  {
    titulo: 'Los templos culinarios de Lima',
    subtitulo: 'Guía por los restaurantes que redefinieron la gastronomía peruana.',
    lectura: '6 min',
    fecha: '28 ago 2026',
    tag: 'Selección de élite',
    portada: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    titulo: 'El arte secreto del omakase nikkei',
    subtitulo: 'Cómo el Pacífico peruano y la tradición japonesa forjaron una identidad única.',
    lectura: '5 min',
    fecha: '20 ago 2026',
    tag: 'Tradición nikkei',
    portada: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    titulo: 'La nueva era del ceviche & el fuego marino',
    subtitulo: 'Pesca sostenible, leches de tigre con ajíes nativos y brasas al sarmiento.',
    lectura: '4 min',
    fecha: '15 ago 2026',
    tag: 'Mar & fuego',
    portada: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
  },
];

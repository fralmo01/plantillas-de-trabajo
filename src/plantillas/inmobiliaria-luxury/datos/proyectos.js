export const tipoCambio = 3.75;

export const ticker = [
  { k: 'Tipo de cambio', v: 'S/ 3.750' },
  { k: 'Tasa hipotecaria ref.', v: '8.9% TEA' },
  { k: 'm² promedio Lima top', v: 'US$ 2,480' },
  { k: 'Bono del buen pagador', v: 'hasta S/ 26,400' },
];

export const navLinks = ['Proyectos', 'Experiencia 3D', 'Ubicaciones', 'Simulador', 'Concierge'];

export const etapas = [
  { n: '01', t: 'Explora', d: 'Recorre proyectos, plantas y acabados desde donde estés.' },
  { n: '02', t: 'Reserva', d: 'Bloquea tu unidad con una separación 100% reembolsable.' },
  { n: '03', t: 'Financia', d: 'Simula tu crédito con bancos aliados y el bono estatal.' },
  { n: '04', t: 'Firma', d: 'Minuta digital, cronograma de pagos y entrega garantizada.' },
];

export const bancos = ['Banco Uno', 'Interfin', 'Crédito Real', 'BanSur', 'Caja Norte'];

export const proyectos = [
  {
    id: 'mirador-malecon',
    nombre: 'Mirador Malecón',
    distrito: 'Miraflores',
    etapa: 'En construcción',
    entrega: 'Dic 2027',
    desdeUSD: 189000,
    dorms: '1 a 3 dorm.',
    m2: '48 – 132 m²',
    tag: 'Vista al mar',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'casona-olivar',
    nombre: 'Casona del Olivar',
    distrito: 'San Isidro',
    etapa: 'Preventa',
    entrega: 'Jun 2028',
    desdeUSD: 245000,
    dorms: '2 a 4 dorm.',
    m2: '72 – 210 m²',
    tag: 'Áreas verdes privadas',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'terrazas-barranco',
    nombre: 'Terrazas de Barranco',
    distrito: 'Barranco',
    etapa: 'Entrega inmediata',
    entrega: 'Disponible',
    desdeUSD: 168000,
    dorms: '1 a 2 dorm.',
    m2: '42 – 96 m²',
    tag: 'Rooftop y coworking',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'jardines-camacho',
    nombre: 'Jardines de Camacho',
    distrito: 'La Molina',
    etapa: 'En construcción',
    entrega: 'Mar 2027',
    desdeUSD: 210000,
    dorms: '3 a 4 dorm.',
    m2: '110 – 240 m²',
    tag: 'Casas con jardín',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bahia-panoramic',
    nombre: 'Bahía Panoramic',
    distrito: 'Chorrillos',
    etapa: 'Preventa',
    entrega: 'Ago 2028',
    desdeUSD: 155000,
    dorms: '1 a 3 dorm.',
    m2: '45 – 120 m²',
    tag: 'Frente a la costa verde',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'nodo-central',
    nombre: 'Nodo Central',
    distrito: 'Magdalena',
    etapa: 'Entrega inmediata',
    entrega: 'Disponible',
    desdeUSD: 142000,
    dorms: 'Studio a 2 dorm.',
    m2: '32 – 78 m²',
    tag: 'A 3 min del metro',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
  },
];

export const distritos = [...new Set(proyectos.map((p) => p.distrito))];
export const etapasFiltro = [...new Set(proyectos.map((p) => p.etapa))];

export const usd = (n) => 'US$ ' + n.toLocaleString('en-US');
export const soles = (n) => 'S/ ' + Math.round(n).toLocaleString('es-PE');

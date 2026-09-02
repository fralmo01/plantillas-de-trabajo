export const marca = {
  nombre: 'GYM iron',
  tagline: 'Tu entrenamiento al siguiente nivel con la red más grande de gimnasios del país.',
  whatsapp: '51987654321',
};

export const nav = ['Planes', 'Sedes', 'Beneficios', 'App', 'Preguntas'];

export const ciudades = ['Lima', 'Arequipa', 'Trujillo', 'Cusco', 'Huancayo', 'Piura'];

export const planes = [
  {
    id: 'smart',
    nombre: 'Plan Smart',
    desc: 'Entrena cuando quieras en la sede que elijas, con total flexibilidad.',
    regular: 109.9,
    promo: 54.95,
    promoTag: 'Primer mes 50% OFF',
    fidelidad: 'Sin contrato de permanencia',
    destacado: false,
    beneficios: [
      { txt: 'Acceso ilimitado a tu sede de elección', ok: true },
      { txt: 'Áreas de musculación y cardio', ok: true },
      { txt: 'Clases grupales con instructores', ok: true },
      { txt: 'App con rutinas personalizadas', ok: true },
      { txt: 'Acceso a otras sedes de la cadena', ok: false },
      { txt: 'Sillones de masaje en Spa Relax', ok: false },
      { txt: 'Beneficios y descuentos en marcas', ok: false },
    ],
  },
  {
    id: 'black',
    nombre: 'Plan Black',
    desc: 'Entrena en cualquiera de nuestras sedes del país y de la región.',
    regular: 129.9,
    promo: 0,
    promoTag: 'Primer mes GRATIS',
    fidelidad: '12 meses de membresía',
    destacado: true,
    beneficios: [
      { txt: 'Acceso a TODAS las sedes del país', ok: true },
      { txt: 'Áreas de musculación y cardio', ok: true },
      { txt: 'Clases grupales ilimitadas', ok: true },
      { txt: 'App con rutinas y control de afluencia', ok: true },
      { txt: 'Acceso a otras sedes de la cadena', ok: true },
      { txt: 'Sillones de masaje en Spa Relax', ok: true },
      { txt: 'Beneficios y descuentos en marcas', ok: true },
    ],
  },
  {
    id: 'fit',
    nombre: 'Plan Fit',
    desc: 'La opción básica para empezar tu hábito de entrenamiento sin excusas.',
    regular: 99.9,
    promo: 0,
    promoTag: 'Primer mes GRATIS',
    fidelidad: '12 meses de membresía',
    destacado: false,
    beneficios: [
      { txt: 'Acceso a tu sede en horario valle', ok: true },
      { txt: 'Áreas de musculación y cardio', ok: true },
      { txt: 'App con rutinas guiadas', ok: true },
      { txt: 'Clases grupales seleccionadas', ok: true },
      { txt: 'Acceso a otras sedes', ok: false },
      { txt: 'Spa Relax y beneficios de marcas', ok: false },
      { txt: 'Horario libre sin restricción', ok: false },
    ],
  },
];

export const sedes = [
  {
    nombre: 'Centro Cívico',
    ciudad: 'Lima',
    direccion: 'Av. Garcilaso de la Vega 1348, Cercado de Lima',
    referencia: 'Centro Comercial Real Plaza, 3.er nivel',
    horario: 'Lun–Vie 6:00–23:00 · Sáb 8:00–18:00 · Dom 8:00–14:00',
    afluencia: 'Moderada (48%)',
    servicios: ['Musculación', 'Cardio', 'Clases grupales', 'Spa Relax', 'Duchas y lockers'],
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  },
  {
    nombre: 'Salaverry',
    ciudad: 'Lima',
    direccion: 'Av. Gral. Salaverry 2255, San Isidro',
    referencia: 'Centro Comercial, nivel calle',
    horario: 'Lun–Vie 5:30–23:00 · Sáb 8:00–18:00 · Dom 8:00–14:00',
    afluencia: 'Baja (26%)',
    servicios: ['Musculación', 'Área funcional', 'Clases grupales', 'Nutrición'],
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80',
  },
  {
    nombre: 'Cayma',
    ciudad: 'Arequipa',
    direccion: 'Av. Ejército 793, Cayma',
    referencia: 'Mall frente a la plaza',
    horario: 'Lun–Vie 6:00–23:00 · Sáb 8:00–18:00 · Dom 8:00–14:00',
    afluencia: 'Alta (72%)',
    servicios: ['Musculación', 'Cardio Pro', 'Clases grupales', 'Sillones masaje'],
    img: 'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?auto=format&fit=crop&w=900&q=80',
  },
  {
    nombre: 'Real Plaza',
    ciudad: 'Trujillo',
    direccion: 'Av. César Vallejo Oeste 1345, Trujillo',
    referencia: 'Real Plaza, nivel 2',
    horario: 'Lun–Vie 6:00–23:00 · Sáb 8:00–18:00 · Dom 8:00–14:00',
    afluencia: 'Moderada (55%)',
    servicios: ['Musculación', 'Cardio', 'Clases grupales', 'Spa Relax'],
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
];

export const features = [
  { titulo: 'App de entrenamiento', texto: 'Rutinas personalizadas, videos de cada ejercicio y control de afluencia en vivo.', img: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=900&q=80' },
  { titulo: 'Clases grupales', texto: 'Funcional, ciclismo indoor, baile y fuerza con instructores certificados.', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80' },
  { titulo: 'Equipos de primera', texto: 'Máquinas de musculación y cardio con mantenimiento permanente.', img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80' },
  { titulo: 'Spa Relax', texto: 'Sillones de masaje para recuperar después de tu sesión (Plan Black).', img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80' },
];

export const faqs = [
  { q: '¿Cómo funciona la promoción del primer mes?', a: 'En los planes promocionales, tu primera mensualidad se descuenta automáticamente al inscribirte en línea.' },
  { q: '¿Puedo entrenar en cualquier sede con el Plan Black?', a: 'Sí. Con el Plan Black tienes acceso ilimitado a todas las sedes del país sin costo adicional.' },
  { q: '¿Qué incluye la app?', a: 'Plan de entrenamiento personalizado, videos por ejercicio, control de afluencia en vivo y reserva de clases grupales.' },
  { q: '¿Necesito contrato de permanencia?', a: 'El Plan Smart no tiene permanencia. Los planes Black y Fit son de 12 meses con precio promocional.' },
];

export const black = {
  titulo: 'Beneficios Black',
  texto: 'Cupones y descuentos exclusivos en marcas de nutrición, moda deportiva, tecnología y bienestar para socios del Plan Black.',
  marcas: ['NutriMax', 'RunFast', 'TecnoFit', 'PureWater', 'ActiveWear', 'RecoveryLab'],
};

const REVOLVE_IMG = {
  'rv-hero-1': '1566174053879-31528523f8ae',
  'rv-hero-2': '1585487000160-6ebcfceb0d03',
  'rv-mega-1': '1515372039744-b8f02a3ae446',
  'rv-mega-2': '1591047139829-d91aecb6caea',
  'rv-mega-3': '1519741497674-611481863552',
  'rv-mega-4': '1543163521-1bf539c55dd2',
  'rv-mega-5': '1469334031218-e382a71b716b',
  'rv-duo-1': '1524504388940-b1c1722653e1',
  'rv-duo-2': '1550639525-c97d455acf70',
  'rv-tienda-1': '1483985988355-763728e1935b',
  'rv-tienda-2': '1519741497674-611481863552',
  'rv-tienda-3': '1441984904996-e0b6ba687e04',
  'rv-edit-1': '1529139574466-a303027c1d8b',
  'rv-edit-2': '1550639525-c97d455acf70',
  'rv-edit-3': '1445205170230-053b83016050',
  'rv-p1': '1585487000160-6ebcfceb0d03',
  'rv-p2': '1515372039744-b8f02a3ae446',
  'rv-p3': '1566174053879-31528523f8ae',
  'rv-p4': '1550639525-c97d455acf70',
  'rv-p5': '1591047139829-d91aecb6caea',
  'rv-p6': '1584917865442-de89df76afd3',
  'rv-p7': '1594633312681-425c7b97ccd1',
  'rv-p8': '1445205170230-053b83016050',
  'rv-p9': '1554568218-0f1715e72254',
  'rv-p10': '1509631179647-0177331693ae',
  'rv-p11': '1544022613-e87ca75a784a',
  'rv-p12': '1469334031218-e382a71b716b',
};

export const getRevolveImg = (seed, w = 700, h = 900) => {
  const id = REVOLVE_IMG[seed];
  if (id) return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
};

export const marca = {
  nombre: 'tienda.com',
  hermana: 'LUXE OUTLET',
};

export const utilityBar = {
  mensaje: 'Envio gratis en pedidos mayores a S/ 350 y devoluciones gratuitas',
  linkHermana: 'Visita LUXE OUTLET',
};

export const generos = ['Mujer', 'Hombre', 'Belleza'];

export const navPrincipal = [
  { t: 'Lo Nuevo de Hoy', href: '#lo-nuevo' },
  {
    t: 'Ropa',
    menu: 'ropa',
    columnas: [
      { t: 'Ver por categoria', links: ['Comprar toda la ropa', 'Compra lo mas vendido', 'Tienda de basicos', 'Ropa deportiva', 'Denim', 'Vestidos', 'Chaquetas y abrigos'] },
      { t: 'Tendencias', links: ['Avance del otono', 'Lo mas deseado', 'Looks para salir de noche', 'Endless Summer', 'Estilo Western', 'Casual con estilo'] },
    ],
    banners: [
      { t: 'Modo Fin de Semana Largo', sub: 'Asegura tus outfits a tiempo con envio gratis en 2 dias', seed: 'rv-mega-1' },
      { t: 'Conjuntos de la Temporada', sub: 'Desde cuadros clasicos hasta tonos tierra', seed: 'rv-mega-2' },
    ],
  },
  {
    t: 'Vestidos',
    menu: 'vestidos',
    columnas: [
      { t: 'Tendencias', links: ['Vestimenta para coctel', 'Despedida de soltera', 'Para la novia', 'Para las damas de honor', 'Tienda The Bachelorette'] },
      { t: 'Categoria', links: ['Ver todo', 'Vestidos largos', 'Vestidos midi', 'Vestidos cortos'] },
    ],
    banners: [{ t: 'Vestidos para Invitadas a Bodas', sub: 'Coleccion Otono', seed: 'rv-mega-3' }],
  },
  {
    t: 'Calzado',
    menu: 'calzado',
    columnas: [{ t: 'Categoria', links: ['Tacones', 'Sandalias', 'Botas', 'Zapatillas', 'Planos'] }],
    banners: [{ t: 'Calzado de Temporada', sub: 'Nueva coleccion', seed: 'rv-mega-4' }],
  },
  {
    t: 'Accesorios',
    menu: 'accesorios',
    columnas: [{ t: 'Categoria', links: ['Bolsos', 'Joyeria', 'Lentes de sol', 'Sombreros', 'Cinturones'] }],
    banners: [{ t: 'Accesorios Destacados', sub: 'Complementa tu look', seed: 'rv-mega-5' }],
  },
  { t: 'Disenadores', href: '#lo-nuevo' },
  { t: 'Tiendas', href: '#tiendas' },
  { t: 'Hot List', href: '#lo-nuevo' },
  { t: 'Rebaja', href: '#lo-nuevo', destacado: true },
];

export const heroSplit = {
  titulo1: 'INVITES',
  titulo2: 'INCOMING',
  kicker: 'Tu guia para acertar en cada codigo de vestimenta de boda, desde destinos de playa hasta el pais del vino.',
  cta: 'Shop Now',
  credito: 'RETROFETE',
  paneles: [{ seed: 'rv-hero-1' }, { seed: 'rv-hero-2' }],
};

export const duoDestacado = [
  { t: 'Lo Recien Llegado', numero: '549', sub: 'Novedades', seed: 'rv-duo-1' },
  { t: 'Alerta de Nuevos Conjuntos', sub: '', seed: 'rv-duo-2' },
];

export const tiendasGrid = [
  { t: 'Lista para un Fin de Semana Largo', seed: 'rv-tienda-1' },
  { t: 'Vestidos para Invitadas a Bodas', seed: 'rv-tienda-2' },
  { t: 'Acceso Exclusivo a lo Nuevo de Otono', seed: 'rv-tienda-3' },
];

export const editorialGrid = [
  { t: 'Sets Virales', seed: 'rv-edit-1' },
  { t: 'Looks Chic para Mujer', seed: 'rv-edit-2' },
  { t: 'La Nueva Novia', seed: 'rv-edit-3' },
];

export const faqChat = [
  { t: 'Donde esta mi pedido?', r: 'Puedes rastrear tu pedido desde la seccion "Mis pedidos" en tu cuenta. Te enviamos un correo con el numero de seguimiento apenas se despacha.' },
  { t: 'Devolver un articulo', r: 'Tienes 30 dias desde la entrega para solicitar una devolucion gratuita. Inicia el proceso desde "Mis pedidos".' },
  { t: 'Cambiar o cancelar un pedido', r: 'Puedes modificar tu pedido dentro de la primera hora despues de la compra escribiendonos por este chat.' },
  { t: 'Solicitar igualacion de precio', r: 'Si encontraste el mismo producto mas barato en otra tienda autorizada, cuentanos y evaluamos la igualacion.' },
];

export const filtrosDisenador = ['Retrofete', 'More To Come', 'Lovers and Friends', 'Runaway The Label', 'Seroya', 'House of Harlow'];
export const filtrosTalla = ['XS', 'S', 'M', 'L', 'XL'];
export const filtrosColor = [
  { nombre: 'Negro', hex: '#1a1a1a' },
  { nombre: 'Rojo', hex: '#b5342c' },
  { nombre: 'Verde oliva', hex: '#6b7355' },
  { nombre: 'Blanco', hex: '#f5f2ea' },
  { nombre: 'Dorado', hex: '#c9a876' },
];
export const ordenarPor = ['Destacado', 'Mas vendido', 'Precio: menor a mayor', 'Precio: mayor a menor', 'Novedades'];
export const sugerenciasBusqueda = ['vestido', 'blazer', 'bolso', 'sandalias', 'conjunto'];

export const catalogo = [
  { nombre: 'Vestido Blodwen', disenador: 'Retrofete', precio: 2362.76, seed: 'rv-p1', tipo: 'Vestidos', tendencia: false, tags: ['vestido', 'largo'] },
  { nombre: 'Vestido Stacie', disenador: 'More To Come', precio: 311.42, seed: 'rv-p2', tipo: 'Vestidos', tendencia: false, tags: ['vestido'] },
  { nombre: 'Vestido Sophia', disenador: 'Lovers and Friends', precio: 981.66, seed: 'rv-p3', tipo: 'Vestidos', tendencia: true, tags: ['vestido', 'floral'] },
  { nombre: 'Vestido Largo Coralia', disenador: 'More To Come', precio: 324.96, seed: 'rv-p4', tipo: 'Vestidos', tendencia: false, tags: ['vestido', 'largo'] },
  { nombre: 'Conjunto Blazer Sienna', disenador: 'Seroya', precio: 899.9, seed: 'rv-p5', tipo: 'Conjuntos', tendencia: true, tags: ['blazer', 'conjunto'] },
  { nombre: 'Bolso Mini Harlow', disenador: 'House of Harlow', precio: 649.5, seed: 'rv-p6', tipo: 'Accesorios', tendencia: false, tags: ['bolso'] },
  { nombre: 'Sandalias Tacon Runaway', disenador: 'Runaway The Label', precio: 459.9, seed: 'rv-p7', tipo: 'Calzado', tendencia: false, tags: ['sandalias', 'tacon'] },
  { nombre: 'Falda Estampada Amara', disenador: 'Runaway The Label', precio: 389.9, seed: 'rv-p8', tipo: 'Ropa', tendencia: true, tags: ['falda', 'estampado'] },
  { nombre: 'Top Halter Isla', disenador: 'Lovers and Friends', precio: 279.9, seed: 'rv-p9', tipo: 'Ropa', tendencia: false, tags: ['top'] },
  { nombre: 'Pantalon Wide Leg Nora', disenador: 'Seroya', precio: 519.9, seed: 'rv-p10', tipo: 'Ropa', tendencia: false, tags: ['pantalon'] },
  { nombre: 'Blazer Cruzado Ines', disenador: 'More To Come', precio: 749.9, seed: 'rv-p11', tipo: 'Conjuntos', tendencia: false, tags: ['blazer'] },
  { nombre: 'Lentes de Sol Riviera', disenador: 'House of Harlow', precio: 219.9, seed: 'rv-p12', tipo: 'Accesorios', tendencia: true, tags: ['lentes'] },
];

export const footerCols = [
  { t: 'Atencion al cliente', links: ['Contactanos', 'Envios y entregas', 'Opciones de pago', 'Preguntas frecuentes', 'Siguele la pista a tu pedido', 'Cambios y devoluciones', 'Guia de tallas'] },
  { t: 'Informacion', links: ['Quienes somos', 'Historias', 'Impacto social', 'Empleos', 'Embajadores', 'Prensa'] },
];

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

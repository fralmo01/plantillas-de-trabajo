const base = '/plantillas/tienda-platanitos';

export const verticales = [
  { id: 'moda', etiqueta: 'tienda', href: `${base}/` },
  { id: 'comida', etiqueta: 'Comida', href: `${base}/comida/` },
  { id: 'hogar', etiqueta: 'Hogar', href: `${base}/hogar/` },
  { id: 'deporte', etiqueta: 'Deporte', href: `${base}/deporte/` },
];

export const contenidoVertical = {
  moda: {
    titulo: 'tienda.com — Moda y Calzado',
    heroKicker: '#nuevacoleccion',
    heroTitulo: 'lo nuevo',
    heroPalabra: 'sandalias',
    nav: [
      { icono: '🗂️', texto: 'Categorías' },
      { icono: '🔥', texto: 'Ofertas' },
      { icono: '👗', texto: 'Mujeres' },
      { icono: '👔', texto: 'Hombres' },
      { icono: '👧', texto: 'Niñas' },
      { icono: '👦', texto: 'Niños' },
      { icono: '👜', texto: 'Accesorios' },
      { icono: '🚩', texto: 'Novedades' },
    ],
    circulos: ['Deportivas', 'Sandalias', 'Urbanas', 'Botas', 'Estiletos', 'Con taco', 'De moda', 'Belleza'],
    carruseles: [
      { titulo: 'Lo nuevo en Maquillaje', sub: 'Conoce los últimos ingresos en Belleza', cat: 'belleza' },
      { titulo: 'Calzado más top', sub: '¡Aprovecha lo más buscado!', cat: 'calzado' },
    ],
  },
  comida: {
    titulo: 'tienda.com — Comida',
    heroKicker: '#antojosdehoy',
    heroTitulo: 'pide ya',
    heroPalabra: 'delivery',
    nav: [
      { icono: '🗂️', texto: 'Categorías' },
      { icono: '🔥', texto: 'Promos 2x1' },
      { icono: '🍔', texto: 'Fast food' },
      { icono: '🍕', texto: 'Pizzas' },
      { icono: '🍣', texto: 'Sushi' },
      { icono: '🥗', texto: 'Saludable' },
      { icono: '🧋', texto: 'Bebidas' },
      { icono: '🚩', texto: 'Nuevos locales' },
    ],
    circulos: ['Pollería', 'Pizza', 'Sushi', 'Burgers', 'Chifa', 'Postres', 'Café', 'Vegano'],
    carruseles: [
      { titulo: 'Lo nuevo en Bebidas', sub: 'Refrescos, jugos y más', cat: 'bebidas' },
      { titulo: 'Antojos más pedidos', sub: '¡Los favoritos de hoy!', cat: 'comida' },
    ],
  },
  hogar: {
    titulo: 'tienda.com — Hogar',
    heroKicker: '#renuevatuespacio',
    heroTitulo: 'arma tu',
    heroPalabra: 'ambiente',
    nav: [
      { icono: '🗂️', texto: 'Categorías' },
      { icono: '🔥', texto: 'Liquidación' },
      { icono: '🛋️', texto: 'Muebles' },
      { icono: '🖼️', texto: 'Decoración' },
      { icono: '🍳', texto: 'Cocina' },
      { icono: '🛏️', texto: 'Dormitorio' },
      { icono: '💡', texto: 'Iluminación' },
      { icono: '🚩', texto: 'Novedades' },
    ],
    circulos: ['Muebles', 'Deco', 'Cocina', 'Textil', 'Baño', 'Jardín', 'Orden', 'Iluminación'],
    carruseles: [
      { titulo: 'Lo nuevo en Cocina', sub: 'Utensilios y menaje', cat: 'cocina' },
      { titulo: 'Para tu sala', sub: 'Muebles y decoración destacada', cat: 'hogar' },
    ],
  },
  deporte: {
    titulo: 'tienda.com — Deporte',
    heroKicker: '#entrenamejor',
    heroTitulo: 'muévete',
    heroPalabra: 'running',
    nav: [
      { icono: '🗂️', texto: 'Categorías' },
      { icono: '🔥', texto: 'Ofertas' },
      { icono: '🏃', texto: 'Running' },
      { icono: '⚽', texto: 'Fútbol' },
      { icono: '🏋️', texto: 'Gym' },
      { icono: '🚴', texto: 'Ciclismo' },
      { icono: '🏊', texto: 'Natación' },
      { icono: '🚩', texto: 'Novedades' },
    ],
    circulos: ['Running', 'Fútbol', 'Gym', 'Trekking', 'Básquet', 'Ciclismo', 'Yoga', 'Natación'],
    carruseles: [
      { titulo: 'Lo nuevo en Running', sub: 'Zapatillas y accesorios', cat: 'deporte' },
      { titulo: 'Equípate para el gym', sub: 'Lo más buscado en training', cat: 'deporte' },
    ],
  },
};

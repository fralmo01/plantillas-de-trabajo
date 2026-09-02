const img = (s) => `https://picsum.photos/seed/${s}/360/360`;

export const productos = [
  { marca: 'PIXO', nombre: 'Almohada soft sleep 70 x 50 cm', antes: 17990, precio: 14990, tarjeta: 13990, dcto: 22, seed: 'mk-p1', cat: 'hogar', tag: 'Días R', tags: ['almohada', 'dormir', 'hogar'] },
  { marca: 'AURA', nombre: 'Smartphone 128 GB 6.1"', antes: 549990, precio: 449990, tarjeta: null, dcto: 18, seed: 'mk-p2', cat: 'tecno', tag: 'Días R', tags: ['celular', 'smartphone', 'tecno'] },
  { marca: 'INDEX', nombre: 'Jeans mujer algodón flare', antes: null, precio: 16990, tarjeta: 11990, dcto: 29, seed: 'mk-p3', cat: 'moda-mujer', tag: null, tags: ['jeans', 'pantalon', 'mujer'] },
  { marca: 'KLIO', nombre: 'Sandwichera 2 rebanadas', antes: 21990, precio: 12990, tarjeta: null, dcto: 41, seed: 'mk-p4', cat: 'electro', tag: 'Días R', tags: ['sandwichera', 'cocina', 'electro'] },
  { marca: 'INDEX', nombre: 'Jeans mujer algodón recto', antes: null, precio: 16990, tarjeta: null, dcto: null, seed: 'mk-p5', cat: 'moda-mujer', tag: null, tags: ['jeans', 'pantalon', 'mujer'] },
  { marca: 'HARVEST', nombre: 'Pack de calzas deportivas', antes: 9990, precio: 6990, tarjeta: 6500, dcto: 35, seed: 'mk-p6', cat: 'deportes', tag: 'Envío Gratis en APP', tags: ['calzas', 'deporte', 'mujer'] },
  { marca: 'NIVOX', nombre: 'Audífonos inalámbricos ANC', antes: 89990, precio: 59990, tarjeta: 54990, dcto: 33, seed: 'mk-p7', cat: 'tecno', tag: 'Recíbelo hoy', tags: ['audifonos', 'bluetooth', 'tecno'] },
  { marca: 'CASZO', nombre: 'Freidora de aire 6 L doble', antes: 129990, precio: 89990, tarjeta: 84990, dcto: 31, seed: 'mk-p8', cat: 'electro', tag: 'Días R', tags: ['freidora', 'cocina', 'electro'] },
  { marca: 'LUMEN', nombre: 'Smart TV 50" 4K', antes: 349990, precio: 279990, tarjeta: 269990, dcto: 20, seed: 'mk-p9', cat: 'electro', tag: 'Días R', tags: ['tv', 'television', 'electro'] },
  { marca: 'TERRA', nombre: 'Zapatilla urbana unisex de cuero', antes: 44990, precio: 29990, tarjeta: null, dcto: 33, seed: 'mk-p10', cat: 'calzado', tag: 'Envío Gratis en APP', tags: ['zapato', 'zapatilla', 'calzado', 'urbano', 'unisex'] },

  
  { marca: 'RUNIX', nombre: 'Zapatillas running hombre', antes: 79990, precio: 54990, tarjeta: 49990, dcto: 31, seed: 'mk-z1', cat: 'calzado', tag: 'Días R', tags: ['zapato', 'zapatilla', 'calzado', 'running', 'deporte', 'hombre'] },
  { marca: 'KIDDO', nombre: 'Zapatillas niño con luces', antes: 26990, precio: 12990, tarjeta: null, dcto: 52, seed: 'mk-z2', cat: 'calzado', tag: 'Recíbelo hoy', tags: ['zapato', 'zapatilla', 'calzado', 'niño', 'kids', 'luces'] },
  { marca: 'FORMAL', nombre: 'Zapatos de vestir cuero negro', antes: null, precio: 64990, tarjeta: 59990, dcto: null, seed: 'mk-z3', cat: 'calzado', tag: null, tags: ['zapato', 'calzado', 'vestir', 'formal', 'cuero', 'hombre'] },
  { marca: 'BREE', nombre: 'Zapatillas plataforma mujer', antes: 39990, precio: 24990, tarjeta: null, dcto: 38, seed: 'mk-z4', cat: 'calzado', tag: 'Días R', tags: ['zapato', 'zapatilla', 'calzado', 'plataforma', 'mujer'] },
  { marca: 'TREK', nombre: 'Zapatos outdoor impermeables', antes: 89990, precio: 62990, tarjeta: 57990, dcto: 30, seed: 'mk-z5', cat: 'calzado', tag: 'Envío rápido', tags: ['zapato', 'calzado', 'outdoor', 'trekking', 'impermeable'] },
  { marca: 'SOFT', nombre: 'Zapatillas urbanas mujer blancas', antes: 34990, precio: 22990, tarjeta: null, dcto: 34, seed: 'mk-z6', cat: 'calzado', tag: 'Días R', tags: ['zapato', 'zapatilla', 'calzado', 'urbano', 'mujer', 'blancas'] },
];

export const pesos = (n) => '$' + n.toLocaleString('es-CL');

const norm = (s) =>
  (s ?? '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function buscar(termino) {
  const palabras = norm(termino).split(/\s+/).filter(Boolean);
  if (!palabras.length) return [];
  return productos.filter((p) => {
    const heno = norm([p.nombre, p.marca, p.cat, ...(p.tags ?? [])].join(' '));
    return palabras.every((w) => heno.includes(w));
  });
}

export const sugerencias = ['zapatos', 'zapatillas', 'jeans', 'audífonos', 'freidora', 'smart tv'];

export const filtrosCategoria = [
  { nombre: 'Zapatos y zapatillas', n: 58256 },
  { nombre: 'Deporte y aventura', n: 1175 },
  { nombre: 'Outlet', n: 404 },
  { nombre: 'Moda infantil', n: 210 },
  { nombre: 'Moda mujer', n: 148 },
  { nombre: 'Moda hombre', n: 132 },
  { nombre: 'Accesorios y complementos', n: 96 },
  { nombre: 'Tecno', n: 27 },
];

export const filtrosMarca = [
  { nombre: 'ACTVITTA', n: 43 },
  { nombre: 'BREE', n: 21 },
  { nombre: 'FORMAL', n: 12 },
  { nombre: 'KIDDO', n: 33 },
  { nombre: 'RUNIX', n: 497 },
  { nombre: 'SOFT', n: 88 },
  { nombre: 'TERRA', n: 64 },
  { nombre: 'TREK', n: 19 },
];

export const filtrosEntrega = [
  'Envío en 24 horas',
  'Despacho a domicilio',
  'Punto de retiro',
];

export const filtrosDescuento = ['10% o más', '20% o más', '30% o más', '50% o más'];

export const filtrosTalla = ['35', '36', '37', '38', '39', '40', '41', '42', '43'];

export const filtrosColor = [
  { nombre: 'Negro', hex: '#111111' },
  { nombre: 'Blanco', hex: '#ffffff' },
  { nombre: 'Gris', hex: '#9a9aa2' },
  { nombre: 'Azul', hex: '#2b53c7' },
  { nombre: 'Rojo', hex: '#d02b2b' },
  { nombre: 'Rosa', hex: '#e57ba8' },
];

export const ordenarPor = [
  'Relevancia',
  'Menor precio',
  'Mayor precio',
  'Mayor descuento',
  'Más vendidos',
];

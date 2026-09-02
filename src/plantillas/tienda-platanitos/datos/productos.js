export const productos = [
  
  { marca: 'BREE', nombre: 'Sandalia plana con hebillas', precio: 89.9, antes: 129, nuevo: true, cat: 'calzado', v: 'moda', seed: 'pl-1', tags: ['zapato', 'sandalia', 'calzado', 'mujer', 'plana'] },
  { marca: 'RUNIX', nombre: 'Zapatilla deportiva running', precio: 149.9, antes: 199, nuevo: true, cat: 'calzado', v: 'moda', seed: 'pl-2', tags: ['zapato', 'zapatilla', 'calzado', 'deporte', 'running'] },
  { marca: 'URBE', nombre: 'Zapatilla urbana de cuero', precio: 129.9, antes: null, nuevo: false, cat: 'calzado', v: 'moda', seed: 'pl-3', tags: ['zapato', 'zapatilla', 'calzado', 'urbano', 'cuero'] },
  { marca: 'TACO', nombre: 'Estilettos punta fina negro', precio: 159, antes: 189, nuevo: false, cat: 'calzado', v: 'moda', seed: 'pl-4', tags: ['zapato', 'estiletto', 'calzado', 'mujer', 'taco'] },
  { marca: 'GLOW', nombre: 'Labial matte larga duración', precio: 17.9, antes: null, nuevo: true, cat: 'belleza', v: 'moda', seed: 'pl-5', tags: ['labial', 'maquillaje', 'belleza'] },
  { marca: 'GLOW', nombre: 'Base líquida cobertura media', precio: 34.9, antes: 44, nuevo: true, cat: 'belleza', v: 'moda', seed: 'pl-6', tags: ['base', 'maquillaje', 'belleza'] },

  
  { marca: 'EL FOGÓN', nombre: 'Combo pollo a la brasa 1/4', precio: 24.9, antes: null, nuevo: true, cat: 'comida', v: 'comida', seed: 'pl-7', tags: ['pollo', 'brasa', 'combo', 'comida'] },
  { marca: 'NAPOLI', nombre: 'Pizza familiar 3 sabores', precio: 45.9, antes: 59, nuevo: false, cat: 'comida', v: 'comida', seed: 'pl-8', tags: ['pizza', 'familiar', 'comida'] },
  { marca: 'SAKANA', nombre: 'Tabla de sushi 30 piezas', precio: 62.9, antes: 79, nuevo: true, cat: 'comida', v: 'comida', seed: 'pl-9', tags: ['sushi', 'tabla', 'comida', 'japonesa'] },
  { marca: 'FRESH', nombre: 'Limonada frozen 1 L', precio: 12.9, antes: null, nuevo: true, cat: 'bebidas', v: 'comida', seed: 'pl-10', tags: ['limonada', 'bebida', 'jugo'] },

  
  { marca: 'NORDIK', nombre: 'Sofá 3 cuerpos gris', precio: 899, antes: 1199, nuevo: false, cat: 'hogar', v: 'hogar', seed: 'pl-11', tags: ['sofa', 'mueble', 'sala', 'hogar'] },
  { marca: 'CASZO', nombre: 'Set de ollas antiadherente 6 pzas', precio: 149.9, antes: 219, nuevo: true, cat: 'cocina', v: 'hogar', seed: 'pl-12', tags: ['ollas', 'cocina', 'menaje', 'hogar'] },
  { marca: 'LUMEN', nombre: 'Lámpara de pie regulable', precio: 119.9, antes: null, nuevo: true, cat: 'hogar', v: 'hogar', seed: 'pl-13', tags: ['lampara', 'iluminacion', 'deco', 'hogar'] },
  { marca: 'DECOR', nombre: 'Juego de sábanas 2 plazas', precio: 79.9, antes: 99, nuevo: false, cat: 'hogar', v: 'hogar', seed: 'pl-14', tags: ['sabanas', 'dormitorio', 'textil', 'hogar'] },

  
  { marca: 'RUNIX', nombre: 'Zapatilla running amortiguación', precio: 179.9, antes: 249, nuevo: true, cat: 'deporte', v: 'deporte', seed: 'pl-15', tags: ['zapato', 'zapatilla', 'running', 'deporte', 'calzado'] },
  { marca: 'FUTPRO', nombre: 'Balón de fútbol N°5 híbrido', precio: 89.9, antes: null, nuevo: false, cat: 'deporte', v: 'deporte', seed: 'pl-16', tags: ['balon', 'futbol', 'deporte'] },
  { marca: 'IRONX', nombre: 'Set de mancuernas 20 kg', precio: 129.9, antes: 169, nuevo: true, cat: 'deporte', v: 'deporte', seed: 'pl-17', tags: ['mancuernas', 'gym', 'pesas', 'deporte'] },
  { marca: 'FLOW', nombre: 'Mat de yoga antideslizante', precio: 39.9, antes: 55, nuevo: false, cat: 'deporte', v: 'deporte', seed: 'pl-18', tags: ['yoga', 'mat', 'deporte', 'fitness'] },
];

export const soles = (n) => 'S/ ' + n.toFixed(2);

export const porVertical = (v) => productos.filter((p) => p.v === v);
export const porCat = (cat) => productos.filter((p) => p.cat === cat);

const norm = (s) =>
  (s ?? '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function buscar(termino) {
  const palabras = norm(termino).split(/\s+/).filter(Boolean);
  if (!palabras.length) return [];
  
  
  const coincide = (heno, w) => heno.includes(w) || heno.includes(w.replace(/s$/, ''));
  return productos.filter((p) => {
    const heno = norm([p.nombre, p.marca, p.cat, p.v, ...(p.tags ?? [])].join(' '));
    return palabras.every((w) => coincide(heno, w));
  });
}

export const sugerencias = ['zapatillas', 'pizza', 'sofá', 'balón', 'labial', 'ollas'];

export const filtrosVertical = [
  { nombre: 'Moda y calzado', n: 12480 },
  { nombre: 'Comida', n: 3210 },
  { nombre: 'Hogar', n: 5870 },
  { nombre: 'Deporte', n: 2940 },
];
export const filtrosMarca = ['BREE', 'RUNIX', 'URBE', 'GLOW', 'NORDIK', 'CASZO', 'FUTPRO', 'IRONX'];
export const filtrosPrecio = [
  'Hasta S/ 50',
  'S/ 50 – S/ 100',
  'S/ 100 – S/ 200',
  'Más de S/ 200',
];
export const filtrosDescuento = ['10% o más', '20% o más', '30% o más', '50% o más'];
export const filtrosEnvio = ['Envío gratis', 'Llega mañana', 'Retiro en tienda'];
export const ordenarPor = ['Relevancia', 'Menor precio', 'Mayor precio', 'Más nuevos', 'Mejor valorados'];

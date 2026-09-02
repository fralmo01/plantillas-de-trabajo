const img = (seed) => `https://picsum.photos/seed/${seed}/500/620`;

export const productos = [
  { id: 'p01', nombre: 'Camisa denim slim manga larga', sku: '5061317812', categoria: 'hombre', precio: 55.2, antes: 69, colores: 2, etiqueta: 'Envío 24Hrs', dscto: 20, tags: ['camisa', 'denim', 'hombre'], img: img('tm-cam1') },
  { id: 'p02', nombre: 'Jean wide leg tiro alto', sku: '5061104556', categoria: 'mujer', precio: 159, antes: null, colores: 2, etiqueta: null, dscto: null, tags: ['jean', 'pantalon', 'mujer', 'denim'], img: img('tm-jean1') },
  { id: 'p03', nombre: 'Polo jersey cuello redondo', sku: '5061318074', categoria: 'hombre', precio: 62.1, antes: 69, colores: 3, etiqueta: 'Envío 24Hrs', dscto: 10, tags: ['polo', 'basico', 'hombre'], img: img('tm-polo1') },
  { id: 'p04', nombre: 'Pantalón twill recto stretch', sku: '5061104637', categoria: 'hombre', precio: 149, antes: null, colores: 1, etiqueta: 'Envío 24Hrs', dscto: null, tags: ['pantalon', 'twill', 'hombre'], img: img('tm-pant1') },
  { id: 'p05', nombre: 'T-shirt estampado urbano', sku: '5041372446', categoria: 'hombre', precio: 71.1, antes: 79, colores: 3, etiqueta: 'New Arrival', dscto: 10, tags: ['polo', 'tshirt', 'urbano', 'hombre'], img: img('tm-tee1') },
  { id: 'p06', nombre: 'Blusa bordada manga globo', sku: '5051401065', categoria: 'mujer', precio: 89.9, antes: 129, colores: 2, etiqueta: null, dscto: 30, tags: ['blusa', 'mujer'], img: img('tm-blusa1') },
  { id: 'p07', nombre: 'Casaca denim oversize', sku: '5050205934', categoria: 'mujer', precio: 179.1, antes: 199, colores: 1, etiqueta: null, dscto: 10, tags: ['casaca', 'denim', 'abrigo', 'mujer'], img: img('tm-casaca1') },
  { id: 'p08', nombre: 'Chompa tejido punto fino', sku: '5050205917', categoria: 'mujer', precio: 118.15, antes: 139, colores: 2, etiqueta: 'Envío 24Hrs', dscto: 15, tags: ['chompa', 'sweater', 'abrigo', 'mujer'], img: img('tm-chompa1') },
  { id: 'p09', nombre: 'Jean skater kids', sku: '5051119603', categoria: 'kids', precio: 79.5, antes: 99, colores: 2, etiqueta: null, dscto: 20, tags: ['jean', 'pantalon', 'kids'], img: img('tm-kid1') },
  { id: 'p10', nombre: 'Polo licencia superhéroe', sku: '5081107672', categoria: 'comics', precio: 45.9, antes: 59, colores: 3, etiqueta: 'Comics', dscto: 20, tags: ['polo', 'comics', 'licencia'], img: img('tm-comic1') },
  { id: 'p11', nombre: 'Buzo felpa unisex', sku: '5071125506', categoria: 'sale', precio: 99.2, antes: 149, colores: 2, etiqueta: 'Sale', dscto: 33, tags: ['buzo', 'poleron', 'unisex'], img: img('tm-buzo1') },
  { id: 'p12', nombre: 'Short cargo playero', sku: '5041104556', categoria: 'hombre', precio: 62.3, antes: 89, colores: 3, etiqueta: 'Sale', dscto: 30, tags: ['short', 'cargo', 'hombre'], img: img('tm-short1') },

  
  { id: 'z01', nombre: 'Zapatillas urbanas de cuero', sku: '5090011101', categoria: 'colecciones', precio: 149.9, antes: 199, colores: 3, etiqueta: 'Envío 24Hrs', dscto: 25, tags: ['zapatos', 'zapatillas', 'calzado', 'cuero', 'urbano'], img: img('tm-zap1') },
  { id: 'z02', nombre: 'Zapatos de vestir Oxford', sku: '5090011102', categoria: 'hombre', precio: 189, antes: null, colores: 2, etiqueta: null, dscto: null, tags: ['zapatos', 'calzado', 'vestir', 'oxford', 'hombre'], img: img('tm-zap2') },
  { id: 'z03', nombre: 'Zapatillas running mujer', sku: '5090011103', categoria: 'mujer', precio: 129.9, antes: 159, colores: 4, etiqueta: 'New Arrival', dscto: 18, tags: ['zapatos', 'zapatillas', 'calzado', 'running', 'deporte', 'mujer'], img: img('tm-zap3') },
  { id: 'z04', nombre: 'Botines de gamuza taco medio', sku: '5090011104', categoria: 'mujer', precio: 169, antes: 219, colores: 2, etiqueta: null, dscto: 22, tags: ['zapatos', 'botines', 'calzado', 'gamuza', 'mujer'], img: img('tm-zap4') },
  { id: 'z05', nombre: 'Zapatillas skate kids', sku: '5090011105', categoria: 'kids', precio: 79.9, antes: 99, colores: 3, etiqueta: 'Sale', dscto: 20, tags: ['zapatos', 'zapatillas', 'calzado', 'skate', 'kids'], img: img('tm-zap5') },
  { id: 'z06', nombre: 'Sandalias planas de verano', sku: '5090011106', categoria: 'sale', precio: 39.9, antes: 59, colores: 5, etiqueta: 'Sale', dscto: 32, tags: ['zapatos', 'sandalias', 'calzado', 'verano', 'mujer'], img: img('tm-zap6') },
];

export const porCategoria = (cat) =>
  cat === 'colecciones' ? productos : productos.filter((p) => p.categoria === cat || (cat === 'sale' && p.dscto));

const norm = (s) =>
  (s ?? '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function buscar(termino) {
  const palabras = norm(termino).split(/\s+/).filter(Boolean);
  if (palabras.length === 0) return [];
  return productos.filter((p) => {
    const heno = norm([p.nombre, p.categoria, ...(p.tags ?? [])].join(' '));
    return palabras.every((w) => heno.includes(w));
  });
}

export const sugerencias = ['zapatos', 'zapatillas', 'jeans', 'polos', 'casacas', 'blusas'];

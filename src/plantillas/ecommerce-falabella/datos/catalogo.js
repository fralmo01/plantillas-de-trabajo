const img = (s) => `https://picsum.photos/seed/${s}/400/400`;

export const navTop = ['Ofertas', 'Novedades', 'Cyber ofertas', 'Marcas', 'Servicio al cliente'];

export const categorias = [
  { id: 'mujer', nombre: 'Mujer' },
  { id: 'hombre', nombre: 'Hombre' },
  { id: 'tecno', nombre: 'Tecnología' },
  { id: 'hogar', nombre: 'Hogar' },
  { id: 'deportes', nombre: 'Deportes' },
  { id: 'belleza', nombre: 'Belleza' },
  { id: 'juguetes', nombre: 'Juguetería' },
  { id: 'electro', nombre: 'Electrohogar' },
];

export const banners = [
  { kicker: 'Cyber semana', titulo: 'Hasta 50% en tecnología', sub: 'Celulares, notebooks y TV con precio internet', cta: 'Ver ofertas', tema: 'verde', seed: 'ef-hero-1' },
  { kicker: 'Nueva temporada', titulo: 'Moda que te representa', sub: 'Envío gratis en compras sobre S/ 99', cta: 'Comprar ahora', tema: 'oscuro', seed: 'ef-hero-2' },
  { kicker: 'Solo en app', titulo: '10% extra con cupón APP10', sub: 'Descarga la app y ahorra en tu primera compra', cta: 'Descargar app', tema: 'morado', seed: 'ef-hero-3' },
];

export const accesos = [
  { nombre: 'Cupones', icono: '🏷️' },
  { nombre: 'Tarjeta tienda.com', icono: '💳' },
  { nombre: 'Retiro en tienda', icono: '🏬' },
  { nombre: 'Seguimiento', icono: '📦' },
  { nombre: 'Vende con nosotros', icono: '🤝' },
  { nombre: 'Ayuda', icono: '💬' },
];

export const soles = (n) => 'S/ ' + n.toLocaleString('es-PE');

export const productos = [
  { id: 'p1', nombre: 'Smartphone 128 GB pantalla 6.5"', marca: 'AURA', categoria: 'tecno', precio: 899, antes: 1199, tarjeta: 849, vendedor: 'tienda.com', envioGratis: true, rating: 4.5, tag: 'Oferta', seed: 'ef-p1' },
  { id: 'p2', nombre: 'Smart TV 50" 4K UHD', marca: 'LUMEN', categoria: 'electro', precio: 1099, antes: 1499, tarjeta: 1049, vendedor: 'tienda.com', llegaManana: true, rating: 4.6, tag: 'Oferta', seed: 'ef-p2' },
  { id: 'p3', nombre: 'Zapatillas urbanas unisex', marca: 'TERRA', categoria: 'deportes', precio: 129, antes: 199, tarjeta: null, vendedor: 'Marketplace: SportHub', envioGratis: true, rating: 4.3, tag: null, seed: 'ef-p3' },
  { id: 'p4', nombre: 'Set de sartenes antiadherentes 3 pzas', marca: 'CASZO', categoria: 'hogar', precio: 149, antes: 219, tarjeta: 139, vendedor: 'tienda.com', rating: 4.4, tag: 'Oferta', seed: 'ef-p4' },
  { id: 'p5', nombre: 'Audífonos inalámbricos con estuche', marca: 'NIVOX', categoria: 'tecno', precio: 179, antes: 259, tarjeta: 159, vendedor: 'tienda.com', envioGratis: true, rating: 4.7, tag: 'Nuevo', seed: 'ef-p5' },
  { id: 'p6', nombre: 'Casaca cortavientos mujer', marca: 'INDEX', categoria: 'mujer', precio: 99, antes: 149, tarjeta: null, vendedor: 'tienda.com', rating: 4.2, tag: null, seed: 'ef-p6' },
  { id: 'p7', nombre: 'Camisa lino manga larga hombre', marca: 'NORTE', categoria: 'hombre', precio: 79, antes: 119, tarjeta: null, vendedor: 'Marketplace: ModaMax', rating: 4.1, tag: 'Últimas unidades', seed: 'ef-p7' },
  { id: 'p8', nombre: 'Licuadora de vaso 1.5 L 600 W', marca: 'CASZO', categoria: 'electro', precio: 119, antes: 169, tarjeta: 109, vendedor: 'tienda.com', llegaManana: true, rating: 4.5, tag: 'Oferta', seed: 'ef-p8' },
  { id: 'p9', nombre: 'Kit skincare rutina 4 pasos', marca: 'GLOW', categoria: 'belleza', precio: 89, antes: 129, tarjeta: null, vendedor: 'tienda.com', envioGratis: true, rating: 4.8, tag: 'Nuevo', seed: 'ef-p9' },
  { id: 'p10', nombre: 'Bloques de construcción 500 pzas', marca: 'BRIK', categoria: 'juguetes', precio: 99, antes: 139, tarjeta: null, vendedor: 'Marketplace: JuegaYa', rating: 4.6, tag: null, seed: 'ef-p10' },
  { id: 'p11', nombre: 'Mancuernas ajustables 20 kg', marca: 'IRONX', categoria: 'deportes', precio: 259, antes: 349, tarjeta: 239, vendedor: 'tienda.com', rating: 4.4, tag: 'Oferta', seed: 'ef-p11' },
  { id: 'p12', nombre: 'Juego de sábanas 2 plazas', marca: 'DECOR', categoria: 'hogar', precio: 69, antes: 99, tarjeta: null, vendedor: 'tienda.com', rating: 4.3, tag: null, seed: 'ef-p12' },
];

export const ordenar = ['Relevancia', 'Menor precio', 'Mayor precio', 'Mayor descuento'];

export const filtrosPrecio = ['Hasta S/ 100', 'S/ 100 – S/ 300', 'S/ 300 – S/ 600', 'Más de S/ 600'];
export const filtrosVendedor = ['tienda.com', 'Marketplace', 'Reacondicionado'];
export const filtrosEnvio = ['Envío gratis', 'Llega mañana', 'Retiro en tienda'];

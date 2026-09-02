export const marca = { nombre: 'tienda.com', sub: 'Autos', tel: '01 700 5000' };

export const navPrincipal = [
  { t: 'Empresa', href: '#empresa' },
  { t: 'Marcas', href: '#marcas' },
  { t: 'Post venta', href: '#postventa' },
  { t: 'Tiendas y talleres', href: '#tiendas' },
  { t: 'Financiamiento', href: '#cotiza' },
];

export const topLinks = ['Comunicados', 'Novedades', 'Contacto'];

export const busquedas = [
  { t: 'Autos', d: 'Sedanes, hatchbacks y SUV de todas nuestras marcas.', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80' },
  { t: 'Ventas corporativas', d: 'Flotas, leasing y planes a medida para tu empresa.', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80' },
  { t: 'Camiones y maquinaria', d: 'Carga liviana, pesada y equipos para obra.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80' },
];

export const marcas = ['Rúmix', 'Kazai', 'Nordika', 'Citrén', 'Muraya', 'Vanko', 'Sakura', 'Terrano'];

export const modelos = [
  { nombre: 'Rúmix Vega', tipo: 'Sedán', desdeUSD: 15990, cuota: 199, img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80', tag: 'Destacado' },
  { nombre: 'Kazai X30', tipo: 'SUV compacta', desdeUSD: 21990, cuota: 279, img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80', tag: null },
  { nombre: 'Nordika Fjord', tipo: 'SUV 7 asientos', desdeUSD: 28990, cuota: 359, img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80', tag: 'Nuevo' },
  { nombre: 'Citrén C3 Play', tipo: 'Hatchback', desdeUSD: 13990, cuota: 175, img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80', tag: null },
  { nombre: 'Muraya Pickup', tipo: 'Pickup 4x4', desdeUSD: 32990, cuota: 419, img: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=600&q=80', tag: 'Destacado' },
  { nombre: 'Vanko Cargo', tipo: 'Van de carga', desdeUSD: 24990, cuota: 315, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', tag: null },
  { nombre: 'Sakura Hybrid', tipo: 'Sedán híbrido', desdeUSD: 26990, cuota: 339, img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80', tag: 'Nuevo' },
  { nombre: 'Terrano GLX', tipo: 'SUV full', desdeUSD: 30990, cuota: 389, img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80', tag: null },
];

export const novedades = [
  { fecha: 'Sept 2026', titulo: 'Llega la nueva línea híbrida a toda la red', extracto: 'Tres modelos con etiqueta ECO y mantenimiento reducido, ya disponibles en showroom.', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80' },
  { fecha: 'Ago 2026', titulo: 'Feria de autos seminuevos certificados', extracto: '150 unidades con garantía de 1 año y prueba de manejo sin cita previa.', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80' },
  { fecha: 'Jul 2026', titulo: 'Nuevo taller multimarca en Lima Norte', extracto: 'Servicio express de 45 minutos y repuestos originales para 8 marcas.', img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80' },
];

export const tiendas = [
  { nombre: 'Showroom La Molina', dir: 'Av. La Fontana 1250, La Molina', tel: '01 700 5010', tipo: 'Ventas + taller' },
  { nombre: 'Taller Surco', dir: 'Av. El Polo 740, Santiago de Surco', tel: '01 700 5020', tipo: 'Solo taller' },
  { nombre: 'Showroom Trujillo', dir: 'Av. América Sur 3145, Trujillo', tel: '044 60 5030', tipo: 'Ventas + taller' },
  { nombre: 'Showroom Arequipa', dir: 'Av. Ejército 1010, Cayma', tel: '054 22 5040', tipo: 'Ventas + taller' },
];

export const postVenta = [
  { t: 'Mantenimiento programado', d: 'Paquetes por kilometraje con precio cerrado.' },
  { t: 'Repuestos y accesorios', d: 'Originales y garantizados para toda la red.' },
  { t: 'Planchado y pintura', d: 'Cabina de horno y peritaje de siniestros.' },
  { t: 'Llamados a revisión', d: 'Consulta si tu vehículo tiene una campaña activa.' },
];

export const usd = (n) => 'US$ ' + n.toLocaleString('en-US');

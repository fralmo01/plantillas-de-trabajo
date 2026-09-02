const base = '/plantillas/tutienda-moda';

export const navItems = [
  { etiqueta: 'Colecciones', href: `${base}/colecciones/` },
  { etiqueta: 'Mujer', href: `${base}/mujer/` },
  { etiqueta: 'Hombre', href: `${base}/hombre/` },
  { etiqueta: 'Kids', href: `${base}/kids/` },
  { etiqueta: 'Comics', href: `${base}/comics/` },
  { etiqueta: 'Sale', href: `${base}/sale/` },
];

export const navPills = [
  { etiqueta: 'Polos 3 x 139', href: `${base}/sale/`, tono: 'rojo' },
  { etiqueta: 'Outlet', href: `${base}/sale/`, tono: 'amarillo', bang: true },
];

export const whatsapp = {
  numero: '51962297852',
  visible: '962 297 852',
  mensaje: 'Hola tu tienda.com, quiero comprar por chat 🛍️',
};

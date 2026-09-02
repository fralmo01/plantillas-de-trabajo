export interface Producto {
  id: string;
  nombre: string;
  sku: string;
  categoria: string;
  precio: number;
  antes: number | null;
  colores: number;
  etiqueta: string | null;
  dscto: number | null;
  img: string;
}

export interface OfertaShop {
  titulo: string;
  sub: string | null;
  precio: string;
  cta?: string;
}

export interface MetaCategoria {
  titulo: string;
  intro: string;
  subcategorias: string[];
  
  precio: number[];
}

export interface GrupoFiltro {
  titulo: string;
  opciones: string[];
}

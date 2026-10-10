// src/types/index.ts

export interface CitaResena {
  texto: string;
  autor: string;
}

export interface EnlacesLibro {
  amazon?: string;
  casadellibro?: string;
  fnac?: string;
  trailer?: string;
}

export interface MuestraLectura {
  pdfUrl: string;
  capitulosIncluidos: string;
}

export interface Libro {
  id: string;
  titulo: string;
  subtitulo?: string;
  genero: string;
  sinopsisCorta: string;
  sinopsisCompleta: string;
  portadaUrl: string;
  fechaPublicacion: string;
  paginas: number;
  destacado: boolean;
  muestraLectura?: MuestraLectura;
  enlaces: EnlacesLibro;
  citas?: CitaResena[];
}

export interface Novedad {
  id: string;
  explicacion: string,
  titulo: string;
  subtitulo?: string;
  imagen?: string;
  fecha: string;
  categoria: 'Evento' | 'Próximo Lanzamiento' | 'Articulo' | 'Aviso';
  resumen?: string;
  contenido: string;
  imagenUrl?: string;
}

export interface Autor {
  nombre: string;
  bioCorta: string;
  bioCompleta: string;
  email: string;
  redes: {
    instagram?: string;
    twitter?: string;
    goodreads?: string;
    linkedin?: string;
  };
}

export interface Relato {
  id: string; // ej: "el-batec-del-foc"
  titulo: string;
  idioma: string; // "Valencià" | "Castellano"
  tiempoLectura: string; // "4 min"
  fecha: string; // "2026-03-15"
  resumen: string;
  contenido: string[]; // Arreglo de párrafos
}
// src/pages/LibrosPage.tsx
import LibroCard from '../components/LibroCard';
import librosData from '../data/libros.json';
import type { Libro } from '../types/index';

export default function LibrosPage() {
  const libros: Libro[] = librosData;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Encabezado de la página */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Obras Publicadas
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
          Explora mis novelas, lee los primeros capítulos de prueba o accede a los enlaces de compra.
        </p>
      </div>

      {/* Rejilla de libros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {libros.map((libro) => (
          <LibroCard key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
}
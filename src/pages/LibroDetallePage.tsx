// src/pages/LibroDetallePage.tsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileDown, ShoppingCart, Tv, Book, Calendar, Layers } from 'lucide-react';
import librosData from '../data/libros.json';
import type { Libro, CitaResena } from '../types/index';

export default function LibroDetallePage() {
  const { id } = useParams<{ id: string }>();
  const libros = librosData as Libro[];

  const libro = libros.find((item) => item.id === id);

  if (!libro) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Libro no encontrado</h2>
        <p className="text-slate-600 dark:text-slate-400">La obra que buscas no existe o se ha movido.</p>
        <Link
          to="/libros"
          className="inline-flex items-center gap-2 text-orange-600 dark:text-amber-400 hover:text-orange-500 dark:hover:text-amber-300 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Botón Volver */}
      <div>
        <Link
          to="/libros"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 dark:text-slate-400 dark:hover:text-amber-400 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a mis libros
        </Link>
      </div>

      {/* Hero del Libro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Columna Portada */}
        <div className="md:col-span-4 space-y-4">
          <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
            <img
              src={libro.portadaUrl}
              alt={`Portada de ${libro.titulo}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Muestra de Lectura */}
          {libro.muestraLectura && (
            <a
              href={libro.muestraLectura.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-orange-500/10 hover:bg-orange-500/20 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 text-orange-600 dark:text-amber-400 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 border border-orange-500/20 dark:border-amber-500/30 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Leer adelanto ({libro.muestraLectura.capitulosIncluidos})
            </a>
          )}
        </div>

        {/* Columna Información */}
        <div className="md:col-span-8 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-amber-400 bg-orange-500/10 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-orange-500/20 dark:border-amber-500/20">
              {libro.genero}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-3 tracking-tight">
              {libro.titulo}
            </h1>
            {libro.subtitulo && (
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-1 italic">
                {libro.subtitulo}
              </p>
            )}
          </div>

          {/* Ficha Técnica */}
          <div className="flex flex-wrap gap-4 py-3 border-y border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-orange-500 dark:text-amber-400" />
              <span>Publicación: {libro.fechaPublicacion}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-orange-500 dark:text-amber-400" />
              <span>{libro.paginas} páginas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Book className="w-4 h-4 text-orange-500 dark:text-amber-400" />
              <span>{libro.genero}</span>
            </div>
          </div>

          {/* Sinopsis */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">Sinopsis</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {libro.sinopsisCompleta}
            </p>
          </div>

          {/* Citas y Reseñas */}
          {Array.isArray(libro.citas) && libro.citas.length > 0 && (
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">Lo que dicen los lectores</h3>
              <div className="space-y-3">
                {libro.citas.map((cita: CitaResena, index: number) => (
                  <blockquote
                    key={index}
                    className="p-4 bg-slate-100 dark:bg-slate-900/80 border-l-4 border-orange-500 dark:border-amber-500 rounded-r-xl text-slate-700 dark:text-slate-300 italic text-sm"
                  >
                    "{cita.texto}"
                    <cite className="block font-semibold not-italic text-orange-600 dark:text-amber-400 text-xs mt-2">
                      — {cita.autor}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>
          )}

          {/* Enlaces de Compra y Tráiler */}
          <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Disponible en plataformas
            </h3>
            <div className="flex flex-wrap gap-3">
              {libro.enlaces?.amazon && (
                <a
                  href={libro.enlaces.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs rounded-xl flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4 text-orange-500 dark:text-amber-400" />
                  Comprar en Amazon
                </a>
              )}
              {libro.enlaces?.casadellibro && (
                <a
                  href={libro.enlaces.casadellibro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs rounded-xl flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <Book className="w-4 h-4 text-orange-500 dark:text-amber-400" />
                  Casa del Libro
                </a>
              )}
              {libro.enlaces?.trailer && (
                <a
                  href={libro.enlaces.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs rounded-xl flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <Tv className="w-4 h-4 text-orange-500 dark:text-amber-400" />
                  Ver tráiler
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
// src/components/LibroCard.tsx
import { Link } from "react-router-dom";
import { FileDown, ArrowRight } from "lucide-react";
import type { Libro } from "../types/index";

interface LibroCardProps {
  libro: Libro;
}

export default function LibroCard({ libro }: LibroCardProps) {
  return (
    <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-orange-400 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-amber-500/5">
      {/* Contenedor de la Portada */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 p-1.5 sm:p-2">
        <img
          src={libro.portadaUrl}
          alt={`Portada de ${libro.titulo}`}
          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Detalle del Libro */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        <div>
          <span className="inline-block bg-sky-500/10 text-sky-700 dark:bg-amber-500/10 dark:text-amber-400 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-amber-500/20 mb-2">
            {libro.genero}
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
            {libro.titulo}
          </h3>
          {libro.subtitulo && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 italic">
              {libro.subtitulo}
            </p>
          )}
          <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all shadow-sm hover:shadow-md">
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none group-hover:line-clamp-none">
              {libro.sinopsisCorta}
            </p>
          </div>
        </div>

        {/* Acciones */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2.5">
          <Link
            to={`/libros/${libro.id}`}
            className="w-full py-2.5 px-4 bg-orange-500 hover:bg-orange-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            Ver ficha completa
            <ArrowRight className="w-4 h-4" />
          </Link>

          {libro.muestraLectura && (
            <a
              href={libro.muestraLectura.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium rounded-xl flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700/50 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400" />
              Leer primeros capítulos ({libro.muestraLectura.capitulosIncluidos}
              )
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

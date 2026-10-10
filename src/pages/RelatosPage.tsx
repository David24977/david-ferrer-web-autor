// src/pages/RelatosPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import relatosData from "../data/relatos.json";
import type { Relato } from "../types/index";

export default function RelatosPage() {
  const relatos = relatosData as Relato[];
  
  // Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const relatosPorPagina = 6;

  const totalPaginas = Math.ceil(relatos.length / relatosPorPagina);
  const indiceInicio = (paginaActual - 1) * relatosPorPagina;
  const relatosVisibles = relatos.slice(indiceInicio, indiceInicio + relatosPorPagina);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Encabezado */}
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Relatos
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Narrativa breve y pequeñas historias escritas por David Ferrer Sapiña.
          </p>
        </header>

        {/* Grid de Relatos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatosVisibles.map((relato) => (
            <article 
              key={relato.id}
              className="flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div>
                {/* Meta: Idioma y Tiempo */}
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  <span className="px-2.5 py-1 bg-orange-500/10 text-orange-600 dark:bg-amber-500/10 dark:text-amber-400 rounded-full font-semibold">
                    {relato.idioma}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {relato.tiempoLectura}
                  </span>
                </div>

                {/* Título */}
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                  {relato.titulo}
                </h2>

                {/* Resumen */}
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6">
                  {relato.resumen}
                </p>
              </div>

              {/* Enlace */}
              <Link
                to={`/relatos/${relato.id}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-amber-400 hover:underline"
              >
                <BookOpen className="w-4 h-4" />
                <span>Leer relato</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Controles de Paginación */}
        {totalPaginas > 1 && (
          <nav className="flex items-center justify-center gap-4 mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setPaginaActual((p) => Math.max(p - 1, 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={paginaActual === 1}
              className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              Página {paginaActual} de {totalPaginas}
            </span>

            <button
              onClick={() => {
                setPaginaActual((p) => Math.min(p + 1, totalPaginas));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={paginaActual === totalPaginas}
              className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}

      </div>
    </main>
  );
}
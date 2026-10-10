// src/pages/RelatoDetallePage.tsx
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import relatosData from "../data/relatos.json";
import type { Relato } from "../types/index";

export default function RelatoDetallePage() {
  const { id } = useParams<{ id: string }>();
  const relato = (relatosData as Relato[]).find((r) => r.id === id);

  if (!relato) {
    return <Navigate to="/relatos" replace />;
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
      <article className="container mx-auto px-4 max-w-2xl">
        
        {/* Botón Volver */}
        <Link
          to="/relatos"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a relatos</span>
        </Link>

        {/* Header del Relato */}
        <header className="mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
            <span className="px-2.5 py-1 bg-orange-500/10 text-orange-600 dark:bg-amber-500/10 dark:text-amber-400 rounded-full font-semibold">
              {relato.idioma}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {relato.tiempoLectura}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {relato.titulo}
          </h1>
        </header>

        {/* Cuerpo del Relato */}
        <div className="space-y-4 text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-serif">
          {relato.contenido.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>

        {/* Pie del relato */}
        <footer className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <Link
            to="/relatos"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-orange-500 dark:hover:border-amber-400 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ver más relatos</span>
          </Link>
        </footer>

      </article>
    </main>
  );
}
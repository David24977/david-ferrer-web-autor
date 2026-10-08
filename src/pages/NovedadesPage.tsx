// src/pages/NovedadesPage.tsx
import novedadesData from '../data/novedades.json';
import NovedadCard from '../components/NovedadCard';
import type { Novedad } from '../types/index';

export default function NovedadesPage() {
  const novedades = novedadesData as Novedad[];

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 py-8">
      {/* Título de la sección */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Novedades
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Últimas noticias, proyectos en curso y actualizaciones de publicaciones.
        </p>
      </header>

      {/* Listado de tarjetas unificado */}
      <div className="space-y-6">
        {novedades.map((novedad) => (
          <NovedadCard key={novedad.id} novedad={novedad} />
        ))}
      </div>
    </div>
  );
}
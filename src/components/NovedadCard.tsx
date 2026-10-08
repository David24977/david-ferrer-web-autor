// src/components/NovedadCard.tsx
import { Calendar, Tag } from "lucide-react";
import type { Novedad } from "../types/index";

interface NovedadCardProps {
  novedad: Novedad;
}

export default function NovedadCard({ novedad }: NovedadCardProps) {
  // Manejo flexible para la propiedad de la imagen
  const imagen = novedad.imagen;

  return (
    <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm hover:shadow-md dark:shadow-lg transition-all duration-300">
      {/* Cabecera: Fecha y Categoría */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/80 pb-3">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-orange-500 dark:text-amber-400" />
          <time dateTime={novedad.fecha}>{novedad.fecha}</time>
        </div>
        <span className="flex items-center gap-1 bg-orange-500/10 text-orange-600 dark:bg-amber-500/10 dark:text-amber-400 px-2.5 py-0.5 rounded-full font-medium border border-orange-500/20 dark:border-amber-500/20">
          <Tag className="w-3 h-3" />
          {novedad.categoria}
        </span>
      </div>

      {/* Contenedor principal: Se ajusta dinámicamente si hay imagen */}
      <div className={imagen ? "grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start" : "space-y-4"}>
        
        {/* Renderizado opcional de la portada */}
        {imagen && (
          <div className="w-full max-w-[140px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-md border border-slate-200 dark:border-slate-800">
            <img
              src={imagen}
              alt={`Portada de ${novedad.titulo}`}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        {/* Bloque de Títulos, Resumen y Estado */}
        <div className="space-y-3">
          <div className="space-y-1">
            {novedad.explicacion && (
              <span className="block text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {novedad.explicacion}
              </span>
            )}

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors">
              {novedad.titulo}
            </h3>

            {novedad.subtitulo && (
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 italic">
                {novedad.subtitulo}
              </p>
            )}
          </div>

          {/* Resumen con despliegue al pasar el ratón */}
          {novedad.resumen && (
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {novedad.resumen}
            </p>
          )}

          {/* Estado del proyecto / Nota adicional */}
          {novedad.contenido && (
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/80 font-medium">
              {novedad.contenido}
            </p>
          )}
        </div>

      </div>
    </article>
  );
}
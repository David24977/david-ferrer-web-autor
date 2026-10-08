// src/pages/HomePage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, FileDown } from "lucide-react";
import librosData from "../data/libros.json";
import novedadesData from "../data/novedades.json";
import autorData from "../data/autor.json";
import NovedadCard from "../components/NovedadCard";
import type { Libro, Novedad, Autor } from "../types/index";

export default function HomePage() {
  const libros = librosData as Libro[];
  const novedades = novedadesData as Novedad[];
  const autor = autorData as Autor;

  const [currentIndex, setCurrentIndex] = useState(0);
  const ultimasNovedades = novedades.slice(0, 2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? libros.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === libros.length - 1 ? 0 : prev + 1));
  };

  const libroActual = libros[currentIndex];

  return (
    <div className="space-y-20 py-6 max-w-5xl mx-auto">
      {/* 1. HERO SOBRIO & MINIMALISTA */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 my-6 shadow-xl min-h-[360px] flex items-center justify-center">
        {/* Imagen original 100% visible */}
        <img
          src={"/images/Foto_portada.jpg"}
          alt="Fondo portada"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Sombra de viñeta muy suave solo para legibilidad */}
        <div className="absolute inset-0 bg-slate-950/20" />

        {/* Contenido flotante sin fondo/caja */}
        <div className="relative z-10 text-center space-y-3 p-6 max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 drop-shadow-md">
            David Ferrer Sapiña
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Historias de suspense, misterio y narrativa
          </h1>

          <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {autor.bioCorta}
          </p>
        </div>
      </section>

      {/* 2. ESCAPARATE DE OBRAS EN GRIS ANTRACITA */}
      {libros.length > 0 && (
        <section className="space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Obras Destacadas
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Explorar Novelas
            </h2>
          </div>

          <div className="relative group">
            {/* Botón Izquierda */}
            {libros.length > 1 && (
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-100 hover:bg-zinc-800 shadow-lg backdrop-blur-sm transition-all"
                aria-label="Libro anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Botón Derecha */}
            {libros.length > 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-100 hover:bg-zinc-800 shadow-lg backdrop-blur-sm transition-all"
                aria-label="Siguiente libro"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Tarjeta Principal Gris Antracita */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl text-white transition-all">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Portada */}
                <div className="md:col-span-4 max-w-xs mx-auto md:max-w-none w-full">
                  <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl">
                    <img
                      key={libroActual.id}
                      src={libroActual.portadaUrl}
                      alt={`Portada de ${libroActual.titulo}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Contenido del Libro */}
                <div className="md:col-span-8 space-y-5 text-center md:text-left">
                  <span className="inline-block bg-zinc-800 text-zinc-300 text-xs font-medium px-3 py-1 rounded-full border border-zinc-700">
                    {libroActual.genero}
                  </span>

                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    {libroActual.titulo}
                  </h3>

                  {libroActual.subtitulo && (
                    <p className="text-zinc-400 italic text-sm">
                      {libroActual.subtitulo}
                    </p>
                  )}

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed line-clamp-4 font-normal">
                    {libroActual.sinopsisCorta}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3">
                    <Link
                      to={`/libros/${libroActual.id}`}
                      className="py-2.5 px-5 bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition-colors shadow-md"
                    >
                      Ver detalles de la obra
                      <ArrowRight className="w-4 h-4 text-zinc-950" />
                    </Link>

                    {libroActual.muestraLectura && (
                      <a
                        href={libroActual.muestraLectura.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium rounded-xl flex items-center gap-2 border border-zinc-700 transition-colors"
                      >
                        <FileDown className="w-4 h-4 text-zinc-400" />
                        Muestra de lectura
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Puntos de posición (Dots) */}
              {libros.length > 1 && (
                <div className="flex justify-center items-center gap-2 pt-8 border-t border-zinc-800 mt-8">
                  {libros.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-zinc-700 hover:bg-zinc-600"
                      }`}
                      aria-label={`Ir al libro ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 3. ÚLTIMAS NOVEDADES (Reutilizando NovedadCard) */}
      {ultimasNovedades.length > 0 && (
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Notas & Publicaciones Recientes
            </h2>
            <Link
              to="/novedades"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors"
            >
              Ver todas
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ultimasNovedades.map((nov) => (
              <NovedadCard key={nov.id} novedad={nov} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
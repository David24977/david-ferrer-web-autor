// src/pages/SobreMiPage.tsx
import { Mail, BookMarked, UserCheck, Feather } from 'lucide-react';
import { InstagramIcon, TwitterXIcon } from '../components/SocialIcons';
import autorData from '../data/autor.json';
import type { Autor } from '../types/index';

export default function SobreMiPage() {
  const autor = autorData as Autor;

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Encabezado */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Sobre el Autor
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
          Conoce más sobre mi trayectoria, mi proceso creativo y cómo contactar conmigo.
        </p>
      </div>

      {/* Contenido Biográfico */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm dark:shadow-lg">
            <div className="flex items-center gap-3 text-orange-600 dark:text-amber-400">
              <Feather className="w-6 h-6" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Biografía</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
              {autor.bioCompleta}
            </p>
          </div>
        </div>

        {/* Tarjeta de Contacto Directo */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-sm dark:shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-500/10 dark:bg-amber-500/10 rounded-2xl border border-orange-500/20 dark:border-amber-500/20 flex items-center justify-center mx-auto text-orange-600 dark:text-amber-400">
              <Mail className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">¿Quieres escribirme?</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Me parece perfecto. ¡Contactemos!
              </p>
            </div>

            <a
              href={`mailto:${autor.email}?subject=${encodeURIComponent("Contacto desde la web de autor")}`}
              className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Mail className="w-4 h-4" />
              Enviar correo
            </a>

            {/* Redes Sociales */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                
              </p>
              <div className="flex justify-center gap-3">
                {autor.redes?.instagram && (
                  <a
                    href={autor.redes.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {autor.redes?.twitter && (
                  <a
                    href={autor.redes.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all"
                    title="X (Twitter)"
                  >
                    <TwitterXIcon className="w-4 h-4" />
                  </a>
                )}
                {autor.redes?.goodreads && (
                  <a
                    href={autor.redes.goodreads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all"
                    title="Goodreads"
                  >
                    <BookMarked className="w-4 h-4" />
                  </a>
                )}
                {autor.redes?.linkedin && (
                  <a
                    href={autor.redes.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all"
                    title="LinkedIn"
                  >
                    <UserCheck className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
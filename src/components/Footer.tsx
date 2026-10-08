// src/components/Footer.tsx
import { Mail, BookMarked, UserCheck } from "lucide-react";
import { InstagramIcon, TwitterXIcon } from "./SocialIcons";
import autorData from "../data/autor.json";
import type { Autor } from "../types/index";

export default function Footer() {
  const autor = autorData as Autor;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-8 transition-colors">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Nombre y Nombre de Autor + Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-200 tracking-wide">
            {autor.nombre}{" "}
            <span className="text-orange-600 dark:text-amber-400 font-normal">
              Ferrer Sapiña
            </span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {year} Todos los derechos reservados.
          </p>
        </div>

        {/* Bloque de Contacto y Redes (Condicional) */}
        <div className="flex items-center gap-3">
          {/* Botón directo "Escríbeme" */}
          {autor.email && (
            <a
              href={`mailto:${autor.email}?subject=${encodeURIComponent("Contacto desde la web de autor")}`}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-orange-500 dark:text-amber-400" />
              <span>Escríbeme</span>
            </a>
          )}

          {/* Redes Sociales Preparadas */}
          {autor.redes?.instagram && (
            <a
              href={autor.redes.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all shadow-sm"
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
              className="p-2 bg-white dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all shadow-sm"
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
              className="p-2 bg-white dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all shadow-sm"
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
              className="p-2 bg-white dark:bg-slate-800 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:bg-amber-500/20 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700/50 transition-all shadow-sm"
              title="LinkedIn"
            >
              <UserCheck className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </footer>
  );
}
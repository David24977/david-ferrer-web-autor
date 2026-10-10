// src/components/Navbar.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Newspaper, User, Home, Feather, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-orange-500/10 text-orange-600 dark:bg-amber-500/10 dark:text-amber-400 border border-orange-500/20 dark:border-amber-500/20'
        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <NavLink to="/" className="text-l font-bold tracking-wider text-slate-800 dark:text-white hover:text-orange-500 dark:hover:text-amber-400 transition-colors">
            David Ferrer Sapiña
          </NavLink>

          {/* Menú Escritorio + Botón Tema */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              <Home className="w-4 h-4" />
              Inicio
            </NavLink>
            <NavLink to="/libros" className={navLinkClass}>
              <BookOpen className="w-4 h-4" />
              Libros
            </NavLink>
            <NavLink to="/relatos" className={navLinkClass}>
              <Feather className="w-4 h-4" />
              Relatos
            </NavLink>
            <NavLink to="/novedades" className={navLinkClass}>
              <Newspaper className="w-4 h-4" />
              Novedades
            </NavLink>
            <NavLink to="/sobre-mi" className={navLinkClass}>
              <User className="w-4 h-4" />
              Sobre mí
            </NavLink>
            <div className="ml-2 pl-2 border-l border-slate-300 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Móvil: Botón Tema + Hamburguesa */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <Home className="w-4 h-4" />
              Inicio
            </NavLink>
            <NavLink to="/libros" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <BookOpen className="w-4 h-4" />
              Libros
            </NavLink>
            <NavLink to="/relatos" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <Feather className="w-4 h-4" />
              Relatos
            </NavLink>
            <NavLink to="/novedades" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <Newspaper className="w-4 h-4" />
              Novedades
            </NavLink>
            <NavLink to="/sobre-mi" onClick={() => setIsOpen(false)} className={navLinkClass}>
              <User className="w-4 h-4" />
              Sobre mí
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
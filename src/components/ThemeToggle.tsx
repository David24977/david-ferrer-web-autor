// src/components/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center justify-center border border-slate-300 dark:border-slate-700 cursor-pointer"
      title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-label="Cambiar tema de color"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-sky-600" />
      )}
    </button>
  );
}
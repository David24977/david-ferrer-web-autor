// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LibrosPage from './pages/LibrosPage';
import LibroDetallePage from './pages/LibroDetallePage';
import NovedadesPage from './pages/NovedadesPage';
import SobreMiPage from './pages/SobreMiPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 selection:bg-orange-500 selection:text-white dark:selection:bg-amber-500 dark:selection:text-slate-950">
          
          <Navbar />

          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/libros" element={<LibrosPage />} />
              <Route path="/libros/:id" element={<LibroDetallePage />} />
              <Route path="/novedades" element={<NovedadesPage />} />
              <Route path="/sobre-mi" element={<SobreMiPage />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
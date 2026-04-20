import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-slate-900 selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} SERVICIOS DE INGENIERIA CIVIL. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

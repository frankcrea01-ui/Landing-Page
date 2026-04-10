import { Phone, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="font-extrabold text-white text-lg">FC</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
              INGENIERÍA<span className="text-primary-600">.</span>
            </span>
          </div>

          {/* Main Navigation & Contact Info (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-primary-600 transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-primary-600 transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-primary-600 transition-colors">Contacto</a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors hidden lg:flex">
                <Phone className="w-4 h-4" />
                <span>+51 955 225 716</span>
              </div>
              <a href="#contacto" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 transform hover:-translate-y-0.5">
                Cotizar
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { Phone, Mail, Clock } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-white rotate-45"></div>
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              SERVICIOS DE INGENIERIA CIVIL<span className="text-primary-600"></span>
            </span>
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+51 955 225 716</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>frankcrea01@gmail.com</span>
            </div>
            <a href="#contacto" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 transform hover:-translate-y-0.5">
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

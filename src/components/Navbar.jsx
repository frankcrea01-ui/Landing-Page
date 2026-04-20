import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="font-extrabold text-white text-lg">FC</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">INGENIERÍA.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors">{link.name}</a>
            ))}
            <a href="#contacto" className="bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-700 transition-all">Cotizar Proyecto</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-900 border-b border-gray-50">{link.name}</a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-600 px-3"><Phone className="w-4 h-4" /> <span>+51 955 225 716</span></div>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="w-full bg-primary-600 text-white text-center py-4 rounded-xl font-bold">Cotizar Proyecto</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
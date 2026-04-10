import { useEffect, useRef } from 'react';
import { ArrowRight, HardHat } from 'lucide-react';
import { fadeInUp } from '../animations';

const Hero = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    fadeInUp(titleRef.current, 0.2);
    fadeInUp(textRef.current, 0.4);
    fadeInUp(btnRef.current, 0.6);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 mix-blend-multiply"></div>
        <img
          src="/hero.jpg"
          alt="Ingeniería Civil Estructural"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse-slow_20s_infinite]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8" ref={React => { }}>
          <HardHat className="w-5 h-5 text-primary-400" />
          <span className="text-sm font-medium text-white tracking-wide uppercase">Especialistas en Estructuras y Remodelaciones</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 opacity-0"
        >
          Soluciones Integrales en Ingeniería Civil<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
            Diseño, Construcción y Saneamiento
          </span>
        </h1>

        <p
          ref={textRef}
          className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light opacity-0"
        >
          Diseñamos, construimos y regularizamos proyectos de edificación con enfoque técnico y soporte digital.
          Optimizamos costos, reducimos errores y garantizamos cumplimiento normativo en cada etapa.
        </p>

        <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
          <a href="#servicios" className="group flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
            Nuestros Servicios
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contacto" className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
            Solicitar Cotización
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Desplegar</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

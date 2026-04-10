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
        <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 mix-blend-multiply"></div>
        <img
          src="/hero.jpg"
          alt="Proyectos de Ingeniería Civil"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse-slow_20s_infinite]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Servicios de <br className="hidden md:block" />
          <span className="text-primary-400">
            Ingeniería Civil
          </span>
        </h1>

        <p
          ref={textRef}
          className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light"
        >
          Diseño estructural, construcción y saneamiento físico-legal con enfoque técnico y control de ejecución. Integramos ingeniería y datos para asegurar que su inversión se desarrolle sin desviaciones.
        </p>

        <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
          <a href="#contacto" className="group flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-primary-600/30 w-full sm:w-auto">
            Solicitar cotización
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#servicios" className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all w-full sm:w-auto">
            Especialidades
          </a>
        </div>
      </div>


    </section>
  );
};

export default Hero;

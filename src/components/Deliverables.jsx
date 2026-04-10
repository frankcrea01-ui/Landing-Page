import { useEffect, useRef } from 'react';
import { FileStack, Calculator, FileCheck } from 'lucide-react';
import { scaleIn, fadeInUp } from '../animations';

const Deliverables = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    scaleIn(containerRef.current);
    fadeInUp(textRef.current, 0.4);
  }, []);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[200%] bg-gradient-to-l from-primary-900/40 to-transparent -rotate-12 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div ref={containerRef} className="w-full md:w-1/2 opacity-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group">
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10"></div>
            <img
              src="/planos.jpg"
              alt="Planos Estructurales"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white text-slate-900 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <FileCheck className="w-8 h-8 text-primary-600" />
              <div>
                <p className="font-bold text-lg leading-tight">100% Precisión</p>
                <p className="text-sm font-medium text-slate-500">Garantía Normativa</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={textRef} className="w-full md:w-1/2 opacity-0">
          <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Resultados Tangibles</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Nuestros Entregables</h3>
          <p className="text-lg text-slate-400 mb-10">
            Documentación técnica completa y detallada para la correcta ejecución de su proyecto, cumpliendo con los requerimientos municipales y constructivos.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="mr-6 bg-primary-600/20 p-4 rounded-xl h-fit">
                <FileStack className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Planos Estructurales</h4>
                <p className="text-slate-400">Detalles precisos de cimentación, armaduras, losas y especificaciones técnicas listas para obra.</p>
              </div>
            </div>

            <div className="flex bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="mr-6 bg-blue-600/20 p-4 rounded-xl h-fit">
                <Calculator className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Memorias de Cálculo</h4>
                <p className="text-slate-400">Sustento matemático riguroso del comportamiento de los elementos sometidos a cargas estáticas y sísmicas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;

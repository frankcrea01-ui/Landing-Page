import { useEffect, useRef } from 'react';
import { Building2, HardHat, Scale } from 'lucide-react';
import { fadeInUp, staggerFadeInUp } from '../animations';

const services = [
  {
    title: 'Diseño Estructural',
    description: 'Cálculos precisos que optimizan el uso de acero y concreto. Garantizamos seguridad total y expedientes listos para aprobación municipal sin observaciones.',
    icon: Building2,
    image: '/obra.jpeg',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Construcción y Remodelación',
    description: 'Ejecución técnica con supervisión rigurosa. Controlamos cronogramas y presupuestos para que su obra avance sin sorpresas ni gastos innecesarios.',
    icon: HardHat,
    image: '/industrial.jpg',
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Saneamiento Físico Legal',
    description: 'Regularización integral de predios. Gestionamos declaratorias de fábrica e independizaciones con rapidez ante SUNARP y municipalidades.',
    icon: Scale,
    image: '/hero.jpg',
    color: 'from-emerald-500 to-teal-600'
  }
];

const Services = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    fadeInUp(headerRef.current);
    staggerFadeInUp(cardsRef.current, 0.2);
  }, []);

  return (
    <section id="servicios" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Soluciones Especializadas</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ingeniería que da viabilidad a sus proyectos</h3>
          <p className="text-lg text-slate-600">
            Nos enfocamos en resolver los problemas críticos de diseño, ejecución y formalización legal en Lima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:-translate-y-2 opacity-0 flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60 mix-blend-multiply z-10 group-hover:opacity-40 transition-opacity`}></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
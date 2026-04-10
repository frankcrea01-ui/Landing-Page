import { useEffect, useRef } from 'react';
import { Building2, HardHat, Scale } from 'lucide-react';
import { fadeInUp, staggerFadeInUp } from '../animations';
import gsap from 'gsap';

const services = [
  {
    title: 'Diseño Estructural',
    description: 'Cálculos precisos que optimizan el uso de materiales.',
    details: ['Planos de Edificaciones', 'Estructuras Metálicas', 'Fabricación y Montaje', 'Memorias de Cálculo', 'Modelado BIM'],
    icon: Building2,
    image: '/obra.jpeg',
    color: 'from-blue-600/90 to-indigo-900/90'
  },
  {
    title: 'Construcción y Remodelación',
    description: 'Ejecución técnica con supervisión rigurosa.',
    details: ['Reforzamientos Estructurales', 'Remodelaciones Arquitectura', 'Ejecución de Obra Civil', 'Supervisión Técnica'],
    icon: HardHat,
    image: '/industrial.jpg',
    color: 'from-amber-600/90 to-orange-900/90'
  },
  {
    title: 'Saneamiento Físico Legal',
    description: 'Regularización integral de predios ante SUNARP.',
    details: ['Declaratoria de Fábrica/Edificación', 'Subdivisiones', 'Independizaciones', 'Rectificación de Áreas'],
    icon: Scale,
    image: '/hero.jpg',
    color: 'from-emerald-600/90 to-teal-900/90'
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
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Soluciones Integrales</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ingeniería que da viabilidad a su proyecto</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 opacity-0 relative"
            >
              <div className="h-72 relative overflow-hidden">
                {/* Content Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <h5 className="text-primary-400 font-bold mb-3 uppercase text-xs tracking-widest">Especialidades</h5>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li 
                        key={i} 
                        className="text-white text-sm flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                        style={{ transitionDelay: `${i * 100 + 100}ms` }}
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" /> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-10 bg-white/90 p-3 rounded-2xl shadow-lg">
                  <service.icon className="w-6 h-6 text-slate-800" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
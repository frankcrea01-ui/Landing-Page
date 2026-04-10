import { useEffect, useRef } from 'react';
import { Building2, HardHat, Scale } from 'lucide-react';
import { fadeInUp, staggerFadeInUp } from '../animations';
import gsap from 'gsap';

const services = [
  {
    title: 'Diseño Estructural',
    description: 'Planos y memorias de cálculo diseñados bajo normativa técnica para una seguridad estructural garantizada.',
    details: ['Planos de edificaciones', 'Ingeniería básica de estructuras metálicas', 'Planos de fabricación de estructuras metálicas', 'Planos de montaje de estructuras metálicas', 'Memorias de cálculo', 'Modelado BIM'],
    icon: Building2,
    image: '/obra.jpeg',
    color: 'from-blue-600/90 to-indigo-900/90',
    tintColor: 'from-blue-900/40 to-indigo-950/50'
  },
  {
    title: 'Construcción y Remodelación',
    description: 'Supervisión técnica especializada en remodelaciones y obra civil con enfoque en acabados de calidad.',
    details: ['Reforzamientos Estructurales', 'Remodelaciones Arquitectura', 'Ejecución de Obra Civil', 'Supervisión Técnica'],
    icon: HardHat,
    image: '/industrial.jpg',
    color: 'from-amber-600/90 to-orange-900/90',
    tintColor: 'from-slate-800/40 to-slate-950/50'
  },
  {
    title: 'Saneamiento Físico Legal',
    description: 'Soluciones legales para la regularización de edificaciones, garantizando su libre disposición registral.',
    details: ['Declaratoria de Fábrica/Edificación', 'Subdivisiones', 'Independizaciones', 'Rectificación de Áreas'],
    icon: Scale,
    image: '/hero.jpg',
    color: 'from-emerald-600/90 to-teal-900/90',
    tintColor: 'from-cyan-900/30 to-teal-950/40'
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
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Especialidades</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 opacity-0 relative border border-transparent hover:border-primary-500/50"
            >
              <div className="h-72 relative overflow-hidden group">
                {/* Tinte de Color Sutil (Estado Normal) - Desaparece en Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.tintColor} z-10 transition-opacity duration-500 group-hover:opacity-0`}></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-500 ease-out bg-slate-900/95 border-b-4 border-primary-600 pointer-events-none">
                  <h5 className="text-white opacity-90 font-bold mb-4 uppercase text-xs tracking-[0.2em] border-b border-white/10 pb-2">
                    Servicios Especializados
                  </h5>
                  <ul className="space-y-2.5">
                    {service.details.map((detail, i) => (
                      <li 
                        key={i} 
                        className="text-white/95 text-sm flex items-start gap-3 leading-tight opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                        style={{ transitionDelay: `${i * 100 + 100}ms` }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 z-20 bg-white/90 p-3 rounded-2xl shadow-lg">
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
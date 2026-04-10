import { useEffect, useRef } from 'react';
import { Building2, Factory, Hammer } from 'lucide-react';
import { fadeInUp, staggerFadeInUp } from '../animations';

const services = [
  {
    title: 'Viviendas Unifamiliares y Multifamiliares',
    description: 'Diseño estructural optimizado para proyectos residenciales, garantizando seguridad y eficiencia en materiales.',
    icon: Building2,
    image: '/obra.jpeg',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Naves Industriales',
    description: 'Soluciones robustas para espacios de gran escala, soportando cargas operativas y requerimientos industriales.',
    icon: Factory,
    image: '/industrial.jpg',
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Reforzamientos y Construcciones',
    description: 'Evaluación y mejora de estructuras existentes para cumplir con las normativas vigentes y aumentar su vida útil.',
    icon: Hammer,
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
      <div className="absolute inset-0 bg-[url('/bg-grid.png')] bg-repeat opacity-5 mix-blend-color-burn"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestra Experiencia</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expertos en Ingeniería Estructural</h3>
          <p className="text-lg text-slate-600">
            Brindamos soluciones conforme a los más altos estándares y normativa técnica, abarcando desde proyectos residenciales hasta complejos industriales.
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
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
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

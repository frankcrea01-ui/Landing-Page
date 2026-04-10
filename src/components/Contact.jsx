import { useEffect, useRef } from 'react';
import { Mail, MessageSquare, Clock, MapPin, Send } from 'lucide-react';
import { scaleIn, fadeInUp } from '../animations';

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    scaleIn(formRef.current);
    fadeInUp(infoRef.current, 0.3);
  }, []);

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Solicite una Cotización</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contáctenos</h3>
          <p className="text-lg text-slate-600">
            Cuéntenos sobre su proyecto y reciba una propuesta técnica y económica adaptada a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div ref={infoRef} className="opacity-0 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-primary-200 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group/item">
                  <div className="bg-green-100 p-3 rounded-xl group-hover/item:bg-green-500 transition-colors">
                    <MessageSquare className="w-6 h-6 text-green-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">WhatsApp</h5>
                    <p className="text-slate-600 mb-1">Escríbanos directamente para consultas rápidas</p>
                    <a href="#" className="text-primary-600 font-medium">+51 955 255 716</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group/item">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover/item:bg-blue-500 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">Email</h5>
                    <p className="text-slate-600 mb-1">Envíe planos o documentación a nuestro correo</p>
                    <a href="mailto:[EMAIL_ADDRESS]" className="text-primary-600 font-medium">[frankcrea01@gmail.com]</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">Horario de Atención</h5>
                    <p className="text-slate-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sábados 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="opacity-0">
            <form className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Enviar y solicitar evaluación</h4>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                <option>Diseño estructural</option>
                <option>Construcción</option>
                <option>Saneamiento</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="juan@empresa.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Asunto</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Consulta sobre Nave Industrial" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje Detallado</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none" placeholder="Quisiera cotizar el servicio para..."></textarea>
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-primary-500/20 active:scale-95">
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

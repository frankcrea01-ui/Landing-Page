import { useEffect, useRef } from 'react';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';
import { scaleIn, fadeInUp } from '../animations';

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    scaleIn(formRef.current);
    fadeInUp(infoRef.current, 0.3);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "TU_LLAVE_AQUI");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      alert("¡Mensaje enviado con éxito! Un ingeniero evaluará su caso pronto.");
      event.target.reset();
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Contacto Directo</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">¿Listo para iniciar su proyecto?</h3>
          <p className="text-lg text-slate-600">Agende una reunión técnica hoy mismo. Evaluamos su caso en menos de 24 horas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div ref={infoRef} className="opacity-0 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="space-y-8">
                <a href="https://wa.me/51955255716" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all duration-300 cursor-pointer group/item border border-transparent hover:border-green-200">
                  <div className="bg-green-100 p-3 rounded-xl group-hover/item:bg-green-500 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">WhatsApp Técnico</h5>
                    <p className="text-slate-600 text-sm mb-1">Respuesta inmediata para consultas urgentes</p>
                    <span className="text-primary-600 font-medium">+51 955 255 716</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">Horario de Atención</h5>
                    <p className="text-slate-600">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sáb: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="opacity-0">
            <form onSubmit={onSubmit} className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <input type="hidden" name="subject" value="Nueva consulta desde la Landing Page" />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Servicio de interés</label>
                <div className="relative">
                  <select name="servicio" required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none text-slate-700 invalid:text-slate-400">
                    <option value="" disabled hidden>Seleccione un servicio (Ej. Diseño Estructural)</option>
                    <option value="Diseño Estructural">Diseño Estructural</option>
                    <option value="Construcción / Remodelación">Construcción / Remodelación</option>
                    <option value="Saneamiento Físico Legal">Saneamiento Físico Legal</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                   <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                   <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="ejemplo@correo.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Mensaje Detallado</label>
                <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none" placeholder="Cuéntenos brevemente sobre su proyecto..."></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-500/30 active:scale-[0.98] transition-all">
                Enviar y Solicitar Evaluación <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
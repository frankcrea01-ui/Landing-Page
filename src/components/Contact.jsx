import { useEffect, useRef } from 'react';
import { Mail, MessageSquare, Clock, Send } from 'lucide-react';
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
    // IMPORTANTE: Pon tu llave de Web3Forms aquí
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Listo para iniciar su proyecto</h2>
          <p className="text-lg text-slate-600">Solicite una evaluación inicial y reciba una respuesta en menos de 24 horas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div ref={infoRef} className="opacity-0 space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors cursor-pointer group/item">
                  <div className="bg-green-100 p-3 rounded-xl group-hover/item:bg-green-500 transition-colors">
                    <MessageSquare className="w-6 h-6 text-green-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">WhatsApp</h5>
                    <a href="https://wa.me/51955255716" target="_blank" className="text-primary-600 font-medium">+51 955 255 716</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors">
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
            <form onSubmit={onSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-6">
              <input type="hidden" name="subject" value="Nueva consulta desde la Landing Page" />
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Servicio de interés</label>
                <select defaultValue="" name="servicio" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none">
                  <option value="" disabled>Ej: Diseño estructural, construcción, saneamiento</option>
                  <option value="Diseño Estructural">Diseño Estructural</option>
                  <option value="Construcción / Remodelación">Construcción / Remodelación</option>
                  <option value="Saneamiento Físico Legal">Saneamiento Físico Legal</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" placeholder="Ingrese su nombre completo" />
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200" placeholder="ejemplo@email.com" />
              </div>
              <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 resize-none" placeholder="Describa brevemente su requerimiento (ubicación, tipo de obra, área, etc.)"></textarea>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all">
                Solicitar cotización <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
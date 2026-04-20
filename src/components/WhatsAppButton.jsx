import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "51955225716"; 

  const options = [
    { label: "Diseño Estructural", msg: "Hola Ingeniero, solicito información sobre un Diseño Estructural." },
    { label: "Construcción", msg: "Hola Ingeniero, quisiera cotizar la ejecución de una obra." },
    { label: "Saneamiento/Legal", msg: "Hola Ingeniero, necesito asesoría con una Regularización Inmobiliaria." }
  ];

  const handleOpenWA = (msg) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden w-64 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 p-4 text-white text-sm font-bold border-b-2 border-cyan-500">
            ¿En qué podemos ayudarle?
          </div>
          <div className="p-2">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOpenWA(opt.msg)}
                className="w-full flex items-center justify-between p-3 text-left text-slate-700 hover:bg-slate-50 hover:text-cyan-700 rounded-xl transition-colors text-sm group"
              >
                {opt.label}
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-600" />
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-slate-800' : 'bg-[#25D366]'
        } text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;

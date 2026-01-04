import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Compass, Sun, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: Coffee,
        title: "Acolhimento",
        desc: "Um espaço seguro para você falar sem medo de julgamentos. Aqui, sua história é ouvida com respeito total."
    },
    {
        icon: Compass,
        title: "Entendimento",
        desc: "Mapeamos juntos os padrões e gatilhos que causam sua ansiedade ou conflitos, trazendo clareza para o caos."
    },
    {
        icon: Sun,
        title: "Transformação",
        desc: "Você aprende ferramentas práticas da Terapia Cognitiva para lidar com as emoções e assume o controle da sua própria vida."
    }
];

// Renamed component internally to reflect new purpose, but kept filename to avoid breaking imports
const TherapeuticJourney: React.FC = () => {
  return (
    <section id="jornada" className="py-20 md:py-32 bg-sage-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent" />
      <div className="absolute -left-20 top-40 w-64 h-64 bg-white rounded-full blur-[80px] opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-sage-500 font-sans text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                    Como funciona
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-sage-900 mb-6">
                    Sua jornada de <span className="italic text-clay-500">reencontro</span>
                </h2>
                <p className="text-sand-900/70 font-sans text-lg leading-relaxed">
                    A terapia não é mágica, é processo. Construímos um caminho estruturado para você sair do modo de sobrevivência e começar a viver plenamente.
                </p>
            </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-sage-200/50 -z-10" />

            {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative group"
                    >
                        {/* Step Number Badge */}
                        <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-sage-50 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                             <Icon size={32} className="text-sage-600 group-hover:text-clay-500 transition-colors" strokeWidth={1.5} />
                             <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage-900 rounded-full flex items-center justify-center text-white font-serif text-sm">
                                 {idx + 1}
                             </div>
                        </div>

                        <div className="text-center px-4">
                            <h3 className="font-serif text-2xl text-sage-900 mb-4">{step.title}</h3>
                            <p className="text-sage-500 font-sans leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                        
                        {/* Mobile connector arrow */}
                        {idx !== steps.length - 1 && (
                            <div className="md:hidden flex justify-center py-6 text-sage-300">
                                <ArrowRight size={24} className="rotate-90" />
                            </div>
                        )}
                    </motion.div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticJourney;
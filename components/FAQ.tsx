import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona o atendimento online?",
    answer: "O atendimento online tem a mesma eficácia do presencial, com a vantagem de ser realizado no conforto da sua casa. Utilizamos plataformas seguras de vídeo (como Google Meet), garantindo sigilo total e ética profissional."
  },
  {
    question: "Você atende por convênio/plano de saúde?",
    answer: "Atuo na modalidade particular para garantir a qualidade e a duração adequada de cada sessão. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele ofereça essa opção."
  },
  {
    question: "Qual a duração e frequência das sessões?",
    answer: "As sessões têm duração média de 50 minutos e, geralmente, ocorrem uma vez por semana. A frequência pode ser ajustada conforme a evolução do tratamento e necessidade clínica."
  },
  {
    question: "A Terapia Cognitivo Comportamental serve para mim?",
    answer: "A TCC é uma abordagem baseada em evidências, altamente eficaz para ansiedade, depressão, questões de relacionamento e autoconhecimento. Ela foca em resolver problemas atuais e modificar padrões de pensamento disfuncionais."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
           <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-serif text-3xl md:text-5xl text-sage-900 mb-6"
           >
             Dúvidas Frequentes
           </motion.h2>
           <p className="text-sage-500 font-sans text-lg">
             Entenda melhor como podemos caminhar juntos.
           </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-sage-100 last:border-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
              >
                <span className={`font-serif text-xl transition-colors duration-300 ${activeIndex === index ? 'text-sage-900' : 'text-sage-600 group-hover:text-sage-900'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-sage-900 text-white' : 'bg-sage-50 text-sage-400 group-hover:bg-sage-200'}`}>
                   {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-sage-500 font-sans leading-relaxed text-base md:text-lg pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Conversion Prompt */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center pt-8 border-t border-sage-100"
        >
            <p className="text-sage-400 text-sm mb-6">Ainda tem alguma pergunta?</p>
             <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-sage-200 text-sage-900 rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-sage-50 hover:border-sage-400 transition-all shadow-sm hover:shadow-md"
            >
                <MessageCircle size={18} />
                Falar com Douglas
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
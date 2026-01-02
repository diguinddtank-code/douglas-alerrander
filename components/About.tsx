import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-sand-50 relative overflow-hidden">
      
      {/* Visual Connector / Background Blur */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Image Side - Single Premium Image */}
          <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 flex justify-center lg:justify-end">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative max-w-sm w-full"
             >
               {/* Decorative Frame Line */}
               <div className="absolute inset-0 border border-sage-200 translate-x-4 translate-y-4 rounded-[2rem] -z-10" />
               
               {/* Main Image Container */}
               <div className="aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-sage-900/10 relative z-10 bg-white">
                 <img 
                    src="https://i.imgur.com/kvcq6ad.png" 
                    alt="Douglas Alerrander - Retrato" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                 />
                 
                 {/* Subtle Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
               </div>

               {/* Name Tag Floating */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-sand-100 hidden md:block z-20"
               >
                   <p className="font-serif italic text-sage-900 text-sm">"Empatia e Ciência"</p>
               </motion.div>
             </motion.div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
                <div className="flex items-center space-x-4 mb-6">
                    <span className="h-px w-12 bg-sage-400"></span>
                    <span className="text-sage-500 font-sans tracking-widest uppercase text-xs font-bold">Sobre Mim</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sage-900 mb-6 leading-[1.1]">
                  Douglas Alerrander <br/>
                  <span className="text-2xl md:text-3xl text-sage-500 font-normal italic block mt-2">Psicólogo Clínico & TCC</span>
                </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sage-800/80 font-sans leading-relaxed space-y-6 text-base md:text-lg"
            >
              <p>
                Acredito que a terapia é um processo colaborativo e humano. Como especialista em <strong>Terapia Cognitivo Comportamental (TCC)</strong>, meu foco não é apenas ouvir, mas fornecer ferramentas práticas para que você possa lidar melhor com suas emoções e desafios diários.
              </p>
              <p>
                Minha atuação é centrada em três pilares fundamentais: <strong>Relações, Vida e Trabalho</strong>. Entendo que o equilíbrio nessas áreas é essencial para uma saúde mental robusta e sustentável.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                 {[
                    "Baseado em Evidências",
                    "Ambiente sem julgamentos",
                    "Foco na Autonomia",
                    "Atendimento Humanizado"
                 ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center space-x-3 text-sage-900"
                    >
                        <CheckCircle2 size={18} className="text-clay-400 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{item}</span>
                    </motion.div>
                 ))}
              </div>

              <div className="pt-6 border-l-4 border-clay-300 pl-6 my-8 bg-white/50 py-6 rounded-r-xl">
                 <Quote className="text-clay-400 w-6 h-6 mb-3" />
                 <p className="font-serif italic text-lg md:text-xl text-sage-900 leading-relaxed">
                   "Não podemos controlar tudo o que acontece, mas podemos escolher como responder a cada situação."
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
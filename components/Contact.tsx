import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-sand-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-sage-900/5 z-10 border border-sage-50"
        >
            <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Info */}
                <div className="lg:w-1/2 space-y-10">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-4xl md:text-5xl text-sage-900 mb-6"
                        >
                            Vamos conversar?
                        </motion.h2>
                        <p className="text-sand-900/70 font-sans text-lg leading-relaxed">
                            Dar o primeiro passo para a terapia é um ato de coragem e autocuidado. Estou disponível para atendimentos online para todo o mundo e presenciais.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-5 group">
                            <div className="p-3 bg-sand-50 rounded-full shadow-sm text-clay-500 group-hover:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg text-sage-900">Atendimento</h4>
                                <p className="font-sans opacity-70 text-sm mt-1">Online (Google Meet)<br/>Presencial (Brasília - DF)</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-5 group">
                             <div className="p-3 bg-sand-50 rounded-full shadow-sm text-clay-500 group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <a href="mailto:contato@douglaspsi.com.br" className="font-sans text-sage-800 hover:text-clay-500 transition-colors border-b border-transparent hover:border-clay-500 pb-0.5">contato@douglaspsi.com.br</a>
                        </div>
                         <div className="flex items-center space-x-5 group">
                            <div className="p-3 bg-sand-50 rounded-full shadow-sm text-clay-500 group-hover:scale-110 transition-transform">
                                <Calendar size={20} />
                            </div>
                            <span className="font-sans text-sage-800">Segunda a Sexta, 08h às 20h</span>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Action Card */}
                <div className="lg:w-1/2 flex items-center justify-center">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="w-full bg-sage-50/50 p-8 md:p-12 rounded-3xl border border-sage-100 text-center space-y-6 flex flex-col items-center justify-center min-h-[300px]"
                    >
                         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                             <MessageCircle size={40} />
                         </div>
                         <div>
                             <h3 className="font-serif text-2xl text-sage-900 mb-2">Agendamento Simplificado</h3>
                             <p className="text-sage-500 text-sm max-w-xs mx-auto">
                                 Clique abaixo para verificar horários disponíveis e agendar sua sessão diretamente pelo WhatsApp.
                             </p>
                         </div>
                         <a 
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-sm py-4 bg-green-600 text-white rounded-xl font-sans font-bold tracking-wide shadow-xl shadow-green-600/20 hover:bg-green-700 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:scale-[1.02] transition-all duration-500 ease-out flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Chamar no WhatsApp
                        </a>
                    </motion.div>
                </div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
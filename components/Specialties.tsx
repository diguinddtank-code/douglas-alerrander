import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SERVICES } from '../constants';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 15
    } 
  }
};

const Specialties: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-sage-900 mb-6"
          >
            Caminhos para o <span className="italic text-clay-500">bem-estar</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sand-900/70 font-sans text-lg"
          >
            Cada jornada é única. Trabalhamos juntos para restaurar seu equilíbrio através de pilares fundamentais.
          </motion.p>
        </div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-3xl bg-sand-50 backdrop-blur-md border border-sand-100 shadow-lg shadow-sage-100/20 hover:shadow-xl hover:shadow-sage-200/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-sage-600 flex items-center justify-center mb-8 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500 shadow-sm relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-sage-600"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Icon size={26} strokeWidth={1.2} className="relative z-10" />
                </div>
                <h3 className="font-serif text-xl text-sage-900 mb-4 group-hover:text-sage-700">
                  {service.title}
                </h3>
                <p className="text-sand-900/60 font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-clay-400" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
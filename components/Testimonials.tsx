import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, Shield } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Duplicate testimonials to ensure seamless loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 bg-sand-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 text-sage-400 uppercase tracking-widest text-[10px] font-bold bg-white px-3 py-1 rounded-full border border-sage-100 mb-4"
        >
            <Shield size={12} />
            <span>Relatos Anônimos</span>
        </motion.div>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-4xl text-sage-900"
        >
            Vidas transformadas
        </motion.h2>
      </div>

      {/* Marquee Container 1 (Left Direction) - Faster & Smoother */}
      <div className="flex relative overflow-hidden mb-6">
        <motion.div 
          className="flex gap-4 md:gap-6 min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
            {duplicatedTestimonials.map((t, idx) => (
                 <div 
                    key={`${t.id}-${idx}`}
                    className="flex-shrink-0 w-[280px] md:w-[350px] p-6 bg-white border border-sage-50 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow"
                 >
                    <div className="flex space-x-0.5 text-clay-400 mb-3">
                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="font-serif text-base text-sage-800 leading-relaxed italic opacity-80 mb-4">
                        "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-sage-400 font-bold font-serif text-xs">
                            {t.author.charAt(0)}
                        </div>
                        <div className="font-sans">
                            <p className="font-bold text-xs tracking-wide text-sage-900">{t.author}</p>
                            <p className="text-sage-400 text-[10px] uppercase tracking-widest">{t.role}</p>
                        </div>
                    </div>
                 </div>
            ))}
        </motion.div>
      </div>

       {/* Marquee Container 2 (Right Direction - Slower) */}
       <div className="flex relative overflow-hidden">
        <motion.div 
          className="flex gap-4 md:gap-6 min-w-full"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
            {duplicatedTestimonials.reverse().map((t, idx) => (
                 <div 
                    key={`rev-${t.id}-${idx}`}
                    className="flex-shrink-0 w-[280px] md:w-[350px] p-6 bg-white border border-sage-50 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow"
                 >
                    <div className="flex space-x-0.5 text-clay-400 mb-3">
                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="font-serif text-base text-sage-800 leading-relaxed italic opacity-80 mb-4">
                        "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-sage-400 font-bold font-serif text-xs">
                            {t.author.charAt(0)}
                        </div>
                        <div className="font-sans">
                            <p className="font-bold text-xs tracking-wide text-sage-900">{t.author}</p>
                            <p className="text-sage-400 text-[10px] uppercase tracking-widest">{t.role}</p>
                        </div>
                    </div>
                 </div>
            ))}
        </motion.div>
      </div>

      {/* Fade Edges (Light Theme) */}
      <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-sand-50 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-sand-50 to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default Testimonials;
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PAIN_POINTS, WHATSAPP_URL } from '../constants';
import { CheckCircle2, MessageCircle, X, ChevronRight, ArrowRight, Activity } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

// New variants for the text content on the left
const textContainerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.2
        }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const ProblemAwareness: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize as null to prevent auto-popup on mobile
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Set default selection ONLY on Desktop after mount
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSelectedId('p1');
    }
  }, []);

  const selectedItem = PAIN_POINTS.find(p => p.id === selectedId);
  const ActiveIcon = selectedItem?.icon || Activity;

  return (
    <section id="motivos" className="py-12 md:py-32 bg-white relative overflow-hidden" ref={containerRef}>
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: Sticky Context Area */}
            <div className="lg:sticky lg:top-32 self-start">
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Badge */}
                    <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-sage-300"></div>
                        <span className="text-sage-500 font-sans text-xs font-bold tracking-[0.2em] uppercase">
                            Identifique seus sinais
                        </span>
                    </motion.div>

                    <motion.h2 variants={textItemVariants} className="font-serif text-4xl md:text-6xl text-sage-900 leading-[1.1] mb-6">
                        O que te trouxe <br/> <span className="italic text-clay-400 font-light">até aqui?</span>
                    </motion.h2>
                    
                    <motion.p variants={textItemVariants} className="text-sage-500 text-lg font-sans leading-relaxed mb-10 max-w-md">
                        Reconhecer o que você sente é o primeiro passo para transformar sua realidade. Selecione ao lado o que mais ressoa com o seu momento atual.
                    </motion.p>
                    
                    {/* Desktop Dynamic Content - Deep Dive Response */}
                    <motion.div variants={textItemVariants} className="hidden md:block relative min-h-[200px]">
                        <AnimatePresence mode="wait">
                            {selectedItem && (
                                <motion.div
                                    key={selectedItem.id}
                                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-sand-50 p-8 rounded-3xl border border-sage-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-10">
                                            <ActiveIcon size={100} className="text-sage-900" />
                                        </div>
                                        
                                        <h3 className="font-serif text-2xl text-sage-900 mb-4 flex items-center gap-3 relative z-10">
                                            <Activity size={20} className="text-clay-400" />
                                            Perspectiva Terapêutica
                                        </h3>
                                        
                                        <p className="text-sage-800 font-medium leading-relaxed italic relative z-10 text-lg">
                                            "{selectedItem.response}"
                                        </p>
                                    </div>

                                    <div className="pt-2 pl-2">
                                        <a 
                                            href={WHATSAPP_URL} 
                                            target="_blank"
                                            className="inline-flex items-center gap-3 text-sage-900 font-bold hover:text-clay-500 transition-colors group"
                                        >
                                            <span className="border-b-2 border-clay-400 pb-0.5 group-hover:border-clay-500">
                                                Quero trabalhar isso na terapia
                                            </span>
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN: Interactive Grid */}
            <div className="relative">
                
                {/* DESKTOP: Interactive Grid that updates Left Column */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden md:grid grid-cols-2 gap-4"
                >
                    {PAIN_POINTS.map((point) => {
                        const Icon = point.icon;
                        const isSelected = selectedId === point.id;
                        return (
                            <motion.div
                                key={point.id}
                                variants={itemVariants}
                                onClick={() => setSelectedId(point.id)}
                                onMouseEnter={() => setSelectedId(point.id)}
                                className={`
                                    cursor-pointer p-6 rounded-2xl border transition-all duration-500 group flex flex-col justify-between min-h-[220px]
                                    ${isSelected 
                                        ? 'bg-sage-900 text-white border-sage-900 shadow-2xl scale-[1.02] ring-1 ring-sage-900/50 z-10' 
                                        : 'bg-white text-sage-900 border-sage-100 hover:border-clay-300 hover:shadow-lg'
                                    }
                                `}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-4 rounded-2xl transition-colors duration-300 ${isSelected ? 'bg-white/10 text-white' : 'bg-sage-50 text-sage-600 group-hover:bg-clay-100 group-hover:text-clay-600'}`}>
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                    {isSelected && <motion.div layoutId="check"><CheckCircle2 size={24} className="text-clay-300" /></motion.div>}
                                </div>
                                
                                <div>
                                    <h3 className={`font-serif text-xl font-medium mb-2 ${isSelected ? 'text-white' : 'text-sage-900'}`}>
                                        {point.title}
                                    </h3>
                                    <p className={`text-sm font-sans leading-relaxed ${isSelected ? 'text-sage-200' : 'text-sage-500'}`}>
                                        {point.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* MOBILE LIST: Simplified for small screens */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="md:hidden flex flex-col gap-3"
                >
                     {PAIN_POINTS.map((point) => {
                        const Icon = point.icon;
                        return (
                            <motion.div
                                key={point.id}
                                variants={itemVariants}
                                onClick={() => setSelectedId(point.id)}
                                className="bg-white border border-sage-100 p-5 rounded-2xl flex items-start gap-4 shadow-sm active:scale-95 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-full bg-sage-50 flex-shrink-0 flex items-center justify-center text-sage-600">
                                    <Icon size={22} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-lg text-sage-900 mb-1">{point.title}</h3>
                                    <p className="text-xs text-sage-500 font-sans leading-relaxed">{point.desc}</p>
                                </div>
                                <div className="self-center">
                                     <ChevronRight size={18} className="text-sage-300" />
                                </div>
                            </motion.div>
                        )
                     })}
                </motion.div>
            </div>
        </div>
      </div>

      {/* MOBILE MODAL */}
      <AnimatePresence>
        {selectedId && selectedItem && window.innerWidth < 768 && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 md:hidden">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute inset-0 bg-sage-900/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="bg-white w-full max-w-md rounded-[2rem] p-6 relative z-10 shadow-2xl overflow-hidden"
                >
                    {/* Modal Decor */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-sage-50 -z-10" />

                    <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white text-sage-500 hover:bg-sage-100 shadow-sm"
                    >
                        <X size={20} />
                    </button>

                    <div className="pt-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-sage-900 mb-4">
                            <selectedItem.icon size={32} strokeWidth={1.5} className="text-clay-500" />
                        </div>
                        <h3 className="font-serif text-3xl text-sage-900 mb-2">{selectedItem.title}</h3>
                        <p className="text-sage-500 text-sm font-sans">{selectedItem.desc}</p>
                    </div>

                    <div className="bg-sand-50 p-6 rounded-2xl border border-sage-100 mb-8 relative">
                         <div className="absolute -top-3 left-6 bg-sage-200 text-sage-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                             Perspectiva
                         </div>
                        <p className="font-serif italic text-sage-800 leading-relaxed text-lg">
                            "{selectedItem.response}"
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                         <a 
                            href={WHATSAPP_URL}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-sage-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-xl shadow-sage-900/20"
                         >
                            <MessageCircle size={20} />
                            Conversar sobre isso
                         </a>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProblemAwareness;
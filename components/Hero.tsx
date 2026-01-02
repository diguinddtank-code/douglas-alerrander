import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, Sparkles, Clock, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const MagneticButton: React.FC<{ children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' | 'dark' | 'outline' }> = ({ children, href, variant = 'primary' }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  let baseStyles = "relative px-8 py-4 rounded-full font-sans text-sm font-bold tracking-widest uppercase flex items-center justify-center overflow-hidden transition-all duration-500 shadow-lg w-full md:w-auto text-center";
  let variantStyles = "";

  if (variant === 'primary') {
      variantStyles = "bg-sage-900 text-white border border-sage-900 shadow-sage-900/20 hover:shadow-[0_0_40px_rgba(56,189,248,0.45)] hover:scale-[1.03]";
  } else if (variant === 'secondary') {
      variantStyles = "bg-white text-sage-900 border border-sage-200 hover:border-sage-400 hover:shadow-xl";
  } else if (variant === 'dark') {
      variantStyles = "bg-white text-sage-900 border border-white hover:bg-sand-100 hover:shadow-xl";
  } else if (variant === 'outline') {
      variantStyles = "bg-transparent text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white shadow-none";
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variantStyles}`}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">{children}</span>
    </motion.a>
  );
};

const SocialProof: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'light' }) => {
    const boxClass = theme === 'light' 
        ? 'bg-white/60 border-sage-100 shadow-sage-100/50' 
        : 'bg-white/10 border-white/10 shadow-black/10 backdrop-blur-md';
    
    const textClass = theme === 'light' ? 'text-sage-900' : 'text-white';
    const subTextClass = theme === 'light' ? 'text-sage-500' : 'text-sand-200';

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`flex items-center gap-4 mt-8 p-3 pr-6 rounded-2xl border backdrop-blur-sm ${boxClass} w-fit mx-auto md:mx-0`}
        >
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${theme === 'light' ? 'bg-sage-100 text-sage-700' : 'bg-white/20 text-white'}`}>
                <Clock size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                    <span className={`${textClass} font-serif text-xl font-bold`}>5.000+</span>
                    <div className="flex text-amber-400">
                         <Star size={12} fill="currentColor" />
                         <Star size={12} fill="currentColor" />
                         <Star size={12} fill="currentColor" />
                         <Star size={12} fill="currentColor" />
                         <Star size={12} fill="currentColor" />
                    </div>
                </div>
                <span className={`${subTextClass} text-[10px] font-sans uppercase tracking-wider font-medium`}>
                    Horas de atendimento clínico
                </span>
            </div>
        </motion.div>
    )
}

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // --- Parallax & Scroll Effects Configuration ---
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.05]);
  const blurImage = useTransform(scrollY, [0, 400], ["0px", "8px"]); 
  const yBgShape = useTransform(scrollY, [0, 1000], [0, 250]);
  const yFloatingCard = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row items-center md:pt-20 md:pb-12 bg-sand-50 overflow-x-hidden">
      
      {/* Texture & Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* 
          MOBILE LAYOUT
      */}
      <div className="md:hidden w-full flex flex-col bg-sage-900 min-h-[100dvh] relative rounded-b-[3rem] shadow-2xl z-20">
          
          {/* Image Area */}
          <motion.div 
            style={{ y: yImage, scale: scaleImage, filter: blurImage, opacity: opacityText }} 
            className="relative h-[45vh] w-full overflow-hidden"
          >
               <img 
                src="https://i.imgur.com/DZJiZ7u.png" 
                alt="Douglas Alerrander" 
                className="w-full h-full object-cover object-[center_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/40 to-transparent" />
          </motion.div>

          {/* Content Area - Changed justify-start to justify-center for vertical centering */}
          <div className="relative -mt-16 px-6 pb-24 z-10 flex flex-col items-center flex-1 justify-center">
             <div className="space-y-6 text-center w-full">
                 
                 {/* Niche Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-md mx-auto shadow-lg"
                >
                    <Sparkles size={12} className="text-clay-400" />
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-sand-50">Terapia Cognitiva</span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white leading-[1.2] relative drop-shadow-lg"
                >
                    <span className="block font-sans text-xl font-light tracking-wide opacity-90 mb-1">Sua mente não precisa ser</span>
                    <span className="block font-serif italic text-4xl text-clay-100">um lugar de guerra.</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-sans text-sm tracking-wide text-sand-200 max-w-xs mx-auto leading-relaxed opacity-80"
                >
                    Psicologia com estratégia e acolhimento para você reencontrar sua leveza.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col gap-4 pt-4 w-full max-w-xs items-center mx-auto"
                >
                    <MagneticButton href={WHATSAPP_URL} variant="dark">
                        Quero dar o primeiro passo
                    </MagneticButton>

                    <MagneticButton href="#motivos" variant="outline">
                        Entenda o que sente
                    </MagneticButton>
                    
                    <div className="scale-90 origin-top mt-2">
                        <SocialProof theme="dark" />
                    </div>

                </motion.div>
             </div>
             
             {/* Bouncing Scroll Indicator - Refined for continuous loop */}
             <motion.a
                href="#motivos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 12, 0] }}
                transition={{ 
                    opacity: { delay: 1.5, duration: 1 },
                    y: { repeat: Infinity, duration: 1.6, ease: "easeInOut" }
                }}
                className="absolute bottom-6 text-white/60 hover:text-white transition-colors cursor-pointer p-2"
             >
                 <ChevronDown size={32} strokeWidth={1.5} />
             </motion.a>
          </div>
      </div>


      {/* 
          DESKTOP LAYOUT 
      */}
      
      {/* Animated Background Shape */}
      <motion.div 
        style={{ y: yBgShape }}
        className="hidden md:block absolute top-0 right-0 w-[50vw] h-[120%] bg-white skew-x-12 translate-x-1/2 z-0 shadow-[-50px_0_100px_rgba(0,0,0,0.02)] origin-top" 
      />

      <div className="hidden md:grid max-w-7xl mx-auto px-6 w-full grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 h-full">
        
        {/* Text Content */}
        <motion.div 
            style={{ opacity: opacityText, y: yText }} 
            className="space-y-8 lg:space-y-10"
        >
            {/* Authority Badge */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 border-l-2 border-sage-300 pl-4"
            >
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sage-500">Douglas Alerrander</span>
                    <span className="text-xs font-sans text-sage-400">Psicólogo Clínico | CRP-01/29285</span>
                </div>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="text-sage-900 leading-[1.1]">
                <span className="block font-sans text-4xl lg:text-5xl font-light tracking-tight opacity-90 text-sage-700">Sua mente não precisa</span>
                <span className="block font-serif italic text-5xl lg:text-7xl text-sage-900 -mt-2 relative z-10">
                    ser um lugar de guerra.
                    <div className="absolute -z-10 bottom-2 right-10 w-40 h-40 bg-clay-400/20 blur-[60px] rounded-full" />
                </span>
                <span className="block font-sans text-base lg:text-lg tracking-wide mt-6 lg:mt-8 text-sage-500 max-w-lg leading-relaxed">
                    Você não precisa lidar com tudo sozinho. Utilizo a Terapia Cognitivo Comportamental para te ajudar a construir <strong className="text-sage-900 font-semibold">autonomia emocional</strong> e relações mais saudáveis.
                </span>
            </h1>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col lg:flex-row gap-4 pt-4">
                <MagneticButton href={WHATSAPP_URL} variant="primary">
                   Quero dar o primeiro passo
                </MagneticButton>
                <MagneticButton href="#motivos" variant="secondary">
                   Entenda o que sente
                </MagneticButton>
            </div>
            
            <SocialProof theme="light" />
          </motion.div>

        </motion.div>

        {/* Desktop Visual */}
        <motion.div 
          style={{ y: yImage, scale: scaleImage }}
          className="flex justify-end items-center relative z-0"
        >
             <div className="relative w-full max-w-[450px] h-[500px] lg:h-[580px]">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm border border-white rounded-t-[12rem] rounded-b-[3rem] p-4 transform rotate-2 transition-transform hover:rotate-0 duration-1000 shadow-2xl shadow-sage-200/50">
                    <div className="w-full h-full rounded-t-[11rem] rounded-b-[2rem] overflow-hidden relative filter saturate-[0.8] contrast-[1.1] hover:saturate-100 transition-all duration-700">
                         <img 
                            src="https://i.imgur.com/DZJiZ7u.png" 
                            alt="Douglas Alerrander" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Floating Elements - Layered Movement */}
                <motion.div 
                    style={{ y: yFloatingCard }}
                    initial={{ opacity: 0, scale: 0.8, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -left-4 lg:-left-8 bottom-32 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-sage-900/5 max-w-[180px] lg:max-w-[200px] border border-white"
                >
                    <p className="font-serif italic text-sage-900 text-lg leading-tight">"Acolhimento sem julgamentos."</p>
                </motion.div>
             </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
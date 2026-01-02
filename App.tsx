import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemAwareness from './components/ProblemAwareness';
import TherapeuticJourney from './components/BreathingExercise'; // Importing the updated component
import Specialties from './components/Specialties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-sand-50 text-sand-900 antialiased selection:bg-sage-200 selection:text-sage-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-clay-400 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <ProblemAwareness />
        <TherapeuticJourney />
        <About />
        <Specialties />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
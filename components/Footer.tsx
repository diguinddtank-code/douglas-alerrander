import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sand-50 py-12 border-t border-sage-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
           <h3 className="font-serif text-xl text-sage-900 font-semibold">Douglas Alerrander</h3>
           <p className="text-sage-500 text-sm font-sans mt-1">Psicólogo Clínico | CRP-01/29285</p>
        </div>

        <div className="flex space-x-6">
            <a href="https://www.instagram.com/psidouglasalerrander/" target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-sage-900 transition-colors p-2 hover:bg-sage-100 rounded-full">
                <Instagram size={20} />
            </a>
            <a href="https://br.linkedin.com/in/douglas-alerrander-a7bb4516a" target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-sage-900 transition-colors p-2 hover:bg-sage-100 rounded-full">
                <Linkedin size={20} />
            </a>
            <a href="#contact" className="text-sage-400 hover:text-sage-900 transition-colors p-2 hover:bg-sage-100 rounded-full">
                <MessageCircle size={20} />
            </a>
        </div>

        <div className="text-sage-300 text-xs font-sans text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Douglas Alerrander.</p>
            <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
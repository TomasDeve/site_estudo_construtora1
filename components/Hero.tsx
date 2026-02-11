import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/building1/1920/1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 to-brand-900/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-accent-500 text-sm font-semibold mb-6 border border-white/10">
            <CheckCircle size={16} />
            <span>Excelência em Engenharia Civil</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Construindo <span className="text-accent-500">Sonhos</span>,<br />
            Concretizando Realidades.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
            Especialistas em construções de alto padrão, reformas completas e gerenciamento de obras. 
            Transformamos seu projeto em obra-prima com precisão, prazo e qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent-500 text-white rounded-full font-semibold text-lg hover:bg-accent-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-accent-500/20 flex items-center justify-center space-x-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-900 transition-all flex items-center justify-center"
            >
              Ver Nossas Obras
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

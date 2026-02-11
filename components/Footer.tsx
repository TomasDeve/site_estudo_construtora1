import React from 'react';
import { HardHat } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-brand-200 py-12 border-t border-brand-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <HardHat size={24} className="text-accent-500" />
            <span className="text-xl font-bold text-white">
              CONSTRUTORA <span className="text-accent-500">ELITE</span>
            </span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Construtora Elite. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com excelência e tecnologia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

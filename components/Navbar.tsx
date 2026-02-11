import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, HardHat } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-brand-900 text-white' : 'bg-white text-brand-900'}`}>
            <HardHat size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
            CONSTRUTORA <span className="text-accent-500">ELITE</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
              isScrolled
                ? 'bg-brand-900 text-white hover:bg-brand-800'
                : 'bg-accent-500 text-white hover:bg-accent-600'
            }`}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-brand-950/95 backdrop-blur-sm flex flex-col justify-center items-center">
          <button
            className="absolute top-6 right-6 text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-accent-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-accent-500 text-white rounded-full text-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

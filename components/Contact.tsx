import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Sua mensagem foi recebida. Entraremos em contato em breve.");
  };

  return (
    <section id="contact" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorator */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Fale Conosco</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Vamos tirar seu projeto do papel?</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-md">
              Entre em contato para agendar uma visita técnica ou solicitar um orçamento sem compromisso. Estamos prontos para atender.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Telefone & WhatsApp</h4>
                  <p className="text-gray-400 mt-1">+55 (11) 99999-9999</p>
                  <p className="text-gray-400">+55 (11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">E-mail</h4>
                  <p className="text-gray-400 mt-1">contato@construtoraelite.com.br</p>
                  <p className="text-gray-400">orcamentos@construtoraelite.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Escritório</h4>
                  <p className="text-gray-400 mt-1">Av. Paulista, 1000 - Conj 501</p>
                  <p className="text-gray-400">Bela Vista, São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-accent-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Tipo de Serviço</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all">
                  <option value="">Selecione uma opção</option>
                  <option value="construcao">Construção Residencial</option>
                  <option value="reforma">Reforma</option>
                  <option value="comercial">Obra Comercial</option>
                  <option value="projeto">Projeto Arquitetônico</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Descreva brevemente seu projeto..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
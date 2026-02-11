import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Empresário',
    content: 'A equipe da Construtora Elite transformou nossa sede. O profissionalismo e o cumprimento dos prazos foram impecáveis. Recomendo de olhos fechados.',
    avatarUrl: 'https://picsum.photos/seed/man1/150/150',
  },
  {
    id: '2',
    name: 'Fernanda Oliveira',
    role: 'Advogada',
    content: 'Contratei para construir minha casa e fiquei impressionada com a atenção aos detalhes. O engenheiro responsável estava sempre disponível para tirar dúvidas.',
    avatarUrl: 'https://picsum.photos/seed/woman1/150/150',
  },
  {
    id: '3',
    name: 'Ricardo Santos',
    role: 'Investidor',
    content: 'Já fiz três obras com eles. A transparência nos custos e a qualidade do acabamento são diferenciais que não encontro em outras construtoras da região.',
    avatarUrl: 'https://picsum.photos/seed/man2/150/150',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900">O que nossos clientes dizem</h2>
          <div className="w-20 h-1.5 bg-accent-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative hover:shadow-lg transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{item.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={item.avatarUrl} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-brand-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-accent-500 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex justify-center items-center"><span className="text-2xl font-black text-gray-400">CREA-SP</span></div>
            <div className="flex justify-center items-center"><span className="text-2xl font-black text-gray-400">CAU/BR</span></div>
            <div className="flex justify-center items-center"><span className="text-2xl font-black text-gray-400">ISO 9001</span></div>
            <div className="flex justify-center items-center"><span className="text-2xl font-black text-gray-400">PBQP-H</span></div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Home, Building2, Ruler, Hammer, HardHat, FileText } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: '1',
    title: 'Construção Residencial',
    description: 'Casas de alto padrão projetadas para conforto e sofisticação. Do alicerce ao acabamento, cuidamos de cada detalhe.',
    icon: 'home',
  },
  {
    id: '2',
    title: 'Obras Comerciais',
    description: 'Espaços corporativos e lojas otimizados para o seu negócio. Agilidade na entrega para maximizar seu retorno.',
    icon: 'building',
  },
  {
    id: '3',
    title: 'Projetos Arquitetônicos',
    description: 'Design inovador aliado à funcionalidade. Projetos aprovados na prefeitura e compatibilizados com engenharia.',
    icon: 'ruler',
  },
  {
    id: '4',
    title: 'Reformas e Retrofit',
    description: 'Revitalização completa de imóveis. Modernização de instalações e acabamentos com mínima perturbação.',
    icon: 'hammer',
  },
  {
    id: '5',
    title: 'Gerenciamento de Obras',
    description: 'Controle total de custos, prazos e qualidade. Relatórios semanais e transparência absoluta na gestão.',
    icon: 'hardhat',
  },
  {
    id: '6',
    title: 'Laudos e Consultoria',
    description: 'Vistorias técnicas, laudos de engenharia e consultoria para regularização de imóveis e patologias.',
    icon: 'file',
  },
];

const IconMap: Record<string, React.ReactNode> = {
  home: <Home size={32} />,
  building: <Building2 size={32} />,
  ruler: <Ruler size={32} />,
  hammer: <Hammer size={32} />,
  hardhat: <HardHat size={32} />,
  file: <FileText size={32} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2 mb-4">Soluções Completas de Engenharia</h2>
          <div className="w-20 h-1.5 bg-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Combinamos técnica apurada e gestão eficiente para entregar obras que superam expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                {IconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

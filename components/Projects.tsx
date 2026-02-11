import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Residência Alphaville',
    category: 'Residencial',
    imageUrl: 'https://picsum.photos/seed/arch1/800/600',
    description: 'Casa de alto padrão com 450m², automação residencial e sustentabilidade.',
  },
  {
    id: '2',
    title: 'Edifício Corporate One',
    category: 'Comercial',
    imageUrl: 'https://picsum.photos/seed/arch2/800/600',
    description: 'Reforma de 3 andares corporativos com foco em open space e acústica.',
  },
  {
    id: '3',
    title: 'Loft Industrial',
    category: 'Interiores',
    imageUrl: 'https://picsum.photos/seed/arch3/800/600',
    description: 'Retrofit de antigo galpão transformado em loft residencial moderno.',
  },
  {
    id: '4',
    title: 'Clínica Saúde Vital',
    category: 'Saúde',
    imageUrl: 'https://picsum.photos/seed/arch5/800/600',
    description: 'Construção completa seguindo normas da ANVISA e acessibilidade.',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2">Nossas Obras Recentes</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-brand-600 font-semibold hover:text-accent-500 transition-colors mt-4 md:mt-0">
            Ver portfolio completo <span className="ml-2">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer h-80">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent-500 text-xs font-bold text-white rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-brand-600 font-semibold hover:text-accent-500 transition-colors">
            Ver portfolio completo <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

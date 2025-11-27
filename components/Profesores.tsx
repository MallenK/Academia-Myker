// src/pages/sobre-nosotros/Profesores.tsx

import React from 'react';

interface Profesor {
  nombre: string;
  especialidad: string;
  bio: string;
}

const profesores: Profesor[] = [
  {
    nombre: 'Sergi Mallén',
    especialidad: 'Desarrollo Web & IA Avanzada',
    bio: 'Full-stack developer especializado en PHP, JavaScript y tecnologías modernas. Experiencia en IA aplicada, automatización y creación de proyectos reales.'
  },
  {
    nombre: 'Laura Gómez',
    especialidad: 'Diseño UX/UI',
    bio: 'Diseñadora con experiencia en Figma, usabilidad y creación de interfaces centradas en el usuario.'
  },
  {
    nombre: 'Marc Torres',
    especialidad: 'Programación Frontend',
    bio: 'Experto en React, TypeScript y creación de interfaces eficientes y optimizadas.'
  }
];

const Profesores: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-primary-600 mb-8">Nuestros Profesores</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {profesores.map((p) => (
          <div
            key={p.nombre}
            className="p-6 border border-neutral-300 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-black mb-1">{p.nombre}</h3>
            <p className="text-primary-600 font-medium mb-3">{p.especialidad}</p>
            <p className="text-black/80 leading-relaxed">{p.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profesores;

// src/pages/sobre-nosotros/Profesores.tsx

import React from 'react';

interface Profesor {
  nombre: string;
  idioma: string;
  bio: string;
  img: string;
}

const profesores: Profesor[] = [
  {
    nombre: 'Anna Müller',
    idioma: 'Alemán',
    bio: 'Profesora nativa con más de 8 años de experiencia en enseñanza comunicativa y preparación para exámenes Goethe.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60'
  },
  {
    nombre: 'James Thompson',
    idioma: 'Inglés',
    bio: 'Especialista en speaking y pronunciación. Experiencia en formación para Cambridge, IELTS y clases dinámicas.',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60'
  },
  {
    nombre: 'Sakura Tanaka',
    idioma: 'Japonés',
    bio: 'Profesora nativa con enfoque práctico para niveles iniciales y avanzados. Experta en JLPT.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60'
  },
  {
    nombre: 'Emilio García',
    idioma: 'Español para extranjeros',
    bio: 'Amplia experiencia enseñando español a estudiantes internacionales mediante métodos conversacionales.',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=60'
  },
  {
    nombre: 'Claire Dubois',
    idioma: 'Francés',
    bio: 'Profesora nativa enfocada en expresión oral, fonética y preparación DELF/DALF.',
    img: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&w=500&q=60'
  },
  {
    nombre: 'Luca Bianchi',
    idioma: 'Italiano',
    bio: 'Experto en clases dinámicas basadas en conversación y cultura italiana. Experiencia con todos los niveles.',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=60'
  }
];

const Profesores: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-primary-600 mb-8">Nuestros Profesores</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {profesores.map((p) => (
          <div
            key={p.nombre}
            className="p-6 border border-neutral-300 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <img
              src={p.img}
              alt={p.nombre}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-black">{p.nombre}</h3>
            <p className="text-primary-600 font-medium mb-3">{p.idioma}</p>
            <p className="text-black/80 leading-relaxed">{p.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profesores;

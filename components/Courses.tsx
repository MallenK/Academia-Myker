import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Languages, School } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Courses: React.FC = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('courses.items.english.title'),
      description: t('courses.items.english.desc'),
      icon: Languages,
      color: "bg-blue-50 text-blue-600",
      href: "/curso-ingles"
    },
    {
      title: t('courses.items.french.title'),
      description: t('courses.items.french.desc'),
      icon: Languages,
      color: "bg-indigo-50 text-indigo-600",
      href: "/curso-frances"
    },
    {
      title: t('courses.items.math.title'),
      description: t('courses.items.math.desc'),
      icon: BookOpen,
      color: "bg-yellow-50 text-yellow-600",
      href: "/curso-matematicas"
    },
    {
      title: t('courses.items.school.title'),
      description: t('courses.items.school.desc'),
      icon: School,
      color: "bg-emerald-50 text-emerald-600",
      href: "/curso-repaso"
    }
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Headers */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">
            {t('courses.tag')}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('courses.title')}
          </h3>

          <p className="text-gray-600">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={course.href}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary-200 block h-full flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${course.color}`}>
                    <course.icon size={24} />
                  </div>
        
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h4>
        
                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>
                </div>
        
                <span className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1 group mt-auto">
                  {t('courses.more')}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>


        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 inline-block w-full max-w-4xl mx-auto border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('courses.ctaTitle')}
            </h3>

            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              {t('courses.ctaSubtitle')}
            </p>

            <Link
              to="/contacto"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5"
            >
              {t('courses.ctaButton')}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses;

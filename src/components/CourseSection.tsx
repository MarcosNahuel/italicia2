import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Star } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const courses = [
      {
        level: "A1-A2",
        title: "Italiano para Principiantes",
        description: "Comienza tu viaje en italiano con vocabulario esencial, gramática básica y conversaciones sencillas.",
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        rating: 4.9,
        reviews: 324,
        duration: "12 semanas"
      },
      {
        level: "B1-B2",
        title: "Italiano Intermedio",
        description: "Expande tus habilidades con gramática compleja, vocabulario diverso y matices culturales.",
        image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        reviews: 256,
        duration: "16 semanas"
      },
      {
        level: "C1-C2",
        title: "Italiano Avanzado",
        description: "Domina el idioma con expresiones sofisticadas, análisis de literatura y comunicación profesional.",
        image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        reviews: 189,
        duration: "20 semanas"
      }
    ];

    const CourseSection = () => {
      return (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title reveal fade-bottom">Nuestros Cursos de Italiano</h2>
              <p className="section-subtitle reveal fade-bottom">
                Desde principiante hasta avanzado, nuestros cursos integrales te llevarán a través de cada etapa del dominio del idioma italiano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-italian-red text-white text-sm font-bold px-3 py-1 rounded-full">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-gold fill-current" />
                        <span className="ml-1 font-medium">{course.rating}</span>
                        <span className="ml-1 text-gray-500">({course.reviews})</span>
                      </div>
                      <div className="text-sm text-gray-500">{course.duration}</div>
                    </div>

                    <Link
                      to="/learning-platform"
                      className="inline-flex items-center text-italian-green font-medium hover:text-italian-green/80 transition-colors"
                    >
                      Explorar Curso <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/learning-platform" className="btn-primary">
                Ver Todos los Cursos
              </Link>
            </div>
          </div>
        </section>
      );
    };

    export default CourseSection;

import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { ArrowRight, CheckCircle } from 'lucide-react';

    const benefits = [
      "Ruta de aprendizaje personalizada basada en tus objetivos",
      "Instructores nativos y práctica de conversación con IA",
      "Preparación para la certificación oficial (CELI, CILS, PLIDA)",
      "Inmersión cultural a través de experiencias virtuales",
      "Horarios flexibles para estilos de vida ocupados"
    ];

    const CtaSection = () => {
      return (
        <section className="py-20 bg-primary-dark text-primary-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Listo para Comenzar Tu Viaje en Italiano?
                </h2>
                <p className="text-xl text-neutral mb-8">
                  Únete a miles de estudiantes exitosos y comienza hoy tu camino hacia el dominio del italiano con nuestra plataforma impulsada por IA.
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link to="/learning-platform" className="btn-primary bg-accent hover:bg-accent/90 flex items-center">
                    Comenzar <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/learning-platform" className="btn-secondary bg-transparent text-primary-light border-primary-light hover:bg-primary-light/10">
                    Aprender Más
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 bg-primary-light rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Experiencia de aprendizaje de italiano"
                    className="w-full h-auto"
                  />

                  <div className="absolute inset-0 bg-primary-dark/80 flex items-end">
                    <div className="p-6">
                      <p className="text-primary-light text-lg font-medium">
                        "Aprender italiano me ha abierto un mundo completamente nuevo de cultura, gastronomía y conexiones."
                      </p>
                      <p className="text-neutral mt-2">
                        — Elena, Estudiante de ItalicIA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-success/30 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default CtaSection;

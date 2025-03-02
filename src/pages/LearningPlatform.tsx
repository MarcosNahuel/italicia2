import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import {
      BookOpen,
      Video,
      MessageCircle,
      Users,
      Award,
      Brain,
      ArrowRight,
      CheckCircle,
      Star
    } from 'lucide-react';

    const LearningPlatform = () => {
      return (
        <div className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-dark-blue to-dark-blue/90 text-white py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Nuestra Plataforma de Aprendizaje
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Experimenta un enfoque revolucionario para aprender italiano con nuestra plataforma impulsada por IA, diseñada para acelerar tu progreso y asegurar resultados duraderos.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/dashboard" className="btn-primary">
                      Comenzar a Aprender
                    </Link>
                    <a href="#courses" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
                      Explorar Cursos
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden lg:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="Plataforma de Aprendizaje"
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* AI Assessment Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581092921461-7d65ca45393a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Evaluación con IA"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-italian-green mr-3" />
                    <h2 className="text-3xl font-bold">Evaluación Impulsada por IA</h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    Nuestra inteligencia artificial avanzada evalúa tu dominio del italiano en todas las habilidades lingüísticas:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Análisis del habla con retroalimentación de pronunciación</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Evaluación de la escritura con corrección gramatical</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Evaluación de la comprensión auditiva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Medición del dominio de la lectura</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Creación de ruta de aprendizaje personalizada</span>
                    </li>
                  </ul>

                  <Link to="/dashboard" className="btn-primary inline-flex items-center">
                    Realizar Evaluación <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Learning Methods Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="section-title reveal fade-bottom">Métodos de Aprendizaje Flexibles</h2>
                <p className="section-subtitle reveal fade-bottom">
                  Elige el enfoque de aprendizaje que mejor se adapte a tu horario, objetivos y preferencias.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-4">
                    <Video className="h-8 w-8 text-italian-red mr-3" />
                    <h3 className="text-2xl font-bold">Clases en Vivo</h3>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Sesiones interactivas con instructores nativos de italiano en grupos pequeños para atención personalizada y retroalimentación en tiempo real.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Sesiones programadas con horarios flexibles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Discusiones interactivas en grupo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Corrección de pronunciación en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Contexto cultural y matices</span>
                    </li>
                  </ul>

                  <Link to="/dashboard" className="btn-primary inline-block">
                    Programar una Clase
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="card p-8"
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-italian-green mr-3" />
                    <h3 className="text-2xl font-bold">Aprendizaje a Tu Propio Ritmo</h3>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Lecciones y ejercicios completos que puedes completar en tu propio horario con retroalimentación y guía impulsadas por IA.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Acceso 24/7 a todos los materiales del curso</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Ejercicios interactivos con retroalimentación instantánea</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Seguimiento del progreso y aprendizaje adaptativo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                      <span>Práctica de conversación con IA en cualquier momento</span>
                    </li>
                  </ul>

                  <Link to="/dashboard" className="btn-primary inline-block">
                    Comenzar a Aprender
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Course Levels Section */}
          <section id="courses" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="section-title reveal fade-bottom">Niveles de Curso</h2>
                <p className="section-subtitle reveal fade-bottom">
                  Nuestro plan de estudios integral sigue el Marco Común Europeo de Referencia (MCER) para las lenguas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    level: "Principiante (A1-A2)",
                    description: "Construye una base con vocabulario básico, gramática simple y frases cotidianas.",
                    topics: ["Presentaciones y Saludos", "Números y Tiempo", "Actividades Diarias", "Presente Simple", "Preguntas Básicas"],
                    image: "https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  },
                  {
                    level: "Intermedio (B1-B2)",
                    description: "Expande tus habilidades con gramática compleja, vocabulario diverso y matices culturales.",
                    topics: ["Tiempos Pasados y Futuros", "Conversaciones Complejas", "Cultura e Historia Italiana", "Leer Noticias Italianas", "Expresar Opiniones"],
                    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
                  },
                  {
                    level: "Avanzado (C1-C2)",
                    description: "Domina el idioma con expresiones sofisticadas, literatura y comunicación profesional.",
                    topics: ["Gramática Avanzada", "Literatura Italiana", "Italiano de Negocios", "Dialectos Regionales", "Escritura Académica"],
                    image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  }
                ].map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.level}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{course.level}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>

                      <h4 className="font-medium mb-2">Temas Clave:</h4>
                      <ul className="space-y-1 mb-6">
                        {course.topics.map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-italian-green mr-2 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/dashboard"
                        className="inline-flex items-center text-italian-green font-medium hover:text-italian-green/80 transition-colors"
                      >
                        Explorar Nivel <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certification Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-gold mr-3" />
                    <h2 className="text-3xl font-bold">Certificaciones Oficiales</h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    Nuestros cursos te preparan para certificaciones de italiano reconocidas internacionalmente:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-bold">CELI (Certificato di Conoscenza della Lingua Italiana)</h3>
                      <p className="text-gray-600">Emitido por la Università per Stranieri di Perugia</p>
                    </li>
                    <li className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-bold">CILS (Certificazione di Italiano come Lingua Straniera)</h3>
                      <p className="text-gray-600">Emitido por la Università per Stranieri di Siena</p>
                    </li>
                    <li className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-bold">PLIDA (Progetto Lingua Italiana Dante Alighieri)</h3>
                      <p className="text-gray-600">Emitido por la Società Dante Alighieri</p>
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-6">
                    Nuestros cursos especializados de preparación para exámenes tienen una tasa de éxito del 95% para quienes los toman por primera vez.
                  </p>

                  <Link to="/dashboard" className="btn-primary inline-flex items-center">
                    Cursos de Preparación para la Certificación <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="Certificación Italiana"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="section-title reveal fade-bottom">Planes de Precios</h2>
                <p className="section-subtitle reveal fade-bottom">
                  Elige el plan que mejor se adapte a tus objetivos de aprendizaje y presupuesto.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    name: "Básico",
                    price: "€29",
                    period: "por mes",
                    description: "Perfecto para estudiantes casuales",
                    features: [
                      "Lecciones a tu propio ritmo",
                      "Práctica de conversación con IA",
                      "Seguimiento de progreso básico",
                      "Acceso al foro de la comunidad",
                      "Sesión grupal mensual"
                    ],
                    highlighted: false
                  },
                  {
                    name: "Premium",
                    price: "€79",
                    period: "por mes",
                    description: "Nuestra opción más popular",
                    features: [
                      "Todas las características del plan Básico",
                      "Clases semanales en vivo",
                      "Retroalimentación personalizada",
                      "Preparación para la certificación",
                      "Acceso al asistente de IA Vittoria",
                      "Talleres culturales"
                    ],
                    highlighted: true
                  },
                  {
                    name: "Ultimate",
                    price: "€149",
                    period: "por mes",
                    description: "Para estudiantes serios del idioma",
                    features: [
                      "Todas las características del plan Premium",
                      "Tutoría ilimitada 1 a 1",
                      "Soporte prioritario",
                      "Tasas de examen de certificación incluidas",
                      "Eventos culturales exclusivos",
                      "Módulos de italiano de negocios"
                    ],
                    highlighted: false
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`card p-8 ${plan.highlighted ? 'border-2 border-italian-green relative' : ''}`}
                  >
                    {plan.highlighted && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-italian-green text-white px-4 py-1 rounded-full text-sm font-bold">
                        Más Popular
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-600"> {plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-italian-green mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/dashboard"
                      className={`w-full text-center ${
                        plan.highlighted
                          ? 'btn-primary bg-italian-green hover:bg-italian-green/90'
                          : 'btn-secondary'
                      }`}
                    >
                      Elegir Plan
                    </Link>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-gray-600 mt-8">
                Todos los planes incluyen una prueba gratuita de 7 días. No se requiere tarjeta de crédito.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="section-title reveal fade-bottom">Preguntas Frecuentes</h2>
                <p className="section-subtitle reveal fade-bottom">
                  Encuentra respuestas a preguntas comunes sobre nuestra plataforma y metodología de aprendizaje.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "¿Cómo funciona la evaluación de IA?",
                    answer: "Nuestra evaluación de IA evalúa tus habilidades de habla, escritura, escucha y lectura a través de ejercicios interactivos. Analiza tus respuestas para determinar tu nivel de dominio según el marco MCER y crea una ruta de aprendizaje personalizada adaptada a tus fortalezas y áreas de mejora."
                  },
                  {
                    question: "¿Puedo cambiar entre clases en vivo y aprendizaje a mi propio ritmo?",
                    answer: "¡Absolutamente! Nuestra plataforma está diseñada para ser flexible. Puedes elegir asistir a clases en vivo cuando tu horario lo permita y cambiar al aprendizaje a tu propio ritmo cuando necesites más flexibilidad. Tu progreso se rastrea en ambos métodos de aprendizaje."
                  },
                  {
                    question: "¿Cuánto tiempo se tarda en dominar el italiano?",
                    answer: "El tiempo para alcanzar la fluidez varía según tu nivel inicial, la intensidad del aprendizaje y tu aptitud natural. En promedio, los estudiantes dedicados alcanzan el nivel B1 (intermedio) en 6-8 meses y el nivel C1 (avanzado) en 12-18 meses con práctica y participación regulares."
                  },
                  {
                    question: "¿Son las certificaciones reconocidas internacionalmente?",
                    answer: "Sí, preparamos a los estudiantes para las certificaciones CELI, CILS y PLIDA, todas ellas reconocidas internacionalmente y aceptadas por universidades, empleadores y autoridades de inmigración en todo el mundo como prueba de dominio del idioma italiano."
                  },
                  {
                    question: "¿Puedo acceder a la plataforma en dispositivos móviles?",
                    answer: "Sí, nuestra plataforma es totalmente responsiva y funciona en teléfonos inteligentes, tabletas y computadoras. También ofrecemos aplicaciones móviles dedicadas para iOS y Android para una experiencia de aprendizaje optimizada sobre la marcha."
                  },
                  {
                    question: "¿Qué pasa si no estoy satisfecho con el curso?",
                    answer: "Ofrecemos una garantía de devolución de dinero de 30 días para todos los nuevos suscriptores. Si no estás completamente satisfecho con nuestra plataforma, simplemente contacta a nuestro equipo de soporte dentro de los 30 días posteriores a tu compra para obtener un reembolso completo, sin preguntas."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-lg">
                        {faq.question}
                        <span className="transition-transform group-open:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-italian-green">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para Comenzar Tu Viaje en Italiano?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Únete a miles de estudiantes exitosos y comienza hoy tu camino hacia el dominio del italiano.
              </p>
              <Link to="/dashboard" className="btn-primary bg-white text-italian-green hover:bg-gray-100">
                Comienza Ahora
              </Link>
            </div>
          </section>
        </div>
      );
    };

    export default LearningPlatform;

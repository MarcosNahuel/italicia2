import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

    const testimonials = [
      {
        name: "Marco Rossi",
        role: "Profesional de Negocios",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        text: "ItalicIA transformó mi enfoque para aprender italiano. La retroalimentación impulsada por IA en mi pronunciación fue revolucionaria, y los elementos de inmersión cultural hicieron que el idioma cobrara vida. ¡Pasé de frases básicas a conversaciones seguras en solo 6 meses!"
      },
      {
        name: "Sophia Chen",
        role: "Estudiante Universitaria",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        text: "Como estudiante con un horario ocupado, la flexibilidad de la plataforma de ItalicIA fue perfecta. Podía practicar con el asistente de IA en cualquier momento, y los elementos de gamificación me mantuvieron motivada. ¡Aprobé mi certificación C1 en el primer intento gracias a este programa!"
      },
      {
        name: "David Miller",
        role: "Entusiasta de los Viajes",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        text: "Probé varias aplicaciones de idiomas antes de encontrar ItalicIA, y nada se compara. La ruta de aprendizaje personalizada se adaptó perfectamente a mis objetivos centrados en los viajes, y las sesiones en vivo con hablantes nativos me prepararon para conversaciones reales durante mi estadía de 3 meses en Italia."
      }
    ];

    const TestimonialSection = () => {
      const [current, setCurrent] = useState(0);

      const next = () => {
        setCurrent((current + 1) % testimonials.length);
      };

      const prev = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
      };

      return (
        <section className="py-20 bg-neutral">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title reveal fade-bottom">Lo Que Dicen Nuestros Estudiantes</h2>
              <p className="section-subtitle reveal fade-bottom">
                Escucha a nuestra comunidad de estudiantes que han transformado sus habilidades en italiano con ItalicIA.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary-light rounded-xl shadow-lg p-8 md:p-12"
                >
                  <Quote className="h-12 w-12 text-accent/20 mb-6" />

                  <p className="text-lg md:text-xl text-secondary-dark mb-8 italic">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                      <p className="text-gray-600">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>

                <div className="flex justify-center mt-8 space-x-4">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full bg-primary-light shadow-md hover:bg-neutral transition-colors"
                    aria-label="Testimonio anterior"
                  >
                    <ChevronLeft className="h-6 w-6 text-secondary-dark" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-full bg-primary-light shadow-md hover:bg-neutral transition-colors"
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight className="h-6 w-6 text-secondary-dark" />
                  </button>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === current ? 'bg-accent' : 'bg-gray-300'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default TestimonialSection;

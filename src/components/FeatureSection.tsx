import React from 'react';
    import { motion } from 'framer-motion';
    import { Brain, BookOpen, Video, BarChart3, Gamepad2, MessageCircle } from 'lucide-react';

    const features = [
      {
        icon: <Brain className="h-10 w-10 text-italian-green" />,
        title: "Evaluación Impulsada por IA",
        description: "Nuestra IA avanzada analiza tu habla, escritura y comprensión para determinar tu nivel de dominio y crear una ruta de aprendizaje personalizada."
      },
      {
        icon: <BookOpen className="h-10 w-10 text-italian-red" />,
        title: "Plan de Estudios Integral",
        description: "Desde principiante hasta avanzado, nuestro plan de estudios cubre todos los aspectos del aprendizaje del idioma italiano alineados con los estándares MCER."
      },
      {
        icon: <Video className="h-10 w-10 text-gold" />,
        title: "Clases en Vivo y Asíncronas",
        description: "Elige entre sesiones programadas en vivo con hablantes nativos o lecciones a tu propio ritmo que se ajusten a tu horario."
      },
      {
        icon: <BarChart3 className="h-10 w-10 text-terracotta" />,
        title: "Seguimiento del Progreso",
        description: "Monitorea tu mejora con análisis detallados y logros importantes para mantenerte motivado."
      },
      {
        icon: <Gamepad2 className="h-10 w-10 text-dark-blue" />,
        title: "Elementos de Gamificación",
        description: "Gana puntos, insignias y sube en las tablas de clasificación a medida que dominas nuevas habilidades y vocabulario."
      },
      {
        icon: <MessageCircle className="h-10 w-10 text-italian-green" />,
        title: "Asistente de IA Vittoria",
        description: "Practica conversaciones en cualquier momento con nuestro asistente de IA a través de Telegram o WhatsApp para obtener retroalimentación en tiempo real."
      }
    ];

    const FeatureSection = () => {
      return (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="section-title reveal fade-bottom">Experiencia de Aprendizaje Revolucionaria</h2>
              <p className="section-subtitle reveal fade-bottom">
                Nuestra plataforma combina tecnología de vanguardia con metodologías de aprendizaje de idiomas probadas para crear un viaje educativo sin igual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 flex flex-col items-start"
                >
                  <div className="p-3 rounded-lg bg-gray-100 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default FeatureSection;

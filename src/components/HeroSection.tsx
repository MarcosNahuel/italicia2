import React, { useEffect, useRef } from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { ArrowRight, BookOpen, Award, Users } from 'lucide-react';

    const HeroSection = () => {
      const towerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (!towerRef.current) return;

          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;

          const moveX = (clientX - innerWidth / 2) / 50;
          const moveY = (clientY - innerHeight / 2) / 50;

          towerRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.1}deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

      return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-italian-white bg-cover bg-center"> {/* Changed background to italian-white for better contrast */}
            <div className="absolute inset-0 bg-dark-blue/80"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-italian-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Domina el Italiano con <span className="text-italian-green">Aprendizaje Impulsado por IA</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-neutral">
                  Combina tecnología de vanguardia con experiencias culturales inmersivas para un viaje de aprendizaje de idiomas revolucionario.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/learning-platform" className="btn-primary flex items-center">
                    Comienza Ahora <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/learning-platform" className="btn-secondary">
                    Explorar Cursos
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-12">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 mx-auto text-italian-green" />
                    <p className="mt-2 font-bold text-2xl text-italian-white">50+</p>
                    <p className="text-sm text-neutral">Cursos</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto text-italian-white" />
                    <p className="mt-2 font-bold text-2xl text-italian-white">10,000+</p>
                    <p className="text-sm text-neutral">Estudiantes</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto text-italian-red" />
                    <p className="mt-2 font-bold text-2xl text-italian-white">98%</p>
                    <p className="text-sm text-neutral">Tasa de Éxito</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div
                  ref={towerRef}
                  className="w-full h-[500px] bg-[url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80')] bg-contain bg-center bg-no-repeat transition-transform duration-300 ease-out"
                ></div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-italian-green/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-italian-red/20 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>

          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#F3F4F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
      );
    };

    export default HeroSection;

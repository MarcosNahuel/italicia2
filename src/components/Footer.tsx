import React from 'react';
    import { Link } from 'react-router-dom';
    import { Languages, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-dark-blue text-white pt-16 pb-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <Link to="/" className="flex items-center space-x-2">
                  <Languages className="h-8 w-8 text-italian-red" />
                  <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-italian-green via-italian-white to-italian-red bg-clip-text text-transparent">
                    ItalicIA
                  </span>
                </Link>
                <p className="text-gray-300 mt-4">
                  Revolucionando el aprendizaje del idioma italiano a través de tecnología de IA, certificaciones oficiales y experiencias culturales inmersivas.
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/learning-platform" className="text-gray-300 hover:text-white transition-colors">Plataforma de Aprendizaje</Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Panel de Usuario</Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Acerca de Nosotros</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
                  </li>
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-4">Nuestros Cursos</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Principiante (A1-A2)</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Intermedio (B1-B2)</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Avanzado (C1-C2)</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Italiano de Negocios</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Italiano para Viajar</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Inmersión Cultural</a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-4">Contáctanos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <MapPin size={20} className="text-italian-red flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Via Roma 123, 00184 Roma, Italia</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone size={20} className="text-italian-red flex-shrink-0" />
                    <span className="text-gray-300">+39 06 1234 5678</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail size={20} className="text-italian-red flex-shrink-0" />
                    <span className="text-gray-300">info@italicia.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} ItalicIA. Todos los derechos reservados.</p>
              <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;

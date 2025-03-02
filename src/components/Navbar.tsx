import React, { useState, useEffect } from 'react';
    import { NavLink, Link } from 'react-router-dom';
    import { Menu, X, MapPin, User } from 'lucide-react'; {/* Changed logo icon to MapPin */}

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-italian-white shadow-md py-2' : 'bg-transparent py-4'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <MapPin className="h-8 w-8 text-italian-red" /> {/* Using MapPin for logo */}
                <span className="text-2xl font-manrope font-bold bg-gradient-to-r from-italian-green via-italian-white to-italian-red bg-clip-text text-transparent">
                  ItalicIA
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Inicio
                </NavLink>
                <NavLink to="/learning-platform" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Plataforma de Aprendizaje
                </NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Panel de Usuario
                </NavLink>
                <Link to="/dashboard" className="btn-primary">
                  Comenzar Ahora
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 hover:text-italian-red"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <nav className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} py-2`}
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/learning-platform"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} py-2`}
                  onClick={() => setIsOpen(false)}
                >
                  Plataforma de Aprendizaje
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} py-2`}
                  onClick={() => setIsOpen(false)}
                >
                  Panel de Usuario
                </NavLink>
                <Link
                  to="/dashboard"
                  className="btn-primary inline-block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Comenzar Ahora
                </Link>
              </nav>
            )}
          </div>
        </header>
      );
    };

    export default Navbar;

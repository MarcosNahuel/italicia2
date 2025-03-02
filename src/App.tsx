import React, { useEffect } from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import HomePage from './pages/HomePage';
    import LearningPlatform from './pages/LearningPlatform';
    import Dashboard from './pages/Dashboard';
    import AdminPanel from './pages/AdminPanel';
    import ScrollToTop from './components/ScrollToTop';

    function App() {
      // Scroll reveal animation
      useEffect(() => {
        const handleScroll = () => {
          const reveals = document.querySelectorAll('.reveal');

          reveals.forEach((reveal) => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
              reveal.classList.add('active');
            }
          });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/learning-platform" element={<LearningPlatform />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </main>
          <Footer />
        </>
      );
    }

    export default App;

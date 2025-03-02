import React from 'react';
    import HeroSection from '../components/HeroSection';
    import FeatureSection from '../components/FeatureSection';
    import CourseSection from '../components/CourseSection';
    import TestimonialSection from '../components/TestimonialSection';
    import CtaSection from '../components/CtaSection';

    const HomePage = () => {
      return (
        <>
          <HeroSection />
          <FeatureSection />
          <CourseSection />
          <TestimonialSection />
          <CtaSection />
        </>
      );
    };

    export default HomePage;

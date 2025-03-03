import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Business Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "ItalicIA transformed my approach to learning Italian. The AI-powered feedback on my pronunciation was game-changing, and the cultural immersion elements made the language come alive. I went from basic phrases to confident conversations in just 6 months!"
  },
  {
    name: "Sophia Chen",
    role: "University Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "As a student with a busy schedule, the flexibility of ItalicIA's platform was perfect. I could practice with the AI assistant anytime, and the gamification elements kept me motivated. I passed my C1 certification on the first try thanks to this program!"
  },
  {
    name: "David Miller",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "I tried several language apps before finding ItalicIA, and nothing compares. The personalized learning path adapted perfectly to my travel-focused goals, and the live sessions with native speakers prepared me for real conversations during my 3-month stay in Italy."
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
    <section className="py-20 bg-italian-green/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title reveal fade-bottom">What Our Students Say</h2>
          <p className="section-subtitle reveal fade-bottom">
            Hear from our community of learners who have transformed their Italian language skills with ItalicIA.
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
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <Quote className="h-12 w-12 text-italian-green/20 mb-6" />
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
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
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-italian-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
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

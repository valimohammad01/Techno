import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // ⬇ Empty testimonials array
  const testimonials: any[] = [];

  useEffect(() => {
    if (isAutoPlay && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // ⬇ If no reviews, show message
  if (testimonials.length === 0) {
    return (
      <section
        id="reviews"
        className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600">No reviews yet</p>
        </div>
      </section>
    );
  }

  // ⬇ Keep the rest of your existing carousel code untouched
  return (
    <section 
      id="reviews" 
      className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Your existing carousel JSX here */}
    </section>
  );
};

export default Reviews;

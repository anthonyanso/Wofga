import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Testimonials1 from '@/assets/testimonials/featured/featuresTestimonial1.jpg';
import Testimonials2 from '@/assets/testimonials/featured/featuresTestimonial2.jpg';
import Testimonials3 from '@/assets/testimonials/featured/featuresTestimonial3.jpg';
// No API, use static testimonials data

const testimonials = [
  {
    name: 'Ava Reynolds',
    position: 'Marketing Specialist',
    company: 'MedessyEnt',
    content: 'Wofga Digital delivered our project on time and exceeded our expectations. Highly recommended!',
    rating: 5,
    image: Testimonials1,
  },
  {
    name: 'Liam Carter',
    position: 'Admin Executive',
    company: 'KartelEnergy',
    content: 'Their expertise in cloud and security is unmatched. We felt supported every step of the way.',
    rating: 5,
    image: Testimonials2,
  },
  {
    name: 'Sophie Martinez',
    position: 'Product Manager',
    company: 'SalesForecConsulting',
    content: 'The dashboard they built for us transformed our business insights. Fantastic team!',
    rating: 5,
    image: Testimonials3,
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No testimonials available.</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-card p-8 md:p-12 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex justify-center mb-6"
            >
              <div className="p-3 bg-wofga-orange/20 rounded-full">
                <Quote className="w-8 h-8 text-wofga-orange" />
              </div>
            </motion.div>

            {/* Testimonial Content */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic"
            >
              "{testimonials[currentIndex]?.content}"
            </motion.blockquote>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="flex justify-center mb-6"
            >
              {[...Array(testimonials[currentIndex]?.rating || 0)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </motion.div>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="space-y-2"
            >
              <h4 className="text-xl font-semibold text-white">
                {testimonials[currentIndex]?.name}
              </h4>
              <p className="text-wofga-orange font-medium">
                {testimonials[currentIndex]?.position}
              </p>
              <p className="text-gray-400">
                {testimonials[currentIndex]?.company}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {testimonials.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-wofga-orange hover:bg-gray-800/50 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-wofga-orange hover:bg-gray-800/50 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-wofga-orange/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-orange-400/10 rounded-full blur-2xl" />
      </div>

      {/* Pagination Dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-wofga-orange scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
                }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isAutoPlaying && testimonials.length > 1 && (
        <div className="mt-4 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
          <motion.div
            className="h-full bg-wofga-orange"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          />
        </div>
      )}
    </div>
  );
}
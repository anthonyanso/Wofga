import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@assets/wofga_digital_logo.png';

interface PreloaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function Preloader({ isLoading, onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete?.(), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-primary"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="flex items-center space-x-3 mb-2">
                <img 
                  src={logoImage} 
                  alt="Wofga Digital" 
                  className="h-12 w-auto"
                />
                <div className="text-4xl font-bold text-white">
                  <span className="text-wofga-orange">Wofga</span> Digital
                </div>
              </div>
              <div className="text-gray-300 text-sm">Technology Solutions</div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-wofga-orange to-orange-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-gray-300 text-sm"
            >
              Loading amazing experiences...
            </motion.div>

            {/* Animated Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-wofga-orange rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
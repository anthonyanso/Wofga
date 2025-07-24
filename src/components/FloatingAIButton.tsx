import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function FloatingAIButton() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only run on client side
    setIsVisible(true);
    const hideOnPages = ['/Chat']; // Add pages where you want to hide the button
    setIsVisible(!hideOnPages.includes(router.pathname));
  }, [router.pathname]);

  const handleClick = () => {
    router.push('/Chat'); // Change this to your desired target page
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative p-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isHovered
            ? '0 0 20px rgba(124, 58, 237, 0.7)'
            : '0 0 10px rgba(124, 58, 237, 0.5)',
        }}
      >
        <Sparkles className="h-6 w-6 text-white" />
        
        {/* Optional floating particles animation */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute block rounded-full bg-white"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  x: Math.random() * 20 - 10,
                  y: Math.random() * -30 - 10,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                }}
              />
            ))}
          </>
        )}
        
        {/* Optional tooltip */}
        {isHovered && (
          <motion.div
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            AI Assistant
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}
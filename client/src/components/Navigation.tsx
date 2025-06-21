import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@assets/wofga digital logo_1750520159370.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoImage} 
                  alt="Wofga Digital" 
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-bold text-white">
                  <span className="text-wofga-orange">Wofga</span> Digital
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={cn(
                    'nav-link text-white hover:text-wofga-orange px-3 py-2 text-sm font-medium transition-colors cursor-pointer',
                    location === item.href && 'text-wofga-orange'
                  )}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Get Quote Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="btn-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button - visible on mobile and tablet */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-wofga-orange relative z-50 p-2"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <img 
                    src={logoImage} 
                    alt="Wofga Digital" 
                    className="h-8 w-auto"
                  />
                  <div className="text-lg font-bold text-white">
                    <span className="text-wofga-orange">Wofga</span> Digital
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="px-6 py-8 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={item.href}>
                      <motion.div
                        className={cn(
                          'flex items-center px-4 py-3 rounded-lg transition-all duration-200 group cursor-pointer',
                          location === item.href 
                            ? 'bg-wofga-orange/20 text-wofga-orange border-l-4 border-wofga-orange' 
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        )}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-8 left-6 right-6">
                <Link href="/contact">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="btn-gradient text-white px-6 py-3 rounded-full text-sm font-semibold w-full shadow-lg">
                      Get Free Quote
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-6 w-20 h-20 bg-wofga-orange/10 rounded-full blur-2xl" />
              <div className="absolute bottom-32 left-6 w-16 h-16 bg-orange-400/10 rounded-full blur-xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
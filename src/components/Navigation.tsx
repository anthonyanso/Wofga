import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@/assets/wofga_digital_logo.png';
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = window.location.pathname;

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

  // Navigation handler for <a> tags
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled
        ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800'
        : 'bg-gray-900/85 backdrop-blur-md border-b border-gray-800'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" onClick={e => handleNav(e, "/")}>
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
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={e => handleNav(e, item.href)}>
                  <span className={cn(
                    'nav-link text-white hover:text-wofga-orange px-3 py-2 text-sm font-medium transition-colors cursor-pointer',
                    location === item.href && 'text-wofga-orange'
                  )}>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
            {/* Desktop CTA Button always visible */}
            <div className="ml-8">
              <a href="/contact" onClick={e => handleNav(e, "/contact")}>
                <Button className="btn-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Contact Us
                </Button>
              </a>
            </div>
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
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 shadow-2xl border-l border-gray-700"
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
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <X size={24} />
                </Button>
              </div>

              {/* Navigation Items */}
              <div className="px-6 py-8 space-y-2 rounded-2xl bg-gradient-to-b from-black/90 via-zinc-900/90 to-zinc-800/90 shadow-xl">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a href={item.href} onClick={e => handleNav(e, item.href)}>
                      <motion.div
                        className={cn(
                          'mobile-nav-item flex items-center px-4 py-3 rounded-lg transition-all duration-200 group cursor-pointer relative overflow-hidden',
                          location === item.href
                            ? 'bg-gradient-to-r from-wofga-orange/30 to-orange-500/20 text-wofga-orange border-l-4 border-wofga-orange shadow-lg'
                            : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white'
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
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* main cta button */}
              <div className="px-6 py-8 space-y-2 rounded-2xl bg-gradient-to-b from-black/90 via-zinc-900/90 to-zinc-800/90 shadow-xl">
                <a href="/contact" onClick={e => handleNav(e, "/contact")}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-wofga-orange hover:bg-orange-500 text-white text-center py-3 rounded-full font-semibold shadow-lg transition"
                  >
                    Contact Us
                  </motion.div>
                </a>
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-8 left-6 right-6">
                <a href="/contact" onClick={e => handleNav(e, "/contact")}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-wofga-orange hover:bg-orange-500 text-white text-center py-3 rounded-lg font-semibold shadow-lg transition"
                  >
                    Contact Us
                  </motion.div>
                </a>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="mt-4 text-center text-gray-400 text-xs"
                >
                  Ready to transform your business?
                </motion.div>
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
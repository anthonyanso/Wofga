import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
              <img 
                src="@assets/wofga digital logo_1750520159370.png" 
                alt="Wofga Digital Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className={cn(
                    'nav-link text-white hover:text-wofga-orange px-3 py-2 text-sm font-medium transition-colors',
                    location === item.href && 'text-wofga-orange'
                  )}>
                    {item.name}
                  </a>
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
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-wofga-orange"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden fixed top-16 right-0 w-64 h-full bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      )}>
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className={cn(
                'block text-white hover:text-wofga-orange py-2 transition-colors',
                location === item.href && 'text-wofga-orange'
              )}>
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="btn-gradient text-white px-6 py-2 rounded-full text-sm font-semibold w-full mt-4">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

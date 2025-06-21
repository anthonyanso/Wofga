import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest('POST', '/api/newsletter', { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Failed to subscribe to newsletter.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest tech insights and updates
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full"
            />
            <Button 
              type="submit" 
              disabled={newsletterMutation.isPending}
              className="btn-gradient text-white px-8 py-4 rounded-full font-semibold"
            >
              {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="mb-6">
              <img 
                src="@assets/wofga digital logo_1750520159370.png" 
                alt="Wofga Digital Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Leading tech solutions company providing innovative digital transformation services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/software-development"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Software Development</a></Link></li>
              <li><Link href="/services/web-mobile-development"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Web & Mobile Apps</a></Link></li>
              <li><Link href="/services/it-consulting"><a className="text-gray-400 hover:text-wofga-orange transition-colors">IT Consulting</a></Link></li>
              <li><Link href="/services/cloud-solutions"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Cloud Solutions</a></Link></li>
              <li><Link href="/services/cybersecurity"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Cybersecurity</a></Link></li>
              <li><Link href="/services/data-analytics"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Data Analytics & AI</a></Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="text-gray-400 hover:text-wofga-orange transition-colors">About Us</a></Link></li>
              <li><Link href="/team"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Our Team</a></Link></li>
              <li><Link href="/portfolio"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Portfolio</a></Link></li>
              <li><Link href="/blog"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Blog</a></Link></li>
              <li><Link href="/testimonials"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Testimonials</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-wofga-orange transition-colors">Contact</a></Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-wofga-orange" />
                <span>123 Tech Street, Digital City, TC 12345</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-wofga-orange" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-wofga-orange" />
                <span>contact@wofgadigital.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Wofga Digital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy"><a className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">Privacy Policy</a></Link>
              <Link href="/terms-of-service"><a className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">Terms of Service</a></Link>
              <Link href="/cookie-policy"><a className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">Cookie Policy</a></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { useState } from 'react';
import { neon } from '@neondatabase/serverless';
import { useToast } from '@hooks/use-toast';
import logoImage from '@/assets/wofga_digital_logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const sql = neon("postgresql://neondb_owner:npg_qGvU9WhT0XRC@ep-winter-sea-af6ho85p-pooler.c-2.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
      await sql`
        INSERT INTO newsletter_subscriptions (email)
        VALUES (${email})
        ON CONFLICT (email) DO NOTHING
      `;
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "Failed to subscribe to newsletter.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
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
              disabled={loading}
              className="btn-gradient text-white px-8 py-4 rounded-full font-semibold"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="mb-6 flex items-center space-x-4">
              <img
                src={logoImage}
                alt="Wofga Digital Logo"
                className="h-12 w-auto"
              />
              <div className="text-2xl font-bold text-white">
                <span className="text-wofga-orange">Wofga</span> Digital
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading tech solutions company providing innovative digital transformation services to businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank" rel="noopener"
                href="https://www.facebook.com/profile.php?id=61578307681548" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a
                target="_blank" rel="noopener"
                href="https://x.com/wofgadigital" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a
                target="_blank" rel="noopener"
                href="https://www.linkedin.com/in/wofga-digital/" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                target="_blank" rel="noopener"
                href="https://www.instagram.com/wofgadigital/" className="text-gray-400 hover:text-wofga-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/software-development" className="text-gray-400 hover:text-wofga-orange transition-colors">Software Development</a></li>
              <li><a href="/services/web-mobile-development" className="text-gray-400 hover:text-wofga-orange transition-colors">Web & Mobile Apps</a></li>
              <li><a href="/services/it-consulting" className="text-gray-400 hover:text-wofga-orange transition-colors">IT Consulting</a></li>
              <li><a href="/services/cloud-solutions" className="text-gray-400 hover:text-wofga-orange transition-colors">Cloud Solutions</a></li>
              <li><a href="/services/cybersecurity" className="text-gray-400 hover:text-wofga-orange transition-colors">Cybersecurity</a></li>
              <li><a href="/services/data-analytics" className="text-gray-400 hover:text-wofga-orange transition-colors">Data Analytics & AI</a></li>
              <li><a href="/services/animation-(video-ads)" className="text-gray-400 hover:text-wofga-orange transition-colors">Animation (video ads)</a></li>
              <li><a href="/services/product-design" className="text-gray-400 hover:text-wofga-orange transition-colors">Product Design</a></li>
              <li><a href="/services/video-editing" className="text-gray-400 hover:text-wofga-orange transition-colors">Video Editing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-wofga-orange transition-colors">About Us</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-wofga-orange transition-colors">Our Team</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-wofga-orange transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-wofga-orange transition-colors">Blog</a></li>
              <li><a href="/testimonials" className="text-gray-400 hover:text-wofga-orange transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-wofga-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-3 text-wofga-orange" />
                <span>Onitsha, Anambra Nigeria</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-wofga-orange" />
                <span><a href="tel:09024538030">+234 902 453 8030</a></span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-wofga-orange" />
                <span><a href="mailto:wofgadigital@gmail.com">wofgadigital@gmail.com</a></span>
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
              <a href="/faq" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">FAQ</a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

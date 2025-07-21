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
    <footer>
      {/* Main footer content */}
      <div className="min-h-[50px] w-full bg-[#020617] relative pt-[100px]">
        {/* Dark Basic Grid Background - Slate 950 */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage: `
        linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Your Content/Components */}
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
                Wofga Digital empowers businesses with cutting-edge technology solutions, driving digital transformation and sustainable growth. Our team delivers excellence in software, cloud, cybersecurity, and creative services for clients worldwide.
              </p>
              <div className="flex space-x-4" aria-label="Social media links">
                <a
                  target="_blank" rel="noopener"
                  href="https://www.facebook.com/profile.php?id=61578307681548" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a
                  target="_blank" rel="noopener"
                  href="https://x.com/wofgadigital" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a
                  target="_blank" rel="noopener"
                  href="https://www.linkedin.com/in/wofga-digital/" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a
                  target="_blank" rel="noopener"
                  href="https://www.instagram.com/wofgadigital/" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="/services/software-development" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Custom Software Development</a></li>
                <li><a href="/services/web-mobile-development" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Web & Mobile Applications</a></li>
                <li><a href="/services/it-consulting" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">IT Strategy & Consulting</a></li>
                <li><a href="/services/cloud-solutions" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Cloud Solutions</a></li>
                <li><a href="/services/cybersecurity" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Cybersecurity Services</a></li>
                <li><a href="/services/data-analytics" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Data Analytics & AI</a></li>
                <li><a href="/services/animation-(video-ads)" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Animation & Video Ads</a></li>
                <li><a href="/services/product-design" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Product Design</a></li>
                <li><a href="/services/video-editing" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Video Editing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-xl font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">About Us</a></li>
                <li><a href="/team" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Meet the Team</a></li>
                <li><a href="/portfolio" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Our Portfolio</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Insights & Blog</a></li>
                <li><a href="/testimonials" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Client Testimonials</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-wofga-orange transition-colors footer-link-underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-3 text-wofga-orange" />
                  <span>Onitsha, Anambra, Nigeria</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-wofga-orange" />
                  <span><a href="tel:09024538030" className="hover:text-wofga-orange transition-colors footer-link-underline">+234 902 453 8030</a></span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-wofga-orange" />
                  <span><a href="mailto:wofgadigital@gmail.com" className="hover:text-wofga-orange transition-colors footer-link-underline">wofgadigital@gmail.com</a></span>
                </li>
              </ul>
            </div>
          </div>
                      {/* Privacy/Terms section always visible at the bottom */}
            <div className="pb-10 p-0 z-20 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-4">
                  <p className="text-gray-400 text-sm">
                    © 2024 Wofga Digital. All rights reserved.
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-2 md:mt-0">
                    <a href="/faq" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors footer-link-underline">FAQ</a>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors footer-link-underline">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors footer-link-underline">Terms of Service</a>
                    <a href="/cookie-policy" className="text-gray-400 hover:text-wofga-orange text-sm transition-colors footer-link-underline">Cookie Policy</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

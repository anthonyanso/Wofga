import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Code, Smartphone, Cloud, Shield, Lightbulb, BarChart3, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import { useQuery } from '@tanstack/react-query';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
    slug: 'software-development'
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    description: 'Responsive web applications and mobile apps that engage users across all platforms.',
    slug: 'web-mobile-development'
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business processes and growth.',
    slug: 'it-consulting'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    slug: 'cloud-solutions'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    slug: 'cybersecurity'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & AI',
    description: 'Transform your data into actionable insights with AI and machine learning.',
    slug: 'data-analytics'
  }
];

const stats = [
  { number: 150, label: 'Projects Completed', suffix: '+' },
  { number: 50, label: 'Happy Clients', suffix: '+' },
  { number: 5, label: 'Years Experience', suffix: '+' },
  { number: 24, label: '24/7 Support', suffix: '/7' }
];

export default function Home() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  const { data: testimonials = [] } = useQuery({
    queryKey: ['/api/testimonials?featured=true'],
  });

  const { data: portfolioItems = [] } = useQuery({
    queryKey: ['/api/portfolio?featured=true'],
  });

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = end;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(start);
              return newCounters;
            });
          }
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Home - Innovative Tech Solutions"
        description="Transform your business with cutting-edge technology solutions. We deliver world-class software development, IT consulting, and digital transformation services."
        keywords="software development, web development, mobile apps, IT consulting, cloud solutions, cybersecurity, data analytics, AI"
      />

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Innovative
                <span className="text-wofga-orange"> Tech Solutions</span>
                <br />for Modern Business
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge technology solutions. We deliver world-class software development, IT consulting, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Tech solutions team collaborating" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div id="stats-section" data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="counter text-4xl font-bold text-wofga-orange mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive tech solutions to help your business thrive in the digital age
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-gradient-card border-gray-700 card-hover"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-wofga-orange/20 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-2xl text-wofga-orange" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="link" className="text-wofga-orange p-0 h-auto font-semibold hover:underline">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office environment" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Wofga Digital</h2>
              <p className="text-xl text-gray-300 mb-8">
                We are a leading technology solutions company dedicated to transforming businesses through innovative digital solutions. With over 5 years of experience, we've helped 50+ companies achieve their digital transformation goals.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-wofga-orange mb-2">Mission</h4>
                  <p className="text-gray-300">Empowering businesses with cutting-edge technology solutions</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-wofga-orange mb-2">Vision</h4>
                  <p className="text-gray-300">To be the leading tech partner for digital transformation</p>
                </div>
              </div>
              
              <Link href="/about">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      {portfolioItems.length > 0 && (
        <section className="py-20 section-bg-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest projects and success stories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.slice(0, 3).map((item: any, index: number) => (
                <Card 
                  key={item.id}
                  className="bg-gradient-card border-gray-700 overflow-hidden card-hover"
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  <img 
                    src={item.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies?.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-wofga-orange/20 text-wofga-orange rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" className="text-wofga-orange p-0 h-auto font-semibold hover:underline">
                      View Case Study <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12" data-aos="fade-up">
              <Link href="/portfolio">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Preview */}
      {testimonials.length > 0 && (
        <section className="py-20 hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial: any, index: number) => (
                <Card 
                  key={testimonial.id}
                  className="bg-gradient-card border-gray-700"
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12" data-aos="fade-up">
              <Link href="/testimonials">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  View All Testimonials
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

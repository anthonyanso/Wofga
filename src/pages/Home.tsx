import { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Cloud, Shield, Lightbulb, BarChart3, Star, Paintbrush, Clapperboard, Megaphone, Zap, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import HomeImage from '@/assets/homepageImage.jpg';
import AboutUsImage from '@/assets/aboutUsImage.jpg';
import Testimonials1 from '@/assets/testimonials/featured/featuresTestimonial1.jpg';
import Testimonials2 from '@/assets/testimonials/featured/featuresTestimonial2.jpg';
import Testimonials3 from '@/assets/testimonials/featured/featuresTestimonial3.jpg';
// import { useQuery } from '@tanstack/react-query';

// Static portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce platform for modern retailers.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    technologies: ['React', 'Node.js', 'AWS']
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application.',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    technologies: ['React Native', 'TypeScript', 'Firebase']
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'A real-time analytics dashboard for business intelligence.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    technologies: ['Vue', 'Django', 'PostgreSQL']
  }
];

// Static testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Ava Reynolds',
    position: 'Marketing Specialist',
    company: 'MedessyEnt',
    content: 'Wofga Digital delivered our project on time and exceeded our expectations. Highly recommended!',
    rating: 5,
    imageUrl: Testimonials1
  },
  {
    id: 2,
    name: 'Liam Carter',
    position: 'Admin Executive',
    company: 'KartelEnergy',
    content: 'Their expertise in cloud and security is unmatched. We felt supported every step of the way.',
    rating: 5,
    imageUrl: Testimonials2
  },
  {
    id: 3,
    name: 'Sophie Martinez',
    position: 'Product Manager',
    company: 'SalesForecConsulting',
    content: 'The dashboard they built for us transformed our business insights. Fantastic team!',
    rating: 4,
    imageUrl: Testimonials3
  }
];

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
  },
  {
    icon: Megaphone,
    title: 'Animation (video ads)',
    description: 'Engage your audience with captivating animated video ads that drive brand awareness and conversions.',
    slug: 'animation-(video-ads)'
  },
  {
    icon: Paintbrush,
    title: 'Product Design',
    description: 'From concept to prototype, we craft intuitive and visually stunning product designs that delight users.',
    slug: 'product-design'
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    description: 'Professional video editing services to create polished, impactful content that elevates your brand story.',
    slug: 'video-editing'
  }
];

const stats = [
  { number: 450, label: 'Projects Completed', suffix: '+' },
  { number: 150, label: 'Happy Clients', suffix: '+' },
  { number: 7, label: 'Years Experience', suffix: '+' },
  { number: 24, label: '24/7 Support', suffix: '/7' }
];

export default function Home() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  // Using static testimonials and portfolioItems arrays above

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
      <section className="min-h-screen flex items-center justify-center min-h-screen w-full relative bg-black">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
          }}
        />
        {/* Your Content/Components */}
        <div className="text-center max-w-3xl" data-aos="fade-up">
          {/* Company Badge */}
          <div className={"flex flex-col items-center p-4 mb-8"}>
            <div className={"bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-full mb-2"}>
              <div className={"bg-green-500 size-2.5 rounded-full relative"}>
                <div
                  className={
                  "bg-green-500 absolute inset-0 rounded-full"
                  }
                  style={{
                  animation: "custom-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
                  }}
                />
                <style>
                  {`
                  @keyframes custom-ping {
                    0% {
                    transform: scale(0.75);
                    opacity: 1;
                    }
                    75% {
                    transform: scale(1);
                    opacity: 1;
                    }
                    100% {
                    transform: scale(3);
                    opacity: 0;
                    }
                  }
                  `}
                </style>
              </div>
              <div className={"text-sm font-medium select-text text-gray-400"}>Wofga Digital</div>
              <Zap size={12} className='text-gray-400'/>
              <a href="/about" className='text-sm font-medium text-gray-400 flex hover:text-gray-200 items-center gap-1'>
                <p>Read More </p>
                <MoveUpRight size={12}/>
              </a>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
            Innovative Tech Solutions<br />for Modern Business
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
            Transform your business with cutting-edge technology services. We deliver world-class software development, IT consulting, and digital transformation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
            <a href="/contact">
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-md">
                Start Your Project
              </button>
            </a>
            <a href="/portfolio">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-md">
                View Our Work
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-1 px-2 sm:px-2 lg:px-4">
        <div
          id="stats-section"
          data-aos="fade-up"
          data-aos-duration="1000"
          className="stats-gradient-bg max-w-4xl mx-auto rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col justify-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl p-2 sm:p-4 transition-transform hover:shadow-lg"
                style={{ backdropFilter: 'blur(6px)' }}
              >
                <div className="counter text-lg sm:text-3xl md:text-4xl font-extrabold text-wofga-orange mb-1 drop-shadow-lg">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-gray-200 text-base sm:text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="min-h-screen w-full bg-[#020617] relative py-20 section-bg-alt">
        {/* Magenta Orb Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage:
              "linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px)," +
              "radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
        ></div>
        {/* Your Content/Components */}
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
                  <a href={`/services/${service.slug}`}>
                    <Button variant="link" className="text-wofga-orange p-0 h-auto font-semibold hover:underline">
                      Learn More <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <img
                src={AboutUsImage}
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Wofga Digital</h2>
              <p className="text-xl text-gray-300 mb-8">
                We are a leading technology solutions company dedicated to transforming businesses through innovative digital solutions. With over 7 years of experience, we've helped 150+ companies achieve their digital transformation goals.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-wofga-orange mb-2">Mission</h4>
                  <p className="text-gray-300">To deliver cutting-edge technology with precision, timeliness, and a commitment to excellence and customer satisfaction.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-wofga-orange mb-2">Vision</h4>
                  <p className="text-gray-300">To shape a future where technology fuels innovation, growth, and meaningful impact.</p>
                </div>
              </div>

              <a href="/about">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Learn More About Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <div className="min-h-screen w-full bg-[#020617] relative py-20 section-bg-alt">
        {/* Magenta Orb Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
        />
        {/* Your Content/Components */}
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
                <a href="/portfolio">
                  <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                    View All Projects
                  </Button>
                </a>
              </div>
            </div>
          </section>
        )}
      </div>

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
              <a href="/testimonials">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  View All Testimonials
                </Button>
              </a>
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
              <a href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Get Started Today
                </Button>
              </a>
              <a href="/portfolio">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

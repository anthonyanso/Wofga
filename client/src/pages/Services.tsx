import { Link } from 'wouter';
import { Code, Smartphone, Lightbulb, Cloud, Shield, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
    slug: 'software-development',
    features: [
      'Custom Application Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'Legacy System Modernization',
      'Quality Assurance & Testing',
      'Ongoing Maintenance & Support'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PostgreSQL']
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Development',
    description: 'Responsive web applications and mobile apps that engage users across all platforms.',
    slug: 'web-mobile-development',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps (PWA)',
      'Native Mobile Apps (iOS/Android)',
      'Cross-Platform Development',
      'E-commerce Solutions',
      'Content Management Systems'
    ],
    technologies: ['React Native', 'Flutter', 'Vue.js', 'Angular', 'Swift', 'Kotlin']
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business processes and growth.',
    slug: 'it-consulting',
    features: [
      'Digital Transformation Strategy',
      'Technology Architecture Design',
      'Business Process Optimization',
      'IT Infrastructure Planning',
      'Technology Stack Selection',
      'Project Management & Leadership'
    ],
    technologies: ['Agile', 'DevOps', 'ITIL', 'Scrum', 'Lean', 'Six Sigma']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    slug: 'cloud-solutions',
    features: [
      'Cloud Migration Services',
      'Infrastructure as Code',
      'Auto-scaling Solutions',
      'Disaster Recovery Planning',
      'Cost Optimization',
      'Multi-cloud Management'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    slug: 'cybersecurity',
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      'Compliance Management',
      'Identity & Access Management',
      'Security Monitoring',
      'Incident Response Planning'
    ],
    technologies: ['SIEM', 'SOC', 'IAM', 'VPN', 'Firewall', 'Encryption']
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & AI',
    description: 'Transform your data into actionable insights with AI and machine learning.',
    slug: 'data-analytics',
    features: [
      'Data Warehouse Design',
      'Business Intelligence Dashboards',
      'Machine Learning Models',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Tableau', 'Power BI']
  }
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services - Comprehensive Tech Solutions"
        description="Explore Wofga Digital's comprehensive technology services including software development, web & mobile apps, IT consulting, cloud solutions, cybersecurity, and AI/data analytics."
        keywords="software development, web development, mobile apps, IT consulting, cloud solutions, cybersecurity, data analytics, AI, machine learning"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We provide comprehensive technology solutions to help your business thrive in the digital age. From custom software development to AI-powered analytics, we've got you covered.
            </p>
            <Link href="/contact">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.slug} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`} data-aos="fade-right" data-aos-duration="1000">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      service.slug === 'software-development' ? '1461749280684-6d2ceb6e4d6b' :
                      service.slug === 'web-mobile-development' ? '1512941937669-90a1b58e7e9c' :
                      service.slug === 'it-consulting' ? '1553877522-43269d4ea984' :
                      service.slug === 'cloud-solutions' ? '1451187580459-43490279c0fa' :
                      service.slug === 'cybersecurity' ? '1550751827-4bd374c3f58b' :
                      '1551288049-4c6ca714f9fc'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`} 
                    alt={service.title} 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`} data-aos="fade-left" data-aos-duration="1000">
                  <div className="w-20 h-20 bg-wofga-orange/20 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="text-wofga-orange" size={40} />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Key Features:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-wofga-orange/20 text-wofga-orange rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your requirements, goals, and challenges to create a comprehensive project plan.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates detailed wireframes, mockups, and technical specifications for your solution.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your solution using best practices, with regular updates and feedback sessions.'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'We deploy your solution and provide ongoing support to ensure optimal performance.'
              }
            ].map((phase, index) => (
              <Card 
                key={phase.step}
                className="bg-gradient-card border-gray-700 relative"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-wofga-orange mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-wofga-orange" size={24} />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </>
  );
}

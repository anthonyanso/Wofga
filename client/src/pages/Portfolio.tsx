import { useState } from 'react';
import { Link } from 'wouter';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & Analytics', 'Cybersecurity'];

// Static portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce platform for modern retailers.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Web Development',
    completedAt: '2023-01-15',
    technologies: ['React', 'Node.js', 'AWS'],
    projectUrl: '#'
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    description: 'A modern, responsive redesign for a leading corporate brand.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Web Development',
    completedAt: '2022-11-10',
    technologies: ['Next.js', 'Tailwind CSS'],
    projectUrl: '#'
  },
  {
    id: 3,
    title: 'Portfolio Showcase',
    description: 'A personal portfolio site for a creative professional.',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Web Development',
    completedAt: '2022-08-05',
    technologies: ['Gatsby', 'GraphQL'],
    projectUrl: '#'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Mobile Apps',
    completedAt: '2023-03-20',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    projectUrl: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A cross-platform fitness tracking app with real-time analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Mobile Apps',
    completedAt: '2022-12-01',
    technologies: ['Flutter', 'Dart'],
    projectUrl: '#'
  },
  {
    id: 6,
    title: 'Event Management App',
    description: 'A mobile app for seamless event planning and management.',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Mobile Apps',
    completedAt: '2022-09-18',
    technologies: ['Swift', 'iOS'],
    projectUrl: '#'
  },
  {
    id: 7,
    title: 'Cloud Migration Platform',
    description: 'A platform to automate and manage cloud migration for enterprises.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Cloud Solutions',
    completedAt: '2023-02-10',
    technologies: ['AWS', 'Terraform', 'Docker'],
    projectUrl: '#'
  },
  {
    id: 8,
    title: 'AI Analytics Dashboard',
    description: 'A dashboard providing real-time AI-driven analytics for business intelligence.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-4c6ca714f9fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'AI & Analytics',
    completedAt: '2023-04-05',
    technologies: ['Python', 'TensorFlow', 'React'],
    projectUrl: '#'
  },
  {
    id: 9,
    title: 'Security Operations Center',
    description: 'A cybersecurity dashboard for real-time threat monitoring and response.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Cybersecurity',
    completedAt: '2023-05-12',
    technologies: ['Splunk', 'Kibana', 'ElasticSearch'],
    projectUrl: '#'
  },
  {
    id: 10,
    title: 'Cloud Backup Solution',
    description: 'A secure and scalable cloud backup solution for businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
    category: 'Cloud Solutions',
    completedAt: '2022-10-22',
    technologies: ['Azure', 'Node.js'],
    projectUrl: '#'
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Using static portfolioItems array above

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter((item: any) => item.category === selectedCategory);

  return (
    <>
      <SEO
        title="Our Portfolio - Successful Tech Projects"
        description="Explore Wofga Digital's portfolio of successful technology projects including web development, mobile apps, cloud solutions, and AI implementations."
        keywords="portfolio, case studies, web development projects, mobile apps, cloud solutions, AI projects, tech portfolio"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our latest projects and success stories. We've helped businesses across various industries achieve their digital transformation goals.
            </p>
            <Link href="/contact">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'btn-gradient text-white'
                    : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item: any, index: number) => (
                <Card 
                  key={item.id}
                  className="bg-gradient-card border-gray-700 overflow-hidden card-hover"
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="relative overflow-hidden">
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl}
                        alt={item.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-wofga-orange text-white">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{item.description}</p>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(item.completedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}</span>
                    </div>
                    
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.technologies.slice(0, 3).map((tech: string) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                            +{item.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <Button variant="link" className="text-wofga-orange p-0 h-auto font-semibold hover:underline">
                        View Case Study
                      </Button>
                      {item.projectUrl && (
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Track Record</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our experience and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={stat.label} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className="text-4xl font-bold text-wofga-orange mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures successful project delivery every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your requirements and create a comprehensive project plan.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates detailed wireframes and technical specifications.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your solution with regular updates and feedback sessions.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We deploy your solution and provide ongoing support and maintenance.'
              }
            ].map((phase, index) => (
              <Card 
                key={phase.step}
                className="bg-gradient-card border-gray-700 text-center"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-wofga-orange mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to bring your vision to life with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

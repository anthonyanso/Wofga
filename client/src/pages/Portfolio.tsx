import { useState } from 'react';
import { Link } from 'wouter';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { useQuery } from '@tanstack/react-query';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & Analytics', 'Cybersecurity'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { data: portfolioItems = [], isLoading } = useQuery({
    queryKey: ['/api/portfolio', selectedCategory !== 'All' ? `?category=${selectedCategory}` : ''],
  });

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
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="bg-gradient-card border-gray-700 overflow-hidden">
                  <div className="w-full h-48 bg-gray-800 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-800 rounded mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-800 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No Projects Found</h3>
              <p className="text-gray-300 mb-8">
                We don't have any projects in this category yet. Check back soon or explore our other work.
              </p>
              <Button 
                onClick={() => setSelectedCategory('All')}
                className="btn-gradient text-white px-8 py-4 rounded-full"
              >
                View All Projects
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item: any, index: number) => (
                <Card 
                  key={item.id}
                  className="bg-gradient-card border-gray-700 overflow-hidden card-hover"
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.imageUrl || `https://images.unsplash.com/photo-${
                        item.category === 'Web Development' ? '1460925895917-afdab827c52f' :
                        item.category === 'Mobile Apps' ? '1512941937669-90a1b58e7e9c' :
                        item.category === 'Cloud Solutions' ? '1451187580459-43490279c0fa' :
                        item.category === 'AI & Analytics' ? '1551288049-4c6ca714f9fc' :
                        item.category === 'Cybersecurity' ? '1550751827-4bd374c3f58b' :
                        '1460925895917-afdab827c52f'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`} 
                      alt={item.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
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
          )}
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

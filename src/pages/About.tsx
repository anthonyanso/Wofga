import { Link } from 'wouter';
import { Users, Award, Clock, Target, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Our clients\' success is our success. We build long-term partnerships based on trust and results.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and transparent communication throughout every project.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Wofga Digital was established with a vision to transform businesses through technology.',
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Successfully delivered our first enterprise-level digital transformation project.',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to include specialists in AI, cloud computing, and cybersecurity.',
  },
  {
    year: '2022',
    title: '50+ Clients',
    description: 'Reached the milestone of serving over 50 satisfied clients across various industries.',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Received multiple awards for innovation and excellence in digital solutions.',
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded our services globally, serving clients across different continents.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Our Story and Mission"
        description="Learn about Wofga Digital's mission, vision, values, and the expert team behind our innovative tech solutions. Discover our journey and commitment to excellence."
        keywords="about us, company history, mission, vision, values, team, digital transformation, tech solutions"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Wofga Digital</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate technologists dedicated to transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office environment" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2019, Wofga Digital emerged from a simple yet powerful vision: to bridge the gap between traditional business operations and modern digital solutions. Our founders recognized that many businesses were struggling to adapt to the rapidly evolving digital landscape.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Today, we're proud to be a leading technology solutions company that has helped over 50 businesses across various industries achieve their digital transformation goals. Our expertise spans software development, cloud computing, cybersecurity, and emerging technologies like AI and machine learning.
              </p>
              <Button asChild className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                <Link href="/contact">
                  Start Your Journey With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div data-aos="fade-up" data-aos-delay="100" className="text-center">
              <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-wofga-orange" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                We deliver cutting-edge technology with a passion for perfection, punctuality, customer satisfaction, and a drive for excellence in all we do.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" className="text-center">
              <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-wofga-orange" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                We aim to transform lives and businesses by delivering innovative, precise technology that inspires progress and empowers meaningful connections.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300" className="text-center">
              <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-wofga-orange" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
              <p className="text-gray-300 text-lg">
                To create meaningful impact through technology, helping our clients achieve their goals while building lasting partnerships based on trust and results.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-gradient-card border-gray-700"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-wofga-orange/20 rounded-2xl flex items-center justify-center mr-4">
                      <value.icon className="text-wofga-orange" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex items-center"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-wofga-orange">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-wofga-orange rounded-full mr-8 relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-600"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl font-bold mb-6">Why Choose Wofga Digital?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Award className="text-wofga-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Proven Expertise</h3>
                    <p className="text-gray-300">Our team brings years of experience and deep expertise in the latest technologies and industry best practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="text-wofga-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Client-Focused Approach</h3>
                    <p className="text-gray-300">We prioritize understanding your unique needs and challenges to deliver solutions that truly make a difference.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="text-wofga-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Timely Delivery</h3>
                    <p className="text-gray-300">We understand the importance of deadlines and consistently deliver high-quality solutions on time and within budget.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Link href="/team">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

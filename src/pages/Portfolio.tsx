import { useState } from 'react';
import { Link } from 'wouter';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';

// Featured Portfolio
import PortfolioImage1 from '@/assets/portfolio/featured/marketing_website.png';
import PortfolioImage2 from '@/assets/portfolio/featured/travel_mobile_app.png';
import PortfolioImage3 from '@/assets/portfolio/featured/property-landing-page.png';
import LegaImage from '@/assets/portfolio/Law_Website.webp';
import CorporateWebpage from '@/assets/portfolio/CorporateWebsiteRedesign.png';
import CryptoWalletApp from '@/assets/portfolio/Crypto_ Wallet_App.webp';
import NikeEcommerceApp from '@/assets/portfolio/Shoe_App.png';
import CloudMigrationPlatform from '@/assets/portfolio/CloudMigrationproject.webp';
import CloudBackupSolution from '@/assets/portfolio/CloudBackupSolution.webp';
import AIAnalyticsDashboard from '@/assets/portfolio/AIAnalyticsDashboard.webp';
import CyberSecurityDasboard from '@/assets/portfolio/CyberSecurityDasboard.webp';



const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & Analytics', 'Cybersecurity'];

// Static portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Legal Connect Portal',
    description: 'A modern, secure, and responsive web platform tailored for law firms and corporate legal departments.',
    imageUrl: LegaImage,
    category: 'Web Development',
    completedAt: '2022-11-10',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Auth0'],
    projectUrl: '#'
  },
  {
    id: 2,
    title: 'Corporate Website ',
    description: 'A fast, modern corporate website built for global consulting firms, featuring multilingual support, investor pages, and sleek design.',
    imageUrl: CorporateWebpage,
    category: 'Web Development',
    completedAt: '2022-11-10',
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Sanity CMS', 'Vercel'],    
    projectUrl: '#'
  },
  {
    id: 3,
    title: 'Property Website',
    description: 'A secure and intuitive property listing platform designed for real estate agencies and independent sellers.',
    imageUrl: PortfolioImage3,
    category: 'Web Development',
    completedAt: '2022-08-05',
    technologies: ['Vue', 'Django', 'PostgreSQL'],
    projectUrl: '#'
  },
  {
    id: 4,
    title: 'Crypto Wallet App',
    description: 'A secure and user-friendly crypto wallet app for managing digital assets, tracking transactions, and supporting multi-chain tokens with biometric authentication.',    
    imageUrl: CryptoWalletApp,
    category: 'Mobile Apps',
    completedAt: '2023-03-20',
    technologies: ['Flutter', 'Firebase', 'Solidity', 'WalletConnect', 'Ethereum SDK'],    
    projectUrl: '#'
  },
  {
    id: 5,
    title: 'Travel Mobile App',
    description: 'A dynamic travel companion app offering real-time insights, booking capabilities, and personalized recommendations',
    imageUrl: PortfolioImage2,
    category: 'Mobile Apps',
    completedAt: '2022-12-01',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    projectUrl: '#'
  },
  {
    id: 6,
    title: 'Nike E-Commerce App',
    description: 'A stylish mobile app for discovering, customizing, and purchasing sneakers and footwear. Features include virtual try-on, curated collections, and real-time inventory updates from top brands.',    
    imageUrl: NikeEcommerceApp,
    category: 'Mobile Apps',
    completedAt: '2022-09-18',
    technologies: ['React Native', 'Redux', 'Firebase', 'Stripe API', 'Three.js'],    
    projectUrl: '#'
  },
  {
    id: 7,
    title: 'Cloud Migration Platform',
    description: 'A platform to automate and manage cloud migration for enterprises.',
    imageUrl: CloudMigrationPlatform,
    category: 'Cloud Solutions',
    completedAt: '2023-02-10',
    technologies: ['AWS', 'Terraform', 'Docker'],
    projectUrl: '#'
  },
  {
    id: 8,
    title: 'AI Analytics Dashboard',
    description: 'A dashboard providing real-time AI-driven analytics for business intelligence.',
    imageUrl: AIAnalyticsDashboard,
    category: 'AI & Analytics',
    completedAt: '2023-04-05',
    technologies: ['Python', 'TensorFlow', 'React'],
    projectUrl: '#'
  },
  {
    id: 9,
    title: 'Security Operations Center',
    description: 'A cybersecurity dashboard for real-time threat monitoring and response.',
    imageUrl: CyberSecurityDasboard,
    category: 'Cybersecurity',
    completedAt: '2023-05-12',
    technologies: ['Splunk', 'Kibana', 'ElasticSearch'],
    projectUrl: '#'
  },
  {
    id: 10,
    title: 'Cloud Backup Solution',
    description: 'A secure and scalable cloud backup solution for businesses.',
    imageUrl: CloudBackupSolution,
    category: 'Cloud Solutions',
    completedAt: '2022-10-22',
    technologies: ['Azure', 'Node.js'],
    projectUrl: '#'
  },
  {
    id: 11,
    title: 'Marketing Platform',
    description: 'A sleek and scalable marketing platform tailored for modern brands to showcase their products and engage customers.',
    imageUrl: PortfolioImage1,
    category: 'Web Development',
    completedAt: '2023-01-15',
    technologies: ['React', 'Node.js', 'AWS'],
    projectUrl: ''
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
            <a href="/contact">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                Start Your Project
              </Button>
            </a>
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
              { number: '450+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '7+', label: 'Years Experience' },
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

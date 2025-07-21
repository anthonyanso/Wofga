// Wouter removed
import { ArrowLeft, CheckCircle, Code, Smartphone, Lightbulb, Cloud, Shield, BarChart3, Megaphone, Clapperboard, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

// Import local images for each service
import softwareImg from '@/assets/Service/software.jpeg';
import webMobileImg from '@/assets/Service/web-mobile.jpg';
import consultingImg from '@/assets/Service/consulting.jpg';
import cloudImg from '@/assets/Service/cloud.jpg';
import cybersecurityImg from '@/assets/Service/cybersecurity.jpg';
import analyticsImg from '@/assets/Service/analytics.jpg';
import VideoAds from '@/assets/Service/ads.jpg';
import ProductDesign from '@/assets/Service/productDesign.jpg';
import VideoEditing from '@/assets/Service/videoEditing.jpg';

const serviceDetails = {
  'software-development': {
    ImageUrl: softwareImg,
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
    longDescription: 'Our software development services encompass the full software development lifecycle, from initial concept and design to deployment and ongoing maintenance. We specialize in creating scalable, secure, and high-performance applications that drive business growth.',
    features: [
      'Custom Application Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'Legacy System Modernization',
      'Quality Assurance & Testing',
      'Ongoing Maintenance & Support',
      'Performance Optimization',
      'Security Implementation'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    benefits: [
      'Improved operational efficiency',
      'Reduced manual processes',
      'Enhanced data security',
      'Scalable architecture',
      'Cost-effective solutions',
      'Future-proof technology stack'
    ],
    process: [
      {
        step: 'Requirements Analysis',
        description: 'We work closely with your team to understand your business requirements and technical specifications.'
      },
      {
        step: 'Architecture Design',
        description: 'Our architects design a scalable and secure solution architecture tailored to your needs.'
      },
      {
        step: 'Development',
        description: 'Our experienced developers build your solution using industry best practices and modern technologies.'
      },
      {
        step: 'Testing & QA',
        description: 'Comprehensive testing ensures your software is reliable, secure, and performs optimally.'
      },
      {
        step: 'Deployment',
        description: 'We handle the deployment process and provide training to ensure smooth adoption.'
      },
      {
        step: 'Support',
        description: 'Ongoing maintenance and support to keep your software running smoothly and up-to-date.'
      }
    ]
  },
  'web-mobile-development': {
    ImageUrl: webMobileImg,
    icon: Smartphone,
    title: 'Web & Mobile Development',
    description: 'Responsive web applications and mobile apps that engage users across all platforms.',
    longDescription: 'We create stunning, user-friendly web and mobile applications that provide exceptional user experiences across all devices. Our solutions are built with modern frameworks and follow responsive design principles.',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps (PWA)',
      'Native Mobile Apps (iOS/Android)',
      'Cross-Platform Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Real-time Applications',
      'API Integration'
    ],
    technologies: ['React Native', 'Flutter', 'Vue.js', 'Angular', 'Swift', 'Kotlin', 'TypeScript', 'Next.js'],
    benefits: [
      'Enhanced user engagement',
      'Cross-platform compatibility',
      'Faster time-to-market',
      'Cost-effective development',
      'Seamless user experience'    ],
    process: [
      {
        step: 'UX/UI Design',
        description: 'Creating intuitive and engaging user interfaces that provide excellent user experiences.'
      },
      {
        step: 'Frontend Development',
        description: 'Building responsive and interactive frontends using modern frameworks and libraries.'
      },
      {
        step: 'Backend Integration',
        description: 'Connecting your application to robust backend systems and third-party services.'
      },
      {
        step: 'Testing',
        description: 'Comprehensive testing across multiple devices and platforms to ensure consistency.'
      },
      {
        step: 'App Store Deployment',
        description: 'Managing the deployment process to app stores and web hosting platforms.'
      },
      {
        step: 'Maintenance',
        description: 'Regular updates and maintenance to keep your application current and secure.'
      }
    ]
  },
  'it-consulting': {
    ImageUrl: consultingImg,
    icon: Lightbulb,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to optimize your business processes and growth.',
    longDescription: 'Our IT consulting services help organizations leverage technology to achieve their business objectives. We provide strategic guidance, technical expertise, and implementation support to drive digital transformation.',
    features: [
      'Digital Transformation Strategy',
      'Technology Architecture Design',
      'Business Process Optimization',
      'IT Infrastructure Planning',
      'Technology Stack Selection',
      'Project Management & Leadership',
      'Risk Assessment',
      'Compliance Consulting'
    ],
    technologies: ['Agile', 'DevOps', 'ITIL', 'Scrum', 'Lean', 'Six Sigma', 'TOGAF', 'COBIT'],
    benefits: [
      'Strategic technology alignment',
      'Improved operational efficiency',
      'Risk mitigation',
      'Cost optimization',
      'Enhanced competitiveness',
      'Future-ready infrastructure'
    ],
    process: [
      {
        step: 'Assessment',
        description: 'Comprehensive evaluation of your current technology landscape and business needs.'
      },
      {
        step: 'Strategy Development',
        description: 'Creating a tailored technology strategy aligned with your business objectives.'
      },
      {
        step: 'Roadmap Planning',
        description: 'Developing a detailed implementation roadmap with clear milestones and timelines.'
      },
      {
        step: 'Implementation Support',
        description: 'Providing guidance and support throughout the implementation process.'
      },
      {
        step: 'Change Management',
        description: 'Managing organizational change to ensure successful technology adoption.'
      },
      {
        step: 'Continuous Improvement',
        description: 'Ongoing optimization and improvement of your technology solutions.'
      }
    ]
  },
  'cloud-solutions': {
    ImageUrl: cloudImg,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    longDescription: 'Transform your business with our comprehensive cloud solutions. We help organizations migrate to the cloud, optimize their infrastructure, and leverage cloud-native technologies for improved scalability and cost-efficiency.',
    features: [
      'Cloud Migration Services',
      'Infrastructure as Code',
      'Auto-scaling Solutions',
      'Disaster Recovery Planning',
      'Cost Optimization',
      'Multi-cloud Management',
      'Serverless Architecture',
      'Container Orchestration'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins'],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better disaster recovery',
      'Increased agility',
      'Global accessibility'
    ],
    process: [
      {
        step: 'Cloud Assessment',
        description: 'Evaluating your current infrastructure and identifying cloud migration opportunities.'
      },
      {
        step: 'Migration Planning',
        description: 'Creating a detailed migration strategy with minimal business disruption.'
      },
      {
        step: 'Infrastructure Setup',
        description: 'Setting up secure and scalable cloud infrastructure using best practices.'
      },
      {
        step: 'Migration Execution',
        description: 'Executing the migration with careful monitoring and rollback procedures.'
      },
      {
        step: 'Optimization',
        description: 'Optimizing performance, security, and costs after migration.'
      },
      {
        step: 'Monitoring & Support',
        description: 'Continuous monitoring and support to ensure optimal cloud performance.'
      }
    ]
  },
  'cybersecurity': {
    ImageUrl: cybersecurityImg,
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    longDescription: 'Protect your organization from cyber threats with our comprehensive cybersecurity services. We provide end-to-end security solutions including risk assessment, implementation, and ongoing monitoring.',
    features: [
      'Security Audits & Assessments',
      'Penetration Testing',
      'Compliance Management',
      'Identity & Access Management',
      'Security Monitoring',
      'Incident Response Planning',
      'Security Training',
      'Vulnerability Management'
    ],
    technologies: ['SIEM', 'SOC', 'IAM', 'VPN', 'Firewall', 'Encryption', 'IDS/IPS', 'Zero Trust'],
    benefits: [
      'Enhanced data protection',
      'Regulatory compliance',
      'Reduced security risks',
      'Improved incident response',
      'Better threat detection',
      'Increased customer trust'
    ],
    process: [
      {
        step: 'Security Assessment',
        description: 'Comprehensive evaluation of your current security posture and vulnerabilities.'
      },
      {
        step: 'Risk Analysis',
        description: 'Identifying and prioritizing security risks based on business impact.'
      },
      {
        step: 'Security Design',
        description: 'Designing a comprehensive security architecture tailored to your needs.'
      },
      {
        step: 'Implementation',
        description: 'Implementing security controls and technologies to protect your assets.'
      },
      {
        step: 'Monitoring',
        description: 'Continuous monitoring and threat detection to prevent security incidents.'
      },
      {
        step: 'Incident Response',
        description: 'Rapid response and recovery procedures for security incidents.'
      }
    ]
  },
  'data-analytics': {
    ImageUrl: analyticsImg,
    icon: BarChart3,
    title: 'Data Analytics & AI',
    description: 'Transform your data into actionable insights with AI and machine learning.',
    longDescription: 'Unlock the power of your data with our advanced analytics and AI solutions. We help organizations derive meaningful insights from their data and implement AI-powered solutions for competitive advantage.',
    features: [
      'Data Warehouse Design',
      'Business Intelligence Dashboards',
      'Machine Learning Models',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Real-time Analytics',
      'Data Governance'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Tableau', 'Power BI', 'Apache Spark', 'Snowflake'],
    benefits: [
      'Data-driven decision making',
      'Improved operational efficiency',
      'Predictive insights',
      'Automated processes',
      'Enhanced customer experience',
      'Competitive advantage'
    ],
    process: [
      {
        step: 'Data Assessment',
        description: 'Evaluating your data sources, quality, and analytics requirements.'
      },
      {
        step: 'Data Architecture',
        description: 'Designing a scalable data architecture for analytics and AI workloads.'
      },
      {
        step: 'Model Development',
        description: 'Building and training machine learning models tailored to your use cases.'
      },
      {
        step: 'Dashboard Creation',
        description: 'Creating interactive dashboards and reports for data visualization.'
      },
      {
        step: 'Deployment',
        description: 'Deploying models and analytics solutions into production environments.'
      },
      {
        step: 'Optimization',
        description: 'Continuous monitoring and optimization of models and analytics performance.'
      }
    ]
  },
  'animation-(video-ads)': {
    ImageUrl: VideoAds,
    icon: Megaphone,
    title: 'Animation (Video ads)',
    description: 'Engage your audience with captivating animated video ads that drive brand awareness and conversions.',
    longDescription: 'Our animation services bring your brand to life with high-impact video ads. We create custom animated content that captures attention, tells your story, and drives results across digital platforms.',
    features: [
      'Custom Animated Video Ads',
      'Brand Storytelling',
      'Social Media Campaigns',
      'Explainer Videos',
      'Motion Graphics',
      'High-Impact Visuals'
    ],
    technologies: ['After Effects', 'Premiere Pro', 'Illustrator', 'Capcut'],
    benefits: [
      'Increased brand awareness',
      'Higher audience engagement',
      'Improved conversion rates',
      'Memorable brand storytelling',
      'Versatile content for all platforms',
      'Professional, polished visuals'
    ],
    process: [
      {
        step: 'Concept Development',
        description: 'We collaborate with you to develop a creative concept that aligns with your brand and goals.'
      },
      {
        step: 'Script & Storyboard',
        description: 'Our team crafts a compelling script and storyboard to visualize your message.'
      },
      {
        step: 'Animation Production',
        description: 'We bring your story to life with custom animation, motion graphics, and sound design.'
      },
      {
        step: 'Review & Feedback',
        description: 'You review the animation and provide feedback for any revisions.'
      },
      {
        step: 'Final Delivery',
        description: 'We deliver the final video ad in your preferred formats, ready for distribution.'
      }
    ]
  },
  'product-design': {
    ImageUrl: ProductDesign,
    icon: Paintbrush,
    title: 'Product Design',
    description: 'From concept to prototype, we craft intuitive and visually stunning product designs that delight users.',
    longDescription: 'Our product design services cover every stage from ideation to interactive prototypes. We focus on user experience, aesthetics, and functionality to ensure your product stands out and delivers real value.',
    features: [
      'UI/UX Design',
      'Wireframing & Prototyping',
      'User Research',
      'Design Systems',
      'Brand Identity',
      'Interactive Mockups'
    ],
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop'],
    benefits: [
      'User-centered design',
      'Faster time-to-market',
      'Stronger brand identity',
      'Higher user satisfaction',
      'Modern, attractive interfaces',
      'Seamless handoff to development'
    ],
    process: [
      {
        step: 'Discovery & Research',
        description: 'We gather insights about your users, market, and goals to inform the design process.'
      },
      {
        step: 'Wireframing',
        description: 'We create wireframes to map out the structure and flow of your product.'
      },
      {
        step: 'Visual Design',
        description: 'Our designers craft visually stunning interfaces that reflect your brand.'
      },
      {
        step: 'Prototyping',
        description: 'We build interactive prototypes for testing and validation.'
      },
      {
        step: 'User Testing',
        description: 'We gather feedback from real users to refine and improve the design.'
      },
      {
        step: 'Handoff',
        description: 'We deliver design assets and specifications for seamless development.'
      }
    ]
  },
  'video-editing': {
    ImageUrl: VideoEditing,
    icon: Clapperboard,
    title: 'Video Editing',
    description: 'Professional video editing services to create polished, impactful content that elevates your brand story.',
    longDescription: 'Our video editing services turn raw footage into compelling, professional content. We handle everything from cinematic editing and color grading to sound design and final delivery, ensuring your videos make a lasting impression.',
    features: [
      'Cinematic Editing',
      'Color Grading',
      'Sound Design',
      'Social Media Clips',
      'Corporate Videos',
      'YouTube & Online Content'
    ],
    technologies: ['Capcut', 'Final Cut Pro', 'DaVinci Resolve', 'Premiere Pro'],
    benefits: [
      'Polished, professional videos',
      'Stronger brand presence',
      'Engaging storytelling',
      'Optimized for all platforms',
      'Faster turnaround times',
      'Creative, custom solutions'
    ],
    process: [
      {
        step: 'Footage Review',
        description: 'We review your raw footage and discuss your vision and goals.'
      },
      {
        step: 'Editing & Assembly',
        description: 'Our editors craft a compelling narrative with seamless cuts and transitions.'
      },
      {
        step: 'Color & Sound',
        description: 'We enhance your video with professional color grading and sound design.'
      },
      {
        step: 'Client Review',
        description: 'You review the edited video and provide feedback for revisions.'
      },
      {
        step: 'Final Delivery',
        description: 'We deliver the final video in your preferred formats, ready for publishing.'
      }
    ]
  }
};

export default function ServiceDetails() {
  // Extract slug from window.location.pathname
  const pathParts = window.location.pathname.split("/");
  const slug = pathParts.length > 2 ? pathParts[2] : "";
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <section className="hero-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <a href="/services">
            <Button className="btn-gradient text-white px-8 py-4 rounded-full">
              Back to Services
            </Button>
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={`${service.title} - Professional Tech Services`}
        description={service.description}
        keywords={`${service.title.toLowerCase()}, ${service.technologies.join(', ').toLowerCase()}, tech services`}
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8" data-aos="fade-up">
            <a href="/services">
              <Button variant="ghost" className="text-white hover:text-wofga-orange mb-4">
                <ArrowLeft size={20} className="mr-2" />
                Back to Services
              </Button>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="w-20 h-20 bg-wofga-orange/20 rounded-2xl flex items-center justify-center mb-6">
                {service.icon ? (
                  <service.icon className="text-wofga-orange" size={40} />
                ) : null}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{service.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                    Get Started
                  </Button>
                </a>
                <a href="/portfolio">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                    View Examples
                  </Button>
                </a>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <img 
                src={service.ImageUrl}
                alt={service.title} 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your specific needs and drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <Card 
                key={feature}
                className="bg-gradient-card border-gray-700"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-6">
                  <CheckCircle className="text-green-400 mb-4" size={24} />
                  <h3 className="font-semibold text-white">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and industry best practices to deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            {service.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-6 py-3 bg-wofga-orange/20 text-wofga-orange rounded-full text-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl font-bold mb-6">Benefits You'll Gain</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our {service.title.toLowerCase()} services deliver tangible benefits that drive your business forward.
              </p>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center">
                    <CheckCircle className="text-green-400 mr-4 flex-shrink-0" size={20} />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Business benefits" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful delivery and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <Card 
                key={step.step}
                className="bg-gradient-card border-gray-700"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-wofga-orange mb-4">{index + 1}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.step}</h3>
                  <p className="text-gray-300">{step.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our {service.title.toLowerCase()} can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Start Your Project
                </Button>
              </a>
              <a href="/pricing">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

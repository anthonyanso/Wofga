import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import SEO from '@/components/SEO';
import { Link } from 'wouter';

const faqCategories = [
  'All',
  'General',
  'Services',
  'Pricing',
  'Technical',
  'Support',
  'Process'
];

const faqs = [
  {
    id: 1,
    category: 'General',
    question: 'What services does Wofga Digital offer?',
    answer: 'We offer comprehensive technology solutions including software development, web and mobile app development, IT consulting, cloud solutions, cybersecurity services, and data analytics with AI integration. Our team specializes in digital transformation for businesses of all sizes.'
  },
  {
    id: 2,
    category: 'General',
    question: 'How long has Wofga Digital been in business?',
    answer: 'Wofga Digital was founded in 2019 and has been serving clients for over 5 years. In this time, we\'ve completed 150+ projects and helped 50+ businesses achieve their digital transformation goals.'
  },
  {
    id: 3,
    category: 'Services',
    question: 'Do you develop both web and mobile applications?',
    answer: 'Yes, we develop both web applications and mobile apps. We create responsive web applications, progressive web apps (PWAs), native mobile apps for iOS and Android, and cross-platform solutions using technologies like React Native and Flutter.'
  },
  {
    id: 4,
    category: 'Services',
    question: 'Can you help with cloud migration?',
    answer: 'Absolutely! We provide comprehensive cloud migration services including assessment, planning, execution, and optimization. We work with major cloud platforms like AWS, Azure, and Google Cloud to help businesses migrate their infrastructure safely and efficiently.'
  },
  {
    id: 5,
    category: 'Pricing',
    question: 'How do you determine project pricing?',
    answer: 'Our pricing is based on project scope, complexity, timeline, and required features. We offer three main tiers: Starter ($2,999), Professional ($7,999), and Enterprise (custom pricing). We provide detailed quotes after understanding your specific requirements during our initial consultation.'
  },
  {
    id: 6,
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans. Most projects are structured with milestone-based payments, typically 30% upfront, 40% at midpoint, and 30% upon completion. For larger enterprise projects, we can arrange custom payment schedules.'
  },
  {
    id: 7,
    category: 'Technical',
    question: 'What technologies do you specialize in?',
    answer: 'We work with cutting-edge technologies including React, Node.js, Python, Java, .NET, AWS, Docker, Kubernetes, and more. Our team stays current with the latest tech trends including AI/ML frameworks like TensorFlow and PyTorch.'
  },
  {
    id: 8,
    category: 'Technical',
    question: 'Do you provide API development and integration?',
    answer: 'Yes, we specialize in API development and third-party integrations. We can build custom APIs, integrate with existing systems, and connect your applications with popular services like payment gateways, CRMs, and marketing platforms.'
  },
  {
    id: 9,
    category: 'Process',
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with six key phases: Discovery (requirements analysis), Design (architecture and UI/UX), Development (coding and implementation), Testing (QA and security), Deployment (launch and setup), and Support (ongoing maintenance).'
  },
  {
    id: 10,
    category: 'Process',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. Enterprise solutions may take 6-12 months. We provide detailed timelines during our initial consultation.'
  },
  {
    id: 11,
    category: 'Support',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, all our projects include free support for 3-6 months depending on the plan. We also offer extended maintenance packages for ongoing updates, security patches, and feature enhancements to keep your systems running smoothly.'
  },
  {
    id: 12,
    category: 'Support',
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support including bug fixes, security updates, performance optimization, feature enhancements, and technical assistance. Our support is available via email, phone, and video calls during business hours, with 24/7 emergency support for enterprise clients.'
  },
  {
    id: 13,
    category: 'Technical',
    question: 'Do you help with cybersecurity?',
    answer: 'Yes, we offer comprehensive cybersecurity services including security audits, penetration testing, compliance management, and security implementation. We ensure your applications and infrastructure are protected against modern threats.'
  },
  {
    id: 14,
    category: 'Services',
    question: 'Can you modernize legacy systems?',
    answer: 'Absolutely! We specialize in legacy system modernization, helping businesses upgrade outdated technology, improve performance, and add modern features while maintaining data integrity and business continuity.'
  },
  {
    id: 15,
    category: 'General',
    question: 'Do you work with startups or only established businesses?',
    answer: 'We work with businesses of all sizes, from startups to large enterprises. We understand the unique challenges each faces and tailor our solutions accordingly. We offer startup-friendly pricing and can scale solutions as businesses grow.'
  }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about Wofga Digital's services, pricing, development process, and support. Get the information you need to make informed decisions."
        keywords="FAQ, frequently asked questions, support, software development questions, pricing questions, technical support"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="text-wofga-orange" size={40} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to the most common questions about our services, process, and policies. Can't find what you're looking for? Contact us directly.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {faqCategories.map((category) => (
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

      {/* FAQ Items */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No Questions Found</h3>
              <p className="text-gray-300 mb-8">
                {searchTerm 
                  ? `No FAQs match your search for "${searchTerm}".`
                  : "No questions in this category."
                }
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn-gradient text-white px-8 py-4 rounded-full"
              >
                View All FAQs
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card 
                  key={faq.id}
                  className="bg-gradient-card border-gray-700 overflow-hidden transition-all duration-300 hover:border-wofga-orange/50"
                  data-aos="fade-up" 
                  data-aos-delay={50 * (index + 1)}
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="px-3 py-1 bg-wofga-orange/20 text-wofga-orange rounded-full text-xs font-medium mr-3">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="text-wofga-orange" size={24} />
                        ) : (
                          <ChevronDown className="text-wofga-orange" size={24} />
                        )}
                      </div>
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-700 pt-4">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Can't find the answer you're looking for? Our team is here to help you with personalized support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="bg-gradient-card border-gray-700 text-center card-hover"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="text-wofga-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Live Chat</h3>
                <p className="text-gray-300 mb-6">
                  Get instant answers to your questions through our live chat support.
                </p>
                <Button className="btn-gradient text-white px-6 py-3 rounded-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="bg-gradient-card border-gray-700 text-center card-hover"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-wofga-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Email Support</h3>
                <p className="text-gray-300 mb-6">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="bg-gradient-card border-gray-700 text-center card-hover"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-wofga-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Phone Support</h3>
                <p className="text-gray-300 mb-6">
                  Speak directly with our team for immediate assistance.
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Have all the information you need? Let's discuss your project requirements and get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Get Started
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

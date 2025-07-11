import { useState } from 'react';
import { Link } from 'wouter';
import { Check, X, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import SEO from '@/components/SEO';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    icon: Zap,
    monthly: 2999,
    yearly: 29990,
    popular: false,
    features: [
      'Basic Web Development',
      'Responsive Design',
      'Up to 5 pages',
      '3 months support',
      'Basic SEO setup',
      'Contact form integration',
      'SSL certificate',
      'Mobile optimization'
    ],
    notIncluded: [
      'E-commerce functionality',
      'Custom backend development',
      'Advanced analytics',
      'Priority support',
      'Database integration'
    ],
    deliverables: [
      'Fully responsive website',
      'Basic CMS setup',
      'Google Analytics integration',
      'Social media integration'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses with advanced needs',
    icon: Shield,
    monthly: 7999,
    yearly: 79990,
    popular: true,
    features: [
      'Advanced Web/Mobile App',
      'Custom Backend Development',
      'Up to 15 pages',
      '6 months support',
      'Advanced SEO optimization',
      'E-commerce integration',
      'Database design',
      'API development',
      'Performance optimization',
      'Security implementation',
      'Third-party integrations',
      'Analytics dashboard'
    ],
    notIncluded: [
      'AI/ML integration',
      'Enterprise-level security',
      'Dedicated project manager'
    ],
    deliverables: [
      'Full-stack application',
      'Admin dashboard',
      'API documentation',
      'Performance reports',
      'Security audit'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete digital transformation for large organizations',
    icon: Users,
    monthly: 'Custom',
    yearly: 'Custom',
    popular: false,
    features: [
      'Full Digital Transformation',
      'AI/ML Integration',
      'Unlimited pages/features',
      '24/7 Priority Support',
      'Dedicated Team',
      'Advanced Security',
      'Cloud infrastructure',
      'DevOps implementation',
      'Scalable architecture',
      'Data analytics',
      'Custom integrations',
      'Compliance management',
      'Training & documentation',
      'Ongoing optimization'
    ],
    notIncluded: [],
    deliverables: [
      'Enterprise application suite',
      'Infrastructure setup',
      'Security implementation',
      'Team training',
      'Documentation package',
      'Ongoing support plan'
    ]
  }
];

const addOns = [
  {
    name: 'Mobile App Development',
    description: 'Native iOS and Android applications',
    price: 'From $5,999'
  },
  {
    name: 'Cloud Migration',
    description: 'Complete infrastructure migration to cloud',
    price: 'From $3,999'
  },
  {
    name: 'Cybersecurity Audit',
    description: 'Comprehensive security assessment',
    price: 'From $2,499'
  },
  {
    name: 'Data Analytics Setup',
    description: 'Business intelligence and reporting',
    price: 'From $4,999'
  },
  {
    name: 'Extended Support',
    description: 'Additional 12 months of support',
    price: 'From $1,999'
  },
  {
    name: 'Training & Documentation',
    description: 'Team training and comprehensive docs',
    price: 'From $1,499'
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <SEO
        title="Pricing Plans - Transparent & Competitive"
        description="Explore Wofga Digital's transparent pricing plans for software development, web apps, mobile development, and enterprise solutions. Find the perfect plan for your business."
        keywords="pricing plans, software development cost, web development pricing, mobile app cost, enterprise solutions pricing"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and exceptional support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-wofga-orange"
              />
              <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.id}
                className={`pricing-card bg-gradient-card border-gray-700 relative overflow-hidden ${
                  plan.popular ? 'border-2 border-wofga-orange' : ''
                }`}
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-wofga-orange text-white px-4 py-2 rounded-full font-semibold flex items-center">
                      <Star size={16} className="mr-1" fill="currentColor" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-wofga-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="text-wofga-orange" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {typeof plan.monthly === 'number' ? (
                      <>
                        <div className="text-4xl font-bold text-white mb-2">
                          ${isYearly ? Math.floor(plan.yearly / 12).toLocaleString() : plan.monthly.toLocaleString()}
                          <span className="text-lg text-gray-400">/month</span>
                        </div>
                        {isYearly && (
                          <div className="text-sm text-gray-400">
                            Billed annually (${plan.yearly.toLocaleString()}/year)
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-white mb-2">
                        Custom Quote
                      </div>
                    )}
                  </div>
                  
                  <Link href="/contact">
                    <Button 
                      className={`w-full py-3 rounded-full font-semibold ${
                        plan.popular 
                          ? 'btn-gradient text-white' 
                          : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </Link>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-white mb-4">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="text-green-400 mr-3 flex-shrink-0" size={16} />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-white mb-4">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <X className="text-red-400 mr-3 flex-shrink-0" size={16} />
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-white mb-4">Key deliverables:</h4>
                      <ul className="space-y-2">
                        {plan.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center">
                            <ArrowRight className="text-wofga-orange mr-3 flex-shrink-0" size={14} />
                            <span className="text-gray-300 text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Add-On Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance your project with our additional services and specialized solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <Card 
                key={addon.name}
                className="bg-gradient-card border-gray-700 card-hover"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-wofga-orange font-semibold">{addon.price}</span>
                    <Button variant="link" className="text-wofga-orange p-0 h-auto hover:underline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Pricing FAQ</h2>
            <p className="text-xl text-gray-300">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Are there any setup fees?",
                answer: "No, there are no hidden setup fees. The prices shown include everything needed to get your project started."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and can set up custom payment terms for enterprise clients."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can change your plan at any time. We'll work with you to ensure a smooth transition and adjust billing accordingly."
              },
              {
                question: "What happens after the support period ends?",
                answer: "You can purchase extended support packages or individual support hours as needed. We're always here to help maintain your solution."
              },
              {
                question: "Do you offer refunds?",
                answer: "We work on a milestone-based payment system. If you're not satisfied with a milestone delivery, we'll work to address your concerns before proceeding."
              },
              {
                question: "Is there a discount for non-profits?",
                answer: "Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Contact us for details."
              }
            ].map((faq, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-gray-700"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan or contact us for a custom quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Get Custom Quote
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

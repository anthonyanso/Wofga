import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Testimonials1 from '@/assets/testimonials/featured/featuresTestimonial1.jpg';
import Testimonials2 from '@/assets/testimonials/featured/featuresTestimonial2.jpg';
import Testimonials3 from '@/assets/testimonials/featured/featuresTestimonial3.jpg';
// Static testimonials data
const allTestimonials = [
  {
    id: 1,
    name: 'Ava Reynolds',
    position: 'Marketing Specialist',
    company: 'MedessyEnt',
    content: 'Wofga Digital delivered our project on time and exceeded our expectations. Highly recommended!',
    rating: 5,
    imageUrl: Testimonials1,
    featured: true,
    createdAt: '2022-04-10',
  },
  {
    id: 2,
    name: 'Liam Carter',
    position: 'Admin Executive',
    company: 'KartelEnergy',
    content: 'Their expertise in cloud and security is unmatched. We felt supported every step of the way.',
    rating: 5,
    imageUrl: Testimonials2,
    featured: true,
    createdAt: '2023-02-28',
  },
  {
    id: 3,
    name: 'Sophie Martinez',
    position: 'Product Manager',
    company: 'SalesForecConsulting',
    content: 'The dashboard they built for us transformed our business insights. Fantastic team!',
    rating: 4,
    imageUrl: Testimonials3,
    featured: false,
    createdAt: '2024-06-15',
  }
];

const featuredTestimonials = allTestimonials.filter(t => t.featured);
import { formatDate } from '@/lib/utils';
import TestimonialsSlider from '@/components/TestimonialsSlider';

export default function Testimonials() {
  const isLoading = false;

  return (
    <>
      <SEO
        title="Client Testimonials - Success Stories"
        description="Read what our clients say about Wofga Digital's technology solutions. Discover success stories from businesses we've helped transform with our tech services."
        keywords="testimonials, client reviews, success stories, customer feedback, case studies, client satisfaction"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Wofga Digital.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover why businesses trust Wofga Digital for their technology transformation
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* Additional Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-20 section-bg-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-6">Featured Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Highlighted testimonials from our most impactful client partnerships
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredTestimonials.slice(0, 2).map((testimonial: any, index: number) => (
                <Card
                  key={testimonial.id}
                  className="bg-gradient-card border-gray-700 relative"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <CardContent className="p-8">
                    <div className="absolute top-6 right-6">
                      <Quote className="text-wofga-orange/30" size={48} />
                    </div>

                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400 mr-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <Badge className="bg-wofga-orange text-white">
                        Featured
                      </Badge>
                    </div>

                    <blockquote className="text-lg text-gray-300 mb-8 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center">
                      <img
                        src={testimonial.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-wofga-orange/30"
                      />
                      <div>
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-wofga-orange">{testimonial.position}</div>
                        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Authentic feedback from businesses we've helped transform through technology
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="bg-gradient-card border-gray-700">
                  <CardContent className="p-8">
                    <div className="h-4 bg-gray-800 rounded mb-4 animate-pulse"></div>
                    <div className="h-20 bg-gray-800 rounded mb-6 animate-pulse"></div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-800 rounded-full mr-4 animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-800 rounded mb-2 animate-pulse"></div>
                        <div className="h-3 bg-gray-800 rounded w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : allTestimonials.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No Testimonials Yet</h3>
              <p className="text-gray-300 mb-8">
                We're working with amazing clients and will be sharing their success stories soon.
              </p>
              <Button className="btn-gradient text-white px-8 py-4 rounded-full">
                Be Our Next Success Story
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTestimonials.map((testimonial: any, index: number) => (
                <Card
                  key={testimonial.id}
                  className="bg-gradient-card border-gray-700"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      {testimonial.featured && (
                        <Badge variant="secondary" className="bg-wofga-orange/20 text-wofga-orange">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <blockquote className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>

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

                    <div className="mt-4 text-xs text-gray-500">
                      {formatDate(testimonial.createdAt)}
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
            <h2 className="text-4xl font-bold mb-6">Client Satisfaction Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Client Satisfaction', value: '98%', description: 'Average satisfaction rating' },
              { label: 'Project Success Rate', value: '96%', description: 'Projects delivered on time and budget' },
              { label: 'Client Retention', value: '89%', description: 'Clients who return for additional projects' },
              { label: 'Referral Rate', value: '75%', description: 'New clients from referrals' }
            ].map((stat, index) => (
              <div key={stat.label} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className="text-4xl font-bold text-wofga-orange mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've successfully delivered solutions across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Healthcare', 'Finance', 'E-commerce', 'Education',
              'Manufacturing', 'Real Estate', 'Technology', 'Startups'
            ].map((industry, index) => (
              <Card
                key={industry}
                className="bg-gradient-card border-gray-700 text-center"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white">{industry}</h3>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create your own success story. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Start Your Project
                </Button>
              </a>
              <a href="https://calendly.com/wofgadigital74" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

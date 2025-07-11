import { Link } from 'wouter';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to Wofga Digital's homepage to explore our tech solutions and services."
        keywords="404, page not found, error"
      />
      
      <section className="hero-bg min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-wofga-orange mb-4">404</div>
              <div className="text-6xl mb-8">🚀</div>
            </div>
            
            <Card className="bg-gradient-card border-gray-700 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <AlertCircle className="h-16 w-16 text-wofga-orange" />
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">
                  Oops! Page Not Found
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  It looks like this page has been moved, deleted, or doesn't exist. 
                  But don't worry – we're here to help you find what you're looking for!
                </p>
                
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Here are some helpful links to get you back on track:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-left">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Popular Pages</h3>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/services"><a className="text-gray-300 hover:text-wofga-orange transition-colors">Our Services</a></Link></li>
                        <li><Link href="/portfolio"><a className="text-gray-300 hover:text-wofga-orange transition-colors">Portfolio</a></Link></li>
                        <li><Link href="/about"><a className="text-gray-300 hover:text-wofga-orange transition-colors">About Us</a></Link></li>
                        <li><Link href="/blog"><a className="text-gray-300 hover:text-wofga-orange transition-colors">Blog</a></Link></li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-white mb-2">Get Help</h3>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/contact"><a className="text-gray-300 hover:text-wofga-orange transition-colors">Contact Us</a></Link></li>
                        <li><Link href="/faq"><a className="text-gray-300 hover:text-wofga-orange transition-colors">FAQ</a></Link></li>
                        <li><Link href="/pricing"><a className="text-gray-300 hover:text-wofga-orange transition-colors">Pricing</a></Link></li>
                        <li><Link href="/testimonials"><a className="text-gray-300 hover:text-wofga-orange transition-colors">Testimonials</a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  <Home size={20} className="mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <ArrowLeft size={20} className="mr-2" />
                Go Back
              </Button>
            </div>
            
            {/* Fun fact */}
            <div className="mt-12 p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-wofga-orange mb-2">Did you know?</h3>
              <p className="text-gray-300 text-sm">
                The term "404 error" comes from the room number at CERN where the original web servers were located. 
                When a file couldn't be found, it was said to be "404" - not found in room 404!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

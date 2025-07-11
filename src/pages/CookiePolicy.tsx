import { Cookie, Settings, Eye, Shield, Trash2, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import SEO from '@/components/SEO';
import { useState } from 'react';

const cookieCategories = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    enabled: true,
    required: true,
    examples: [
      'Session management and user authentication',
      'Shopping cart functionality',
      'Security and fraud prevention',
      'Load balancing and performance optimization'
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website to improve user experience.',
    enabled: true,
    required: false,
    examples: [
      'Google Analytics for traffic analysis',
      'Page view tracking and user behavior',
      'Performance monitoring and optimization',
      'A/B testing and feature usage metrics'
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Used to deliver personalized advertisements and track marketing campaign effectiveness.',
    enabled: false,
    required: false,
    examples: [
      'Targeted advertising and retargeting',
      'Social media integration and sharing',
      'Email marketing campaign tracking',
      'Cross-platform user identification'
    ]
  },
  {
    id: 'preferences',
    name: 'Preference Cookies',
    description: 'Remember your settings and preferences to enhance your experience.',
    enabled: true,
    required: false,
    examples: [
      'Language and region preferences',
      'Theme and display settings',
      'Form data and user preferences',
      'Customized content recommendations'
    ]
  }
];

export default function CookiePolicy() {
  const [cookieSettings, setCookieSettings] = useState(
    cookieCategories.reduce((acc, category) => {
      acc[category.id] = category.enabled;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCookieToggle = (categoryId: string, enabled: boolean) => {
    setCookieSettings(prev => ({
      ...prev,
      [categoryId]: enabled
    }));
  };

  const handleSaveSettings = () => {
    // In a real application, this would save the settings to localStorage or backend
    console.log('Cookie settings saved:', cookieSettings);
    // Show success message
    alert('Cookie preferences saved successfully!');
  };

  const handleAcceptAll = () => {
    const allEnabled = cookieCategories.reduce((acc, category) => {
      acc[category.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCookieSettings(allEnabled);
  };

  const handleRejectAll = () => {
    const essentialOnly = cookieCategories.reduce((acc, category) => {
      acc[category.id] = category.required;
      return acc;
    }, {} as Record<string, boolean>);
    setCookieSettings(essentialOnly);
  };

  return (
    <>
      <SEO
        title="Cookie Policy - How We Use Cookies"
        description="Learn about how Wofga Digital uses cookies and similar technologies. Manage your cookie preferences and understand our data collection practices."
        keywords="cookie policy, cookies, tracking, privacy, data collection, user preferences, GDPR"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="text-wofga-orange" size={40} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how we use cookies and similar technologies to improve your experience on our website and services.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 21, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Settings className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Cookie Preferences</h2>
              </div>
              
              <p className="text-gray-300 text-lg mb-8">
                Manage your cookie preferences below. You can enable or disable different types of cookies according to your preferences. Note that disabling certain cookies may affect website functionality.
              </p>

              <div className="space-y-6">
                {cookieCategories.map((category) => (
                  <div key={category.id} className="border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                      <div className="ml-6">
                        <Switch
                          checked={cookieSettings[category.id]}
                          onCheckedChange={(enabled) => handleCookieToggle(category.id, enabled)}
                          disabled={category.required}
                          className="data-[state=checked]:bg-wofga-orange"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Examples of use:</h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        {category.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {category.required && (
                      <div className="mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300">
                          Required for website functionality
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-700">
                <Button onClick={handleSaveSettings} className="btn-gradient text-white px-6 py-3 rounded-full">
                  Save Preferences
                </Button>
                <Button onClick={handleAcceptAll} variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full">
                  Accept All
                </Button>
                <Button onClick={handleRejectAll} variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white px-6 py-3 rounded-full">
                  Reject Non-Essential
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies We Use</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Session Cookies</h4>
                      <p className="text-sm">Temporary cookies that are deleted when you close your browser. They help maintain your session and provide basic functionality.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Persistent Cookies</h4>
                      <p className="text-sm">Cookies that remain on your device for a set period or until you delete them. They remember your preferences across visits.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">First-Party Cookies</h4>
                      <p className="text-sm">Set directly by our website to provide core functionality and improve your experience.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Third-Party Cookies</h4>
                      <p className="text-sm">Set by external services we use, such as analytics providers and social media platforms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Use Cookies */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">How We Use Cookies</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Website Functionality</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Remember your login status and keep you signed in</li>
                    <li>Maintain items in your shopping cart or form data</li>
                    <li>Remember your language and regional preferences</li>
                    <li>Provide secure access to password-protected areas</li>
                    <li>Enable essential features like contact forms and live chat</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Performance and Analytics</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Analyze website traffic and user behavior patterns</li>
                    <li>Measure the effectiveness of our marketing campaigns</li>
                    <li>Identify popular content and improve site navigation</li>
                    <li>Monitor website performance and loading times</li>
                    <li>Conduct A/B testing for feature improvements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personalization</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Customize content based on your interests and behavior</li>
                    <li>Remember your preferences for future visits</li>
                    <li>Provide relevant service recommendations</li>
                    <li>Tailor our communications to your needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Marketing and Advertising</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Deliver relevant advertisements on our site and others</li>
                    <li>Track the effectiveness of our advertising campaigns</li>
                    <li>Prevent showing you the same ads repeatedly</li>
                    <li>Enable social media sharing and integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Settings className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Third-Party Services</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  We use several third-party services that may set their own cookies on your device:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Google Analytics</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Helps us understand how visitors interact with our website.
                    </p>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-wofga-orange text-sm hover:underline">
                      Google Privacy Policy →
                    </a>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Social Media Platforms</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Enable social sharing and may track your interactions.
                    </p>
                    <p className="text-gray-300 text-sm">Facebook, Twitter, LinkedIn</p>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Payment Processors</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Secure payment processing and fraud prevention.
                    </p>
                    <p className="text-gray-300 text-sm">Stripe, PayPal</p>
                  </div>

                  <div className="border border-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">Customer Support</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Live chat and customer support functionality.
                    </p>
                    <p className="text-gray-300 text-sm">Intercom, Zendesk</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Trash2 className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Managing and Deleting Cookies</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-4">
                    You can control and delete cookies through your browser settings. Here's how to manage cookies in popular browsers:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Chrome</h4>
                      <p className="text-gray-300 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Firefox</h4>
                      <p className="text-gray-300 text-sm">Preferences → Privacy & Security → Cookies and Site Data</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Safari</h4>
                      <p className="text-gray-300 text-sm">Preferences → Privacy → Manage Website Data</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Edge</h4>
                      <p className="text-gray-300 text-sm">Settings → Site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Opt-Out Tools</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>Google Analytics:</strong> Use the 
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-wofga-orange hover:underline ml-1">
                        Google Analytics Opt-out Browser Add-on
                      </a>
                    </li>
                    <li>
                      <strong>Advertising:</strong> Visit 
                      <a href="https://youradchoices.com/" target="_blank" rel="noopener noreferrer" className="text-wofga-orange hover:underline ml-1">
                        Your Ad Choices
                      </a> to opt out of targeted advertising
                    </li>
                    <li>
                      <strong>Do Not Track:</strong> Enable the "Do Not Track" setting in your browser
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
                  <h3 className="text-yellow-200 font-semibold mb-2">Important Note:</h3>
                  <p className="text-yellow-100 text-sm">
                    Disabling or deleting cookies may affect your ability to use certain features of our website. Some functionality may not work properly without cookies enabled.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-gray-700" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Mail className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Contact Us About Cookies</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Privacy Team</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Email: privacy@wofgadigital.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Tech Street, Digital City, TC 12345</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full">
                        Request Data Deletion
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 w-full">
                        Download My Data
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Updates to This Policy</h3>
                  <p className="text-gray-300">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by posting the updated policy on our website and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

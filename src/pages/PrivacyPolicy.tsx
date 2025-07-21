import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Your Data Protection"
        description="Learn how Wofga Digital collects, uses, and protects your personal information. Our commitment to privacy and data security."
        keywords="privacy policy, data protection, personal information, GDPR, CCPA, data security"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-wofga-orange" size={40} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 21, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Overview</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Wofga Digital ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Database className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-4">We may collect the following personal information:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company information and job title</li>
                    <li>Project requirements and preferences</li>
                    <li>Payment and billing information</li>
                    <li>Communication history and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
                  <p className="text-gray-300 mb-4">We automatically collect certain technical information:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Website usage patterns and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Referral sources and search terms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                  <p className="text-gray-300 mb-4">Information about how you interact with our services:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Pages visited and time spent on our website</li>
                    <li>Links clicked and actions taken</li>
                    <li>Features used and preferences set</li>
                    <li>Support requests and feedback provided</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide and deliver our technology solutions and services</li>
                    <li>Process payments and manage billing</li>
                    <li>Communicate about projects and provide support</li>
                    <li>Customize services to meet your specific needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Communication</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Send important updates about our services</li>
                    <li>Share relevant industry insights and newsletters (with consent)</li>
                    <li>Notify you about new features or service changes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Improvement and Analytics</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Analyze website usage to improve user experience</li>
                    <li>Conduct research and development for new services</li>
                    <li>Monitor and improve service quality and performance</li>
                    <li>Detect and prevent fraud or security issues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Legal Compliance</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Protect our rights and property</li>
                    <li>Respond to legal requests and prevent harm</li>
                    <li>Enforce our terms of service and policies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lock className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Information Sharing and Disclosure</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service Providers</h3>
                  <p className="text-gray-300">
                    We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, hosting providers, and analytics services. These providers are contractually bound to protect your information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Business Transfers</h3>
                  <p className="text-gray-300">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change in ownership or control.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements</h3>
                  <p className="text-gray-300">
                    We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety, or that of others.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Consent</h3>
                  <p className="text-gray-300">
                    We may share your information with your explicit consent for purposes not covered by this policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="400">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Data Security</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Security Measures</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>

                <p className="text-gray-300">
                  While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Your Rights and Choices</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  You have certain rights regarding your personal information, depending on your location:
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Access and Portability</h3>
                  <p className="text-gray-300">
                    You can request a copy of the personal information we hold about you and receive it in a structured, commonly used format.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Correction and Updates</h3>
                  <p className="text-gray-300">
                    You can request that we correct or update inaccurate or incomplete personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Deletion</h3>
                  <p className="text-gray-300">
                    You can request that we delete your personal information, subject to certain legal and business requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Opt-out</h3>
                  <p className="text-gray-300">
                    You can opt out of marketing communications at any time by using the unsubscribe link in our emails or contacting us directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Consent Withdrawal</h3>
                  <p className="text-gray-300">
                    Where we rely on your consent to process your information, you can withdraw that consent at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="600">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Database className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how you use our website</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>

                <p className="text-gray-300">
                  You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-card border-gray-700" data-aos="fade-up" data-aos-delay="700">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Mail className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Contact Us</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">General Inquiries</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Email: privacy@wofgadigital.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Address: 123 Tech Street, Digital City, TC 12345</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Data Protection Officer</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Email: dpo@wofgadigital.com</p>
                      <p>For EU residents: eu-privacy@wofgadigital.com</p>
                      <p>For CA residents: ca-privacy@wofgadigital.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Changes to This Policy</h3>
                  <p className="text-gray-300">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. We encourage you to review this policy periodically.
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

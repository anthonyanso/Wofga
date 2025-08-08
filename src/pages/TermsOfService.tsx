import { FileText, Scale, Shield, AlertTriangle, Users, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service - Legal Agreement"
        description="Read Wofga Digital's Terms of Service. Understand the legal terms and conditions for using our technology solutions and services."
        keywords="terms of service, legal agreement, terms and conditions, service agreement, user agreement"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="w-20 h-20 bg-wofga-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="text-wofga-orange" size={40} />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of our services and establish the legal relationship between you and Wofga Digital.
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
          
          {/* Acceptance of Terms */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  By accessing or using any services provided by Wofga Digital ("Company," "we," "our," or "us"), you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Wofga Digital. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting on our website.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Services Description</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Wofga Digital provides comprehensive technology solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Custom software development and programming services</li>
                  <li>Web application and mobile application development</li>
                  <li>IT consulting and digital transformation services</li>
                  <li>Cloud solutions and infrastructure management</li>
                  <li>Cybersecurity services and security audits</li>
                  <li>Data analytics and artificial intelligence solutions</li>
                  <li>Ongoing maintenance and technical support</li>
                </ul>
                <p className="text-gray-300">
                  Specific service details, deliverables, timelines, and pricing will be outlined in separate project agreements or statements of work ("SOW") that incorporate these Terms by reference.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Client Responsibilities</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Information and Cooperation</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide accurate, complete, and timely information required for project completion</li>
                    <li>Respond to requests for feedback, approvals, and decisions within agreed timeframes</li>
                    <li>Designate authorized representatives for project communication and decision-making</li>
                    <li>Provide necessary access to systems, data, and personnel as required</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Content and Materials</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Ensure all provided content is accurate, legal, and does not infringe third-party rights</li>
                    <li>Obtain necessary licenses and permissions for any third-party materials</li>
                    <li>Maintain backups of all critical data and content</li>
                    <li>Review and approve all deliverables within specified timeframes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Payment Obligations</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Make payments according to agreed schedules and terms</li>
                    <li>Pay all applicable taxes and fees</li>
                    <li>Notify us immediately of any billing discrepancies</li>
                    <li>Maintain current and accurate billing information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Payment Terms</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Payment Schedule</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Payments are typically structured as milestone-based payments</li>
                    <li>Standard payment terms are Net 30 days from invoice date</li>
                    <li>Late payments may incur interest charges of 1.5% per month</li>
                    <li>We reserve the right to suspend services for overdue accounts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Pricing and Changes</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>All prices are quoted in USD unless otherwise specified</li>
                    <li>Pricing may change with 30 days' written notice for ongoing services</li>
                    <li>Additional work outside the original scope will be billed separately</li>
                    <li>All fees are non-refundable except as specifically provided</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Expenses and Third-Party Costs</h3>
                  <p className="text-gray-300">
                    Client is responsible for all third-party costs including but not limited to hosting fees, licensing costs, domain registration, and any external services required for project completion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="400">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Client-Owned Content</h3>
                  <p className="text-gray-300">
                    Client retains all rights to content, data, and materials provided to us. Client grants us a license to use such materials solely for the purpose of providing services under these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Custom Developments</h3>
                  <p className="text-gray-300">
                    Upon full payment, Client receives ownership of custom code, designs, and materials specifically created for their project, excluding our proprietary frameworks, tools, and methodologies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Our Proprietary Rights</h3>
                  <p className="text-gray-300">
                    We retain all rights to our proprietary technologies, frameworks, methodologies, and general knowledge. This includes pre-existing intellectual property and any improvements or derivatives thereof.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Third-Party Components</h3>
                  <p className="text-gray-300">
                    Projects may include third-party components subject to their respective licenses. Client is responsible for complying with all applicable third-party license terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Confidentiality</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Both parties acknowledge that they may have access to confidential information and agree to maintain strict confidentiality.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Confidential Information Includes</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Business strategies, financial information, and trade secrets</li>
                    <li>Technical specifications, source code, and proprietary methodologies</li>
                    <li>Customer lists, pricing information, and marketing strategies</li>
                    <li>Any information marked or identified as confidential</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Obligations</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Use confidential information solely for the purpose of providing/receiving services</li>
                    <li>Implement reasonable security measures to protect confidential information</li>
                    <li>Not disclose confidential information to third parties without written consent</li>
                    <li>Return or destroy confidential information upon request or termination</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warranties and Disclaimers */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="600">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Warranties and Disclaimers</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Our Warranties</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Services will be performed in a professional and workmanlike manner</li>
                    <li>We have the right and authority to enter into this agreement</li>
                    <li>Services will substantially conform to agreed specifications</li>
                    <li>We will use industry-standard security practices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Disclaimers</h3>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
                    <p className="text-yellow-200 font-semibold mb-2">IMPORTANT DISCLAIMERS:</p>
                    <ul className="list-disc list-inside text-yellow-100 space-y-2 ml-4 text-sm">
                      <li>Services are provided "AS IS" without warranties beyond those expressly stated</li>
                      <li>We disclaim all implied warranties including merchantability and fitness for a particular purpose</li>
                      <li>We do not warrant that services will be uninterrupted or error-free</li>
                      <li>We are not responsible for third-party service failures or internet connectivity issues</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
                  <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                    <p className="text-red-200 font-semibold mb-2">LIMITATION OF LIABILITY:</p>
                    <p className="text-red-100 text-sm">
                      Our total liability for any claims arising from these Terms or our services shall not exceed the total amount paid by Client for the specific service that gave rise to the claim. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="700">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Termination</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Termination for Convenience</h3>
                  <p className="text-gray-300">
                    Either party may terminate ongoing services with 30 days' written notice. Client remains liable for all work completed and expenses incurred up to the termination date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Termination for Cause</h3>
                  <p className="text-gray-300">
                    Either party may terminate immediately upon written notice if the other party:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
                    <li>Materially breaches these Terms and fails to cure within 15 days of notice</li>
                    <li>Becomes insolvent or files for bankruptcy</li>
                    <li>Engages in illegal or unethical conduct</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Effect of Termination</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>All unpaid invoices become immediately due</li>
                    <li>Each party must return confidential information</li>
                    <li>Client receives deliverables for completed milestones</li>
                    <li>Surviving provisions remain in effect</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* General Provisions */}
          <Card className="bg-gradient-card border-gray-700 mb-12" data-aos="fade-up" data-aos-delay="800">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Scale className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">General Provisions</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Governing Law</h3>
                  <p className="text-gray-300">
                    These Terms shall be governed by and construed in accordance with the laws of the State of [State], without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Dispute Resolution</h3>
                  <p className="text-gray-300">
                    Any disputes arising from these Terms shall first be addressed through good faith negotiations. If unresolved, disputes shall be settled through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Force Majeure</h3>
                  <p className="text-gray-300">
                    Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including natural disasters, government actions, or pandemics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Severability</h3>
                  <p className="text-gray-300">
                    If any provision of these Terms is found unenforceable, the remainder shall remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Entire Agreement</h3>
                  <p className="text-gray-300">
                    These Terms, together with any applicable SOW, constitute the entire agreement between the parties and supersede all prior agreements and understandings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-card border-gray-700" data-aos="fade-up" data-aos-delay="900">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Mail className="text-wofga-orange mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  If you have any questions about these Terms of Service, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Legal Department</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Email: wofgadigital@gmail.com</p>
                      <p>Phone: +234 902 453 8030</p>
                      <p>Address: Anambra, Nigeria</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Business Inquiries</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>Email: wofgadigital@gmail.com</p>
                      <p>Phone: +234 902 453 8030</p>
                      <p>Business Hours:  Monday - Friday: 9 AM - 5PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Acknowledgment</h3>
                  <p className="text-gray-300">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. You also acknowledge that these Terms may be updated from time to time, and continued use of our services constitutes acceptance of any changes.
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

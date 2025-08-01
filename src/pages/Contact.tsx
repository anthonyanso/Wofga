import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Unified change handler for text inputs
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Separate handler for select dropdown
  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  // Select change handler
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  // Update your submit handler:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We've sent a confirmation email.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : String(error),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Get In Touch"
        description="Contact Wofga Digital for your technology needs. Get a free consultation for software development, web apps, mobile development, cloud solutions, and more."
        keywords="contact, consultation, software development quote, tech services contact, get in touch"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free
              consultation and let's discuss how we can help transform your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <div className="py-20 min-h-screen w-full bg-[#020617] relative">
        {/* Magenta Orb Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
        />
        {/* Your Content/Components */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <Card className="bg-gradient-card border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleTextChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleTextChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleTextChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleTextChange}
                        className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Service *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={handleServiceChange}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="software-development">
                            Software Development
                          </SelectItem>
                          <SelectItem value="web-development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="mobile-development">
                            Mobile Development
                          </SelectItem>
                          <SelectItem value="cloud-solutions">
                            Cloud Solutions
                          </SelectItem>
                          <SelectItem value="cybersecurity">
                            Cybersecurity
                          </SelectItem>
                          <SelectItem value="it-consulting">
                            IT Consulting
                          </SelectItem>
                          <SelectItem value="data-analytics">
                            Data Analytics & AI
                          </SelectItem>
                          <SelectItem value="Graphic Designs">
                            Graphic Designs
                          </SelectItem>
                          <SelectItem value="Product Design">
                            Product Design
                          </SelectItem>
                          <SelectItem value="Video Editing">
                            Video Editing
                          </SelectItem>
                          <SelectItem value="Animation (video ads)">
                            Animation (video ads)
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleTextChange}
                        required
                        rows={5}
                        className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold w-full"
                    >
                      {loading ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Contact Information
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Ready to take your business to the next level? We're here to
                    help you achieve your digital transformation goals.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                        <MapPin className="text-wofga-orange" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          Address
                        </h3>
                        <p className="text-gray-300">Anambra, Nigeria</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Phone className="text-wofga-orange" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                        <a href="tel:09024538030">
                          <p className="text-gray-300">+234 902 453 8030</p>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Mail className="text-wofga-orange" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <a href="mailto:wofgadigital@gmail.com">
                          <p className="text-gray-300">
                            wofgadigital@gmail.com
                          </p>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Clock className="text-wofga-orange" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          Business Hours
                        </h3>
                        <p className="text-gray-300">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <Card className="bg-gradient-card border-gray-700 overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63470.929289366315!2d6.779047894962957!3d6.139692374790321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104393bed6cb93b7%3A0xd75544d3750782f7!2sOnitsha%2C%20Anambra!5e0!3m2!1sen!2sng!4v1753312259320!5m2!1sen!2sng"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Wofga Digital Office Location"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages. All projects include 3-6 months of free support, and we offer extended maintenance plans to keep your systems running smoothly.",
              },
              {
                question: "What is your development process?",
                answer:
                  "We follow an agile development methodology with regular client feedback sessions. Our process includes discovery, design, development, testing, deployment, and ongoing support.",
              },
              {
                question: "How do you ensure project quality?",
                answer:
                  "We maintain high quality through code reviews, automated testing, continuous integration, and thorough quality assurance processes. Our team follows industry best practices and standards.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-gray-700"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
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
            <h2 className="text-4xl font-bold mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with innovative technology
              solutions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/wofgadigital74"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Schedule a Call
                </Button>
              </a>
              <a href="/Portfolio">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

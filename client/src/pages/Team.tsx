import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    position: 'CEO & Founder',
    bio: 'Leading digital transformation with 10+ years experience in enterprise technology solutions. Passionate about innovation and helping businesses thrive.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    skills: ['Strategic Planning', 'Business Development', 'Digital Transformation'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'john@wofgadigital.com'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'CTO',
    bio: 'Technology visionary with expertise in AI, cloud computing, and scalable architecture. Leads our technical strategy and innovation initiatives.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    skills: ['AI & Machine Learning', 'Cloud Architecture', 'Technical Leadership'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'sarah@wofgadigital.com'
    }
  },
  {
    id: 3,
    name: 'Mike Chen',
    position: 'Lead Developer',
    bio: 'Full-stack developer specializing in modern web technologies. Expert in React, Node.js, and cloud deployment strategies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    skills: ['React', 'Node.js', 'DevOps'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'mike@wofgadigital.com'
    }
  },
  {
    id: 4,
    name: 'Emma Davis',
    position: 'UX/UI Designer',
    bio: 'Creative designer focused on user-centered design and creating intuitive digital experiences that delight users.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    skills: ['UI/UX Design', 'User Research', 'Design Systems'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'emma@wofgadigital.com'
    }
  },
  {
    id: 5,
    name: 'David Rodriguez',
    position: 'DevOps Engineer',
    bio: 'Infrastructure specialist with expertise in cloud platforms, automation, and CI/CD pipelines. Ensures scalable and reliable deployments.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'david@wofgadigital.com'
    }
  },
  {
    id: 6,
    name: 'Lisa Wang',
    position: 'Data Scientist',
    bio: 'Data expert specializing in machine learning, analytics, and AI solutions. Transforms complex data into actionable business insights.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    skills: ['Python', 'Machine Learning', 'Data Analytics'],
    social: {
      github: '#',
      linkedin: '#',
      email: 'lisa@wofgadigital.com'
    }
  }
];

const stats = [
  { label: 'Team Members', value: '12+' },
  { label: 'Years Experience', value: '50+' },
  { label: 'Projects Delivered', value: '150+' },
  { label: 'Client Satisfaction', value: '98%' }
];

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team - Meet the Experts"
        description="Meet the talented team behind Wofga Digital. Our experienced professionals are passionate about technology and dedicated to delivering exceptional results."
        keywords="team, experts, developers, designers, engineers, leadership, tech professionals"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and passion for innovation to deliver exceptional technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className="text-4xl font-bold text-wofga-orange mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know the talented individuals who make our success possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id}
                className="team-card bg-gradient-card border-gray-700 relative overflow-hidden"
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-wofga-orange/20"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-wofga-orange mb-4 font-semibold">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-wofga-orange/20 text-wofga-orange rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="social-icons flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Linkedin size={18} className="text-wofga-orange hover:text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Github size={18} className="text-wofga-orange hover:text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Twitter size={18} className="text-wofga-orange hover:text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`} 
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Mail size={18} className="text-wofga-orange hover:text-white" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl font-bold mb-6">Our Culture & Values</h2>
              <p className="text-xl text-gray-300 mb-8">
                We believe in fostering a collaborative, innovative, and inclusive environment where everyone can thrive and contribute to our shared success.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-wofga-orange font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Innovation First</h3>
                    <p className="text-gray-300">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-wofga-orange font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Collaboration</h3>
                    <p className="text-gray-300">We work together as one team, sharing knowledge and supporting each other's growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wofga-orange/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-wofga-orange font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
                    <p className="text-gray-300">We maintain the highest standards in everything we do, from code quality to client service.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              Are you passionate about technology and looking to make an impact? We're always looking for talented individuals to join our growing team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Github, Instagram, Facebook, Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import DiscordIcon from '@/assets/discord_icon.svg';
import PaulmaryImage from '@/assets/profiles/PaulMary.png';
import AnthonyImage from '@/assets/profiles/Anthony.png';
import AngelaImage from '@/assets/profiles/Angela.png';
import MaryAnnImage from '@/assets/profiles/Mary.png';
import KennethImage from '@/assets/profiles/Kenneth.png';
import TeamDev from '@/assets/teamDev.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Igwe Paulmary',
    position: 'CEO & Founder',
    bio: 'With over 7 years of experience leading in the tech space, I’m passionate about building innovative digital solutions that drive real impact. At Wofga Digital, I focus on shaping vision, empowering our team, and delivering value through creativity, strategy, and technology.',
    image: PaulmaryImage,
    skills: ['Product Strategy', 'Full-Stack Development', 'Digital Innovation'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'john@wofgadigital.com'
    }
  },
  {
    id: 2,
    name: 'Anthony Anso',
    position: 'Co-Founder & CTO',
    bio: 'Innovative and results driven tech specialist with proven expertise in web development, intuitive UI/UX design, and mobile app development. Dedicated to building sleek, user-friendly digital products that blend functionality with impactful design.',
    image: AnthonyImage,
    skills: ['Mobile Development', 'Database Management', 'Prblem Solving & Critical Thinking'],
    social: {
      // linkedin: 'https://www.linkedin.com/in/anthony-anso/',
      DiscordIcon: 'https://discord.com/channels/@me',
      github: 'https://github.com/anthonyanso',
      email: 'anthonyanso@outlook.com'
    }
  },
  {
    id: 3,
    name: 'Angela Paul',
    position: 'Human Resources Manager',
    bio: 'A dedicated Human Resources professional with a strong passion for people development, fostering positive workplace culture, and providing effective organizational support. Thrilled to contribute to a team that values growth, collaboration, and excellence.',
    image: AngelaImage,
    skills: ['Product Design', 'Graphic Design', 'Content Editing'],
    social: {
      Instagram: 'https://www.instagram.com/nency_paul23/',
      Facebook: 'https://www.facebook.com/profile.php?id=100084072636258',
      email: 'angelapaul2191@gmail.com'
    }
  },
  {
    id: 4,
    name: 'MaryAnn Eberechukwu',
    position: 'Project Manager',
    bio: 'Highly skilled virtual assistant with strong multitasking abilities, excellent communication, and advanced proficiency in productivity tools, ensuring efficient project execution and client collaboration.',
    image: MaryAnnImage,
    skills: ['Soft Skills', 'Admin support', 'Project coordination'],
    social: {
      linkedin: 'https://www.linkedin.com/in/maryann-eberechukwu-igwe-768846264/',
      Facebook: 'https://www.facebook.com/profile.php?id=100089090975027',
      email: 'ebereigwe21@gmail.com'
    }
  },
  {
    id: 5,
    name: 'Mbahaotu Chigozie',
    position: 'Chief Finace Officer (CFO)',
    bio: 'Infrastructure specialist with expertise in cloud platforms, automation, and CI/CD pipelines. Ensures scalable and reliable deployments.',
    image: KennethImage,
    skills: ['AWS', 'Docker', 'Kubernetes'],
    social: {
      Facebook: 'https://www.facebook.com/chigozie.kenneth.716',
      Instagram: 'https://www.instagram.com/kengozcollections/',
      email: 'chigoziekenneth21@gmail.com'
    }
  }
];

const stats = [
  { label: 'Team Members', value: '3+' },
  { label: 'Years Experience', value: '7+' },
  { label: 'Projects Delivered', value: '450+' },
  { label: 'Client Satisfaction', value: '98%' }
];

export default function Team() {
  const { toast } = useToast();
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
                        <Linkedin size={18} className="text-white" />
                      </a>
                    )}
                    {member.social.Instagram && (
                      <a
                        href={member.social.Instagram}
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Instagram size={18} className="text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.DiscordIcon}
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <img src={DiscordIcon} className="w-[18px] text-wofga-orange hover:text-white" alt="Discord" />
                      </a>
                    )}
                    {member.social.Facebook && (
                      <a
                        href={member.social.Facebook}
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Facebook size={18} className="text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Twitter size={18} className="text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-wofga-orange/20 rounded-full flex items-center justify-center hover:bg-wofga-orange hover:text-white transition-all duration-300"
                      >
                        <Mail size={18} className="text-white" />
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
                src={TeamDev}
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
              <Button
                className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold"
                onClick={() => {
                  toast({
                    title: "Coming Soon!",
                    description: "Our engineers are currently working on upgrading the Careers page to serve you better. Please check back soon for exciting opportunities.",
                    variant: "default",
                  })
                }}
              >
                View Open Positions
              </Button>
              <a href="/about">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn About Our Culture
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

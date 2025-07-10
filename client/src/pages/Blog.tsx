import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { formatDate } from '@/lib/utils';

// Import blog images from local folder
import blogImg1 from '@/assests/blog/blog1.jpg';
import blogImg2 from '@/assests/blog/blog2.jpg';
import blogImg3 from '@/assests/blog/blog3.jpg';
import blogImg4 from '@/assests/blog/blog4.jpg';
import blogImg5 from '@/assests/blog/blog5.jpg';
import blogImg6 from '@/assests/blog/blog6.jpg';
import blogImg7 from '@/assests/blog/blog7.jpg';
import blogImg8 from '@/assests/blog/blog8.jpg';
import blogImg9 from '@/assests/blog/blog9.jpg';
import blogImg10 from '@/assests/blog/blog10.jpg';

const categories = ['All', 'Technology', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'Mobile Development'];

const BlogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    excerpt: 'Explore how artificial intelligence is transforming industries and what it means for the future of business.',
    imageUrl: blogImg1,
    author: 'Jane Doe',
    createdAt: '2024-06-01',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Business', 'Trends'],
    slug: 'future-of-ai-in-business'
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices',
    excerpt: 'A step-by-step guide to migrating your business to the cloud efficiently and securely.',
    imageUrl: blogImg2,
    author: 'John Smith',
    createdAt: '2024-05-28',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Migration', 'Best Practices'],
    slug: 'cloud-migration-best-practices'
  },
  {
    id: 3,
    title: 'Top Cybersecurity Threats in 2024',
    excerpt: 'Stay ahead of cybercriminals by understanding the latest threats and how to protect your business.',
    imageUrl: blogImg3,
    author: 'Emily Chen',
    createdAt: '2024-05-20',
    category: 'Cybersecurity',
    tags: ['Security', 'Threats', '2024'],
    slug: 'top-cybersecurity-threats-2024'
  },
  {
    id: 4,
    title: 'Modern Web Development Trends',
    excerpt: 'Discover the latest trends in web development and how they can benefit your next project.',
    imageUrl: blogImg4,
    author: 'Michael Lee',
    createdAt: '2024-05-15',
    category: 'Web Development',
    tags: ['Web', 'Trends', 'Development'],
    slug: 'modern-web-development-trends'
  },
  {
    id: 5,
    title: 'Building Scalable Mobile Apps',
    excerpt: 'Learn the key principles and technologies for building scalable and robust mobile applications.',
    imageUrl: blogImg5,
    author: 'Sarah Kim',
    createdAt: '2024-05-10',
    category: 'Mobile Development',
    tags: ['Mobile', 'Apps', 'Scalability'],
    slug: 'building-scalable-mobile-apps'
  },
  {
    id: 6,
    title: 'Data Privacy in the Digital Age',
    excerpt: 'Understand the importance of data privacy and how to safeguard your information online.',
    imageUrl: blogImg6,
    author: 'David Brown',
    createdAt: '2024-05-05',
    category: 'Technology',
    tags: ['Privacy', 'Data', 'Security'],
    slug: 'data-privacy-digital-age'
  },
  {
    id: 7,
    title: 'Machine Learning for Beginners',
    excerpt: 'A beginner-friendly introduction to machine learning concepts and applications.',
    imageUrl: blogImg7,
    author: 'Anna White',
    createdAt: '2024-04-28',
    category: 'AI & Machine Learning',
    tags: ['Machine Learning', 'AI', 'Beginners'],
    slug: 'machine-learning-for-beginners'
  },
  {
    id: 8,
    title: 'Securing Your Cloud Infrastructure',
    excerpt: 'Best practices for keeping your cloud infrastructure safe from cyber threats.',
    imageUrl: blogImg8,
    author: 'Chris Green',
    createdAt: '2024-04-20',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Security', 'Infrastructure'],
    slug: 'securing-cloud-infrastructure'
  },
  {
    id: 9,
    title: 'Responsive Design Essentials',
    excerpt: 'Why responsive design matters and how to implement it effectively in your projects.',
    imageUrl: blogImg9,
    author: 'Lisa Black',
    createdAt: '2024-04-15',
    category: 'Web Development',
    tags: ['Responsive', 'Design', 'Web'],
    slug: 'responsive-design-essentials'
  },
  {
    id: 10,
    title: 'The Rise of Progressive Web Apps',
    excerpt: 'Explore the benefits of progressive web apps and how they are changing the mobile landscape.',
    imageUrl: blogImg10,
    author: 'Tom Wilson',
    createdAt: '2024-04-10',
    category: 'Mobile Development',
    tags: ['PWA', 'Mobile', 'Web'],
    slug: 'rise-of-progressive-web-apps'
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Tech Blog - Latest Industry Insights"
        description="Stay updated with the latest technology trends, insights, and best practices from Wofga Digital. Read about AI, cloud computing, cybersecurity, and more."
        keywords="tech blog, technology news, AI insights, cloud computing, cybersecurity, web development, mobile development"
      />

      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Tech Insights & News</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with our latest insights on technology trends, best practices, and industry developments.
            </p>
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {categories.map((category) => (
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

      {/* Blog Posts Grid */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No Articles Found</h3>
              <p className="text-gray-300 mb-8">
                {searchTerm 
                  ? `No articles match your search for "${searchTerm}".`
                  : "No articles in this category yet. Check back soon for new content."
                }
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn-gradient text-white px-8 py-4 rounded-full"
              >
                View All Articles
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="bg-gradient-card border-gray-700 overflow-hidden card-hover"
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.imageUrl}
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-wofga-orange text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                    </div>
                    
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <a href={`/blog/${post.slug}`}>
                      <Button variant="link" className="text-wofga-orange p-0 h-auto font-semibold hover:underline">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to get the latest tech insights delivered to your inbox.
            </p>
            <a href="#newsletter">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                Subscribe Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

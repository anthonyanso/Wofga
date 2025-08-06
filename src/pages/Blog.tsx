import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { formatDate } from '@/lib/utils';

// Import blog images from local folder
import blogImg1 from '@/assets/blog/AI&MachineLearning_Image_1.jpg';
import blogImg2 from '@/assets/blog/CloudeComputingImage1.webp';
import blogImg3 from '@/assets/blog/Cloud_Security_Tools.webp';
import blogImg4 from '@/assets/blog/modern-web-development-trends_image_1.png';
import blogImg5 from '@/assets/blog/Android_Evergreen_Hero_Banner_AI_WebandApps-1.png';
import blogImg6 from '@/assets/blog/LLM-IT-tools-Technology.jpg';
import blogImg7 from '@/assets/blog/AI&MachineLearning_Image_2.png';
import blogImg8 from '@/assets/blog/CloudeComputingImage2.webp';
import blogImg9 from '@/assets/blog/modern-web-development-trends_image_2.png';
import blogImg10 from '@/assets/blog/mobile_app_dev_image.jpg';

const categories = ['All', 'Technology', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'Mobile Development'];

const BlogPosts = [
  {
    id: 1,
    title: 'Anthropic cuts off OpenAI’s access to its Claude models',
    excerpt: 'Anthropic has revoked OpenAI’s access to its Claude family of AI models, according to a report in Wired.',
    imageUrl: blogImg1,
    author: 'Anthony Ha',
    createdAt: '2025-08-02',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Business', 'Trends'],
    slug: 'future-of-ai-in-business'
  },
  {
    id: 2,
    title: 'Supermicro’s redemption play: Can new leadership save the AI server specialist?',
    excerpt: 'After months of governance scandals that saw its auditor resign and major clients flee to competitors, Supermicro is betting everything on a redemption play centred around new leadership appointments and cutting-edge technology. The AI server specialist has installed a new CFO, Chief Compliance Officer, and Chief Accounting Officer and launched an ambitious product line – the 4-socket X14 servers with Intel Xeon 6 processors on board.',
    imageUrl: blogImg2,
    author: 'Dashveenjit Kaur',
    createdAt: '2025-08-01',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Migration', 'Best Practices'],
    slug: 'Supermicros-redemption-play'
  },
  {
    id: 3,
    title: 'Top 10 AI-Powered Cloud Security Tools for 2025',
    excerpt: 'As cloud usage continues to rise sharply, so do the ransomware attacks and cybersecurity incidents. The security teams are scrambling to stay ahead of the attackers and manage security risks more effectively with AI cloud security solutions. ',
    imageUrl: blogImg3,
    author: 'Cyber Management',
    createdAt: '2025-07-29',
    category: 'Cybersecurity',
    tags: ['Security', 'Threats', '2025'],
    slug: 'Top-10-AI-Powered-cloud-security-tools-for-2025'
  },
  {
    id: 4,
    title: 'Next.js 15.4 is here: What’s new and what to expect',
    excerpt: 'Next.js 15.4 is here, and it’s more than just a typical update. This version marks a major milestone for the framework and its growing ecosystem. While each release usually offers useful improvements, this one feels different. It shows real momentum, especially for developers who have been following the evolution of Turbopack closely.',
    imageUrl: blogImg4,
    author: 'Abiola Farounbi',
    createdAt: '2025-07-29',
    category: 'Web Development',
    tags: ['Web', 'Trends', 'Development'],
    slug: 'modern-web-development-trends'
  },
  {
    id: 5,
    title: 'Evolving Android’s early-access programs: Introducing the Canary channel',
    excerpt: 'To better support you and provide earlier, more consistent access to in-development features, we are announcing a significant evolution in our pre-release program. Moving forward, the Android platform will have a Canary release channel, which will replace the previous developer preview program. This Canary release channel will function alongside the existing beta program.',
    imageUrl: blogImg5,
    author: 'Dan Galpin',
    createdAt: '2025-07-10',
    category: 'Mobile Development',
    tags: ['Mobile', 'Apps', 'Scalability'],
    slug: 'evolving-androids-early-access-programs'
  },
  {
    id: 6,
    title: 'Gaming Your Way to Sharper AI Prompts',
    excerpt: 'A common sentiment that AI evangelists have expressed to me is their eagerness to outsource their day-to-day communications to it. I am not about to state that this is always a mistake. Certain missives are so rote and return so little for the invested effort that it’s hard to justify composing them from scratch. We’ve all sunk time into sending formulaic emails, which could have been better spent doing almost anything else.',
    imageUrl: blogImg6,
    author: 'Jonathan Terrasi',
    createdAt: '2025-08-01',
    category: 'Technology',
    tags: ['Privacy', 'Data', 'Security'],
    slug: 'gaming-your-way'
  },
  {
    id: 7,
    title: 'Designing AI products that work for both users and the enterprise',
    excerpt: 'Technology has repeatedly revolutionized the way the world works, from Alexander Graham Bell’s invention of the telephone in 1876, to the launch of Apple’s first iPhone in 2007, to the AI boom of the last decade. Now, as AI enters the mainstream, companies are racing to adopt it in both their own offerings and internal tools to boost their teams’ efficiency and productivity. Those who opt out risk being left behind in the next great transformation.',
    imageUrl: blogImg7,
    author: 'Eric Chung',
    createdAt: '2025-07-29',
    category: 'AI & Machine Learning',
    tags: ['Machine Learning', 'AI', 'Beginners'],
    slug: 'machine-learning-for-beginners'
  },
  {
    id: 8,
    title: 'Oracle to launch cloud operations in Indonesia through DayOne deal',
    excerpt: 'Oracle is set to expand into Indonesia by leasing data centre space from DayOne Data Centres, according to people with knowledge of the deal. The move would mark Oracle’s first cloud services operation in the country and deepen its relationship with a regional player that counts ByteDance as its biggest client.',
    imageUrl: blogImg8,
    author: 'Muhammad Zulhusni',
    createdAt: '2025-07-14',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Security', 'Infrastructure'],
    slug: 'Oracle-to-launch-cloud-operations'
  },
  {
    id: 9,
    title: 'Catch frontend issues before users using chaos engineering',
    excerpt: 'Chaos engineering involves introducing controlled failures into a system to identify weak points before they impact users. While traditionally applied to backend services, applying chaos principles to the frontend helps uncover UI and UX issues that don’t surface through conventional testing.',
    imageUrl: blogImg9,
    author: 'Muhammed Ali',
    createdAt: '2024-07-25',
    category: 'Web Development',
    tags: ['Responsive', 'Design', 'Web'],
    slug: 'responsive-design-essentials'
  },
  {
    id: 10,
    title: 'How Wearable Devices Are Transforming Preventative Healthcare',
    excerpt: 'In recent times, we have seen the birth of wearable devices that have revolutionized the healthcare system. These have evolved from being mere sports-oriented devices to including smartwatches that check heart rates and pedometers. One of the ways they make a difference is that they encourage preventative healthcare. Meaning that all parties (individuals and practitioners) play an active role in keeping diseases at bay.',
    imageUrl: blogImg10,
    author: 'Ankur Sabharwal',
    createdAt: '2024-09-24',
    category: 'Mobile Development',
    tags: ['PWA', 'Mobile', 'Web'],
    slug: 'how-wearable-devices-are-transforming-preventative-healthcare'
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

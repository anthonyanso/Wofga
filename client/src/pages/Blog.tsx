import { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '@/lib/utils';

const categories = ['All', 'Technology', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'Mobile Development'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const { data: blogData, isLoading } = useQuery({
    queryKey: ['/api/blog', `?page=${currentPage}&limit=9${selectedCategory !== 'All' ? `&category=${selectedCategory}` : ''}`],
  });

  const posts = blogData?.posts || [];
  const totalPages = blogData?.totalPages || 1;

  const filteredPosts = searchTerm
    ? posts.filter((post: any) => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

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
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
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
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, index) => (
                <Card key={index} className="bg-gradient-card border-gray-700 overflow-hidden">
                  <div className="w-full h-48 bg-gray-800 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-800 rounded mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-800 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
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
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredPosts.map((post: any, index: number) => (
                  <Card 
                    key={post.id}
                    className="bg-gradient-card border-gray-700 overflow-hidden card-hover"
                    data-aos="fade-up" 
                    data-aos-delay={100 * (index + 1)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.imageUrl || `https://images.unsplash.com/photo-${
                          post.category === 'AI & Machine Learning' ? '1677442136019-1996fd8d8ad4' :
                          post.category === 'Cloud Computing' ? '1451187580459-43490279c0fa' :
                          post.category === 'Cybersecurity' ? '1550751827-4bd374c3f58b' :
                          post.category === 'Web Development' ? '1461749280684-6d2ceb6e4d6b' :
                          post.category === 'Mobile Development' ? '1512941937669-90a1b58e7e9c' :
                          '1488590528505-98d02b6df00b'
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`} 
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
                          {post.tags.slice(0, 3).map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="link" className="text-wofga-orange p-0 h-auto font-semibold hover:underline">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2" data-aos="fade-up">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Previous
                  </Button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index + 1}
                      variant={currentPage === index + 1 ? 'default' : 'outline'}
                      onClick={() => setCurrentPage(index + 1)}
                      className={
                        currentPage === index + 1
                          ? 'btn-gradient text-white'
                          : 'border-white text-white hover:bg-white hover:text-gray-900'
                      }
                    >
                      {index + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
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
            <Link href="#newsletter">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                Subscribe Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

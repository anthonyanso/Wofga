import { useParams, Link } from 'wouter';
import { ArrowLeft, Calendar, User, Tag, Share2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SEO from '@/components/SEO';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { formatDate } from '@/lib/utils';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    content: ''
  });

  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: [`/api/blog/${slug}`],
  });

  const { data: comments = [] } = useQuery({
    queryKey: [`/api/blog/${slug}/comments`],
  });

  const commentMutation = useMutation({
    mutationFn: async (data: typeof commentData) => {
      const response = await apiRequest('POST', `/api/blog/${slug}/comments`, data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Comment submitted!",
        description: "Your comment has been submitted for approval.",
      });
      setCommentData({ name: '', email: '', content: '' });
      queryClient.invalidateQueries({ queryKey: [`/api/blog/${slug}/comments`] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to submit comment",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    commentMutation.mutate(commentData);
  };

  if (postLoading) {
    return (
      <div className="hero-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded mb-8 w-32"></div>
            <div className="h-12 bg-gray-800 rounded mb-6"></div>
            <div className="h-64 bg-gray-800 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <section className="hero-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="btn-gradient text-white px-8 py-4 rounded-full">
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} - Wofga Digital Blog`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || 'technology, blog, insights'}
      />

      {/* Article Header */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8" data-aos="fade-up">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:text-wofga-orange mb-4">
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <article>
            <header className="mb-12" data-aos="fade-up">
              <div className="mb-6">
                <Badge className="bg-wofga-orange text-white mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            {post.imageUrl && (
              <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none" data-aos="fade-up">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-700" data-aos="fade-up">
              <h3 className="text-lg font-semibold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-300">
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
              <MessageCircle size={32} className="mr-3 text-wofga-orange" />
              Comments ({comments.length})
            </h2>

            {/* Comment Form */}
            <Card className="bg-gradient-card border-gray-700 mb-12">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-white">Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Name *</label>
                      <Input
                        type="text"
                        value={commentData.name}
                        onChange={(e) => setCommentData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email *</label>
                      <Input
                        type="email"
                        value={commentData.email}
                        onChange={(e) => setCommentData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Comment *</label>
                    <Textarea
                      value={commentData.content}
                      onChange={(e) => setCommentData(prev => ({ ...prev, content: e.target.value }))}
                      required
                      rows={4}
                      className="bg-gray-800 border-gray-700 text-white focus:ring-wofga-orange focus:border-wofga-orange resize-none"
                      placeholder="Share your thoughts..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={commentMutation.isPending}
                    className="btn-gradient text-white px-8 py-3 rounded-full font-semibold"
                  >
                    {commentMutation.isPending ? 'Submitting...' : 'Submit Comment'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <Card className="bg-gradient-card border-gray-700">
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-300">No comments yet. Be the first to share your thoughts!</p>
                  </CardContent>
                </Card>
              ) : (
                comments.map((comment: any, index: number) => (
                  <Card 
                    key={comment.id}
                    className="bg-gradient-card border-gray-700"
                    data-aos="fade-up" 
                    data-aos-delay={100 * (index + 1)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-wofga-orange rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {comment.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{comment.name}</h4>
                            <p className="text-gray-400 text-sm">{formatDate(comment.createdAt)}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">{comment.content}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Explore More Articles</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover more insights and stay updated with the latest technology trends.
            </p>
            <Link href="/blog">
              <Button className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

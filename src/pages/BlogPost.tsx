// Wouter removed
import { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, Share2, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { formatDate } from '@/lib/utils';

// Import blog images
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

// Blog data (should match Blog.tsx)
const BlogPosts = [
  {
    slug: 'future-of-ai-in-business',
    title: 'The Future of AI in Business',
    content: 'Full blog content for AI in Business...',
    imageUrl: blogImg1,
    author: 'Jane Doe',
    createdAt: '2024-06-01',
    category: 'AI & Machine Learning',
  },
  {
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices',
    content: 'Full blog content for Cloud Migration...',
    imageUrl: blogImg2,
    author: 'John Smith',
    createdAt: '2024-05-28',
    category: 'Cloud Computing',
  },
  {
    slug: 'top-cybersecurity-threats-2024',
    title: 'Top Cybersecurity Threats in 2024',
    content: 'Full blog content for Cybersecurity Threats...',
    imageUrl: blogImg3,
    author: 'Emily Chen',
    createdAt: '2024-05-20',
    category: 'Cybersecurity',
  },
  {
    slug: 'modern-web-development-trends',
    title: 'Modern Web Development Trends',
    content: 'Full blog content for Web Development Trends...',
    imageUrl: blogImg4,
    author: 'Michael Lee',
    createdAt: '2024-05-15',
    category: 'Web Development',
  },
  {
    slug: 'building-scalable-mobile-apps',
    title: 'Building Scalable Mobile Apps',
    content: 'Full blog content for Scalable Mobile Apps...',
    imageUrl: blogImg5,
    author: 'Sarah Kim',
    createdAt: '2024-05-10',
    category: 'Mobile Development',
  },
  {
    slug: 'data-privacy-digital-age',
    title: 'Data Privacy in the Digital Age',
    content: 'Full blog content for Data Privacy...',
    imageUrl: blogImg6,
    author: 'David Brown',
    createdAt: '2024-05-05',
    category: 'Technology',
  },
  {
    slug: 'machine-learning-for-beginners',
    title: 'Machine Learning for Beginners',
    content: 'Full blog content for Machine Learning...',
    imageUrl: blogImg7,
    author: 'Anna White',
    createdAt: '2024-04-28',
    category: 'AI & Machine Learning',
  },
  {
    slug: 'securing-cloud-infrastructure',
    title: 'Securing Your Cloud Infrastructure',
    content: 'Full blog content for Securing Cloud Infrastructure...',
    imageUrl: blogImg8,
    author: 'Chris Green',
    createdAt: '2024-04-20',
    category: 'Cloud Computing',
  },
  {
    slug: 'responsive-design-essentials',
    title: 'Responsive Design Essentials',
    content: 'Full blog content for Responsive Design...',
    imageUrl: blogImg9,
    author: 'Lisa Black',
    createdAt: '2024-04-15',
    category: 'Web Development',
  },
  {
    slug: 'rise-of-progressive-web-apps',
    title: 'The Rise of Progressive Web Apps',
    content: 'Full blog content for Progressive Web Apps...',
    imageUrl: blogImg10,
    author: 'Tom Wilson',
    createdAt: '2024-04-10',
    category: 'Mobile Development',
  }
];

export default function BlogPost() {
  // Extract slug from window.location.pathname
  const pathParts = window.location.pathname.split("/");
  const slug = pathParts.length > 2 ? pathParts[2] : "";
  const post = BlogPosts.find((p) => p.slug === slug);

  // Comments and likes (localStorage for persistence)
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(`comments-${slug}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [commentInput, setCommentInput] = useState('');
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`likes-${slug}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`comments-${slug}`, JSON.stringify(comments));
  }, [comments, slug]);

  useEffect(() => {
    localStorage.setItem(`likes-${slug}`, likes.toString());
  }, [likes, slug]);

  if (!post) {
    return (
      <section className="hero-bg min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <a href="/blog">
            <Button className="btn-gradient text-white px-8 py-4 rounded-full">
              Back to Blog
            </Button>
          </a>
        </div>
      </section>
    );
  }

  // Share handler
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.title,
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  // Like handler
  const handleLike = () => setLikes((l) => l + 1);

  // Comment handler
  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, { text: commentInput, date: new Date().toISOString() }]);
      setCommentInput('');
    }
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.slice(0, 150)}
        keywords={post.title}
      />

      <section className="hero-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <a href="/blog">
              <Button variant="ghost" className="text-white hover:text-wofga-orange mb-4">
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Button>
            </a>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={handleShare} title="Share">
                <Share2 size={20} />
              </Button>
              <Button variant="ghost" onClick={handleLike} title="Like">
                <ThumbsUp size={20} className={likes > 0 ? 'text-wofga-orange' : ''} />
                <span className="ml-1">{likes}</span>
              </Button>
            </div>
          </div>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="rounded-2xl shadow-2xl w-full mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-400 text-sm mb-8 gap-4">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <span className="bg-wofga-orange/20 text-wofga-orange rounded-full px-3 py-1 text-xs font-medium">
                {post.category}
              </span>
            </div>
          </div>
          <div className="prose prose-invert max-w-none mb-12">
            {post.content}
          </div>

          {/* Comments Section */}
          <div className="bg-gradient-card border border-gray-700 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleComment} className="flex gap-2 mb-4">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
              />
              <Button type="submit" className="btn-gradient text-white px-6 py-2 rounded-lg">
                Comment
              </Button>
            </form>
            <div className="space-y-3">
              {comments.length === 0 && (
                <div className="text-gray-400">No comments yet. Be the first to comment!</div>
              )}
              {comments.map((c: { text: string; date: string }, i: number) => (
                <div key={i} className="bg-gray-800 rounded-lg px-4 py-2 text-gray-200">
                  <div className="text-sm">{c.text}</div>
                  <div className="text-xs text-gray-500">{formatDate(c.date)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

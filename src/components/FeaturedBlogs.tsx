import BlogCard from './BlogCard';

const FeaturedBlogs = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "Building Scalable React Applications: A Comprehensive Guide",
      excerpt: "Learn the best practices for building scalable React applications that can grow with your business. We'll cover component architecture, state management, and performance optimization techniques that every developer should know.",
      author: {
        name: "Sarah Chen",
        username: "sarahchen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b777?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      },
      publishedAt: "2 days ago",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Web Development", "Architecture"],
      likes: 124,
      comments: 23,
      isLiked: false,
      isBookmarked: true,
      featured: true
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt: "Artificial Intelligence is transforming how we build web applications. From code generation to automated testing, explore how AI tools are revolutionizing the development workflow and what this means for developers.",
      author: {
        name: "Alex Rodriguez",
        username: "alexdev",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      },
      publishedAt: "1 week ago",
      readTime: "12 min read",
      tags: ["AI", "Machine Learning", "Future Tech", "Development"],
      likes: 89,
      comments: 31,
      isLiked: true,
      isBookmarked: false,
      featured: true
    },
    {
      id: 3,
      title: "Mastering TypeScript: From Beginner to Expert",
      excerpt: "TypeScript has become essential for modern JavaScript development. This comprehensive guide takes you through advanced concepts, best practices, and real-world examples to level up your TypeScript skills.",
      author: {
        name: "Emma Thompson",
        username: "emmacodes",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      },
      publishedAt: "3 days ago",
      readTime: "15 min read",
      tags: ["TypeScript", "JavaScript", "Programming", "Tutorial"],
      likes: 156,
      comments: 42,
      isLiked: false,
      isBookmarked: false,
      featured: false
    },
    {
      id: 4,
      title: "Design Systems That Scale: Lessons from Industry Leaders",
      excerpt: "Building a design system that grows with your organization requires careful planning and execution. Learn from the experiences of companies like Airbnb, Shopify, and Google on creating maintainable design systems.",
      author: {
        name: "Marcus Johnson",
        username: "designmarcus",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
      },
      publishedAt: "5 days ago",
      readTime: "10 min read",
      tags: ["Design Systems", "UI/UX", "Design", "Scalability"],
      likes: 203,
      comments: 18,
      isLiked: true,
      isBookmarked: true,
      featured: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and trending articles from our community of expert writers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
              publishedAt={blog.publishedAt}
              readTime={blog.readTime}
              tags={blog.tags}
              likes={blog.likes}
              comments={blog.comments}
              isLiked={blog.isLiked}
              isBookmarked={blog.isBookmarked}
              featured={blog.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;

import { ArrowRight, Calendar, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock blog data - in a real application, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "10 Ways AI Can Streamline Your Business Operations",
    excerpt: "Discover how artificial intelligence technologies can transform your business processes and boost efficiency across departments.",
    author: "Sarah Johnson",
    date: "May 15, 2024",
    category: "Business",
    tags: ["AI", "Automation", "Productivity"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "The Future of Work: AI and Human Collaboration",
    excerpt: "Explore how AI and human workers can complement each other to create more efficient and innovative workplaces.",
    author: "Michael Chen",
    date: "May 8, 2024",
    category: "Technology",
    tags: ["Future of Work", "AI", "Collaboration"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    title: "Case Study: How We Helped a Healthcare Provider Save $2M Annually",
    excerpt: "Learn how our AI solutions helped a major healthcare provider automate patient intake and reduce operational costs significantly.",
    author: "Jessica Williams",
    date: "April 30, 2024",
    category: "Case Study",
    tags: ["Healthcare", "Cost Savings", "Process Automation"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 4,
    title: "Nonprofits and AI: Maximizing Impact with Limited Resources",
    excerpt: "Discover how nonprofit organizations can leverage AI to extend their reach and maximize their impact without straining limited budgets.",
    author: "David Miller",
    date: "April 22, 2024",
    category: "Nonprofit",
    tags: ["Nonprofit", "Resource Optimization", "AI for Good"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 5,
    title: "The ROI of AI Implementation: What to Expect",
    excerpt: "A comprehensive breakdown of the return on investment you can expect when implementing AI solutions across different business functions.",
    author: "Lisa Thompson",
    date: "April 15, 2024",
    category: "Business",
    tags: ["ROI", "Business Intelligence", "AI Strategy"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  }
];

const Blog = () => {
  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
            10x Velocity Blog
          </h1>
          <p className="text-lg text-velocity-muted mb-12">
            Insights, case studies, and expert perspectives on AI, automation, and business growth.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="glass-card overflow-hidden flex flex-col h-full animate-fade-up hover:bg-white/10 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${post.image}?w=600&h=400&fit=crop&q=80`} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-velocity-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-velocity-accent" /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-velocity-accent" /> {post.author}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-velocity-muted mb-4 flex-1">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                      <Tag className="w-3 h-3 text-velocity-accent" /> {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="ghost" className="text-velocity-accent justify-start p-0 hover:bg-transparent hover:text-purple-400">
                  <Link to={`/blog/${post.id}`}>
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-velocity-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Want More Insights?
          </h2>
          <p className="text-lg text-velocity-muted mb-8">
            Subscribe to our newsletter for weekly updates on AI, automation, and business growth strategies.
          </p>
          <Button className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all text-lg">
            Subscribe Now <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Blog;

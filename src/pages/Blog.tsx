
import { ArrowRight, Calendar, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

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

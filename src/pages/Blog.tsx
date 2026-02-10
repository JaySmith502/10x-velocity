
import { Helmet } from "react-helmet";
import { ArrowRight, Calendar, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>AI & Automation Insights Blog | 10x Velocity</title>
        <meta
          name="description"
          content="Expert insights on AI implementation, business automation, and digital transformation strategies. Practical advice and tips from 10x Velocity consultants."
        />
        <link rel="canonical" href="https://10xvelocity.ai/blog" />
      </Helmet>
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

        {/* Contact Section */}
        <div className="mt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                    Get in Touch
                  </h2>
                  <p className="text-velocity-muted mb-8 text-lg">
                    Ready to supercharge your team's velocity? Let's talk about how we can help you achieve 10x results.
                  </p>
                  
                  <div className="glass-card p-6 md:p-8 mb-8">
                    <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                    <p className="text-velocity-muted mb-4">
                      Email: <a href="mailto:info@10xvelocity.ai" className="text-velocity-accent hover:underline">info@10xvelocity.ai</a>
                    </p>
                    <p className="text-velocity-muted">
                      Hours: Monday-Friday, 9am-5pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="glass-card p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-6">Get started today</h3>
                    <p className="text-velocity-muted mb-6">
                      Schedule a quick discovery call with our team to explore how we can help accelerate your business.
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all"
                    >
                      <a href="https://level.10xvelocity.ai/widget/bookings/jay-smith-10xvelocity" target="_blank" rel="noopener noreferrer">
                        Schedule a 15 minute call <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Blog;

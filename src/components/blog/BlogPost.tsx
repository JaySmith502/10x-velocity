
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NotFound } from "@/pages/NotFound";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "0");
  
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    return <NotFound />;
  }

  const blogTitle = post.title.length > 44
    ? post.title.substring(0, 41) + '...'
    : post.title;

  return (
    <main className="flex-1">
      <Helmet>
        <title>{`${blogTitle} | 10x Velocity`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://10xvelocity.ai/blog/${post.id}`} />
        <meta property="og:title" content={`${blogTitle} | 10x Velocity`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://10xvelocity.ai/blog/${post.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back button */}
        <div className="mb-8">
          <Button 
            asChild 
            variant="ghost" 
            className="text-velocity-accent hover:text-purple-400 justify-start p-0 hover:bg-transparent"
          >
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts
            </Link>
          </Button>
        </div>

        {/* Featured image */}
        <div className="mb-8 rounded-lg overflow-hidden h-[400px]">
          <img 
            src={`${post.image}?w=1200&h=600&fit=crop&q=90`} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post metadata */}
        <div className="flex items-center gap-4 text-sm text-velocity-muted mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-velocity-accent" /> {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4 text-velocity-accent" /> {post.author}
          </span>
        </div>

        {/* Post title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
              <Tag className="w-3 h-3 text-velocity-accent" /> {tag}
            </span>
          ))}
        </div>

        {/* Post content */}
        <div className="prose prose-invert prose-violet max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Sample content for first post */}
          {post.id === 1 && (
            <>
              <p>Artificial intelligence is revolutionizing business operations across industries. Here are ten ways AI can streamline your processes and boost efficiency:</p>
              
              <h2>1. Automated Customer Service</h2>
              <p>AI-powered chatbots and virtual assistants can handle customer inquiries 24/7, reducing wait times and freeing up human agents for more complex issues. Our research shows that implementing AI chatbots can reduce customer service costs by up to 30% while maintaining high satisfaction rates.</p>
              
              <h2>2. Predictive Maintenance</h2>
              <p>Machine learning algorithms can analyze equipment data to predict when maintenance will be needed, reducing downtime and extending asset lifespans. This proactive approach can decrease maintenance costs by 10-40% and reduce equipment downtime by up to 50%.</p>
              
              <h2>3. Inventory Management</h2>
              <p>AI can optimize inventory levels by predicting demand patterns, reducing both overstocking and stockouts. Companies using AI for inventory management report 20-50% reductions in inventory costs while improving product availability.</p>
              
              <h2>4. Data Analysis and Insights</h2>
              <p>AI systems can process vast amounts of data to identify patterns and generate actionable insights that might be missed by human analysts. These insights can inform strategic decisions and uncover new opportunities for growth or efficiency.</p>
              
              <h2>5. Process Automation</h2>
              <p>Robotic Process Automation (RPA) combined with AI can automate routine tasks across departments, from finance to HR. This automation can reduce processing times by 50-90% while improving accuracy and consistency.</p>
            </>
          )}

          {/* Sample content for second post */}
          {post.id === 2 && (
            <>
              <p>The future of work isn't about humans versus machines—it's about humans and machines working together to achieve better outcomes than either could alone.</p>
              
              <h2>The Augmented Workforce</h2>
              <p>Rather than replacing human workers, AI is increasingly being used to augment human capabilities. AI systems can handle routine, repetitive tasks, analyze vast datasets, and make predictions based on patterns that might be invisible to humans. This frees up human workers to focus on tasks that require creativity, emotional intelligence, ethical judgment, and interpersonal skills.</p>
              
              <h2>Collaborative Intelligence</h2>
              <p>The most effective workplaces will be those that strategically combine human and artificial intelligence. For example:</p>
              
              <ul>
                <li>AI systems can generate multiple design options, which human designers can then refine and perfect</li>
                <li>AI can analyze customer data to identify patterns, which human marketers can use to create more resonant campaigns</li>
                <li>AI can diagnose medical conditions based on symptoms and test results, which doctors can verify and contextualize based on their knowledge of the patient</li>
              </ul>
              
              <h2>Skills for the AI Era</h2>
              <p>As AI takes over routine tasks, different human skills will become more valuable. Workers who can collaborate effectively with AI systems—understanding their capabilities and limitations—will be particularly valuable. So will those with strong creative, social, and emotional skills that AI cannot easily replicate.</p>
              
              <h2>The Path Forward</h2>
              <p>Organizations need to take a thoughtful approach to AI implementation, focusing not just on efficiency gains but on how AI can enhance human work. This might involve:</p>
              
              <ul>
                <li>Redesigning workflows to leverage the strengths of both humans and AI</li>
                <li>Reskilling workers whose roles are changing</li>
                <li>Creating new roles that involve managing and collaborating with AI systems</li>
              </ul>
            </>
          )}

          {/* Call to action */}
          <div className="mt-12 p-6 glass-card">
            <h3 className="text-xl font-semibold mb-3">Want to learn more?</h3>
            <p className="mb-4">Get in touch with our team to discuss how AI can transform your business operations.</p>
            <Button asChild className="bg-gradient-to-r from-velocity-accent to-velocity-light text-[#151A24] font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:to-white transition-all">
            <a href="/contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;

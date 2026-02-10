
// Blog post data model
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
}

// Mock blog data - in a real application, this would come from an API
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Ways AI Can Streamline Your Business Operations",
    excerpt: "Discover how artificial intelligence technologies can transform your everyday business processes, boost efficiency across departments, and reduce costs.",
    author: "Sarah Johnson",
    date: "May 15, 2024",
    category: "Business",
    tags: ["AI", "Automation", "Productivity"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "The Future of Work: AI and Human Collaboration",
    excerpt: "Explore how AI and human workers can complement each other to create more efficient, innovative, and productive workplaces for the future of your business.",
    author: "Michael Chen",
    date: "May 8, 2024",
    category: "Technology",
    tags: ["Future of Work", "AI", "Collaboration"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    title: "Case Study: How We Helped a Healthcare Provider Save $2M Annually",
    excerpt: "Learn how our AI-powered solutions helped a major healthcare provider automate patient intake, streamline daily operations, and cut costs by $2M per year.",
    author: "Jessica Williams",
    date: "April 30, 2024",
    category: "Case Study",
    tags: ["Healthcare", "Cost Savings", "Process Automation"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 4,
    title: "Nonprofits and AI: Maximizing Impact with Limited Resources",
    excerpt: "Discover how nonprofit organizations can leverage AI tools to extend their reach, maximize community impact, and do more without straining limited budgets.",
    author: "David Miller",
    date: "April 22, 2024",
    category: "Nonprofit",
    tags: ["Nonprofit", "Resource Optimization", "AI for Good"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 5,
    title: "The ROI of AI Implementation: What to Expect",
    excerpt: "A detailed breakdown of the return on investment your business can expect when implementing AI and automation solutions across key functions and workflows.",
    author: "Lisa Thompson",
    date: "April 15, 2024",
    category: "Business",
    tags: ["ROI", "Business Intelligence", "AI Strategy"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  }
];


// Blog post data model
export interface BlogPost {
  id: number;
  /** Descriptive URL slug. Posts with a slug are served at /blog/<slug>;
   *  numeric /blog/<id> still resolves for backward compatibility. */
  slug?: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  /** Set when a post is substantively updated; feeds dateModified in schema. */
  dateModified?: string;
  /** Draft posts are hidden from the blog index and noindexed.
   *  Flip to false (or remove) on the scheduled publish date — see seo/CONTENT-BACKLOG.md. */
  draft?: boolean;
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
  },
  // ——— AEO pillar pages and answer posts (bodies in src/data/articleContent.ts) ———
  {
    id: 6,
    slug: "what-ai-consulting-costs-mid-market",
    title: "What AI Consulting Costs for a Mid-Market Company",
    excerpt: "AI consulting pricing is opaque almost everywhere. Here's what 10x Velocity publishes, what determines the price, and how to budget a first engagement at a 50-500 employee company.",
    author: "Jay Smith",
    date: "June 10, 2026",
    category: "Pricing",
    tags: ["AI Consulting", "Pricing", "Mid-Market"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
  },
  {
    id: 7,
    slug: "ai-consulting-louisville",
    title: "AI Consulting in Louisville: Who Does It, What It Costs, and How to Choose",
    excerpt: "A complete guide to AI consulting options in Louisville, Kentucky — every provider type, what they publish about pricing, and how to pick based on what you're actually buying.",
    author: "Jay Smith",
    date: "June 24, 2026",
    category: "Local",
    tags: ["Louisville", "Kentucky", "AI Consulting"],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    draft: true
  },
  {
    id: 8,
    slug: "ai-readiness-without-data-team",
    title: "Is Your Company Ready for AI? A Readiness Check for Teams Without a Data Team",
    excerpt: "Most AI readiness frameworks assume you have data engineers. This one doesn't. Score your company on five dimensions and know whether to start, wait, or fix something first.",
    author: "Jay Smith",
    date: "July 8, 2026",
    category: "AI Strategy",
    tags: ["AI Readiness", "Mid-Market", "Assessment"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    draft: true
  },
  {
    id: 9,
    slug: "ai-consultant-vs-msp",
    title: "AI Consultant vs. MSP: Which Do You Actually Need?",
    excerpt: "MSPs roll out tools. AI consultants redesign processes. Confusing the two is the most common way mid-sized companies waste their first AI budget.",
    author: "Jay Smith",
    date: "July 22, 2026",
    category: "Buying Guide",
    tags: ["AI Consulting", "MSP", "Buying Guide"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    draft: true
  },
  {
    id: 10,
    slug: "change-management-ai-adoption",
    title: "Change Management for AI Adoption: Why Pilots Fail and What Fixes Them",
    excerpt: "Most corporate AI pilots fail to reach production. The failures are organizational, not technical. Here's the adoption playbook for mid-sized companies.",
    author: "Jay Smith",
    date: "August 5, 2026",
    category: "AI Strategy",
    tags: ["Change Management", "AI Adoption", "Mid-Market"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    draft: true
  }
];

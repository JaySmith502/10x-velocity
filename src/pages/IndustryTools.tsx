import { useState } from "react";
import { Helmet } from "react-helmet";
import { industries, categories, Tool } from "@/data/industryTools";
import { IndustryCard } from "@/components/industry-tools/IndustryCard";
import { CategoryFilter } from "@/components/industry-tools/CategoryFilter";
import { ToolCard } from "@/components/industry-tools/ToolCard";
import { ToolModal } from "@/components/industry-tools/ToolModal";
import { LeadCaptureModal } from "@/components/industry-tools/LeadCaptureModal";
import { Download } from "lucide-react";

const IndustryTools = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isToolModalOpen, setIsToolModalOpen] = useState(false);
  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false);

  const handleIndustryClick = (industryName: string) => {
    setSelectedIndustry(selectedIndustry === industryName ? null : industryName);
    setSelectedCategory(null);
  };

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setIsToolModalOpen(true);
  };

  const getFilteredTools = () => {
    if (!selectedIndustry) return [];
    
    const industry = industries.find(i => i.name === selectedIndustry);
    if (!industry) return [];

    if (!selectedCategory) return industry.tools;
    
    return industry.tools.filter(tool => tool.category === selectedCategory);
  };

  const filteredTools = getFilteredTools();

  return (
    <>
      <Helmet>
        <title>AI & Automation Tool Explorer by Industry | 10x Velocity</title>
        <meta
          name="description"
          content="Discover curated AI and automation tools for your industry. Browse tools for home services, legal, insurance, real estate, accounting, and healthcare."
        />
        <link rel="canonical" href="https://10xvelocity.ai/industry-tools" />
      </Helmet>

      <div className="min-h-screen bg-velocity-dark py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">
              AI & Automation Tool Explorer
            </h1>
            <p className="text-velocity-light/80 text-lg max-w-2xl mx-auto mb-8">
              Discover the right AI and automation tools for your industry. Click an industry to explore curated solutions that drive real results.
            </p>
            <button
              onClick={() => setIsLeadCaptureOpen(true)}
              className="btn-primary"
            >
              <Download className="w-5 h-5" />
              Download Full Guide
            </button>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IndustryCard
                  name={industry.name}
                  icon={industry.icon}
                  toolCount={industry.tools.length}
                  onClick={() => handleIndustryClick(industry.name)}
                  isSelected={selectedIndustry === industry.name}
                />
              </div>
            ))}
          </div>

          {/* Tools Section */}
          {selectedIndustry && (
            <div className="animate-fade-in">
              <div className="glass-card p-8 mb-8">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <h2 className="text-2xl font-bold text-velocity-light">
                    {selectedIndustry} Tools
                  </h2>
                  <button
                    onClick={() => setIsLeadCaptureOpen(true)}
                    className="text-velocity-accent hover:text-velocity-accent/80 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Get {selectedIndustry} Guide
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />
                </div>

                {/* Tool Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTools.map((tool, index) => (
                    <div
                      key={`${tool.name}-${index}`}
                      className="animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ToolCard tool={tool} onClick={() => handleToolClick(tool)} />
                    </div>
                  ))}
                </div>

                {filteredTools.length === 0 && (
                  <p className="text-center text-velocity-light/60 py-8">
                    No tools found for this category.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <ToolModal
        tool={selectedTool}
        isOpen={isToolModalOpen}
        onClose={() => setIsToolModalOpen(false)}
      />
      <LeadCaptureModal
        isOpen={isLeadCaptureOpen}
        onClose={() => setIsLeadCaptureOpen(false)}
        selectedIndustry={selectedIndustry || undefined}
      />
    </>
  );
};

export default IndustryTools;

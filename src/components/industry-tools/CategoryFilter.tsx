import { MessageSquare, Calendar, FileText, Zap, Sparkles, Users } from "lucide-react";

const categoryIcons = {
  "Communication": MessageSquare,
  "Scheduling": Calendar,
  "Documents": FileText,
  "Automation": Zap,
  "AI Assist": Sparkles,
  "CRM": Users,
};

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onSelectCategory(null)}
        className={`
          px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
          ${!selectedCategory 
            ? 'bg-velocity-accent text-white' 
            : 'glass-card text-velocity-light/80 hover:bg-white/10'
          }
        `}
      >
        All Tools
      </button>
      {categories.map((category) => {
        const Icon = categoryIcons[category as keyof typeof categoryIcons];
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`
              px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
              ${selectedCategory === category 
                ? 'bg-velocity-accent text-white' 
                : 'glass-card text-velocity-light/80 hover:bg-white/10'
              }
            `}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {category}
          </button>
        );
      })}
    </div>
  );
};

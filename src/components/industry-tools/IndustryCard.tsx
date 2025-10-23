import { Hammer, Scale, Shield, Home, Calculator, Activity } from "lucide-react";

const iconMap = {
  hammer: Hammer,
  scale: Scale,
  shield: Shield,
  home: Home,
  calculator: Calculator,
  activity: Activity,
};

const colorMap = {
  hammer: {
    bg: "bg-orange-500/20",
    text: "text-orange-400"
  },
  scale: {
    bg: "bg-blue-500/20",
    text: "text-blue-400"
  },
  shield: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400"
  },
  home: {
    bg: "bg-purple-500/20",
    text: "text-purple-400"
  },
  calculator: {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400"
  },
  activity: {
    bg: "bg-rose-500/20",
    text: "text-rose-400"
  }
};

interface IndustryCardProps {
  name: string;
  icon: string;
  toolCount: number;
  onClick: () => void;
  isSelected: boolean;
}

export const IndustryCard = ({ name, icon, toolCount, onClick, isSelected }: IndustryCardProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const colors = colorMap[icon as keyof typeof colorMap];

  return (
    <button
      onClick={onClick}
      className={`
        glass-card p-8 cursor-pointer transition-all duration-300
        h-full min-h-[200px] w-full
        hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl
        ${isSelected ? 'ring-2 ring-velocity-accent' : ''}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <div className={`p-4 rounded-full ${colors.bg}`}>
          <IconComponent className={`w-10 h-10 ${colors.text}`} />
        </div>
        <h3 className="text-lg font-semibold text-velocity-light text-center">{name}</h3>
        <p className="text-sm text-velocity-light/60">{toolCount} tools</p>
      </div>
    </button>
  );
};

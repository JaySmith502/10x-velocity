import { Hammer, Scale, Shield, Home, Calculator, Activity } from "lucide-react";

const iconMap = {
  hammer: Hammer,
  scale: Scale,
  shield: Shield,
  home: Home,
  calculator: Calculator,
  activity: Activity,
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

  return (
    <button
      onClick={onClick}
      className={`
        glass-card p-6 hover-scale cursor-pointer transition-all duration-300
        ${isSelected ? 'ring-2 ring-velocity-accent' : ''}
      `}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 rounded-full bg-white/5">
          <IconComponent className="w-8 h-8 text-velocity-light/60" />
        </div>
        <h3 className="text-lg font-semibold text-velocity-light">{name}</h3>
        <p className="text-sm text-velocity-light/60">{toolCount} tools</p>
      </div>
    </button>
  );
};

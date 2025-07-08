import { Shield, Zap } from "lucide-react";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "text-2xl",
    default: "text-4xl md:text-5xl",
    large: "text-6xl md:text-7xl"
  };

  const iconSizes = {
    small: 24,
    default: 40,
    large: 56
  };

  return (
    <div className="flex items-center justify-center space-x-2 animate-fade-in">
      <div className="relative">
        <Shield 
          size={iconSizes[size]} 
          className="text-primary animate-glow" 
          fill="currentColor"
        />
        <Zap 
          size={iconSizes[size] * 0.6} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent" 
        />
      </div>
      <div className={`font-tech font-black tracking-wider ${sizeClasses[size]}`}>
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          EX
        </span>
        <span className="text-muted-foreground">-</span>
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          PLOIT
        </span>
      </div>
    </div>
  );
};

export default Logo;
const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "text-2xl",
    default: "text-4xl md:text-5xl",
    large: "text-6xl md:text-7xl"
  };

  return (
    <div className="flex items-center justify-center space-x-3 animate-fade-in">
      <div className="relative bg-gradient-primary rounded-lg p-3 shadow-glow-primary">
        <div className="font-tech font-black text-xl text-primary-foreground">
          EX
        </div>
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
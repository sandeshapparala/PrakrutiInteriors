'use client';

interface SectionDividerProps {
  variant?: 'leaf' | 'brush' | 'wave' | 'organic';
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({ 
  variant = 'leaf', 
  flip = false, 
  className = '' 
}: SectionDividerProps) {
  
  const getPath = () => {
    switch (variant) {
      case 'leaf':
        return (
          <path
            d="M0,100 C150,120 350,80 500,100 C650,120 850,80 1000,100 L1000,120 L0,120 Z"
            fill="url(#leafGradient)"
          />
        );
      case 'brush':
        return (
          <path
            d="M0,100 C200,80 300,120 500,100 C700,80 800,120 1000,100 L1000,120 L0,120 Z"
            fill="url(#brushGradient)"
          />
        );
      case 'wave':
        return (
          <path
            d="M0,100 C250,80 250,120 500,100 C750,80 750,120 1000,100 L1000,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        );
      case 'organic':
        return (
          <path
            d="M0,100 C100,90 200,110 300,95 C400,80 500,115 600,100 C700,85 800,105 900,95 C950,90 975,95 1000,100 L1000,120 L0,120 Z"
            fill="url(#organicGradient)"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full relative ${className}`}>
      <svg
        className={`w-full h-20 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
            <stop offset="50%" stopColor="hsl(var(--accent) / 0.15)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
          </linearGradient>
          <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent) / 0.1)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.15)" />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0.1)" />
          </linearGradient>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.05)" />
            <stop offset="50%" stopColor="hsl(var(--accent) / 0.1)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.05)" />
          </linearGradient>
          <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--background))" />
            <stop offset="25%" stopColor="hsl(var(--primary) / 0.08)" />
            <stop offset="75%" stopColor="hsl(var(--accent) / 0.08)" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
        {getPath()}
      </svg>
    </div>
  );
}

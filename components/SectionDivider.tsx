interface SectionDividerProps {
  variant?: "wave" | "angle" | "shadow" | "curve";
  flip?: boolean;
  className?: string;
  color?: string;
  bgColor?: string;
}

export default function SectionDivider({
  variant = "shadow",
  flip = false,
  className = "",
  color = "#f5f5f5",
  bgColor = "transparent",
}: SectionDividerProps) {
  const flipClass = flip ? "rotate-180" : "";

  if (variant === "wave") {
    return (
      <div
        className={`w-full overflow-hidden -mt-px ${flipClass} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 block"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div
        className={`w-full overflow-hidden ${flipClass} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-12 md:h-16 block"
        >
          <polygon points="0,0 1200,120 0,120" fill={color} />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div
        className={`w-full overflow-hidden -mt-px ${flipClass} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20 block"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill={color}
            opacity="0.3"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill={color}
            opacity="0.5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  // Default: shadow variant - creates a subtle inner shadow effect
  return (
    <div
      className={`relative w-full bg-cyan-600 shadow-sm ${className}`}
    >
      <div
        className="h-2 sm:h-2 md:h-1"
        style={{
          background: flip
            ? `linear-gradient(to top, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)`
            : `linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)`,
        }}
      />
    </div>
  );
}

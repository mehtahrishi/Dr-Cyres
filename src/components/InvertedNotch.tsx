import React from "react";

interface InvertedNotchProps {
  children: React.ReactNode;
  className?: string;
  cornerSize?: number;
  fillColor?: string;
}

export function InvertedNotch({
  children,
  className = "",
  cornerSize = 20,
  fillColor = "#FFFFFF",
}: InvertedNotchProps) {
  return (
    <div
      className={`absolute bottom-0 right-0 z-10 bg-white rounded-tl-[20px] ${className}`}
      style={{ backgroundColor: fillColor }}
    >
      {/* Top-right concave corner mask */}
      <svg
        aria-hidden="true"
        width={cornerSize}
        height={cornerSize}
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute bottom-full right-0 block"
      >
        <path
          d="M20 0V20H0C11.0457 20 20 11.0457 20 0Z"
          fill={fillColor}
        />
      </svg>

      {/* Bottom-left concave corner mask */}
      <svg
        aria-hidden="true"
        width={cornerSize}
        height={cornerSize}
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute bottom-0 right-full block"
      >
        <path
          d="M20 0V20H0C11.0457 20 20 11.0457 20 0Z"
          fill={fillColor}
        />
      </svg>

      {children}
    </div>
  );
}

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
      className={`absolute -bottom-[1px] -right-[1px] z-10 bg-white rounded-tl-[20px] ${className}`}
      style={{ backgroundColor: fillColor }}
    >
      {/* Top-right concave corner mask (overlapped by 1px to prevent subpixel seams) */}
      <svg
        aria-hidden="true"
        width={cornerSize + 1}
        height={cornerSize + 1}
        viewBox="0 0 21 21"
        fill="none"
        className="pointer-events-none absolute right-0 block"
        style={{ bottom: "calc(100% - 1px)" }}
      >
        <path
          d="M21 0V21H0V20C11.0457 20 20 11.0457 20 0H21Z"
          fill={fillColor}
        />
      </svg>

      {/* Bottom-left concave corner mask (overlapped by 1px to prevent subpixel seams) */}
      <svg
        aria-hidden="true"
        width={cornerSize + 1}
        height={cornerSize + 1}
        viewBox="0 0 21 21"
        fill="none"
        className="pointer-events-none absolute bottom-0 block"
        style={{ right: "calc(100% - 1px)" }}
      >
        <path
          d="M21 0V21H0V20C11.0457 20 20 11.0457 20 0H21Z"
          fill={fillColor}
        />
      </svg>

      {children}
    </div>
  );
}

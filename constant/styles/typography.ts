export const FontSize = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-lg md:text-xl lg:text-2xl",
  "3xl": "text-xl md:text-2xl lg:text-3xl",
  "4xl": "text-2xl md:text-3xl lg:text-4xl",
  "5xl": "text-3xl md:text-4xl lg:text-5xl",
  "6xl": "text-4xl md:text-5xl lg:text-6xl",
} as const;

export const TextPosition = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

export const FontStyle = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
} as const;

import { cva } from "class-variance-authority";

export const oceanButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Ocean-themed variants
        ocean: "bg-gradient-ocean text-white hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 animate-wave",
        wave: "bg-gradient-wave text-white hover:shadow-xl ocean-glow animate-float",
        depth: "bg-gradient-depth text-white hover:bg-primary-deep transition-all duration-500",
        glass: "glass-card text-primary hover:bg-primary/10 backdrop-blur-md",
        ripple: "bg-accent text-accent-foreground hover:animate-ripple hover:shadow-lg hover:shadow-accent/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "h-14 rounded-lg px-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
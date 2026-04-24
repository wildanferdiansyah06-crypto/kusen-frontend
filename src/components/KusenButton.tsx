import { cn } from "@/lib/utils";

interface KusenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function KusenButton({ 
  variant = "primary", 
  size = "default", 
  className, 
  children,
  ...props 
}: KusenButtonProps) {
  const variantStyles = {
    primary: "bg-[var(--color-teak)] text-white hover:bg-[var(--color-walnut)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300",
    secondary: "border-[var(--color-teak)] text-[var(--color-teak)] bg-transparent hover:bg-[var(--color-linen)] active:scale-95 transition-all duration-300",
    outline: "border-[var(--color-teak)] text-[var(--color-teak)] bg-transparent hover:bg-[var(--color-linen)] active:scale-95 transition-all duration-300",
    ghost: "hover:bg-[var(--color-linen)] text-[var(--color-charcoal)] active:scale-95 transition-all duration-300",
  };

  const sizeStyles = {
    default: "h-10 px-4 py-2 rounded-lg",
    sm: "h-8 px-3 py-1.5 rounded-md text-sm",
    lg: "h-12 px-6 py-3 rounded-xl text-lg",
    icon: "h-10 w-10 rounded-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import { cn } from "@/lib/utils";

interface KusenBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "rust" | "gold" | "forest" | "success" | "warning";
  size?: "default" | "sm";
}

export function KusenBadge({ 
  variant = "default", 
  size = "default",
  className, 
  children,
  ...props 
}: KusenBadgeProps) {
  const variantStyles = {
    default: "bg-[var(--color-teak)] text-white",
    rust: "bg-[var(--color-rust)] text-white",
    gold: "bg-[var(--color-gold)] text-[var(--color-walnut)]",
    forest: "bg-[var(--color-forest)] text-white",
    success: "bg-[var(--color-success)] text-white",
    warning: "bg-[var(--color-warning)] text-[var(--color-charcoal)]",
  };

  const sizeStyles = {
    default: "px-3 py-1 text-xs font-medium rounded-full",
    sm: "px-2 py-0.5 text-xs font-medium rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

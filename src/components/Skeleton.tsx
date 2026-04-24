import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
}

export function Skeleton({ 
  variant = "rectangular", 
  className, 
  ...props 
}: SkeletonProps) {
  const variantStyles = {
    text: "h-4 w-full rounded",
    circular: "h-12 w-12 rounded-full",
    rectangular: "rounded-lg",
    rounded: "rounded-xl",
  };

  return (
    <div
      className={cn(
        "skeleton",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { cn } from "@/lib/utils";
function KusenBadge(_a) {
  var _b = _a, {
    variant = "default",
    size = "default",
    className,
    children
  } = _b, props = __objRest(_b, [
    "variant",
    "size",
    "className",
    "children"
  ]);
  const variantStyles = {
    default: "bg-[var(--color-teak)] text-white",
    rust: "bg-[var(--color-rust)] text-white",
    gold: "bg-[var(--color-gold)] text-[var(--color-walnut)]",
    forest: "bg-[var(--color-forest)] text-white",
    success: "bg-[var(--color-success)] text-white",
    warning: "bg-[var(--color-warning)] text-[var(--color-charcoal)]"
  };
  const sizeStyles = {
    default: "px-3 py-1 text-xs font-medium rounded-full",
    sm: "px-2 py-0.5 text-xs font-medium rounded-md"
  };
  return <span
    className={cn(
      "inline-flex items-center gap-1.5",
      variantStyles[variant],
      sizeStyles[size],
      className
    )}
    {...props}
  >
      {children}
    </span>;
}
export {
  KusenBadge
};

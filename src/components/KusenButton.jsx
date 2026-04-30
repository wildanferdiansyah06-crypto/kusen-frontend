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
function KusenButton(_a) {
  var _b = _a, {
    variant = "primary",
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
    primary: "bg-[var(--color-teak)] text-white hover:bg-[var(--color-walnut)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300",
    secondary: "border-[var(--color-teak)] text-[var(--color-teak)] bg-transparent hover:bg-[var(--color-linen)] active:scale-95 transition-all duration-300",
    outline: "border-[var(--color-teak)] text-[var(--color-teak)] bg-transparent hover:bg-[var(--color-linen)] active:scale-95 transition-all duration-300",
    ghost: "hover:bg-[var(--color-linen)] text-[var(--color-charcoal)] active:scale-95 transition-all duration-300"
  };
  const sizeStyles = {
    default: "h-10 px-4 py-2 rounded-lg",
    sm: "h-8 px-3 py-1.5 rounded-md text-sm",
    lg: "h-12 px-6 py-3 rounded-xl text-lg",
    icon: "h-10 w-10 rounded-lg"
  };
  return <button
    className={cn(
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-teak)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
      variantStyles[variant],
      sizeStyles[size],
      className
    )}
    {...props}
  >
      {children}
    </button>;
}
export {
  KusenButton
};

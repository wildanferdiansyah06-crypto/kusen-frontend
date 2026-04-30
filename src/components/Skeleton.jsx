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
function Skeleton(_a) {
  var _b = _a, {
    variant = "rectangular",
    className
  } = _b, props = __objRest(_b, [
    "variant",
    "className"
  ]);
  const variantStyles = {
    text: "h-4 w-full rounded",
    circular: "h-12 w-12 rounded-full",
    rectangular: "rounded-lg",
    rounded: "rounded-xl"
  };
  return <div
    className={cn(
      "skeleton",
      variantStyles[variant],
      className
    )}
    {...props}
  />;
}
export {
  Skeleton
};

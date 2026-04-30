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
function Card(_a) {
  var _b = _a, {
    className,
    size = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "size"
  ]);
  return <div
    data-slot="card"
    data-size={size}
    className={cn(
      "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      className
    )}
    {...props}
  />;
}
function CardHeader(_c) {
  var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
  return <div
    data-slot="card-header"
    className={cn(
      "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
      className
    )}
    {...props}
  />;
}
function CardTitle(_e) {
  var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
  return <div
    data-slot="card-title"
    className={cn(
      "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
      className
    )}
    {...props}
  />;
}
function CardDescription(_g) {
  var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
  return <div
    data-slot="card-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />;
}
function CardAction(_i) {
  var _j = _i, { className } = _j, props = __objRest(_j, ["className"]);
  return <div
    data-slot="card-action"
    className={cn(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      className
    )}
    {...props}
  />;
}
function CardContent(_k) {
  var _l = _k, { className } = _l, props = __objRest(_l, ["className"]);
  return <div
    data-slot="card-content"
    className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
    {...props}
  />;
}
function CardFooter(_m) {
  var _n = _m, { className } = _n, props = __objRest(_n, ["className"]);
  return <div
    data-slot="card-footer"
    className={cn(
      "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
      className
    )}
    {...props}
  />;
}
export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};

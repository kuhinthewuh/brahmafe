import { cn } from "@/lib/utils";

export default function MIcon({
  name,
  size = 20,
  fill = 0,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  className,
}) {
  return (
    <span
      className={cn("material-symbols-outlined select-none", className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        lineHeight: 1,
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}
import { cn } from "@/lib/utils";

function AnimatedText({ children }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

export default function PrimaryButton({
  children,
  className,
  size = "lg",
  as = "a",
  ...props
}) {
  const sizes = {
    sm: "h-9 px-5 text-xs",
    md: "h-11 px-7 text-sm",
    lg: "h-12 px-9 text-sm font-medium",
  };
  const Comp = as === "button" ? "button" : "a";
  return (
    <Comp
      className={cn(
        "group inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black leading-none transition-colors",
        sizes[size],
        className
      )}
      {...props}
    >
      <AnimatedText>{children}</AnimatedText>
    </Comp>
  );
}
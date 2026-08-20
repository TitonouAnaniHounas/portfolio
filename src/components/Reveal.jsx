import { useInView } from "../hooks/useInView";

const VARIANTS = {
  up: {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },

  down: {
    hidden: "opacity-0 -translate-y-10",
    visible: "opacity-100 translate-y-0",
  },

  left: {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },

  right: {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },

  scale: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },

  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export default function Reveal({
  children,
  delay = 0,
  duration = 700,
  variant = "up",
  className = "",
}) {
  const [ref, inView] = useInView();

  const animation = VARIANTS[variant] || VARIANTS.up;

  return (
    <div
      ref={ref}
      className={`
        transition-all
        ease-[cubic-bezier(0.22,1,0.36,1)]
        motion-reduce:transition-none
        ${inView ? animation.visible : animation.hidden}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
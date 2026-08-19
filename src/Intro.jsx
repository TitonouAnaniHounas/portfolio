import { useEffect, useState } from "react";
import { Code2, User } from "lucide-react";
import { useTypewriter } from "./hooks/useTypewriter";
import Cursor from "./components/Cursor";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55
        0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68
        -1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.24 3.34.95
        .1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09
        -.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49
        3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41
        -5.27 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52
        10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const LINE_1 = "Bienvenue sur mon";
const LINE_2 = "Portfolio";
const BADGE = "🌐 titonouananihounas.github.io/portfolio";

const DELAY_LINE_1 = 300;
const DELAY_LINE_2 = DELAY_LINE_1 + LINE_1.length * 45 + 150;
const DELAY_BADGE = DELAY_LINE_2 + LINE_2.length * 45 + 200;
const HOLD_AFTER_BADGE = 1500;

export default function Intro({ onFinish }) {
  const [visible, setVisible] = useState(true);

  const line1 = useTypewriter(LINE_1, 45, DELAY_LINE_1);
  const line2 = useTypewriter(LINE_2, 45, DELAY_LINE_2);
  const badge = useTypewriter(BADGE, 40, DELAY_BADGE);

  useEffect(() => {
    const fadeStart = DELAY_BADGE + BADGE.length * 40 + HOLD_AFTER_BADGE;
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 800);
    }, fadeStart);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center
        bg-gradient-to-br from-bg via-card to-bg
        transition-opacity duration-700
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <div className="opacity-0 animate-fade-in-up [animation-delay:100ms]">
            <IconCircle><Code2 size={20} /></IconCircle>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:250ms]">
            <IconCircle><User size={20} /></IconCircle>
          </div>
          <div className="opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <IconCircle><GithubIcon /></IconCircle>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-text text-center leading-tight min-h-[160px]">
          {line1.displayed}
          {!line1.done && <Cursor />}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {line2.displayed}
            {line1.done && !line2.done && <Cursor />}
          </span>
        </h1>

        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted text-sm min-h-[32px]">
          {badge.displayed}
          {line2.done && !badge.done && <Cursor />}
        </span>
      </div>
    </div>
  );
}

function IconCircle({ children }) {
  return (
    <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10
      flex items-center justify-center text-muted">
      {children}
    </div>
  );
}
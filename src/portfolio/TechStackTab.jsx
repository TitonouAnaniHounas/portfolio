import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPhp,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { Code2 } from "lucide-react";

const TECHS = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "PHP", icon: SiPhp },
  { name: "Visual Basic", icon: Code2 }, // pas d'icône de marque dispo
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MySQL / SQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Vite", icon: SiVite },
];

export default function TechStackTab() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {TECHS.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-3 bg-card border border-white/10 rounded-2xl py-8 px-4 hover:border-accent/40 hover:-translate-y-1 transition-all"
        >
          <Icon size={40} color="default" />
          <span className="text-text text-sm font-medium text-center">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
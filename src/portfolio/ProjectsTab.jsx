import { ExternalLink } from "lucide-react";
import shoplyImage from "../assets/shoply.png";
import skycastImage from "../assets/skycast.png";
import taskflowImage from "../assets/taskflow.png";
import pontImage from "../assets/pont.png";

// Remplace par tes 4 vrais projets
const PROJECTS = [
  {
    name: "shoply",
    description: "Application e-commerce moderne permettant de parcourir des produits, rechercher et filtrer des articles, gérer un panier et consulter les détails des produits.",
    tags: ["html", "css", "javascript"],
    imgUrl: shoplyImage,
    demoUrl: "https://titonouananihounas.github.io/shoply/",
    githubUrl: "https://github.com/TitonouAnaniHounas/shoply",
  },
  {
    name: "skycast",
    description: "Application météo interactive permettant de rechercher une ville et d’obtenir les conditions météorologiques actuelles ainsi que les prévisions grâce à une API météo.",
    tags: ["html", "css", "javascript"],
    imgUrl: skycastImage,
    demoUrl: "https://titonouananihounas.github.io/skycast/",
    githubUrl: "https://github.com/TitonouAnaniHounas/skycast",
  },
  {
    name: "taskflow",
    description: "Application de gestion de tâches permettant de créer, organiser et suivre ses tâches avec une interface moderne et intuitive, afin d’améliorer sa productivité.",
    tags: ["html", "css", "javascript", "React", "tailwindcss"],
    imgUrl: taskflowImage,
    demoUrl: "https://titonouananihounas.github.io/taskflow/",
    githubUrl: "https://github.com/TitonouAnaniHounas/taskflow",
  },
  {
    name: "pont-hkb",
    description: "Application web de gestion et d’automatisation du péage du pont HKB, permettant de gérer les passages, les paiements et les recettes, avec un tableau de bord d’administration et des fonctionnalités de reconnaissance faciale et OCR.",
    tags: ["html", "css", "javascript", "PHP", "MySQL"],
    imgUrl: pontImage,
    githubUrl: "https://github.com/TitonouAnaniHounas/pont-hkb",
  },
];

function GithubIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
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

export default function ProjectsTab() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {PROJECTS.map((project) => (
        <div
          key={project.name}
          className="bg-card border border-white/10 rounded-2xl p-6 hover:border-accent/40 transition-colors"
        >
          <div className="h-36 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-5 flex items-center justify-center text-muted text-sm">
            <img src={project.imgUrl} alt={project.name} className="w-full h-full object-cover" />
          </div>

          <h3 className="text-xl font-bold text-text mb-2">{project.name}</h3>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-accent hover:opacity-80"
              >
                <ExternalLink size={14} /> Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-text"
            >
              <GithubIcon size={14} /> Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
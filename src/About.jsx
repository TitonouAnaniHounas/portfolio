import { FileText, Code2 } from "lucide-react";
import profilePhoto from "./assets/profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 lg:px-24 pt-32 pb-24 max-w-[1600px] mx-auto"
    >
      {/* En-tête centré */}
      <div className="text-center mb-20">
        <h2 className="text-6xl lg:text-7xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            A propos de moi
          </span>
        </h2>
        <p className="text-muted text-lg lg:text-xl flex items-center justify-center gap-3">
          <span className="text-accent">✦</span>
          Transformer des idées en expériences digitales
          <span className="text-accent">✦</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Texte */}
        <div>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hello, I'm
            </span>
          </h3>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-text mb-6">
            Titonou Anani Hounas
          </h3>

          <p className="text-muted text-lg lg:text-xl leading-relaxed mb-6">
            Etudiant en Réseaux et Génie Logiciel à pigier côte d'ivoire et
            passionné par le développement web. Je conçois des interfaces
            modernes, responsives et interactives avec HTML, CSS, JavaScript,
            React et Tailwind CSS. Curieux et motivé, je cherche constamment à
            améliorer mes compétences à travers des projets concrets et à
            évoluer vers le développement Full Stack. 
          </p>

          <div className="relative bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8">
            <p className="text-text italic text-base lg:text-lg pl-6">
              Chaque ligne de code me rapproche de la personne que je veux devenir.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-bg font-semibold text-base lg:text-lg hover:opacity-90 transition-opacity"
            >
              <FileText size={18} />
              Télécharger le CV
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 rounded-xl border border-white/10 text-accent text-base lg:text-lg hover:bg-white/5 transition-colors"
            >
              <Code2 size={18} />
              Voir mes projets
            </a>
          </div>
        </div>

        {/* Photo — poussée vers le bord droit, comme le modèle */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />
            <div className="relative w-full h-full rounded-full border-2 border-accent/30 overflow-hidden">
              <img
                src={profilePhoto}
                className="w-full h-full object-cover"
                alt="Titonou Anani Hounas"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
        <Stat className="text-4xl w-24" value="4" label="Projets totals" />
        <Stat className="text-4xl w-24" value="3" label="Certificats" />
        <Stat className="text-4xl w-24" value="0" label="Années d'expérience" />
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center bg-white/5 border border-white/10 rounded-xl py-7">
      <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
        {value}
      </div>
      <div className="text-muted text-sm lg:text-base mt-1">{label}</div>
    </div>
  );
}
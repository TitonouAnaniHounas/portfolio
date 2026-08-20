import { FileText, Code2, GraduationCap } from "lucide-react";
import profilePhoto from "./assets/profile.png";

const EDUCATION = [
  {
    title: "BTS Informatique Développeur d'Applications",
    place: "Pigier Côte d'Ivoire",
    period: "2026",
  },
  {
    title: "Baccalauréat Série C",
    place: "Collège Saint Exupéry de Port-Bouët",
    period: "2023 / 2024",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 lg:px-24 pt-32 pb-24 max-w-[1600px] mx-auto"
    >
      {/* En-tête */}
      <div className="text-center mb-20">
        <h2 className="text-6xl lg:text-7xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            À propos de moi
          </span>
        </h2>

        <p className="text-muted text-lg lg:text-xl flex items-center justify-center gap-3">
          <span className="text-accent">✦</span>
          Transformer des idées en expériences digitales
          <span className="text-accent">✦</span>
        </p>
      </div>

      {/* Présentation */}
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
            Étudiant en Réseaux et Génie Logiciel à Pigier Côte d'Ivoire et
            passionné par le développement web. Je conçois des interfaces
            modernes, responsives et interactives avec HTML, CSS, JavaScript,
            React et Tailwind CSS. Curieux et motivé, je cherche constamment à
            améliorer mes compétences à travers des projets concrets et à
            évoluer vers le développement Full Stack.
          </p>

          {/* Citation */}
          <div className="relative bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8">
            <p className="text-text italic text-base lg:text-lg pl-6">
              Chaque ligne de code me rapproche de la personne que je veux
              devenir.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-bg font-semibold text-base lg:text-lg hover:opacity-90 transition-opacity"
            >
              <FileText size={20} />
              Télécharger le CV
            </a>

            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 rounded-xl border border-white/10 text-accent text-base lg:text-lg hover:bg-white/5 transition-colors"
            >
              <Code2 size={20} />
              Voir mes projets
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />

            <div className="relative w-full h-full rounded-full border-2 border-accent/30 overflow-hidden">
              <img
                src={profilePhoto}
                className="w-full h-full object-cover"
                alt="Portrait de Titonou Anani Hounas"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* MON PARCOURS */}
      {/* ================================= */}

      <div className="mt-28 max-w-4xl mx-auto">
        <h3 className="text-4xl lg:text-5xl font-extrabold text-center mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Mon Parcours
          </span>
        </h3>

        <div className="relative pl-10">
          {/* Ligne verticale */}
          <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          <div className="flex flex-col gap-10">
            {EDUCATION.map((item) => (
              <div key={item.title} className="relative">
                {/* Point */}
                <div className="absolute -left-10 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_16px_rgba(79,107,255,0.5)]">
                  <GraduationCap size={17} className="text-bg" />
                </div>

                {/* Carte du parcours */}
                <div className="bg-white/5 border border-white/10 rounded-2xl px-7 py-6 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300">
                  <span className="text-accent text-base font-semibold">
                    {item.period}
                  </span>

                  <h4 className="text-text font-bold text-xl lg:text-2xl mt-2">
                    {item.title}
                  </h4>

                  <p className="text-muted text-base lg:text-lg mt-2">
                    {item.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* STATISTIQUES */}
      {/* ================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
        <Stat
          value="4"
          label="Projets réalisés"
        />

        <Stat
          value="3"
          label="Certificats"
        />

        <Stat
          value="0"
          label="Années d'expérience"
        />
      </div>
    </section>
  );
}

/* ================================= */
/* CARTE STATISTIQUE */
/* ================================= */

function Stat({ value, label }) {
  return (
    <div className="min-h-[180px] flex flex-col items-center justify-center text-center bg-white/5 border border-white/10 rounded-2xl px-6 py-8 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300">
      <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
        {value}
      </div>

      <div className="text-muted text-base lg:text-lg mt-3">
        {label}
      </div>
    </div>
  );
}
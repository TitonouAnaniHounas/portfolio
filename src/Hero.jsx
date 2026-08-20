import { ExternalLink, Mail } from "lucide-react";

import { useTypewriterLoop } from "./hooks/useTypewriterLoop";
import Cursor from "./components/Cursor";
import Reveal from "./components/Reveal";

import devAnimation from "./assets/Animation1.gif";

const ROLES = [
  "Développeur Front-end Junior",
  "Développeur Web Junior",
  "Intégrateur Web Junior",
];

const TECHS = [
  "HTML",
  "CSS",
  "React",
  "JavaScript",
  "PHP",
  "Tailwind",
];

function GithubIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55
        0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68
        -1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.24 3.34.95
        .1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09
        -.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49
        3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41
        -5.27 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52
        10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9
        1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12
        20.45H3.56V9h3.56v11.45z"
      />
    </svg>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.2"
        cy="6.8"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const SOCIALS = [
  {
    icon: GithubIcon,
    href: "https://github.com/TitonouAnaniHounas",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/anani-hounas-titonou-182b88429/",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/hounasx",
  },
];

export default function Hero() {
  const role = useTypewriterLoop(ROLES);

  return (
    <section
      id="home"
      className="
        min-h-screen
        px-6 lg:px-24
        pt-24 lg:pt-28
        max-w-[1600px]
        mx-auto
        flex items-center
        overflow-hidden
      "
    >
      <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center w-full">

        {/* TEXTE */}
        <Reveal variant="left" duration={900}>
          <div>

            {/* BADGE */}
            <span
              className="
                inline-block
                px-3.5 py-1.5
                rounded-full
                bg-white/5
                border border-white/10
                text-accent
                text-sm
                mb-5
                animate-[fadeSlideDown_0.8s_ease-out]
              "
            >
              ✨ Prêt à créer des expériences web exceptionnelles
            </span>

            {/* TITRE */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-3">
              <span className="text-text">
                Développeur
              </span>

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-primary
                  to-accent
                "
              >
                Front-end
              </span>
            </h1>

            {/* ROLE */}
            <p
              className="
                text-2xl lg:text-3xl
                font-bold
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-primary
                to-accent
                mb-2
              "
            >
              Rôle
            </p>

            <p className="text-lg lg:text-xl text-muted mb-6 min-h-[32px]">
              {role}
              <Cursor />
            </p>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2 mb-6">
              {TECHS.map((tech, i) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-sm text-muted

                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-accent/50
                    hover:text-accent
                    hover:bg-accent/5
                  "
                  style={{
                    animation: `techAppear 0.5s ease-out ${
                      700 + i * 80
                    }ms both`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BOUTONS */}
            <div className="flex flex-wrap gap-3 mb-6">

              <a
                href="#portfolio"
                className="
                  group
                  flex items-center gap-2
                  px-6 py-3
                  rounded-lg

                  bg-gradient-to-r
                  from-primary
                  to-accent

                  text-bg
                  font-semibold
                  text-base

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(79,107,255,0.25)]

                  active:scale-95
                "
              >
                Projects

                <ExternalLink
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              <a
                href="#contact"
                className="
                  group
                  flex items-center gap-2
                  px-6 py-3
                  rounded-lg

                  border border-white/10
                  text-text
                  text-base

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-accent/50
                  hover:bg-white/5

                  active:scale-95
                "
              >
                Contact

                <Mail
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

            </div>

            {/* RÉSEAUX */}
            <div className="flex gap-3">
              {SOCIALS.map((social, i) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      w-10 h-10
                      rounded-full
                      bg-white/5
                      border border-white/10

                      flex items-center justify-center

                      text-muted

                      transition-all duration-300

                      hover:-translate-y-1
                      hover:text-accent
                      hover:border-accent/40
                      hover:bg-accent/5
                      hover:shadow-[0_8px_20px_rgba(79,107,255,0.15)]

                      active:scale-90
                    "
                  >
                    <SocialIcon
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                );
              })}
            </div>

          </div>
        </Reveal>

        {/* ILLUSTRATION */}
        <Reveal
          delay={200}
          duration={1000}
          variant="right"
          className="flex justify-center order-first md:order-last"
        >
          <img
            src={devAnimation}
            alt="Developer illustration"
            className="
              w-56
              sm:w-72
              md:w-full
              md:max-w-lg
              lg:max-w-2xl

              object-contain

              animate-[float_5s_ease-in-out_infinite]

              motion-reduce:animate-none
            "
          />
        </Reveal>

      </div>
    </section>
  );
}
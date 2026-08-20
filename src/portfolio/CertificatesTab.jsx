import { Award } from "lucide-react";

import Reveal from "../components/Reveal";

import githubImage from "../assets/git.png";
import reactImage from "../assets/react.png";
import jsImage from "../assets/js.png";

import githubPdf from "../assets/git.pdf";
import reactPdf from "../assets/react.pdf";
import jsPdf from "../assets/js.pdf";

const CERTIFICATES = [
  {
    title: "Getting Started with Git and GitHub",
    imgUrl: githubImage,
    issuer:
      "Un cours en ligne autorisé par IBM et proposé par l'intermédiaire de Coursera",
    certificateUrl: githubPdf,
    date: "2026",
  },

  {
    title: "Developing Front-End Apps with React",
    imgUrl: reactImage,
    issuer:
      "Un cours en ligne autorisé par Meta et proposé par l'intermédiaire de Coursera",
    certificateUrl: reactPdf,
    date: "2026",
  },

  {
    title: "Introduction to HTML, CSS, & JavaScript",
    imgUrl: jsImage,
    issuer:
      "Un cours en ligne proposé par Coursera",
    certificateUrl: jsPdf,
    date: "2026",
  },
];

export default function CertificatesTab() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {CERTIFICATES.map((cert, i) => (
        <Reveal
          key={cert.title}
          delay={i * 120}
          variant="up"
          duration={800}
        >
          <div
            className="
              group
              h-full

              bg-card
              border border-white/10
              rounded-2xl

              p-6

              transition-all duration-500

              hover:-translate-y-2
              hover:border-accent/40

              hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]
            "
          >

            {/* IMAGE */}
            <div
              className="
                h-44
                w-full

                rounded-xl
                overflow-hidden

                bg-gradient-to-br
                from-primary/20
                to-accent/20

                mb-5
              "
            >
              <img
                src={cert.imgUrl}
                alt={cert.title}
                className="
                  w-full h-full

                  object-cover
                  object-center
                  block

                  transition-transform duration-700

                  group-hover:scale-105
                "
              />
            </div>

            <h3 className="text-lg font-bold text-text mb-1">
              {cert.title}
            </h3>

            <p className="text-muted text-sm mb-1">
              {cert.issuer}
            </p>

            <p className="text-muted text-xs">
              {cert.date}
            </p>

            {/* BOUTON */}
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/button

                mt-5
                inline-flex
                w-full

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-accent

                px-4 py-3

                text-sm
                font-semibold
                text-white

                shadow-lg
                shadow-accent/20

                transition-all duration-300

                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-accent/40

                active:scale-[0.98]
              "
            >
              <Award
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:rotate-6
                  group-hover/button:scale-110
                "
              />

              Voir le certificat
            </a>

          </div>
        </Reveal>
      ))}

    </div>
  );
}
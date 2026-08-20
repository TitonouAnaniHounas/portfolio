import { Award } from "lucide-react";
import githubImage from "../assets/git.png";
import reactImage from "../assets/react.png";
import jsImage from "../assets/js.png";
import githubPdf from "../assets/git.pdf";
import reactPdf from "../assets/react.pdf";
import jsPdf from "../assets/js.pdf";

// Remplace par tes 3 vrais certificats
const CERTIFICATES = [
  {
    title: "Getting Started with Git and GitHub",
    imgUrl: githubImage,
    issuer: "un cours en ligne autorisé par IBM et proposé par l'intermédiaire de Coursera",
    certificateUrl: githubPdf,
    date: "2026",
  },
  {
    title: "Developing Front-End Apps with React",
    imgUrl: reactImage,
    issuer: "un cours en ligne autorisé par Meta et proposé par l'intermédiaire de Coursera",
    certificateUrl: reactPdf,
    date: "2026",
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    imgUrl: jsImage,
    issuer: "un cours en ligne autorisé par Coursera et proposé par l'intermédiaire de Coursera",
    certificateUrl: jsPdf,
    date: "2026",
  },
];

export default function CertificatesTab() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {CERTIFICATES.map((cert) => (
        <div
          key={cert.title}
          className="bg-card border border-white/10 rounded-2xl p-6 hover:border-accent/40 transition-colors"
        >
          <div className="h-40 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-5 flex items-center justify-center">
            <img src={cert.imgUrl} alt={cert.title} className="w-full h-full object-cover rounded-xl" />
          </div>

          <h3 className="text-lg font-bold text-text mb-1">{cert.title}</h3>
          <p className="text-muted text-sm mb-1">{cert.issuer}</p>
          <p className="text-muted text-xs">{cert.date}</p>
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent/40"
          >
            <Award size={17} />
            Voir le certificat
          </a>
        </div>
      ))}
    </div>
  );
}
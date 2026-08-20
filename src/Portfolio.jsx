import { useState } from "react";

import ProjectsTab from "./portfolio/ProjectsTab";
import CertificatesTab from "./portfolio/CertificatesTab";
import TechStackTab from "./portfolio/TechStackTab";

import Reveal from "./components/Reveal";

const TABS = [
  {
    id: "projects",
    label: "Projets",
  },
  {
    id: "certificates",
    label: "Certificats",
  },
  {
    id: "techstack",
    label: "Stack technique",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="
        min-h-screen
        px-6 lg:px-24
        py-24
        max-w-[1600px]
        mx-auto
        overflow-hidden
      "
    >

      {/* TITRE */}
      <Reveal variant="down" duration={800}>
        <div className="text-center mb-14">

          <h2 className="text-5xl lg:text-6xl font-extrabold mb-4">
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-primary
                to-accent
              "
            >
              Présentation de portfolio
            </span>
          </h2>

          <p className="text-muted text-lg lg:text-xl max-w-2xl mx-auto">
            Un aperçu de mon parcours à travers mes projets, certificats et
            compétences techniques.
          </p>

        </div>
      </Reveal>

      {/* ONGLETS */}
      <Reveal
        delay={150}
        variant="up"
        duration={700}
      >
        <div className="flex flex-wrap justify-center gap-2 mb-12">

          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-2.5
                rounded-full
                font-medium
                text-sm lg:text-base

                transition-all duration-300

                active:scale-95

                ${
                  activeTab === tab.id
                    ? `
                      bg-gradient-to-r
                      from-primary
                      to-accent
                      text-bg
                      scale-105
                      shadow-[0_8px_25px_rgba(79,107,255,0.2)]
                    `
                    : `
                      text-muted
                      border border-white/10

                      hover:text-text
                      hover:border-accent/40
                      hover:-translate-y-0.5
                      hover:bg-white/5
                    `
                }
              `}
            >
              {tab.label}
            </button>
          ))}

        </div>
      </Reveal>

      {/* CONTENU */}
      <div
        key={activeTab}
        className="
          animate-[tabContent_0.5s_ease-out]
        "
      >
        {activeTab === "projects" && <ProjectsTab />}

        {activeTab === "certificates" && <CertificatesTab />}

        {activeTab === "techstack" && <TechStackTab />}
      </div>

    </section>
  );
}
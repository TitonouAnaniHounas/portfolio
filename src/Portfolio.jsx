import { useState } from "react";
import ProjectsTab from "./portfolio/ProjectsTab";
import CertificatesTab from "./portfolio/CertificatesTab";
import TechStackTab from "./portfolio/TechStackTab"

const TABS = [
  { id: "projects", label: "Projets" },
  { id: "certificates", label: "Certificats" },
  { id: "techstack", label: "Stack technique" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="min-h-screen px-6 lg:px-24 py-24 max-w-[1600px] mx-auto"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-muted text-lg lg:text-xl max-w-2xl mx-auto">
          Un aperçu de mon parcours à travers mes projets, certificats et
          compétences techniques.
        </p>
      </div>

      {/* Onglets */}
      <div className="flex justify-center gap-2 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm lg:text-base transition-colors ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-primary to-accent text-bg"
                : "text-muted hover:text-text border border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu selon l'onglet actif */}
      {activeTab === "projects" && <ProjectsTab />}
      {activeTab === "certificates" && <CertificatesTab />}
      {activeTab === "techstack" && <TechStackTab />}
    </section>
  );
}
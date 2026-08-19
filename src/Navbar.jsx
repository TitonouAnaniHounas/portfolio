import { useState } from "react";

const LINKS = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "A propos de moi" },
  { id: "portfolio", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-24 py-5 lg:py-6">
        <span className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Titonou Anani Hounas
        </span>

        <div className="flex gap-10 lg:gap-12">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-base lg:text-lg font-medium transition-colors ${
                active === link.id ? "text-accent" : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
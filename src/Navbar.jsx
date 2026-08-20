import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // ==========================================
  // NAVIGATION
  // ==========================================

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  // ==========================================
  // SECTION ACTIVE
  // ==========================================

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ==========================================
  // BLOQUER LE SCROLL
  // ==========================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/90 backdrop-blur-md border-b border-white/5">

      {/* ===================================== */}
      {/* NAVBAR */}
      {/* ===================================== */}

      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-24 py-5 lg:py-6">

        {/* LOGO */}

        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="text-left text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          Titonou Anani Hounas
        </button>

        {/* ===================================== */}
        {/* LIENS DESKTOP */}
        {/* ===================================== */}

        <div className="hidden md:flex gap-10 lg:gap-12">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`text-base lg:text-lg font-medium transition-colors ${
                active === link.id
                  ? "text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* ===================================== */}
        {/* HAMBURGER */}
        {/* ===================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-text p-2 -mr-2 hover:text-accent transition-colors"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <Menu size={30} />
        </button>
      </div>

      {/* ===================================== */}
      {/* MENU MOBILE */}
      {/* ===================================== */}

      <div
        className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          backgroundColor: "#0b1020",
        }}
      >

        {/* ================================= */}
        {/* HEADER DU MENU */}
        {/* ================================= */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

          {/* Logo */}

          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Titonou
          </span>

          {/* Fermer */}

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-white p-2 hover:text-accent transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={30} />
          </button>
        </div>

        {/* ================================= */}
        {/* LIENS */}
        {/* ================================= */}

        <div className="flex flex-col bg-black items-center justify-center gap-10 min-h-[calc(100vh-80px)] px-6">

          {LINKS.map((link, i) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={`text-3xl font-semibold transition-all duration-300 ${
                active === link.id
                  ? "text-accent"
                  : "text-white hover:text-accent"
              } ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: menuOpen
                  ? `${i * 70}ms`
                  : "0ms",
              }}
            >
              {link.label}
            </button>
          ))}

        </div>
      </div>
    </nav>
  );
}
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

function GithubIcon({ size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
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

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9
        1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12
        20.45H3.56V9h3.56v11.45z"
      />
    </svg>
  );
}

// ===============================
// INFORMATIONS DE CONTACT
// ===============================

const INFO = {
  email: "hounastitonou@email.com",
  phone: "+225 01 51 58 36 23",
  location: "Abidjan, Côte d'Ivoire",
};

const SOCIALS = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/TitonouAnaniHounas",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anani-hounas-titonou-182b88429/",
  },
];

// ===============================
// COMPOSANT CONTACT
// ===============================

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Nom: ${form.name}
Email: ${form.email}

${form.message}`;

    const mailto = `mailto:${INFO.email}?subject=${encodeURIComponent(
      form.subject || "Contact depuis le portfolio"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 lg:px-24 py-28 max-w-[1600px] mx-auto"
    >
      {/* ========================= */}
      {/* TITRE DE LA SECTION */}
      {/* ========================= */}

      <div className="text-center mb-16">
        <h2 className="text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Parlons de votre projet
          </span>
        </h2>

        <p className="text-muted text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          Une idée, une opportunité ou simplement envie d'échanger ?
          N'hésitez pas à me contacter.
        </p>
      </div>

      {/* ========================= */}
      {/* CONTENU */}
      {/* ========================= */}

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* ========================= */}
        {/* COORDONNÉES */}
        {/* ========================= */}

        <div className="bg-card border border-white/10 rounded-3xl p-10">
          <h3 className="text-2xl lg:text-3xl font-bold text-text mb-8">
            Mes coordonnées
          </h3>

          <div className="flex flex-col gap-8">
            <InfoRow
              icon={Mail}
              label="Email"
              value={INFO.email}
            />

            <InfoRow
              icon={Phone}
              label="Téléphone"
              value={INFO.phone}
            />

            <InfoRow
              icon={MapPin}
              label="Localisation"
              value={INFO.location}
            />

            {/* RÉSEAUX SOCIAUX */}

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                <ArrowRight size={22} />
              </div>

              <div>
                <div className="text-muted text-base mb-3">
                  Réseaux sociaux
                </div>

                <div className="flex flex-wrap gap-5">
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-text hover:text-accent transition-colors text-base"
                    >
                      <Icon size={22} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* FORMULAIRE */}
        {/* ========================= */}

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-white/10 rounded-3xl p-10"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-text mb-8">
            Envoyez-moi un message
          </h3>

          <div className="flex flex-col gap-5 mb-7">
            {/* NOM */}

            <Field
              label="Nom"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="Votre nom"
              required
            />

            {/* EMAIL */}

            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="votre@email.com"
              required
            />

            {/* SUJET */}

            <Field
              label="Sujet"
              value={form.subject}
              onChange={handleChange("subject")}
              placeholder="Objet de votre message"
            />

            {/* MESSAGE */}

            <div>
              <label className="text-base text-muted mb-2 block">
                Message
              </label>

              <textarea
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-lg text-text placeholder:text-muted focus:outline-none focus:border-accent/50 resize-none transition-colors"
              />
            </div>
          </div>

          {/* BOUTON */}

          <button
            type="submit"
            className="flex items-center justify-center gap-3 w-full px-7 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-bg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Envoyer le message
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}

// ===============================
// LIGNE D'INFORMATION
// ===============================

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
        <Icon size={22} />
      </div>

      <div>
        <div className="text-muted text-base mb-1">
          {label}
        </div>

        <div className="text-text font-medium text-lg">
          {value}
        </div>
      </div>
    </div>
  );
}

// ===============================
// CHAMP DU FORMULAIRE
// ===============================

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-base text-muted mb-2 block">
        {label}
      </label>

      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-lg text-text placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
      />
    </div>
  );
}
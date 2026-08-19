import { Award } from "lucide-react";

// Remplace par tes 3 vrais certificats
const CERTIFICATES = [
  {
    title: "Nom du certificat 1",
    issuer: "Organisme émetteur",
    date: "2025",
  },
  {
    title: "Nom du certificat 2",
    issuer: "Organisme émetteur",
    date: "2025",
  },
  {
    title: "Nom du certificat 3",
    issuer: "Organisme émetteur",
    date: "2025",
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
            {/* remplace par <img src={tonImportCertif} className="w-full h-full object-cover rounded-xl" /> */}
            <Award size={40} className="text-accent/60" />
          </div>

          <h3 className="text-lg font-bold text-text mb-1">{cert.title}</h3>
          <p className="text-muted text-sm mb-1">{cert.issuer}</p>
          <p className="text-muted text-xs">{cert.date}</p>
        </div>
      ))}
    </div>
  );
}
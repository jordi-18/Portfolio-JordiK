import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

type Domain = "Full Stack" | "Data Scientist" | "Intégration de Solutions";

/** Construit l'URL de vérification réelle utilisée par Coursera. */
function courseraVerifyUrl(kind: "professional-cert" | "verify", credentialId: string) {
  return `https://www.coursera.org/account/accomplishments/${kind}/${credentialId}`;
}

const CERTIFICATES: {
  id: number;
  title: string;
  issuer: string;
  domain: Domain;
  emoji: string;
  level: string;
  date: string;
  color: string;
  skills: string[];
  credentialId: string;
  verifyUrl: string;
}[] = [
  // ── Full Stack ──────────────────────────────────────────
  {
    id: 1,
    title: "Meta Front-End Developer",
    issuer: "Meta · Coursera",
    domain: "Full Stack",
    emoji: "💻",
    level: "Professional Certificate",
    date: "2025",
    color: "#0081FB",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    credentialId: "REMPLACER_ID_1",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_1"),
  },
  {
    id: 2,
    title: "Meta Back-End Developer",
    issuer: "Meta · Coursera",
    domain: "Full Stack",
    emoji: "💻",
    level: "Professional Certificate",
    date: "2025",
    color: "#0081FB",
    skills: ["Node.js", "API REST", "Bases de données", "Django"],
    credentialId: "REMPLACER_ID_2",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_2"),
  },
  {
    id: 3,
    title: "IBM Full Stack Software Developer",
    issuer: "IBM · Coursera",
    domain: "Full Stack",
    emoji: "💻",
    level: "Professional Certificate",
    date: "2026",
    color: "#0f62fe",
    skills: ["Cloud", "Docker", "Kubernetes", "React", "Node.js"],
    credentialId: "REMPLACER_ID_3",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_3"),
  },

  // ── Data Scientist ───────────────────────────────────────
  {
    id: 4,
    title: "IBM Data Science",
    issuer: "IBM · Coursera",
    domain: "Data Scientist",
    emoji: "📊",
    level: "Professional Certificate",
    date: "2025",
    color: "#34d399",
    skills: ["Python", "Pandas", "Machine Learning", "SQL"],
    credentialId: "REMPLACER_ID_4",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_4"),
  },
  {
    id: 5,
    title: "Google Data Analytics",
    issuer: "Google · Coursera",
    domain: "Data Scientist",
    emoji: "📊",
    level: "Professional Certificate",
    date: "2025",
    color: "#facc15",
    skills: ["Analyse de données", "SQL", "Tableau", "R"],
    credentialId: "REMPLACER_ID_5",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_5"),
  },
  {
    id: 6,
    title: "Machine Learning Specialization",
    issuer: "Stanford Univ. / DeepLearning.AI · Coursera",
    domain: "Data Scientist",
    emoji: "📊",
    level: "Specialization",
    date: "2026",
    color: "#a78bfa",
    skills: ["Régression", "Classification", "Réseaux de neurones"],
    credentialId: "REMPLACER_ID_6",
    verifyUrl: courseraVerifyUrl("verify", "REMPLACER_ID_6"),
  },

  // ── Intégration de Solutions ─────────────────────────────
  {
    id: 7,
    title: "Google IT Support",
    issuer: "Google · Coursera",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    level: "Professional Certificate",
    date: "2024",
    color: "#4285F4",
    skills: ["Réseaux", "Systèmes", "Support technique", "Sécurité"],
    credentialId: "REMPLACER_ID_7",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_7"),
  },
  {
    id: 8,
    title: "IBM DevOps and Software Engineering",
    issuer: "IBM · Coursera",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    level: "Professional Certificate",
    date: "2026",
    color: "#0f62fe",
    skills: ["CI/CD", "Docker", "Automatisation", "Agile"],
    credentialId: "REMPLACER_ID_8",
    verifyUrl: courseraVerifyUrl("professional-cert", "REMPLACER_ID_8"),
  },
  {
    id: 9,
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud · Coursera",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    level: "Certificate",
    date: "2026",
    color: "#ea4335",
    skills: ["Cloud", "Infrastructure", "API", "Sécurité"],
    credentialId: "REMPLACER_ID_9",
    verifyUrl: courseraVerifyUrl("verify", "REMPLACER_ID_9"),
  },
];

const DOMAINS: { name: "Tous" | Domain; emoji: string }[] = [
  { name: "Tous", emoji: "✨" },
  { name: "Full Stack", emoji: "💻" },
  { name: "Data Scientist", emoji: "📊" },
  { name: "Intégration de Solutions", emoji: "🔗" },
];

export function Certificates() {
  const [filter, setFilter] = useState<"Tous" | Domain>("Tous");
  const filtered =
    filter === "Tous" ? CERTIFICATES : CERTIFICATES.filter((c) => c.domain === filter);

  return (
    <div style={{ paddingTop: "88px" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* ── En-tête ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "var(--primary)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
             certifications
          </p>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 64px)",
              letterSpacing: "-2px",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Mes certifications.
          </h1>
          <p style={{ fontSize: "17px", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "560px" }}>
            Des certifications Coursera délivrées par des organismes reconnus (Meta, IBM,
            Google, Stanford / DeepLearning.AI), réparties sur mes trois domaines
            d'expertise : Full Stack, Data Science et Intégration de Solutions.
          </p>
        </motion.div>

        {/* ── Stats ───────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: String(CERTIFICATES.length), label: "Certificats obtenus" },
            { value: "3", label: "Domaines couverts" },
            { value: "4", label: "Organismes partenaires" },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-5 text-center"
              style={{ background: "var(--card)", border: "1px solid rgba(240,236,229,0.07)" }}
            >
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "32px",
                  color: "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p style={{ fontSize: "12px", color: "var(--muted-foreground)", marginTop: "4px" }}>{label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Filtre par domaine ──────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {DOMAINS.map((d) => (
            <button
              key={d.name}
              onClick={() => setFilter(d.name)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all"
              style={{
                fontSize: "12px",
                fontWeight: filter === d.name ? 800 : 500,
                background: filter === d.name ? "var(--primary)" : "rgba(240,236,229,0.04)",
                color: filter === d.name ? "var(--primary-foreground)" : "var(--muted-foreground)",
                border: `1px solid ${filter === d.name ? "var(--primary)" : "rgba(240,236,229,0.09)"}`,
                boxShadow: filter === d.name ? "0 10px 24px rgba(200,245,63,0.18)" : "none",
              }}
            >
              <span>{d.emoji}</span>
              {d.name}
            </button>
          ))}
        </div>

        {/* ── Cartes de certificats ───────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl overflow-hidden flex flex-col group"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(240,236,229,0.05), rgba(240,236,229,0.02))",
                  border: "1px solid rgba(240,236,229,0.08)",
                }}
              >
                {/* ── En-tête badge ── */}
                <div
                  className="relative p-5 flex items-start justify-between gap-3"
                  style={{ borderBottom: "1px solid rgba(240,236,229,0.06)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                      style={{
                        background: `${cert.color}18`,
                        border: `1px solid ${cert.color}40`,
                      }}
                    >
                      <Award size={22} style={{ color: cert.color }} />
                    </div>
                    <div>
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "10px",
                          color: cert.color,
                          background: `${cert.color}12`,
                          border: `1px solid ${cert.color}30`,
                        }}
                      >
                        {cert.emoji} {cert.domain}
                      </span>
                    </div>
                  </div>
                  <BadgeCheck size={18} style={{ color: cert.color, flexShrink: 0 }} />
                </div>

                {/* ── Corps ── */}
                <div className="flex flex-col flex-1 p-5">
                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--muted-foreground)",
                      marginBottom: "4px",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      lineHeight: 1.3,
                      marginBottom: "4px",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: cert.color, fontWeight: 600, marginBottom: "14px" }}>
                    {cert.level}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg"
                        style={{
                          fontSize: "11px",
                          color: "var(--muted-foreground)",
                          background: "rgba(240,236,229,0.05)",
                          border: "1px solid rgba(240,236,229,0.08)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-auto flex items-center gap-2 mb-2"
                    style={{ fontSize: "11px", color: "var(--muted-foreground)" }}
                  >
                    <Calendar size={12} />
                    <span>
                      Obtenu en <strong style={{ color: "var(--foreground)" }}>{cert.date}</strong>
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10.5px",
                      color: "var(--muted-foreground)",
                      marginBottom: "14px",
                    }}
                  >
                    ID : {cert.credentialId}
                  </p>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl no-underline transition-all"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      border: `1px solid ${cert.color}40`,
                      color: cert.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${cert.color}12`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <CheckCircle2 size={14} />
                    Voir la certification
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111 0%, #0f150a 100%)",
            border: "1px solid rgba(200,245,63,0.15)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(200,245,63,0.1) 0%, transparent 60%)",
            }}
          />
          <ShieldCheck size={36} style={{ color: "var(--primary)", margin: "0 auto 16px" }} />
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "26px", marginBottom: "10px" }}>
            Tous mes certificats sont vérifiables
          </h2>
          <p style={{ fontSize: "14px", color: "var(--muted-foreground)", maxWidth: "480px", margin: "0 auto" }}>
            Chaque certification peut être consultée et vérifiée directement sur Coursera
            via le lien fourni sur chaque carte.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
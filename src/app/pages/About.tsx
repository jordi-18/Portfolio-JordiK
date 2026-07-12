import { motion } from "motion/react";
import { Download, MapPin, Mail, Code2, GraduationCap } from "lucide-react";

// ─── Icône WhatsApp SVG officielle ────────────────────────────────────────────
function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.738 5.476 2.027 7.774L.057 31.943a.75.75 0 0 0 .916.98l8.418-2.2A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.747-1.839l-.483-.286-5.006 1.311 1.336-4.875-.315-.5A13.244 13.244 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
      <path d="M23.3 19.371c-.4-.2-2.363-1.166-2.73-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.687-.622-3.214-1.983-1.188-1.059-1.99-2.368-2.222-2.768-.234-.4-.025-.616.175-.815.18-.179.4-.467.6-.7.2-.233.266-.4.4-.667.133-.266.066-.5-.034-.7-.1-.2-.9-2.167-1.233-2.967-.325-.778-.655-.673-.9-.686-.232-.011-.5-.013-.766-.013-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.832 6.04.955.413 1.699.66 2.28.843.958.306 1.83.263 2.52.159.768-.115 2.363-.967 2.697-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
    </svg>
  );
}

// ─── Données ──────────────────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    role: "Développeur Full Stack",
    company: "Freelance",
    period: "en cours",
    desc: "Conception et développement d'applications web complètes (frontend & backend), architectures modernes et interconnexion d'API pour des clients africains et internationaux.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Data Scientist",
    company: "Projets académiques & personnels",
    period: "en cours",
    desc: "Analyse de données, modélisation statistique et construction de modèles de machine learning, appuyées sur ma formation en mathématiques.",
    tags: ["Python", "Pandas", "Scikit-learn", "SQL"],
  },
  {
    role: "Intégrateur de solutions & Administrateur système",
    company: "Freelance",
    period: "en cours",
    desc: "Déploiement d'infrastructures serveurs, interconnexion de systèmes et services tiers, supervision et sécurisation des réseaux.",
    tags: ["Linux", "Docker", "API REST", "Réseaux"],
  },
];

const EDUCATION = [
  {
    degree: "Licence en génie informatique",
    school: "Université Marien Ngouabi - Faculté des Sciences et Techniques (FST)",
    period: "",
    desc: "Formation en génie informatique : architecture logicielle, bases de données, réseaux et systèmes.",
  },
  {
    degree: "Licence en mathématiques",
    school: "Université Marien Ngouabi — Faculté des Sciences et Techniques (FST)",
    period: "",
    desc: "Mathématiques pures et appliquées, socle analytique pour la modélisation et la data science.",
  },
];

const SKILLS: { cat: string; emoji: string; items: string[] }[] = [
  {
    cat: "Full Stack",
    emoji: "💻",
    items: ["React ⚛️", "Next.js ▲", "Node.js 🟢", "TypeScript 🔷", "PostgreSQL 🐘", "MongoDB 🍃"],
  },
  {
    cat: "Data Scientist",
    emoji: "📊",
    items: ["Python 🐍", "Pandas 🐼", "NumPy 🔢", "Scikit-learn 🤖", "SQL 🗄️", "Power BI 📈"],
  },
  {
    cat: "Intégrateur de Solutions",
    emoji: "🔗",
    items: ["Linux 🐧", "Docker 🐳", "API REST 🔌", "Windows Server 🪟", "Nginx 🌍", "Bash 💻"],
  },
];

const COMPETENCES_ACQUISES: { domain: string; emoji: string; items: string[] }[] = [
  {
    domain: "Full Stack",
    emoji: "💻",
    items: [
      "Développement d'applications web complètes (frontend + backend)",
      "Conception d'API REST",
      "Gestion de bases de données relationnelles et NoSQL",
      "Authentification et sécurité des applications web",
    ],
  },
  {
    domain: "Data Scientist",
    emoji: "📊",
    items: [
      "Analyse et nettoyage de données",
      "Modélisation statistique et mathématique",
      "Introduction au machine learning (classification, régression)",
      "Visualisation et restitution de données",
    ],
  },
  {
    domain: "Intégrateur de Solutions",
    emoji: "🔗",
    items: [
      "Déploiement et administration de serveurs Linux/Windows",
      "Interconnexion d'API et de services tiers",
      "Automatisation de tâches système",
      "Supervision et sécurisation d'infrastructures réseau",
    ],
  },
];

// ─── Composant section ─────────────────────────────────────────────────────────
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-8"
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          // {label}
        </p>
        <div style={{ flex: 1, height: "1px", background: "rgba(220, 220, 17, 0.07)" }} />
      </motion.div>
      {children}
    </section>
  );
}

// ─── Styles keyframes (injectés une seule fois) ────────────────────────────────
const KEYFRAMES = `
@keyframes spin-border {
  to { transform: rotate(360deg); }
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.4); }
}
`;

// ─── Composant principal ───────────────────────────────────────────────────────
export function About() {
  return (
    <>
      <style>{KEYFRAMES}</style>
      <div style={{ paddingTop: "88px" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* En-tête de page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
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
               à propos
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
              Mon parcours<br />& ma vision.
            </h1>
            <p
              style={{
                fontSize: "17px",
                color: "var(--muted-foreground)",
                lineHeight: 1.75,
                maxWidth: "560px",
              }}
            >
              Étudiant à la Faculté des Sciences et Techniques (FST) de l'Université Marien Ngouabi,
              je poursuis en parallèle une licence en mathématiques et une licence en génie informatique.
              Cette double formation m'a permis de développer une solide expertise en logique formelle,
              en optimisation algorithmique et en architecture logicielle, ainsi qu'une maîtrise des
              infrastructures de données (relationnelles et NoSQL) et de l'administration systèmes et réseaux.
              <br /><br />
              Je fais évoluer mes compétences autour de trois domaines complémentaires :
              le <strong style={{ color: "var(--foreground)" }}>Full Stack</strong> pour construire des
              applications web complètes, la <strong style={{ color: "var(--foreground)" }}>Data Science</strong> pour
              analyser et modéliser des données grâce à mon socle mathématique, et
              l'<strong style={{ color: "var(--foreground)" }}>intégration de solutions</strong> pour déployer et
              interconnecter des infrastructures numériques robustes et sécurisées.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">

            {/* ── Colonne gauche : bio ── */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="sticky"
                style={{ top: "100px" }}
              >
                {/* Photo avec bordure animée */}
                <div style={{ position: "relative", marginBottom: "20px" }}>
                  {/* Anneau tournant */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-3px",
                      borderRadius: "18px",
                      background:
                        "conic-gradient(from 0deg, var(--primary) 0%, transparent 40%, transparent 60%, var(--primary) 100%)",
                      animation: "spin-border 4s linear infinite",
                      zIndex: 0,
                    }}
                  />
                  {/* Masque intérieur */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "2px",
                      borderRadius: "16px",
                      background: "#111",
                      zIndex: 1,
                    }}
                  />
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      position: "relative",
                      zIndex: 2,
                      border: "1px solid rgba(200,245,63,0.15)",
                      background: "#111",
                      aspectRatio: "3/4",
                    }}
                  >
                    <img
                      src="src\app\components\photo-profil\jordipo.jpg"
                      alt="KITOKO WAMITOUNGA Jordi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Carte infos */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--card)",
                    border: "1px solid rgba(240,236,229,0.07)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      marginBottom: "4px",
                    }}
                  >
                    KITOKO WAMITOUNGA Jordi
                  </p>

                  {/* Badge disponible */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: "var(--primary)",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "var(--primary)",
                        display: "inline-block",
                        animation: "pulse-dot 1.8s ease-in-out infinite",
                      }}
                    />
                    Full Stack · Data Scientist · Intégrateur de Solutions
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {/* Localisation */}
                    <div
                      className="flex items-center gap-2"
                      style={{ fontSize: "13px", color: "var(--muted-foreground)" }}
                    >
                      <MapPin size={13} style={{ flexShrink: 0 }} />
                      Brazzaville, Congo
                    </div>

                    {/* Email */}
                    <div
                      className="flex items-center gap-2"
                      style={{ fontSize: "13px", color: "var(--muted-foreground)" }}
                    >
                      <Mail size={13} style={{ flexShrink: 0 }} />
                      jokitoko18@gmail.com
                    </div>

                    {/* WhatsApp 1 */}
                    <a
                      href="https://wa.me/242067847461"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 no-underline transition-colors"
                      style={{ fontSize: "13px", color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                    >
                      <WhatsAppIcon size={14} />
                      +242 067 847 461
                    </a>

                    {/* WhatsApp 2 */}
                    <a
                      href="https://wa.me/242053892442"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 no-underline transition-colors"
                      style={{ fontSize: "13px", color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                    >
                      <WhatsAppIcon size={14} />
                      +242 053 892 442
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/jordi-18"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 no-underline transition-colors"
                      style={{ fontSize: "13px", color: "var(--muted-foreground)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                    >
                      <Code2 size={13} style={{ flexShrink: 0 }} />
                      github.com/jordi-18
                    </a>
                  </div>

                  {/* Bouton CV */}
                  <a
                    href="/cv-kitoko.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full mt-5 py-2.5 rounded-xl no-underline transition-all"
                    style={{
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <Download size={14} />
                    Télécharger CV (PDF)
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ── Colonne droite : contenu ── */}
            <div className="md:col-span-2">

              {/* Expérience */}
              <Section label="expérience professionnelle">
                <div className="flex flex-col gap-5">
                  {EXPERIENCES.map((exp, i) => (
                    <motion.div
                      key={exp.role}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl p-5"
                      style={{
                        background: "var(--card)",
                        border: "1px solid rgba(240,236,229,0.07)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                        <div>
                          <p
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 700,
                              fontSize: "16px",
                            }}
                          >
                            {exp.role}
                          </p>
                          <p style={{ fontSize: "13px", color: "var(--primary)", fontWeight: 500 }}>
                            {exp.company}
                          </p>
                        </div>
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "11px",
                            color: "var(--muted-foreground)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--muted-foreground)",
                          lineHeight: 1.7,
                          marginBottom: "12px",
                        }}
                      >
                        {exp.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg"
                            style={{
                              fontSize: "11px",
                              background: "rgba(200,245,63,0.08)",
                              color: "var(--primary)",
                              border: "1px solid rgba(200,245,63,0.15)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* Formation */}
              <Section label="formation">
                <div className="flex flex-col gap-4">
                  {EDUCATION.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-5 rounded-2xl"
                      style={{
                        background: "var(--card)",
                        border: "1px solid rgba(240,236,229,0.07)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(200,245,63,0.1)", color: "var(--primary)" }}
                      >
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: "15px",
                          }}
                        >
                          {edu.degree}
                        </p>
                        <p style={{ fontSize: "13px", color: "var(--primary)" }}>{edu.school}</p>
                        <p
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "11px",
                            color: "var(--muted-foreground)",
                            margin: "4px 0 8px",
                          }}
                        >
                          {edu.period}
                        </p>
                        <p style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                          {edu.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* Compétences */}
              <Section label="compétences techniques par domaine">
                <div className="grid sm:grid-cols-3 gap-4">
                  {SKILLS.map(({ cat, emoji, items }, i) => (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl p-5"
                      style={{
                        background: "var(--card)",
                        border: "1px solid rgba(240,236,229,0.07)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--primary)",
                          marginBottom: "12px",
                          fontFamily: "'DM Mono', monospace",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>{emoji}</span>
                        {cat}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-lg"
                            style={{
                              fontSize: "12px",
                              color: "var(--muted-foreground)",
                              background: "rgba(240,236,229,0.05)",
                              border: "1px solid rgba(240,236,229,0.08)",
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* Compétences acquises (défilement horizontal) */}
              <Section label="compétences acquises">
                <div className="flex flex-col gap-6">
                  {COMPETENCES_ACQUISES.map((group, i) => (
                    <motion.div
                      key={group.domain}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <p
                        className="flex items-center gap-2 mb-3"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: "14px",
                        }}
                      >
                        <span style={{ fontSize: "16px" }}>{group.emoji}</span>
                        {group.domain}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          overflowX: "auto",
                          paddingBottom: "6px",
                          scrollbarWidth: "thin",
                        }}
                      >
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="px-4 py-2.5 rounded-xl"
                            style={{
                              fontSize: "12.5px",
                              color: "var(--foreground)",
                              background: "rgba(200,245,63,0.06)",
                              border: "1px solid rgba(200,245,63,0.15)",
                              whiteSpace: "nowrap",
                              flexShrink: 0,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
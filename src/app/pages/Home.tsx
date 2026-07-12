import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Download, Sparkles, Code2, BarChart3, Workflow } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "../components/photo-profil/jordipo.jpg";

const PHOTO_URL = profilePhoto;

const ROLES = [
  "Développeur Full Stack",
  "Data Scientist",
  "Intégrateur de Solutions",
];

const STATS = [
  { value: "9+", label: "Projets réalisés" },
  { value: "3", label: "Domaines d'expertise" },
  { value: "2", label: "Licences universitaires" },
];

const SERVICES = [
  {
    icon: <Code2 size={22} />,
    title: "Full Stack",
    desc: "Conception et développement d'applications web complètes, du frontend au backend, avec des architectures modernes et scalables.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Data Scientist",
    desc: "Analyse de données, modélisation statistique et machine learning, appuyés sur une solide formation en mathématiques.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Intégrateur de Solutions",
    desc: "Interconnexion d'écosystèmes logiciels, administration système & réseau, déploiement d'infrastructures fiables et sécurisées.",
  },
];

/* ── Stack technique par domaine avec emojis réels ─────────── */
const TECH_DOMAINS: { domain: string; emoji: string; items: { name: string; emoji: string }[] }[] = [
  {
    domain: "Full Stack",
    emoji: "💻",
    items: [
      { name: "JavaScript", emoji: "🟨" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "React", emoji: "⚛️" },
      { name: "Next.js", emoji: "▲" },
      { name: "Node.js", emoji: "🟢" },
      { name: "Express", emoji: "🚂" },
      { name: "HTML5", emoji: "🌐" },
      { name: "CSS3 / Tailwind", emoji: "🎨" },
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "Git / GitHub", emoji: "🔧" },
    ],
  },
  {
    domain: "Data Scientist",
    emoji: "📊",
    items: [
      { name: "Python", emoji: "🐍" },
      { name: "SQL", emoji: "🗄️" },
      { name: "Pandas", emoji: "🐼" },
      { name: "NumPy", emoji: "🔢" },
      { name: "Scikit-learn", emoji: "🤖" },
      { name: "TensorFlow", emoji: "🧠" },
      { name: "Jupyter Notebook", emoji: "📓" },
      { name: "Matplotlib", emoji: "📉" },
      { name: "Power BI", emoji: "📈" },
      { name: "Excel", emoji: "📗" },
    ],
  },
  {
    domain: "Intégrateur de Solutions",
    emoji: "🔗",
    items: [
      { name: "Linux", emoji: "🐧" },
      { name: "Windows Server", emoji: "🪟" },
      { name: "Docker", emoji: "🐳" },
      { name: "API REST", emoji: "🔌" },
      { name: "Nginx", emoji: "🌍" },
      { name: "Bash", emoji: "💻" },
      { name: "PowerShell", emoji: "⚙️" },
      { name: "Prometheus / Zabbix", emoji: "📡" },
      { name: "Réseaux / VPN", emoji: "🛰️" },
      { name: "Firebase", emoji: "🔥" },
    ],
  },
];

/* ── Animated role ticker ─────────────────────────────────── */
function RoleTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "36px",
        overflow: "hidden",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            fontFamily: "'DM Mono', monospace",
            fontWeight: 500,
            color: "var(--primary)",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--primary)",
              flexShrink: 0,
            }}
          />
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ── FadeIn helper ────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Ligne de compétences à défilement horizontal ─────────── */
function TechScrollRow({
  domain,
  emoji,
  items,
}: {
  domain: string;
  emoji: string;
  items: { name: string; emoji: string }[];
}) {
  // On duplique la liste pour un défilement fluide et continu
  const loop = [...items, ...items];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4 px-1">
        <span style={{ fontSize: "18px" }}>{emoji}</span>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "var(--foreground)",
          }}
        >
          {domain}
        </p>
      </div>

      <div
        className="scroll-row"
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          paddingBottom: "6px",
          scrollbarWidth: "thin",
        }}
      >
        {loop.map((t, i) => (
          <span
            key={t.name + i}
            className="px-4 py-2 rounded-full cursor-default"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              border: "1px solid rgba(240,236,229,0.1)",
              color: "var(--muted-foreground)",
              background: "var(--card)",
              whiteSpace: "nowrap",
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "15px" }}>{t.emoji}</span>
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Component ────────────────────────────────────────────── */
export function Home() {
  return (
    <div style={{ paddingTop: "88px" }}>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <FadeIn delay={0.05}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{
                  background: "rgba(200,245,63,0.1)",
                  border: "1px solid rgba(200,245,63,0.25)",
                  fontSize: "12px",
                  color: "var(--primary)",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"
                />
                Disponible pour de nouveaux projets
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(44px, 8vw, 80px)",
                  lineHeight: 1.0,
                  letterSpacing: "-2px",
                  marginBottom: "8px",
                }}
              >
                <span style={{ color: "var(--primary)" }}>Jordi</span>{" "}
                KITOKO
              </h1>
            </FadeIn>

            {/* ── Animated role ticker ──── */}
            <FadeIn delay={0.15}>
              <RoleTicker />
            </FadeIn>

            {/* Thin separator line */}
            <FadeIn delay={0.18}>
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "linear-gradient(90deg, var(--primary), transparent)",
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                  maxWidth: "420px",
                  marginBottom: "32px",
                }}
              >
                Basé à{" "}
                <strong style={{ color: "var(--foreground)" }}>
                  Congo-Brazzaville
                </strong>
                , étudiant en mathématiques et en génie informatique à la
                Faculté des Sciences et Techniques de l'Université Marien
                Ngouabi, je combine rigueur scientifique et expertise
                technique pour concevoir des applications web, analyser des
                données et intégrer des solutions numériques de bout en bout.
              </p>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl no-underline transition-all"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 28px rgba(200,245,63,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Voir mes projets
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="/cv-kitoko.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl no-underline transition-all"
                  style={{
                    border: "1px solid rgba(240,236,229,0.15)",
                    color: "var(--foreground)",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(200,245,63,0.4)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(240,236,229,0.15)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--foreground)";
                  }}
                >
                  <Download size={15} />
                  Télécharger CV
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Photo column */}
          <FadeIn delay={0.2} className="relative">
            <div className="relative mx-auto" style={{ maxWidth: 400 }}>
              {/* glow */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(200,245,63,0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.1)",
                }}
              />
              {/* photo frame */}
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid rgba(200,245,63,0.2)",
                  aspectRatio: "5/6",
                  background: "#111",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <img
                  src={PHOTO_URL}
                  alt="Jordi KITOKO — Full Stack Developer / Data Scientist / Intégrateur de Solutions"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)",
                  }}
                />
              </motion.div>

              {/* floating badge */}
              
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(240,236,229,0.06)",
          borderBottom: "1px solid rgba(240,236,229,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "40px",
                  color: "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  marginTop: "6px",
                }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services / Domaines ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            // ce que je fais
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-1px",
            }}
          >
            Mes 3 domaines d'expertise
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(240,236,229,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(200,245,63,0.12)",
                  color: "var(--primary)",
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.7,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tech stack (défilement horizontal par domaine) ─── */}
      <section style={{ borderTop: "1px solid rgba(240,236,229,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "var(--muted-foreground)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Technologies maîtrisées par domaine
          </p>
          {TECH_DOMAINS.map((d) => (
            <TechScrollRow key={d.domain} domain={d.domain} emoji={d.emoji} items={d.items} />
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111 0%, #161a0e 100%)",
            border: "1px solid rgba(200,245,63,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(200,245,63,0.12) 0%, transparent 60%)",
            }}
          />
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "var(--primary)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            // travaillons ensemble
          </p>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 5vw, 52px)",
              letterSpacing: "-1.5px",
              marginBottom: "16px",
            }}
          >
            Vous avez un projet
            <br />
            en tête ?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--muted-foreground)",
              marginBottom: "36px",
              maxWidth: "400px",
              margin: "0 auto 36px",
            }}
          >
            Discutons de votre prochaine grande idée et créons quelque chose
            d'exceptionnel ensemble.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl no-underline"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 8px 32px rgba(200,245,63,0.3)",
            }}
          >
            Me contacter
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
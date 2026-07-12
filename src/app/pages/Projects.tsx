import { motion } from "motion/react";
import {
  BarChart3,
  Brain,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  Gauge,
  Github,
  Layers,
  LineChart,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react";
import { useState } from "react";

type Status = "Terminé" | "En cours";

const PROJECTS = [
  // ── Full Stack ──────────────────────────────────────────
  {
    id: 1,
    title: "Portfolio Personnel",
    tagline: "Site vitrine développeur, full stack et responsive",
    desc: "Conception et développement de ce portfolio avec React, TypeScript et animations fluides, pensé pour présenter mes trois domaines d'expertise.",
    domain: "Full Stack",
    emoji: "💻",
    status: "Terminé" as Status,
    year: "2026",
    stack: ["React ⚛️", "TypeScript 🔷", "Tailwind CSS 🎨", "Vite ⚡"],
    icon: Code2,
    accent: "#c8f53f",
    github: "https://github.com/jordi-18/Portfolio",
    live: null as string | null,
  },
  {
    id: 2,
    title: "E-Commerce Congo Store",
    tagline: "Plateforme e-commerce complète (front + back)",
    desc: "Application e-commerce avec catalogue produits, panier, authentification et paiement, architecture MVC et API REST reliée à une base PostgreSQL.",
    domain: "Full Stack",
    emoji: "💻",
    status: "Encours" as Status,
    year: "2025",
    stack: ["React ⚛️", "Node.js 🟢", "Express 🚂", "PostgreSQL 🐘"],
    icon: Layers,
    accent: "#7dd3fc",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
  {
    id: 3,
    title: "Gestion Académique FST",
    tagline: "Plateforme de gestion des étudiants et des notes",
    desc: "Application web pour la gestion des inscriptions, des emplois du temps et des résultats des étudiants de la Faculté des Sciences et Techniques.",
    domain: "Full Stack",
    emoji: "💻",
    status: "En cours" as Status,
    year: "2026",
    stack: ["Next.js ▲", "TypeScript 🔷", "MongoDB 🍃"],
    icon: Code2,
    accent: "#c8f53f",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },

  //── Data Scientist ──────────────────────────────────────
  {
    id: 4,
    title: "Analyse Prédictive des Ventes",
    tagline: "Modèle de prévision basé sur des données historiques",
    desc: "Nettoyage, exploration et modélisation de données de ventes pour prédire les tendances futures à l'aide de régressions et d'algorithmes de machine learning.",
    domain: "Data Scientist",
    emoji: "📊",
    status: "En cours" as Status,
    year: "2025",
    stack: ["Python 🐍", "Pandas 🐼", "Scikit-learn 🤖", "Matplotlib 📉"],
    icon: LineChart,
    accent: "#34d399",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
  {
    id: 5,
    title: "Dashboard d'Analyse de Données",
    tagline: "Tableau de bord interactif pour la visualisation de données",
    desc: "Traitement de jeux de données et construction d'un tableau de bord interactif présentant des indicateurs clés et des visualisations pertinentes.",
    domain: "Data Scientist",
    emoji: "📊",
    status: "En examen" as Status,
    year: "2025",
    stack: ["Python 🐍", "Jupyter 📓", "Power BI 📈", "SQL 🗄️"],
    icon: BarChart3,
    accent: "#facc15",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
  {
    id: 6,
    title: "Système de Recommandation",
    tagline: "Moteur de recommandation basé sur le machine learning",
    desc: "Développement d'un système de recommandation de contenu basé sur le filtrage collaboratif et des algorithmes de similarité.",
    domain: "Data Scientist",
    emoji: "📊",
    status: "En cours" as Status,
    year: "2026",
    stack: ["Python 🐍", "NumPy 🔢", "TensorFlow 🧠"],
    icon: Brain,
    accent: "#a78bfa",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },

  // ── Intégrateur de Solutions ─────────────────────────────
  {
    id: 7,
    title: "CoreNet Lab",
    tagline: "Infrastructure réseau d'entreprise haute disponibilité",
    desc: "Conception d'une architecture LAN/WAN avec segmentation VLAN, routage inter-VLAN, DHCP, DNS, firewalling et supervision.",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    status: "Terminé" as Status,
    year: "2026",
    stack: ["Cisco 🌐", "VLAN 🔀", "pfSense 🛡️", "Zabbix 📡"],
    icon: Network,
    accent: "#fb7185",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
  {
    id: 8,
    title: "ServerOps Suite",
    tagline: "Administration Linux/Windows avec automatisation",
    desc: "Mise en place de serveurs AD DS, fichiers, sauvegarde, durcissement SSH, scripts d'automatisation et monitoring des serveurs.",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    status: "En examen" as Status,
    year: "2026",
    stack: ["Windows Server 🪟", "Linux 🐧", "Bash 💻", "Docker 🐳"],
    icon: ServerCog,
    accent: "#7dd3fc",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
  {
    id: 9,
    title: "Helpdesk Connect",
    tagline: "Intégration ITSM, inventaire et alerting",
    desc: "Interconnexion d'un helpdesk, d'un inventaire parc et d'un canal de notifications pour centraliser tickets, équipements et incidents réseau.",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    status: "En cours" as Status,
    year: "2026",
    stack: ["GLPI 🗂️", "API REST 🔌", "PostgreSQL 🐘"],
    icon: Workflow,
    accent: "#facc15",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
  {
    id: 10,
    title: "ObservaStack",
    tagline: "Supervision centralisée système, réseau et applicative",
    desc: "Stack de monitoring pour serveurs, liens réseau et services web avec alertes, tableaux de bord et historique de disponibilité.",
    domain: "Intégration de Solutions",
    emoji: "🔗",
    status: "En cours" as Status,
    year: "2026",
    stack: ["Prometheus 📡", "Grafana 📊", "SNMP 🌍"],
    icon: Gauge,
    accent: "#34d399",
    github: "https://github.com/jordi-18",
    live: null as string | null,
  },
];

const DOMAINS = [
  { name: "Tous", emoji: "✨" },
  { name: "Full Stack", emoji: "💻" },
  { name: "Data Scientist", emoji: "📊" },
  { name: "Intégration de Solutions", emoji: "🔗" },
];

const STATS = [
  { value: String(PROJECTS.length), label: "projets au total" },
  { value: "3", label: "domaines d'expertise" },
  { value: String(PROJECTS.filter((p) => p.status === "Terminé").length), label: "projets terminés" },
];

export function Projects() {
  const [active, setActive] = useState("Tous");
  const filtered = active === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.domain === active);
  const done = filtered.filter((p) => p.status === "Terminé");
  const inProgress = filtered.filter((p) => p.status === "En cours");

  return (
    <div style={{ paddingTop: "88px", overflow: "hidden" }}>
      <section className="max-w-6xl mx-auto px-6 py-14 md:py-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div
            className="relative rounded-2xl p-6 md:p-8 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(200,245,63,0.14), rgba(125,211,252,0.08) 42%, rgba(17,17,17,0.94))",
              border: "1px solid rgba(240,236,229,0.1)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(240,236,229,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,229,0.08) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <div className="relative">
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "var(--primary)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                portefeuille de projets
              </p>
              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(38px, 7vw, 72px)",
                  letterSpacing: "-2px",
                  lineHeight: 0.98,
                  marginBottom: "22px",
                }}
              >
                Projets Full Stack, Data Science & Intégration.
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                  maxWidth: "620px",
                }}
              >
                Des réalisations réparties sur mes trois domaines d'expertise, du
                développement web à l'analyse de données, jusqu'au déploiement
                d'infrastructures et à l'intégration de solutions.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mt-8">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl px-4 py-3"
                    style={{
                      background: "rgba(10,10,10,0.45)",
                      border: "1px solid rgba(240,236,229,0.09)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 900,
                        fontSize: "28px",
                        color: "var(--primary)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--muted-foreground)", marginTop: "6px" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Filtre par domaine ─────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {DOMAINS.map((d) => (
            <button
              key={d.name}
              onClick={() => setActive(d.name)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all"
              style={{
                fontSize: "12px",
                fontWeight: active === d.name ? 800 : 500,
                background: active === d.name ? "var(--primary)" : "rgba(240,236,229,0.04)",
                color: active === d.name ? "var(--primary-foreground)" : "var(--muted-foreground)",
                border: `1px solid ${active === d.name ? "var(--primary)" : "rgba(240,236,229,0.09)"}`,
                boxShadow: active === d.name ? "0 10px 24px rgba(200,245,63,0.18)" : "none",
              }}
            >
              <span>{d.emoji}</span>
              {d.name}
            </button>
          ))}
        </div>

        {/* ── Projets Terminés (défilement horizontal) ───── */}
        <ProjectRow
          title="Terminés"
          icon={<CheckCircle2 size={16} />}
          color="#c8f53f"
          projects={done}
        />

        {/* ── Projets En cours (défilement horizontal) ───── */}
        <ProjectRow
          title="En cours"
          icon={<Clock size={16} />}
          color="#facc15"
          projects={inProgress}
        />
      </section>
    </div>
  );
}

function ProjectRow({
  title,
  icon,
  color,
  projects,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  projects: typeof PROJECTS;
}) {
  if (projects.length === 0) return null;

  return (
    <div className="mb-14">
      <div className="flex items-center gap-2 mb-5 px-1">
        <span style={{ color }}>{icon}</span>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "18px",
          }}
        >
          {title}
        </p>
        <span
          className="px-2 py-0.5 rounded-full"
          style={{
            fontSize: "11px",
            fontFamily: "'DM Mono', monospace",
            color: "var(--muted-foreground)",
            border: "1px solid rgba(240,236,229,0.1)",
          }}
        >
          {projects.length}
        </span>
      </div>

      <div
        className="scroll-row"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "10px",
          scrollbarWidth: "thin",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project: p, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const Icon = p.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(240,236,229,0.055), rgba(240,236,229,0.025))",
        border: "1px solid rgba(240,236,229,0.09)",
        minWidth: "320px",
        maxWidth: "320px",
        flexShrink: 0,
      }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
              style={{
                background: `${p.accent}18`,
                color: p.accent,
                border: `1px solid ${p.accent}44`,
              }}
            >
              <Icon size={20} />
            </div>
            <div>
              <span
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: p.accent,
                  background: `${p.accent}12`,
                  border: `1px solid ${p.accent}30`,
                }}
              >
                {p.emoji} {p.domain}
              </span>
              <p style={{ fontSize: "11px", color: "var(--muted-foreground)", marginTop: "6px" }}>
                {p.year} · {p.status}
              </p>
            </div>
          </div>
        </div>

        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: "19px",
            letterSpacing: "-0.4px",
            lineHeight: 1.1,
            marginBottom: "6px",
          }}
        >
          {p.title}
        </h2>
        <p style={{ fontSize: "13px", color: p.accent, marginBottom: "10px", fontWeight: 700 }}>
          {p.tagline}
        </p>
        <p style={{ fontSize: "13px", color: "var(--muted-foreground)", lineHeight: 1.65, marginBottom: "16px" }}>
          {p.desc}
        </p>

        <div className="mb-4">
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              color: "rgba(240,236,229,0.52)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}
          >
            stack technique
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((item) => (
              <span
                key={item}
                className="px-2 py-1 rounded-md"
                style={{
                  fontSize: "10px",
                  background: "rgba(240,236,229,0.05)",
                  color: "var(--foreground)",
                  border: "1px solid rgba(240,236,229,0.08)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="flex flex-wrap items-center gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(240,236,229,0.08)" }}
        >
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg no-underline transition-all"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              border: "1px solid rgba(240,236,229,0.1)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${p.accent}66`;
              e.currentTarget.style.color = p.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,236,229,0.1)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            <Github size={13} /> Dépôt
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg no-underline transition-all"
              style={{
                fontSize: "12px",
                fontWeight: 800,
                background: p.accent,
                color: "#0a0a0a",
              }}
            >
              Démo <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
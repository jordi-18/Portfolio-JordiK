import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react";

// ─── Données ──────────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    icon: "🐙",
    label: "GitHub",
    handle: "@jordi-18",
    href: "https://github.com/jordi-18",
    color: "#f0ece5",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    handle: "jordi-kitoko",
    href: "https://www.linkedin.com/in/jordi-kitoko-561ab5418",
    color: "#0A66C2",
  },
  {
    icon: "📱",
    label: "WhatsApp — Contact principal",
    handle: "+242 06-784-74-61",
    href: "https://wa.me/242067847461",
    color: "#25D366",
  },
  {
    icon: "📱",
    label: "WhatsApp — Contact alternatif",
    handle: "+242 05-389-24-42",
    href: "https://wa.me/242053892442",
    color: "#25D366",
  },
];

const CONTACT_INFO = [
  { icon: <Mail size={16} />, label: "Email", value: "jokitoko18@gmail.com" },
  {
    icon: <MapPin size={16} />,
    label: "Localisation",
    value: "Brazzaville, Congo · Remote OK",
  },
  {
    icon: <Clock size={16} />,
    label: "Disponibilité",
    value: "Réponse sous 24h",
  },
];

const PROJECT_DOMAINS = [
  { value: "Full Stack", label: "💻 Full Stack" },
  { value: "Data Scientist", label: "📊 Data Scientist" },
  { value: "Intégration de Solutions", label: "🔗 Intégration de Solutions" },
  { value: "Autre", label: "✨ Autre" },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  domain: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", domain: "", subject: "", message: "" };

// ─── Composant principal ──────────────────────────────────────────────────────
export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): Partial<FormState> {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Votre nom est requis";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email invalide";
    if (!form.domain.trim()) e.domain = "Sélectionnez un domaine";
    if (!form.subject.trim()) e.subject = "L'objet est requis";
    if (form.message.trim().length < 10)
      e.message = "Message trop court (min. 10 caractères)";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSending(false);
    setSent(true);
  }

  function handleReset() {
    setSent(false);
    setForm(EMPTY_FORM);
    setErrors({});
  }

  return (
    <div style={{ paddingTop: "88px" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* ── En-tête ── */}
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
             contact
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
            Parlons de votre
            <br />
            prochain projet.
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "var(--muted-foreground)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Développeur Full Stack, Data Scientist &amp; Intégrateur de
            Solutions, basé à Brazzaville, Congo. Que vous ayez une
            application à construire, des données à analyser ou une
            infrastructure à déployer  je suis là.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* ── Colonne gauche ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {/* Informations de contact */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(240,236,229,0.07)",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Informations
              </p>
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(200,245,63,0.1)",
                        color: "var(--primary)",
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "var(--muted-foreground)",
                          marginBottom: "2px",
                        }}
                      >
                        {label}
                      </p>
                      <p style={{ fontSize: "13px", fontWeight: 500 }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(240,236,229,0.07)",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Réseaux &amp; Contact
              </p>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl no-underline transition-all"
                    style={{
                      border: "1px solid rgba(240,236,229,0.07)",
                      background: "rgba(240,236,229,0.02)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${color}40`;
                      e.currentTarget.style.background = `${color}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(240,236,229,0.07)";
                      e.currentTarget.style.background =
                        "rgba(240,236,229,0.02)";
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: "17px" }}>{icon}</span>
                      <div>
                        <p style={{ fontSize: "12px", fontWeight: 600 }}>
                          {label}
                        </p>
                        <p
                          style={{
                            fontSize: "11px",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {handle}
                        </p>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Badge disponibilité */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: "rgba(200,245,63,0.07)",
                border: "1px solid rgba(200,245,63,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(200,245,63,0.12)",
                  color: "var(--primary)",
                }}
              >
                <MessageSquare size={18} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  Disponible pour freelance
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                    marginTop: "2px",
                  }}
                >
                  Développeur Full Stack · Data Scientist · Intégrateur de Solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <div
              className="rounded-2xl p-7"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(240,236,229,0.07)",
              }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.1,
                      }}
                    >
                      <CheckCircle2
                        size={52}
                        style={{ color: "var(--primary)" }}
                      />
                    </motion.div>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 800,
                        fontSize: "24px",
                      }}
                    >
                      Message envoyé !
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--muted-foreground)",
                        maxWidth: "320px",
                      }}
                    >
                      Merci pour votre message. Je vous répondrai dans les plus
                      brefs délais, généralement sous 24h.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-4 px-6 py-2.5 rounded-xl"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        marginBottom: "4px",
                      }}
                    >
                      Envoyez-moi un message
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field
                        label="Nom complet"
                        id="name"
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                        error={errors.name}
                      />
                      <Field
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={form.email}
                        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                        error={errors.email}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="domain"
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--muted-foreground)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Domaine du projet
                      </label>
                      <select
                        id="domain"
                        value={form.domain}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, domain: e.target.value }))
                        }
                        className="w-full rounded-xl px-4 py-3 outline-none transition-all"
                        style={{
                          background: "var(--muted)",
                          color: form.domain ? "var(--foreground)" : "var(--muted-foreground)",
                          border: `1px solid ${
                            errors.domain ? "var(--destructive)" : "rgba(240,236,229,0.08)"
                          }`,
                          fontSize: "13.5px",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(200,245,63,0.4)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.domain
                            ? "var(--destructive)"
                            : "rgba(240,236,229,0.08)";
                        }}
                      >
                        <option value="" disabled>
                          Sélectionnez un domaine
                        </option>
                        {PROJECT_DOMAINS.map((d) => (
                          <option key={d.value} value={d.value}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                      {errors.domain && (
                        <p
                          style={{
                            fontSize: "11px",
                            color: "var(--destructive)",
                            marginTop: "4px",
                          }}
                        >
                          {errors.domain}
                        </p>
                      )}
                    </div>

                    <Field
                      label="Objet"
                      id="subject"
                      placeholder="Ex : Développement d'une application web"
                      value={form.subject}
                      onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                      error={errors.subject}
                    />

                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--muted-foreground)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Décrivez votre projet, votre idée ou votre question…"
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className="w-full rounded-xl px-4 py-3 outline-none resize-none transition-all"
                        style={{
                          background: "var(--muted)",
                          color: "var(--foreground)",
                          border: `1px solid ${
                            errors.message
                              ? "var(--destructive)"
                              : "rgba(240,236,229,0.08)"
                          }`,
                          fontSize: "13.5px",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(200,245,63,0.4)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.message
                            ? "var(--destructive)"
                            : "rgba(240,236,229,0.08)";
                        }}
                      />
                      {errors.message && (
                        <p
                          style={{
                            fontSize: "11px",
                            color: "var(--destructive)",
                            marginTop: "4px",
                          }}
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={sending ? {} : { scale: 1.02 }}
                      whileTap={sending ? {} : { scale: 0.98 }}
                      disabled={sending}
                      className="flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all"
                      style={{
                        background: sending
                          ? "rgba(200,245,63,0.5)"
                          : "var(--primary)",
                        color: "var(--primary-foreground)",
                        fontSize: "14px",
                        fontWeight: 700,
                        cursor: sending ? "not-allowed" : "pointer",
                        boxShadow: sending
                          ? "none"
                          : "0 6px 24px rgba(200,245,63,0.25)",
                        border: "none",
                      }}
                    >
                      {sending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 rounded-full border-2"
                            style={{
                              borderColor: "rgba(10,10,10,0.3)",
                              borderTopColor: "var(--primary-foreground)",
                              display: "inline-block",
                            }}
                          />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Envoyer le message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Composant Field réutilisable ─────────────────────────────────────────────
interface FieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--muted-foreground)",
          display: "block",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 outline-none transition-all"
        style={{
          background: "var(--muted)",
          color: "var(--foreground)",
          border: `1px solid ${
            error ? "var(--destructive)" : "rgba(240,236,229,0.08)"
          }`,
          fontSize: "13.5px",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(200,245,63,0.4)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error
            ? "var(--destructive)"
            : "rgba(240,236,229,0.08)";
        }}
      />
      {error && (
        <p
          style={{
            fontSize: "11px",
            color: "var(--destructive)",
            marginTop: "4px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
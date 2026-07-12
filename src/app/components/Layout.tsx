import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/projects", label: "Projets" },
  { to: "/certificates", label: "Certificats" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      {/* ── Nav ─────────────────────────── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(240,236,229,0.06)" : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          {/* logo */}
          <NavLink to="/" className="flex items-center gap-2 no-underline">
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "22px", color: "var(--foreground)", letterSpacing: "-0.5px" }}>
              KITO<span style={{ color: "var(--primary)" }}>KO</span>
            </span>
          </NavLink>

          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className="relative px-4 py-2 rounded-lg no-underline transition-colors"
                  style={({ isActive }) => ({
                    fontSize: "13.5px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: "rgba(200,245,63,0.08)", border: "1px solid rgba(200,245,63,0.2)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jordi-18"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg no-underline transition-all"
              style={{ fontSize: "13px", fontWeight: 600, background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              <span style={{ fontSize: "14px" }}>🐙</span>
              GitHub
            </a>
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ background: "rgba(240,236,229,0.06)" }}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden md:hidden"
              style={{ borderTop: "1px solid rgba(240,236,229,0.06)", background: "rgba(10,10,10,0.98)" }}
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className="px-3 py-3 rounded-lg no-underline"
                    style={({ isActive }) => ({
                      fontSize: "15px",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "var(--primary)" : "var(--foreground)",
                      background: isActive ? "rgba(200,245,63,0.08)" : "transparent",
                    })}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Page content ────────────────── */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer ──────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(240,236,229,0.08)", marginTop: "120px" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.5px" }}>
              KITO<span style={{ color: "var(--primary)" }}>KO</span>
            </span>
            <p style={{ fontSize: "12px", color: "var(--muted-foreground)", marginTop: "4px" }}>
              Full Stack · Data Scientist · Intégrateur de Solutions
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/jordi-18", emoji: "🐙", label: "GitHub" },
              { href: "https://www.linkedin.com/in/jordi-kitoko-561ab5418", emoji: "💼", label: "LinkedIn" },
              { href: "https://wa.me/242067847461", emoji: "📱", label: "WhatsApp" },
            ].map(({ href, emoji, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg no-underline transition-all"
                style={{ fontSize: "12px", color: "var(--muted-foreground)", border: "1px solid rgba(240,236,229,0.08)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--primary)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,245,63,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,236,229,0.08)"; }}
              >
                <span style={{ fontSize: "14px" }}>{emoji}</span>
                {label}
              </a>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
            © {new Date().getFullYear()} Kitoko. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
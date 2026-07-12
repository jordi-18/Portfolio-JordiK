import { useState } from "react";
import { Trash2, Edit3, Check, X } from "lucide-react";
import { motion } from "motion/react";

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: Date;
}

export const NOTE_COLORS = [
  { bg: "#2a1f4a", accent: "#a78bfa" },
  { bg: "#1a2f3a", accent: "#34d399" },
  { bg: "#2e1a32", accent: "#f472b6" },
  { bg: "#2a2410", accent: "#fbbf24" },
  { bg: "#1a1f3a", accent: "#60a5fa" },
  { bg: "#2a1a1a", accent: "#f87171" },
];

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, content: string) => void;
}

export function NoteCard({ note, onDelete, onUpdate }: NoteCardProps) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [hovered, setHovered] = useState(false);

  const colorObj = NOTE_COLORS.find((c) => c.bg === note.color) ?? NOTE_COLORS[0];

  function save() {
    onUpdate(note.id, title, content);
    setEditing(false);
  }

  function cancel() {
    setTitle(note.title);
    setContent(note.content);
    setEditing(false);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88, y: -10 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="rounded-2xl p-4 flex flex-col gap-2 relative overflow-hidden cursor-default"
      style={{
        background: colorObj.bg,
        border: `1px solid ${colorObj.accent}30`,
        boxShadow: hovered ? `0 8px 32px ${colorObj.accent}25` : `0 2px 12px rgba(0,0,0,0.3)`,
        minHeight: 140,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* decorative glow top-right */}
      <span
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${colorObj.accent}30 0%, transparent 70%)` }}
      />

      {editing ? (
        <>
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded px-2 py-1 outline-none w-full placeholder:opacity-40"
            style={{ background: "rgba(255,255,255,0.08)", color: "var(--foreground)", fontSize: "13px" }}
            placeholder="Titre"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="rounded px-2 py-1 outline-none resize-none w-full placeholder:opacity-40"
            style={{ background: "rgba(255,255,255,0.08)", color: "var(--foreground)", fontSize: "13px" }}
            placeholder="Contenu de la note…"
          />
          <div className="flex gap-2 justify-end mt-1">
            <button onClick={cancel} className="p-1.5 rounded hover:bg-white/10 transition-colors" style={{ color: "var(--muted-foreground)" }}>
              <X size={13} />
            </button>
            <button onClick={save} className="p-1.5 rounded hover:bg-white/10 transition-colors" style={{ color: colorObj.accent }}>
              <Check size={13} />
            </button>
          </div>
        </>
      ) : (
        <>
          {note.title && (
            <p style={{ color: colorObj.accent, fontSize: "13px", fontWeight: 600 }}>{note.title}</p>
          )}
          <p className="leading-relaxed whitespace-pre-wrap flex-1" style={{ color: "var(--foreground)", opacity: 0.85, fontSize: "12.5px" }}>
            {note.content}
          </p>
          <p className="mt-auto pt-1" style={{ color: colorObj.accent, opacity: 0.5, fontSize: "10px" }}>
            {note.createdAt.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute top-3 right-3 flex gap-1"
          >
            <button
              onClick={() => setEditing(true)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: colorObj.accent }}
            >
              <Edit3 size={12} />
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: "var(--destructive)" }}
            >
              <Trash2 size={12} />
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

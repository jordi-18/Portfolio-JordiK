import { useState } from "react";
import { Check, Trash2, Flag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export type Priority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  category: string;
  createdAt: Date;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityConfig: Record<Priority, { color: string; glow: string; label: string }> = {
  low:    { color: "#34d399", glow: "rgba(52,211,153,0.35)",  label: "faible" },
  medium: { color: "#fbbf24", glow: "rgba(251,191,36,0.35)",  label: "moyenne" },
  high:   { color: "#f43f8e", glow: "rgba(244,63,142,0.45)", label: "haute" },
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [hovered, setHovered] = useState(false);
  const pc = priorityConfig[task.priority];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="group relative flex items-center gap-3 px-4 py-3.5 border-b border-border last:border-b-0 transition-colors"
      style={{ background: hovered ? "rgba(124,58,237,0.07)" : "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* left priority bar */}
      <motion.span
        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
        style={{ background: pc.color, boxShadow: `0 0 8px ${pc.glow}` }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.1 }}
      />

      {/* checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
        style={{
          borderColor: task.completed ? pc.color : "rgba(139,132,176,0.5)",
          background: task.completed ? pc.color : "transparent",
          boxShadow: task.completed ? `0 0 10px ${pc.glow}` : "none",
        }}
      >
        <AnimatePresence>
          {task.completed && (
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Check size={10} color="#fff" strokeWidth={3.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <motion.span
        className="flex-1"
        animate={{
          opacity: task.completed ? 0.4 : 1,
          textDecoration: task.completed ? "line-through" : "none",
        }}
        style={{ color: "var(--foreground)", fontSize: "13.5px" }}
      >
        {task.title}
      </motion.span>

      {/* priority dot */}
      <span
        className="flex-shrink-0 rounded-full"
        style={{
          width: 7,
          height: 7,
          background: pc.color,
          boxShadow: `0 0 7px ${pc.glow}`,
        }}
      />

      <AnimatePresence>
        {hovered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.12 }}
            onClick={() => onDelete(task.id)}
            className="flex-shrink-0 transition-colors"
            style={{ color: "var(--muted-foreground)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--destructive)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
          >
            <Trash2 size={13} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

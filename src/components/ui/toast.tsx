"use client";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Toast = {
  id: string;
  title?: string;
  description?: string;
  variant?: "success" | "error" | "info" | "warning";
  duration?: number; // ms
};

type ToastContextValue = {
  toast: (t: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((t: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2);
    const duration = t.duration ?? 3500;
    setToasts((prev) => [...prev, { id, ...t }]);
    window.setTimeout(() => remove(id), duration);
  }, [remove]);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toaster toasts={toasts} onClose={remove} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

function Icon({ variant = "info" }: { variant?: Toast["variant"] }) {
  const map: Record<NonNullable<Toast["variant"]>, string> = {
    success: "✅",
    error: "🚫",
    info: "ℹ️",
    warning: "⚠️",
  };
  return <span className="mr-2 select-none">{map[variant]}</span>;
}

export function Toaster({ toasts, onClose }: { toasts: Toast[]; onClose: (id: string) => void }) {
  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-80 max-w-[92vw]">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className={cn(
            "rounded-xl shadow-2xl border p-3 px-4 text-sm bg-white/90 backdrop-blur-md animate-slide-in-left",
            t.variant === "success" && "border-green-200",
            t.variant === "error" && "border-red-200",
            t.variant === "info" && "border-blue-200",
            t.variant === "warning" && "border-yellow-200",
          )}
        >
          <div className="flex items-start">
            <Icon variant={t.variant} />
            <div className="flex-1">
              {t.title && <div className="font-semibold text-foreground">{t.title}</div>}
              {t.description && (
                <div className="text-muted-foreground text-xs mt-0.5">{t.description}</div>
              )}
            </div>
            <button
              onClick={() => onClose(t.id)}
              className="ml-3 text-muted-foreground hover:text-foreground"
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


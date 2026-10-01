"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { rice, spices, type Product } from "@/data/site";

export type CartLine = { id: string; qty: number };

type CartCtx = {
  lines: CartLine[];
  products: Record<string, Product>;
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string, qty: number) => void;
  remove: (id: string) => void;
  notify: (msg: string, severity?: "success" | "warning") => void;
};

const Ctx = createContext<CartCtx | null>(null);

const ALL: Record<string, Product> = Object.fromEntries([...rice, ...spices].map((p) => [p.id, p]));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<{ msg: string; severity: "success" | "warning" } | null>(null);

  const add = useCallback((id: string, qty: number) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found) return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
      return [...prev, { id, qty }];
    });
    setToast({ msg: "Added", severity: "success" });
  }, []);

  const remove = useCallback((id: string) => setLines((prev) => prev.filter((l) => l.id !== id)), []);
  const notify = useCallback((msg: string, severity: "success" | "warning" = "warning") => setToast({ msg, severity }), []);

  const value = useMemo<CartCtx>(() => {
    const total = lines.reduce((s, l) => s + ALL[l.id].price * l.qty, 0);
    return { lines, products: ALL, count: lines.length, total, open, setOpen, add, remove, notify };
  }, [lines, open, add, remove, notify]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <Snackbar
        open={!!toast}
        autoHideDuration={1600}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={toast?.severity ?? "success"} variant="filled" sx={{ borderRadius: 2.5, fontWeight: 600 }}>
          {toast?.msg}
        </Alert>
      </Snackbar>
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}

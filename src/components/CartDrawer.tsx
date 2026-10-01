"use client";

import { useState } from "react";
import { Box, Button, Drawer, IconButton, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartContext";
import { business, fmt } from "@/data/site";
import { brand } from "@/theme/theme";

export default function CartDrawer() {
  const { lines, products, total, open, setOpen, remove, notify } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const send = () => {
    if (!lines.length) return notify("Your cart is empty");
    if (!name.trim() || !phone.trim() || !address.trim()) return notify("Enter name, phone and address");
    let msg = "New order – Qasim Traders\n\n";
    lines.forEach((l) => {
      const p = products[l.id];
      msg += `- ${p.name}: ${l.qty}${p.kind === "rice" ? " bag (25 kg)" : " kg"} = ${fmt(p.price * l.qty)}\n`;
    });
    msg += `\nTotal: ${fmt(total)}\nName: ${name.trim()}\nPhone: ${phone.trim()}\nAddress: ${address.trim()}`;
    window.open(`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: { xs: "100%", sm: 440 }, bgcolor: brand.canvas } } }}>
      <Stack sx={{ height: "100%" }}>
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", px: 3, py: 2.2, bgcolor: "#fff", borderBottom: `1px solid ${brand.line}` }}>
          <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
            <ShoppingBagOutlinedIcon sx={{ color: brand.emerald }} />
            <Typography variant="h6">Your cart</Typography>
          </Stack>
          <IconButton onClick={() => setOpen(false)} aria-label="Close cart">
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box sx={{ flex: 1, overflowY: "auto", px: 3, py: 2.5 }}>
          {!lines.length ? (
            <Box sx={{ textAlign: "center", py: 8, color: brand.muted }}>
              <ShoppingBagOutlinedIcon sx={{ fontSize: 48, color: brand.line }} />
              <Typography sx={{ mt: 1.5, fontWeight: 600, color: brand.slate }}>Your cart is empty.</Typography>
              <Typography variant="body2">Add rice or spices to start.</Typography>
            </Box>
          ) : (
            <Stack spacing={1.5}>
              <AnimatePresence initial={false}>
                {lines.map((l) => {
                  const p = products[l.id];
                  return (
                    <Box
                      key={l.id}
                      component={motion.div}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      sx={{ display: "flex", gap: 1.5, p: 1.5, bgcolor: "#fff", borderRadius: 3, border: `1px solid ${brand.line}` }}
                    >
                      <Box component="img" src={p.image} alt={p.name} sx={{ width: 56, height: 56, objectFit: "cover", borderRadius: 2, flexShrink: 0 }} />
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 650, fontSize: 14.5 }}>{p.name}</Typography>
                        <Typography variant="body2" sx={{ color: brand.muted }}>
                          {l.qty} {p.kind === "rice" ? "bag (25 kg)" : "kg"} x {fmt(p.price)}
                        </Typography>
                        <Button size="small" onClick={() => remove(l.id)} sx={{ p: 0, minWidth: 0, mt: 0.3, color: "#B42318", fontWeight: 600 }}>
                          Remove
                        </Button>
                      </Box>
                      <Typography sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>{fmt(p.price * l.qty)}</Typography>
                    </Box>
                  );
                })}
              </AnimatePresence>
            </Stack>
          )}

          {lines.length > 0 && (
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Typography variant="overline" sx={{ color: brand.muted }}>Delivery details</Typography>
              <TextField size="small" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <TextField size="small" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth inputMode="tel" />
              <TextField size="small" placeholder="Delivery address and city" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth multiline minRows={2} />
            </Stack>
          )}
        </Box>

        <Box sx={{ px: 3, py: 2.5, bgcolor: "#fff", borderTop: `1px solid ${brand.line}` }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", mb: 2 }}>
            <Typography sx={{ color: brand.slate, fontWeight: 600 }}>Total</Typography>
            <Typography variant="h5">{fmt(total)}</Typography>
          </Stack>
          <Button fullWidth size="large" variant="contained" startIcon={<WhatsAppIcon />} onClick={send} sx={{ bgcolor: "#1F8A5B", "&:hover": { bgcolor: "#18734B" } }}>
            Send order on WhatsApp
          </Button>
        </Box>
      </Stack>
    </Drawer>
  );
}

"use client";

import { Fab } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { business } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      style={{ position: "fixed", right: 20, bottom: 20, zIndex: 1100 }}
    >
      <Fab href={business.whatsapp} target="_blank" rel="noopener" aria-label="Order on WhatsApp" sx={{ bgcolor: "#25D366", color: "#fff", "&:hover": { bgcolor: "#1EBE5A" }, boxShadow: "0 12px 30px rgba(37,211,102,0.45)" }}>
        <WhatsAppIcon />
      </Fab>
    </motion.div>
  );
}

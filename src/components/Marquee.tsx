"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand } from "@/theme/theme";

const words = ["Super Kernel Basmati", "1121 Sella", "Red Chilli", "Haldi", "Zeera", "Garam Masala", "Crispy Fried Onions", "Wholesale Supply", "Retail Packs"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <Box sx={{ bgcolor: brand.gold, color: brand.ink, py: 2, overflow: "hidden", borderBlock: `1px solid ${brand.goldDeep}` }}>
      <motion.div
        style={{ display: "flex", gap: 48, width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {row.map((w, i) => (
          <Typography key={i} sx={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 600, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
            {w}
            <Box component="span" sx={{ width: 7, height: 7, transform: "rotate(45deg)", bgcolor: "rgba(13,15,11,0.45)", display: "inline-block" }} />
          </Typography>
        ))}
      </motion.div>
    </Box>
  );
}

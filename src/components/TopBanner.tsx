"use client";

import { Box, Link, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { brand } from "@/theme/theme";

export default function TopBanner() {
  return (
    <Box sx={{ bgcolor: brand.emeraldNight, color: brand.champagneLight, py: 0.9, px: 2, textAlign: "center", position: "relative", zIndex: 1201 }}>
      <Typography variant="body2" sx={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 1, flexWrap: "wrap", justifyContent: "center", fontSize: 13 }}>
        <AutoAwesomeIcon sx={{ fontSize: 15, color: brand.champagne }} />
        Demo website prepared for you by Aevrix AI Technologies
        <Link href="#aevrix" underline="hover" sx={{ color: "#fff", fontWeight: 700 }}>
          Read our message →
        </Link>
      </Typography>
    </Box>
  );
}

"use client";

import { Box, Typography, Link } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { brand } from "@/theme/theme";

export default function TopBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1201,
        background: `linear-gradient(90deg, ${brand.goldDeep}, ${brand.gold} 50%, ${brand.goldDeep})`,
        color: brand.ink,
        py: 0.9,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
        <AutoAwesomeIcon sx={{ fontSize: 16 }} />
        Demo website prepared for you by Aevrix AI Technologies
        <Link href="#aevrix" underline="always" sx={{ color: brand.ink, fontWeight: 700 }}>
          Read our message →
        </Link>
      </Typography>
    </Box>
  );
}

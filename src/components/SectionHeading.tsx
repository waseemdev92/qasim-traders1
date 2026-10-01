"use client";

import { Box, Typography } from "@mui/material";
import Reveal from "./Reveal";
import { brand } from "@/theme/theme";

export default function SectionHeading({
  overline,
  title,
  subtitle,
  dark = false,
  align = "left",
  action,
}: {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  align?: "center" | "left";
  action?: React.ReactNode;
}) {
  return (
    <Reveal>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: align === "left" && action ? "row" : "column" },
          alignItems: align === "center" ? "center" : { xs: "flex-start", md: action ? "flex-end" : "flex-start" },
          justifyContent: "space-between",
          gap: 2,
          textAlign: align,
          mb: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 680 }}>
          <Typography variant="overline" sx={{ color: dark ? brand.champagne : brand.champagneDeep, display: "inline-flex", alignItems: "center", gap: 1.2 }}>
            <Box component="span" sx={{ width: 18, height: 2, borderRadius: 2, bgcolor: "currentColor" }} />
            {overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: "2rem", md: "2.75rem" }, color: dark ? "#fff" : brand.ink }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography sx={{ mt: 1.5, fontSize: 17, lineHeight: 1.7, color: dark ? "rgba(255,255,255,.66)" : brand.slate, mx: align === "center" ? "auto" : 0 }}>{subtitle}</Typography>
          )}
        </Box>
        {action}
      </Box>
    </Reveal>
  );
}

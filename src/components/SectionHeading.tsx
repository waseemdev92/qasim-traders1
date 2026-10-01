"use client";

import { Box, Typography } from "@mui/material";
import Reveal from "./Reveal";
import { brand } from "@/theme/theme";

export default function SectionHeading({
  overline,
  title,
  subtitle,
  dark = false,
  align = "center",
}: {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal>
      <Box sx={{ textAlign: align, maxWidth: align === "center" ? 720 : "none", mx: align === "center" ? "auto" : 0, mb: { xs: 5, md: 7 } }}>
        <Typography variant="overline" sx={{ color: dark ? brand.gold : brand.goldDeep, display: "inline-flex", alignItems: "center", gap: 1.5 }}>
          <Box component="span" sx={{ width: 28, height: "1px", bgcolor: "currentColor" }} />
          {overline}
          {align === "center" && <Box component="span" sx={{ width: 28, height: "1px", bgcolor: "currentColor" }} />}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1.5, fontSize: { xs: "2.2rem", md: "3.2rem" }, color: dark ? brand.cream : brand.ink }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ mt: 2, fontSize: 17, lineHeight: 1.7, color: dark ? "rgba(247,242,230,0.68)" : "text.secondary" }}>{subtitle}</Typography>
        )}
      </Box>
    </Reveal>
  );
}

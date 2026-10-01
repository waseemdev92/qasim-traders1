"use client";

import { Box, Container, Stack, Typography, Link } from "@mui/material";
import { Logo } from "./Navbar";
import { aevrix, business, navLinks } from "@/data/site";
import { brand } from "@/theme/theme";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#080906", color: "rgba(247,242,230,0.6)", pt: 8, pb: 4, borderTop: "1px solid rgba(201,162,74,0.15)" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr" }, gap: 5 }}>
          <Box>
            <Logo />
            <Typography sx={{ mt: 2.5, maxWidth: 360, lineHeight: 1.7, fontSize: 14.5 }}>
              {business.tagline}. Retail & wholesale supply across {business.city} and Islamabad.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: brand.cream, fontWeight: 700, mb: 2 }}>Explore</Typography>
            <Stack spacing={1.2}>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} underline="none" sx={{ color: "inherit", "&:hover": { color: brand.gold } }}>
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography sx={{ color: brand.cream, fontWeight: 700, mb: 2 }}>Contact</Typography>
            <Stack spacing={1.2}>
              <Link href={`tel:${business.phoneRaw}`} underline="none" sx={{ color: "inherit", "&:hover": { color: brand.gold } }}>{business.phone}</Link>
              <Typography>{business.city}, Pakistan</Typography>
              <Typography>Retail & Wholesale</Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: 6, pt: 3, borderTop: "1px solid rgba(247,242,230,0.08)", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1.5, justifyContent: "space-between" }}>
          <Typography variant="body2">© {new Date().getFullYear()} {business.name}. All rights reserved.</Typography>
          <Typography variant="body2">
            Demo website designed by{" "}
            <Link href={aevrix.whatsapp} target="_blank" rel="noopener" sx={{ color: brand.gold }} underline="hover">{aevrix.name}</Link>
            {" "}· Business details used for demonstration purposes only.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

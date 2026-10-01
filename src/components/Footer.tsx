"use client";

import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Logo } from "./Navbar";
import { aevrix, business, navLinks } from "@/data/site";
import { brand } from "@/theme/theme";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#04120E", color: "rgba(255,255,255,.6)", pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr 1.2fr" }, gap: 5 }}>
          <Box>
            <Logo dark />
            <Typography sx={{ mt: 2.5, maxWidth: 360, lineHeight: 1.7, fontSize: 14.5 }}>
              Quality steam rice and freshly ground spices, sold by the bag and by the kilo, delivered to your door.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: 2 }}>Shop</Typography>
            <Stack spacing={1.2}>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} underline="none" sx={{ color: "inherit", "&:hover": { color: brand.champagne } }}>{l.label}</Link>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 700, mb: 2 }}>Visit</Typography>
            <Stack spacing={1.2}>
              <Typography>{business.address}</Typography>
              <Link href={`tel:${business.phoneRaw}`} underline="none" sx={{ color: "inherit", "&:hover": { color: brand.champagne } }}>{business.phone}</Link>
              <Typography>{business.hoursShort}</Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: 6, pt: 3, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1.5, justifyContent: "space-between" }}>
          <Typography variant="body2">© {new Date().getFullYear()} Qasim Traders · Rice, Spices & Pulses · Established 1952</Typography>
          <Typography variant="body2">
            Demo website designed by{" "}
            <Link href={aevrix.whatsapp} target="_blank" rel="noopener" underline="hover" sx={{ color: brand.champagne }}>{aevrix.name}</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

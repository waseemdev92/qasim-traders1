"use client";

import { useEffect, useState } from "react";
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { business, navLinks } from "@/data/site";
import { brand } from "@/theme/theme";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Stack direction="row" spacing={1.4} component="a" href="#top" sx={{ alignItems: "center", textDecoration: "none" }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "12px",
          display: "grid",
          placeItems: "center",
          background: `linear-gradient(135deg, ${brand.goldLight}, ${brand.goldDeep})`,
          color: brand.ink,
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: 22,
          boxShadow: "0 8px 24px rgba(201,162,74,0.35)",
        }}
      >
        Q
      </Box>
      <Box>
        <Typography sx={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 20, lineHeight: 1, color: light ? brand.cream : brand.ink }}>
          Qasim Traders
        </Typography>
        <Typography sx={{ fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: brand.gold, mt: 0.4 }}>
          Rice · Spices · Onions
        </Typography>
      </Box>
    </Stack>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: scrolled ? "rgba(13,15,11,0.86)" : brand.ink,
          backdropFilter: scrolled ? "saturate(160%) blur(14px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(201,162,74,0.18)" : "transparent",
          transition: "all .3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 }, justifyContent: "space-between" }}>
            <Logo />
            <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map((l) => (
                <Button key={l.href} href={l.href} sx={{ color: "rgba(247,242,230,0.78)", "&:hover": { color: brand.gold, bgcolor: "transparent" } }}>
                  {l.label}
                </Button>
              ))}
              <Button href="#pos" sx={{ color: brand.goldLight, "&:hover": { bgcolor: "transparent", color: brand.gold } }}>
                POS
              </Button>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button
                variant="contained"
                href={`tel:${business.phoneRaw}`}
                startIcon={<PhoneIcon />}
                sx={{ display: { xs: "none", sm: "inline-flex" } }}
              >
                {business.phone}
              </Button>
              <IconButton onClick={() => setOpen(true)} sx={{ display: { md: "none" }, color: brand.cream }} aria-label="Open menu">
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: 280, bgcolor: brand.ink, color: brand.cream, p: 2 } } }}>
        <Box sx={{ mb: 2 }}>
          <Logo />
        </Box>
        <List>
          {[...navLinks, { label: "POS for your business", href: "#pos" }].map((l) => (
            <ListItemButton key={l.href} component="a" href={l.href} onClick={() => setOpen(false)} sx={{ borderRadius: 2 }}>
              <ListItemText primary={l.label} />
            </ListItemButton>
          ))}
        </List>
        <Button fullWidth variant="contained" href={`tel:${business.phoneRaw}`} startIcon={<PhoneIcon />} sx={{ mt: 2 }}>
          Call {business.phone}
        </Button>
      </Drawer>
    </>
  );
}

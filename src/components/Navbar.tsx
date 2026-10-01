"use client";

import { useEffect, useState } from "react";
import { AppBar, Badge, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { business, navLinks } from "@/data/site";
import { brand } from "@/theme/theme";
import { useCart } from "./CartContext";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Stack direction="row" spacing={1.4} component="a" href="#top" sx={{ alignItems: "center", textDecoration: "none" }}>
      <Box component="img" src="/images/logo.jpg" alt="Qasim Traders logo" sx={{ width: 46, height: 46, borderRadius: 2.5, objectFit: "cover", boxShadow: "0 6px 16px -6px rgba(0,0,0,.45)" }} />
      <Box>
        <Typography sx={{ fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 800, fontSize: 18, lineHeight: 1.1, letterSpacing: "-0.02em", color: dark ? "#fff" : brand.ink }}>
          Qasim Traders
        </Typography>
        <Typography sx={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: dark ? brand.champagne : brand.champagneDeep, fontWeight: 700 }}>
          Est. 1952
        </Typography>
      </Box>
    </Stack>
  );
}

function UtilityBar() {
  const items = [
    { icon: <PlaceOutlinedIcon sx={{ fontSize: 16 }} />, text: business.address },
    { icon: <ScheduleOutlinedIcon sx={{ fontSize: 16 }} />, text: business.hoursShort },
    { icon: <LocalShippingOutlinedIcon sx={{ fontSize: 16 }} />, text: business.deliveryShort },
  ];
  return (
    <Box sx={{ bgcolor: brand.emerald, color: "rgba(255,255,255,.86)", display: { xs: "none", md: "block" } }}>
      <Container maxWidth="lg">
        <Stack direction="row" sx={{ justifyContent: "space-between", py: 0.9 }}>
          {items.map((i) => (
            <Stack key={i.text} direction="row" spacing={0.8} sx={{ alignItems: "center", fontSize: 12.5 }}>
              <Box sx={{ color: brand.champagneLight, display: "flex" }}>{i.icon}</Box>
              <span>{i.text}</span>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <UtilityBar />
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: scrolled ? "rgba(255,255,255,.82)" : "#fff",
          backdropFilter: "saturate(180%) blur(16px)",
          color: brand.ink,
          borderBottom: `1px solid ${brand.line}`,
          boxShadow: scrolled ? "0 10px 30px -18px rgba(11,26,20,.35)" : "none",
          transition: "all .25s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, justifyContent: "space-between", gap: 2 }}>
            <Logo />
            <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map((l) => (
                <Button key={l.href} href={l.href} sx={{ color: brand.slate, fontWeight: 600, "&:hover": { color: brand.emerald, bgcolor: brand.emeraldSoft } }}>
                  {l.label}
                </Button>
              ))}
              <Button href="#pos" sx={{ color: brand.champagneDeep, fontWeight: 700, "&:hover": { bgcolor: "rgba(200,169,106,.12)" } }}>
                POS
              </Button>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button variant="outlined" href={`tel:${business.phoneRaw}`} startIcon={<PhoneIcon />} sx={{ display: { xs: "none", lg: "inline-flex" }, borderColor: brand.line, color: brand.ink }}>
                {business.phone}
              </Button>
              <Button variant="contained" onClick={() => openCart(true)} startIcon={<Badge badgeContent={count} color="secondary"><ShoppingBagOutlinedIcon /></Badge>} sx={{ "& .MuiBadge-badge": { fontWeight: 800 } }}>
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" }, ml: 0.5 }}>Cart</Box>
              </Button>
              <IconButton onClick={() => setOpen(true)} sx={{ display: { md: "none" } }} aria-label="Open menu">
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: 300, p: 2.5 } } }}>
        <Logo />
        <List sx={{ mt: 2 }}>
          {[...navLinks, { label: "POS for your business", href: "#pos" }].map((l) => (
            <ListItemButton key={l.href} component="a" href={l.href} onClick={() => setOpen(false)} sx={{ borderRadius: 2 }}>
              <ListItemText primary={l.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
            </ListItemButton>
          ))}
        </List>
        <Typography variant="body2" sx={{ color: brand.muted, mt: 2, px: 2 }}>{business.address}</Typography>
        <Button fullWidth variant="contained" href={`tel:${business.phoneRaw}`} startIcon={<PhoneIcon />} sx={{ mt: 2 }}>
          Call {business.phone}
        </Button>
      </Drawer>
    </>
  );
}

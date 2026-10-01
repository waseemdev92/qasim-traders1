"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import CheckIcon from "@mui/icons-material/Check";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { stats } from "@/data/site";
import { brand } from "@/theme/theme";

const plans = [
  {
    icon: <HomeIcon />,
    title: "Retail",
    sub: "For homes & families",
    points: ["Convenient 1 kg – 10 kg packs", "Same premium quality as bulk", "Order by call or WhatsApp", "Pickup or local delivery"],
    featured: false,
  },
  {
    icon: <BusinessIcon />,
    title: "Wholesale",
    sub: "For shops, restaurants & caterers",
    points: ["25 kg & 50 kg bags", "Special rates on volume", "Consistent quality, every batch", "Reliable, on-time supply"],
    featured: true,
  },
];

export default function Wholesale() {
  return (
    <Box id="wholesale" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: brand.ink, color: brand.cream, position: "relative", overflow: "hidden" }}>
      <Box aria-hidden sx={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", right: -200, top: -200, background: "radial-gradient(circle, rgba(201,162,74,0.14), transparent 65%)" }} />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <SectionHeading dark overline="Retail & Wholesale" title="Buying for home or for business?" subtitle="We serve both — with the same quality and honest rates." />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, maxWidth: 940, mx: "auto" }}>
          {plans.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3.5, md: 4.5 },
                  borderRadius: 5,
                  position: "relative",
                  bgcolor: p.featured ? "transparent" : brand.panel,
                  background: p.featured ? `linear-gradient(160deg, ${brand.goldLight}, ${brand.gold} 45%, ${brand.goldDeep})` : undefined,
                  color: p.featured ? brand.ink : brand.cream,
                  border: p.featured ? "none" : "1px solid rgba(247,242,230,0.08)",
                  boxShadow: p.featured ? "0 30px 80px -20px rgba(201,162,74,0.45)" : "none",
                }}
              >
                {p.featured && (
                  <Typography variant="overline" sx={{ position: "absolute", top: 22, right: 24, bgcolor: brand.ink, color: brand.goldLight, px: 1.5, borderRadius: 99, fontSize: 10 }}>
                    Best value
                  </Typography>
                )}
                <Box sx={{ width: 52, height: 52, borderRadius: 3, display: "grid", placeItems: "center", bgcolor: p.featured ? brand.ink : "rgba(201,162,74,0.12)", color: brand.gold }}>
                  {p.icon}
                </Box>
                <Typography variant="h3" sx={{ fontSize: 34, mt: 3 }}>{p.title}</Typography>
                <Typography sx={{ opacity: 0.75 }}>{p.sub}</Typography>
                <Stack spacing={1.6} sx={{ mt: 3.5 }}>
                  {p.points.map((pt) => (
                    <Stack key={pt} direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                      <CheckIcon sx={{ fontSize: 18, color: p.featured ? brand.ink : brand.gold }} />
                      <Typography>{pt}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color={p.featured ? "secondary" : "primary"}
                  href={`https://wa.me/923325555003?text=${encodeURIComponent(`Assalam-o-Alaikum, I'm interested in ${p.title.toLowerCase()} rates.`)}`}
                  target="_blank"
                  rel="noopener"
                  sx={{ mt: 4 }}
                >
                  Get {p.title.toLowerCase()} rates
                </Button>
              </Box>
            </Reveal>
          ))}
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, mt: { xs: 8, md: 10 }, borderTop: "1px solid rgba(247,242,230,0.1)" }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Box sx={{ pt: 4, px: 1, textAlign: "center" }}>
                <Typography sx={{ fontFamily: "var(--font-serif)", fontSize: { xs: 26, md: 34 }, color: brand.gold, fontWeight: 600 }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ color: "rgba(247,242,230,0.6)", mt: 0.5 }}>{s.label}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { business, rice, spices } from "@/data/site";
import { brand } from "@/theme/theme";

const ease = [0.22, 1, 0.36, 1] as const;

const up = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

function Float({ children, delay, sx }: { children: React.ReactNode; delay: number; sx: object }) {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay, ease }} sx={{ position: "absolute", ...sx }}>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}>
        {children}
      </motion.div>
    </Box>
  );
}

const stats = [
  { value: "1952", label: "Trusted since" },
  { value: `${rice.length}`, label: "Steam rice brands" },
  { value: `${spices.length}`, label: "Spices & masalas" },
  { value: "7 days", label: "Home delivery" },
];

export default function Hero() {
  return (
    <Box id="top" component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: "#fff", borderBottom: `1px solid ${brand.line}` }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(900px 520px at 100% 0%, ${brand.emeraldSoft}, transparent 60%), radial-gradient(600px 400px at 0% 100%, rgba(200,169,106,.12), transparent 60%)`,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          backgroundImage: `linear-gradient(${brand.line} 1px, transparent 1px), linear-gradient(90deg, ${brand.line} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 70% 30%, black 10%, transparent 65%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", pt: { xs: 6, md: 9 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 1fr" }, gap: { xs: 6, md: 5 }, alignItems: "center" }}>
          <Box>
            <motion.div {...up(0)}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", display: "inline-flex", px: 1.5, py: 0.7, borderRadius: 99, bgcolor: brand.emeraldSoft, color: brand.emerald, border: "1px solid rgba(14,77,58,.15)" }}
              >
                <VerifiedOutlinedIcon sx={{ fontSize: 17 }} />
                <Typography sx={{ fontSize: 13, fontWeight: 700 }}>Rice · Spices · Pulses — Established 1952</Typography>
              </Stack>
            </motion.div>
            <motion.div {...up(0.08)}>
              <Typography variant="h1" sx={{ mt: 3, fontSize: { xs: "2.6rem", sm: "3.4rem", md: "4.1rem" } }}>
                Pure rice and spices,{" "}
                <Box component="span" sx={{ background: `linear-gradient(90deg, ${brand.emerald}, #2F7A61)`, WebkitBackgroundClip: "text", color: "transparent" }}>
                  trusted since 1952
                </Box>
              </Typography>
            </motion.div>
            <motion.div {...up(0.16)}>
              <Typography sx={{ mt: 2.5, fontSize: { xs: 16.5, md: 18.5 }, color: brand.slate, maxWidth: 520, lineHeight: 1.7 }}>
                Qasim Traders brings you quality steam rice and freshly ground spices, sold by the bag and by the kilo, delivered to your door.
              </Typography>
            </motion.div>
            <motion.div {...up(0.24)}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
                <Button size="large" variant="contained" href="#rice" endIcon={<ArrowForwardIcon />}>
                  Shop rice
                </Button>
                <Button size="large" variant="outlined" href="#spices" sx={{ borderColor: brand.line, color: brand.ink, bgcolor: "#fff", "&:hover": { borderColor: brand.emerald, bgcolor: brand.emeraldSoft } }}>
                  Shop spices
                </Button>
              </Stack>
            </motion.div>
            <motion.div {...up(0.32)}>
              <Stack spacing={1.2} sx={{ mt: 4 }}>
                {[
                  { icon: <ScheduleOutlinedIcon />, t: business.hoursShort },
                  { icon: <LocalShippingOutlinedIcon />, t: business.deliveryShort },
                  { icon: <PhoneOutlinedIcon />, t: `Call ${business.phone}`, href: `tel:${business.phoneRaw}` },
                ].map((x) => (
                  <Stack key={x.t} direction="row" spacing={1.3} component={x.href ? "a" : "div"} href={x.href} sx={{ alignItems: "center", color: brand.slate, textDecoration: "none" }}>
                    <Box sx={{ width: 30, height: 30, borderRadius: 2, display: "grid", placeItems: "center", bgcolor: "#fff", border: `1px solid ${brand.line}`, color: brand.emerald, "& svg": { fontSize: 17 } }}>{x.icon}</Box>
                    <Typography sx={{ fontSize: 14.5, fontWeight: 500 }}>{x.t}</Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Box>

          {/* Visual */}
          <Box sx={{ position: "relative", height: { xs: 420, sm: 500, md: 540 } }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease }}
              sx={{
                position: "absolute",
                top: "4%",
                left: { xs: "14%", md: "17%" },
                width: { xs: "66%", md: "62%" },
                aspectRatio: "1 / 1",
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 40px 80px -30px rgba(6,26,20,.55)",
                border: "1px solid rgba(200,169,106,.35)",
              }}
            >
              <Box component="img" src="/images/logo.jpg" alt="Qasim Traders – Rice, Spices, Pulses. Established 1952" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Box>

            <Float delay={0.35} sx={{ left: 0, bottom: 0, width: { xs: 110, sm: 135 } }}>
              <Box sx={{ p: 1, bgcolor: "#fff", borderRadius: 4, boxShadow: "0 24px 50px -20px rgba(6,26,20,.45)", border: `1px solid ${brand.line}` }}>
                <Box component="img" src="/images/rice-al-sabar-gold.jpg" alt="Al Sabar Gold Steam Rice 25 kg bag" sx={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", borderRadius: 3, display: "block" }} />
                <Typography sx={{ fontSize: 12, fontWeight: 700, mt: 0.8, px: 0.5 }}>25 kg bags</Typography>
              </Box>
            </Float>

            <Float delay={0.5} sx={{ right: 0, bottom: { xs: "2%", md: "4%" }, width: { xs: 175, sm: 210 } }}>
              <Box sx={{ p: 1.5, bgcolor: "#fff", borderRadius: 4, boxShadow: "0 24px 50px -20px rgba(6,26,20,.45)", border: `1px solid ${brand.line}` }}>
                <Stack direction="row" sx={{ mb: 1.2 }}>
                  {["red-chilli-powder", "turmeric-powder", "black-pepper", "cinnamon"].map((s, i) => (
                    <Box key={s} component="img" src={`/images/${s}.jpg`} alt="" sx={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", ml: i ? -1.2 : 0, boxShadow: "0 2px 6px rgba(0,0,0,.15)" }} />
                  ))}
                </Stack>
                <Typography sx={{ fontWeight: 750, fontSize: 14 }}>Freshly ground spices</Typography>
                <Typography sx={{ fontSize: 12, color: brand.muted }}>From half a kilo upwards</Typography>
              </Box>
            </Float>

            <Float delay={0.65} sx={{ right: { xs: "4%", md: "6%" }, top: 0 }}>
              <Box sx={{ px: 2, py: 1.2, borderRadius: 3, bgcolor: brand.emerald, color: "#fff", boxShadow: "0 20px 40px -18px rgba(14,77,58,.8)" }}>
                <Typography sx={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: brand.champagneLight, fontWeight: 700 }}>Since</Typography>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 800, fontSize: 26, lineHeight: 1 }}>1952</Typography>
              </Box>
            </Float>
          </Box>
        </Box>

        {/* KPI strip */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          sx={{
            mt: { xs: 6, md: 7 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            bgcolor: "#fff",
            border: `1px solid ${brand.line}`,
            borderRadius: 4,
            boxShadow: "0 20px 40px -30px rgba(6,26,20,.35)",
            overflow: "hidden",
          }}
        >
          {stats.map((s, i) => (
            <Box key={s.label} sx={{ p: { xs: 2.5, md: 3 }, borderLeft: { md: i ? `1px solid ${brand.line}` : "none" }, borderTop: { xs: i > 1 ? `1px solid ${brand.line}` : "none", md: "none" }, borderRight: { xs: i % 2 === 0 ? `1px solid ${brand.line}` : "none", md: "none" } }}>
              <Typography sx={{ fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 800, fontSize: { xs: 26, md: 32 }, letterSpacing: "-0.03em", color: brand.emerald }}>{s.value}</Typography>
              <Typography sx={{ fontSize: 13.5, color: brand.muted, fontWeight: 500 }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

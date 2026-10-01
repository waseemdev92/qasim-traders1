"use client";

import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ProductArt from "./ProductArt";
import { business } from "@/data/site";
import { brand } from "@/theme/theme";

const ease = [0.22, 1, 0.36, 1] as const;

function FloatCard({
  kind,
  title,
  sub,
  sx,
  delay,
}: {
  kind: "rice" | "spices" | "onions";
  title: string;
  sub: string;
  sx: object;
  delay: number;
}) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease }}
      sx={{ position: "absolute", ...sx }}
    >
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}>
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "#FFFDF7",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            border: "1px solid rgba(201,162,74,0.35)",
          }}
        >
          <Box sx={{ bgcolor: kind === "rice" ? "#EFE6CF" : kind === "spices" ? "#F3E2D6" : "#F4E5CF" }}>
            <Box sx={{ height: { xs: 110, sm: 150 } }}><ProductArt kind={kind} height="100%" /></Box>
          </Box>
          <Box sx={{ px: 2.2, py: 1.6 }}>
            <Typography sx={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: { xs: 15, sm: 18 }, color: brand.ink }}>{title}</Typography>
            <Typography variant="caption" sx={{ color: brand.muted }}>
              {sub}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: brand.ink,
        color: brand.cream,
        pt: { xs: 7, md: 10 },
        pb: { xs: 10, md: 14 },
        backgroundImage: `radial-gradient(900px 500px at 85% 20%, rgba(201,162,74,0.16), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(180,73,43,0.12), transparent 60%)`,
      }}
    >
      {/* subtle grid texture */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(rgba(247,242,230,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,242,230,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" }, gap: { xs: 6, md: 4 }, alignItems: "center" }}>
          <Box>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
              <Chip
                icon={<VerifiedIcon sx={{ color: `${brand.gold} !important`, fontSize: 18 }} />}
                label="Retail & Wholesale · Rawalpindi"
                sx={{ bgcolor: "rgba(201,162,74,0.12)", color: brand.goldLight, border: "1px solid rgba(201,162,74,0.3)", mb: 3 }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.7rem", sm: "3.6rem", md: "4.4rem" } }}>
                The finest grains,{" "}
                <Box component="span" sx={{ color: brand.gold, fontStyle: "italic" }}>
                  purest spices
                </Box>{" "}
                & golden fried onions.
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}>
              <Typography sx={{ mt: 3, fontSize: { xs: 17, md: 19 }, color: "rgba(247,242,230,0.72)", maxWidth: 540, lineHeight: 1.7 }}>
                {business.name} supplies premium basmati rice, pure spices and crispy fried onions to homes, shops, restaurants and caterers across Rawalpindi &
                Islamabad.
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4.5 }}>
                <Button size="large" variant="contained" href={business.whatsapp} target="_blank" rel="noopener" startIcon={<WhatsAppIcon />}>
                  Order on WhatsApp
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  href="#products"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: brand.cream, borderColor: "rgba(247,242,230,0.25)", "&:hover": { borderColor: brand.gold, color: brand.gold } }}
                >
                  Explore Products
                </Button>
              </Stack>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
              <Stack direction="row" spacing={3} sx={{ mt: 5, flexWrap: "wrap", rowGap: 1.5 }}>
                {[
                  { icon: <StorefrontIcon />, t: "Retail packs" },
                  { icon: <LocalShippingIcon />, t: "Bulk & wholesale supply" },
                ].map((x) => (
                  <Stack key={x.t} direction="row" spacing={1} sx={{ alignItems: "center", color: "rgba(247,242,230,0.7)" }}>
                    <Box sx={{ color: brand.gold, display: "flex" }}>{x.icon}</Box>
                    <Typography variant="body2">{x.t}</Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Box>

          <Box sx={{ position: "relative", height: { xs: 400, sm: 480, md: 540 } }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease }}
              sx={{
                position: "absolute",
                inset: "6% 4%",
                borderRadius: "50%",
                border: "1px solid rgba(201,162,74,0.25)",
                background: "radial-gradient(circle, rgba(201,162,74,0.14), transparent 65%)",
              }}
            />
            <FloatCard kind="rice" title="Super Kernel Basmati" sub="Aged · extra long grain" delay={0.3} sx={{ top: "2%", left: { xs: "0%", md: "2%" }, width: { xs: 190, sm: 260 }, zIndex: 1 }} />
            <FloatCard kind="spices" title="Pure Spices" sub="Chilli · Haldi · Zeera" delay={0.5} sx={{ top: { xs: "28%", md: "24%" }, right: 0, width: { xs: 180, sm: 240 }, zIndex: 2 }} />
            <FloatCard kind="onions" title="Crispy Fried Onions" sub="Golden · ready to use" delay={0.7} sx={{ bottom: "0%", left: { xs: "4%", md: "6%" }, width: { xs: 190, sm: 250 }, zIndex: 3 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

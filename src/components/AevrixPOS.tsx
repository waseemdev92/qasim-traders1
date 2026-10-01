"use client";

import { Box, Button, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InventoryIcon from "@mui/icons-material/Inventory";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import InsightsIcon from "@mui/icons-material/Insights";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { aevrix, posComparison, posFeatures } from "@/data/site";
import { brand } from "@/theme/theme";

const featureIcons = [<PointOfSaleIcon key="1" />, <MenuBookIcon key="2" />, <InventoryIcon key="3" />, <DeliveryDiningIcon key="4" />, <InsightsIcon key="5" />, <WifiOffIcon key="6" />];

const sampleLines = [
  { item: "Super Kernel Basmati — 25 kg", qty: 4, type: "Wholesale" },
  { item: "Red Chilli Powder — 5 kg", qty: 2, type: "Wholesale" },
  { item: "Crispy Fried Onion — 1 kg", qty: 10, type: "Retail" },
];

function PosMock() {
  const bars = [42, 58, 50, 74, 66, 88, 80];
  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        bgcolor: "#101309",
        border: "1px solid rgba(201,162,74,0.25)",
        boxShadow: "0 40px 100px -30px rgba(0,0,0,0.7)",
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 2, py: 1.4, borderBottom: "1px solid rgba(247,242,230,0.06)" }}>
        {["#E0605A", "#E6B54A", "#5FB760"].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c }} />
        ))}
        <Typography variant="caption" sx={{ ml: 1.5, color: "rgba(247,242,230,0.5)" }}>
          Aevrix POS · Qasim Traders (preview)
        </Typography>
      </Stack>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1.3fr 1fr" } }}>
        <Box sx={{ p: 2.5, borderRight: { sm: "1px solid rgba(247,242,230,0.06)" } }}>
          <Typography variant="overline" sx={{ color: brand.gold, fontSize: 10 }}>
            Sample invoice
          </Typography>
          <Stack spacing={1.2} sx={{ mt: 1 }}>
            {sampleLines.map((l, i) => (
              <Box
                key={l.item}
                component={motion.div}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1.3, borderRadius: 2, bgcolor: "rgba(247,242,230,0.04)" }}
              >
                <Box>
                  <Typography sx={{ fontSize: 13, color: brand.cream, fontWeight: 600 }}>{l.item}</Typography>
                  <Typography sx={{ fontSize: 11, color: "rgba(247,242,230,0.45)" }}>{l.type} rate</Typography>
                </Box>
                <Typography sx={{ fontSize: 13, color: brand.goldLight, fontWeight: 700 }}>× {l.qty}</Typography>
              </Box>
            ))}
          </Stack>
          <Divider sx={{ my: 2, borderColor: "rgba(247,242,230,0.08)" }} />
          <Stack direction="row" spacing={1}>
            <Chip size="small" label="Print (Urdu/Eng)" sx={{ bgcolor: brand.gold, color: brand.ink }} />
            <Chip size="small" label="Add to Khata" sx={{ bgcolor: "rgba(247,242,230,0.08)", color: brand.cream }} />
          </Stack>
        </Box>
        <Box sx={{ p: 2.5 }}>
          <Typography variant="overline" sx={{ color: brand.gold, fontSize: 10 }}>
            This week
          </Typography>
          <Stack direction="row" spacing={0.8} sx={{ alignItems: "flex-end", height: 110, mt: 1.5 }}>
            {bars.map((h, i) => (
              <Box
                key={i}
                component={motion.div}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                sx={{ flex: 1, borderRadius: "6px 6px 2px 2px", background: i === 5 ? `linear-gradient(${brand.goldLight}, ${brand.gold})` : "rgba(201,162,74,0.28)" }}
              />
            ))}
          </Stack>
          <Stack spacing={1} sx={{ mt: 2.5 }}>
            {[
              ["Top seller", "Super Kernel"],
              ["Low stock", "Haldi 5 kg"],
              ["Pending khata", "6 parties"],
            ].map(([k, v]) => (
              <Stack key={k} direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: 12, color: "rgba(247,242,230,0.5)" }}>{k}</Typography>
                <Typography sx={{ fontSize: 12, color: brand.cream, fontWeight: 600 }}>{v}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default function AevrixPOS() {
  return (
    <Box component="section" sx={{ bgcolor: brand.ink, color: brand.cream, position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(800px 500px at 10% 0%, rgba(201,162,74,0.14), transparent 60%), radial-gradient(700px 500px at 100% 60%, rgba(201,162,74,0.08), transparent 60%)`,
        }}
      />
      {/* Aevrix message */}
      <Container id="aevrix" maxWidth="md" sx={{ position: "relative", pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 10 }, scrollMarginTop: 96 }}>
        <SectionHeading dark overline="A Message From Aevrix" title="Now Let's Power Up Your Business" />
        <Reveal>
          <Box
            sx={{
              p: { xs: 3.5, md: 5 },
              borderRadius: 5,
              bgcolor: "rgba(247,242,230,0.03)",
              border: "1px solid rgba(201,162,74,0.22)",
              position: "relative",
            }}
          >
            <Typography sx={{ fontFamily: "var(--font-serif)", fontSize: 90, lineHeight: 0.6, color: brand.gold, opacity: 0.35, position: "absolute", top: 34, left: 24 }}>“</Typography>
            <Typography sx={{ fontSize: { xs: 16.5, md: 18.5 }, lineHeight: 1.85, color: "rgba(247,242,230,0.85)", position: "relative" }}>
              Assalam-o-Alaikum, We at{" "}
              <Box component="strong" sx={{ color: brand.goldLight }}>
                Aevrix AI Technologies
              </Box>{" "}
              have prepared this demo website exclusively for{" "}
              <Box component="strong" sx={{ color: brand.goldLight }}>
                Qasim Traders
              </Box>{" "}
              to show how your business can look and perform online. If you like it, we would be glad to take it live for you. In addition, we design and develop{" "}
              <Box component="strong" sx={{ color: brand.goldLight }}>
                custom Retail & Wholesale POS systems
              </Box>
              . If you are interested, we would be happy to build a complete POS tailored to your operations — billing, stock, khata and reporting in one place — so
              you can run and grow your business with more control and less effort.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
              <Button size="large" variant="contained" startIcon={<WhatsAppIcon />} href={aevrix.whatsapp} target="_blank" rel="noopener">
                Chat on WhatsApp
              </Button>
              <Button
                size="large"
                variant="outlined"
                startIcon={<PhoneIcon />}
                href={`tel:${aevrix.phoneRaw}`}
                sx={{ color: brand.cream, borderColor: "rgba(247,242,230,0.25)", "&:hover": { borderColor: brand.gold, color: brand.gold } }}
              >
                {aevrix.phone}
              </Button>
            </Stack>
          </Box>
        </Reveal>
      </Container>

      {/* POS features */}
      <Container id="pos" maxWidth="lg" sx={{ position: "relative", py: { xs: 8, md: 10 }, scrollMarginTop: 96 }}>
        <SectionHeading dark overline="Aevrix POS" title="What Your POS Will Do" />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 6 }, alignItems: "center" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            {posFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <Box
                  sx={{
                    p: 2.8,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: brand.panel,
                    border: "1px solid rgba(247,242,230,0.06)",
                    transition: "all .3s",
                    "&:hover": { borderColor: "rgba(201,162,74,0.45)", transform: "translateY(-4px)" },
                  }}
                >
                  <Box sx={{ color: brand.gold, display: "flex" }}>{featureIcons[i]}</Box>
                  <Typography sx={{ fontWeight: 700, mt: 1.5, fontSize: 16 }}>{f.title}</Typography>
                  <Typography sx={{ mt: 0.8, fontSize: 14, color: "rgba(247,242,230,0.62)", lineHeight: 1.65 }}>{f.text}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
          <Reveal delay={0.15}>
            <PosMock />
          </Reveal>
        </Box>
      </Container>

      {/* Comparison */}
      <Container maxWidth="md" sx={{ position: "relative", py: { xs: 8, md: 10 } }}>
        <SectionHeading dark overline="The Difference" title="Why Aevrix POS Is Better" />
        <Reveal>
          <Box sx={{ borderRadius: 5, overflow: "hidden", border: "1px solid rgba(247,242,230,0.08)" }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 64px 64px", sm: "1fr 110px 110px" }, bgcolor: brand.panel, px: { xs: 2, md: 3.5 }, py: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: 14, color: "rgba(247,242,230,0.6)" }}>Feature</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 14, color: brand.gold, textAlign: "center" }}>Aevrix</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 14, color: "rgba(247,242,230,0.6)", textAlign: "center" }}>Others</Typography>
            </Box>
            {posComparison.map((row, i) => (
              <Box
                key={row}
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr 64px 64px", sm: "1fr 110px 110px" },
                  alignItems: "center",
                  px: { xs: 2, md: 3.5 },
                  py: 1.8,
                  borderTop: "1px solid rgba(247,242,230,0.06)",
                  bgcolor: i % 2 ? "rgba(247,242,230,0.015)" : "transparent",
                }}
              >
                <Typography sx={{ fontSize: { xs: 14, md: 15.5 } }}>{row}</Typography>
                <Box sx={{ display: "grid", placeItems: "center" }}>
                  <Box sx={{ width: 28, height: 28, borderRadius: "50%", bgcolor: "rgba(201,162,74,0.16)", display: "grid", placeItems: "center" }}>
                    <CheckIcon sx={{ fontSize: 18, color: brand.gold }} />
                  </Box>
                </Box>
                <Box sx={{ display: "grid", placeItems: "center" }}>
                  <CloseIcon sx={{ fontSize: 18, color: "rgba(247,242,230,0.25)" }} />
                </Box>
              </Box>
            ))}
          </Box>
        </Reveal>

        <Reveal delay={0.1}>
          <Box
            sx={{
              mt: 8,
              p: { xs: 4, md: 5 },
              borderRadius: 5,
              textAlign: "center",
              background: `linear-gradient(135deg, ${brand.goldLight}, ${brand.gold} 50%, ${brand.goldDeep})`,
              color: brand.ink,
            }}
          >
            <Typography variant="h3" sx={{ fontSize: { xs: 26, md: 34 } }}>
              {aevrix.tagline}
            </Typography>
            <Typography sx={{ mt: 1, opacity: 0.75, fontWeight: 600 }}>{aevrix.motto}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "center", mt: 3.5 }}>
              <Button size="large" variant="contained" color="secondary" startIcon={<WhatsAppIcon />} href={aevrix.whatsapp} target="_blank" rel="noopener">
                Chat on WhatsApp
              </Button>
              <Button size="large" variant="outlined" color="secondary" startIcon={<PhoneIcon />} href={`tel:${aevrix.phoneRaw}`}>
                Call {aevrix.phone}
              </Button>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

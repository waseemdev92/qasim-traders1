"use client";

import { Box, Container, Typography } from "@mui/material";
import GrainIcon from "@mui/icons-material/Grain";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShieldIcon from "@mui/icons-material/Shield";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { whyUs } from "@/data/site";
import { brand } from "@/theme/theme";

const icons = [<GrainIcon key="a" />, <HandshakeIcon key="b" />, <Inventory2Icon key="c" />, <ShieldIcon key="d" />];

const steps = ["Sourced", "Cleaned & graded", "Quality checked", "Packed & delivered"];

export default function WhyUs() {
  return (
    <Box id="why" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: brand.creamDeep }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 2, md: 8 }, alignItems: "start" }}>
          <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
            <SectionHeading
              align="left"
              overline="Why Qasim Traders"
              title={<>Quality you can <Box component="em" sx={{ color: brand.goldDeep }}>taste</Box>, service you can trust.</>}
              subtitle="From the field to your kitchen, every step is handled with care — so your biryani, pulao and qorma turn out right every single time."
            />
            <Reveal delay={0.1}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0, mt: -2 }}>
                {steps.map((s, i) => (
                  <Box key={s} sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative", pb: i < steps.length - 1 ? 2.5 : 0 }}>
                    {i < steps.length - 1 && <Box sx={{ position: "absolute", left: 15, top: 32, bottom: 0, width: "2px", bgcolor: "rgba(156,122,46,0.3)" }} />}
                    <Box sx={{ width: 32, height: 32, borderRadius: "50%", bgcolor: brand.ink, color: brand.gold, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                      {i + 1}
                    </Box>
                    <Typography sx={{ fontWeight: 600 }}>{s}</Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <Box
                  sx={{
                    p: 3.5,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all .3s",
                    "&:hover": { borderColor: brand.gold, boxShadow: "0 20px 40px -20px rgba(156,122,46,0.4)" },
                    mt: { sm: i % 2 === 1 ? 5 : 0 },
                  }}
                >
                  <Box sx={{ width: 48, height: 48, borderRadius: 3, display: "grid", placeItems: "center", bgcolor: brand.ink, color: brand.gold }}>{icons[i]}</Box>
                  <Typography variant="h5" sx={{ mt: 2.5, fontSize: 20 }}>{w.title}</Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.7 }}>{w.text}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

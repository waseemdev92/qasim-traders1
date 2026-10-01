"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { business } from "@/data/site";
import { brand } from "@/theme/theme";

export default function Contact() {
  const rows = [
    { icon: <PhoneIcon />, label: "Call us", value: business.phone, href: `tel:${business.phoneRaw}` },
    { icon: <WhatsAppIcon />, label: "WhatsApp", value: business.phone, href: business.whatsapp },
    { icon: <PlaceIcon />, label: "Location", value: "Rawalpindi, Punjab, Pakistan" },
    { icon: <ScheduleIcon />, label: "Orders", value: "Retail & wholesale — call for availability" },
  ];
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeading overline="Visit / Contact" title="Let's fill your store." subtitle="Call or WhatsApp for today's rates, bulk orders or delivery in Rawalpindi & Islamabad." />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" }, gap: 3 }}>
          <Reveal>
            <Box sx={{ p: { xs: 3.5, md: 4.5 }, borderRadius: 5, bgcolor: brand.ink, color: brand.cream, height: "100%" }}>
              <Stack spacing={3}>
                {rows.map((r) => (
                  <Stack key={r.label} direction="row" spacing={2} component={r.href ? "a" : "div"} href={r.href} target={r.href?.startsWith("http") ? "_blank" : undefined} sx={{ alignItems: "center", textDecoration: "none", color: "inherit" }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 3, display: "grid", placeItems: "center", bgcolor: "rgba(201,162,74,0.12)", color: brand.gold, flexShrink: 0 }}>{r.icon}</Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: "rgba(247,242,230,0.55)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{r.label}</Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: 17 }}>{r.value}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4.5 }}>
                <Button variant="contained" size="large" startIcon={<PhoneIcon />} href={`tel:${business.phoneRaw}`}>Call now</Button>
                <Button variant="outlined" size="large" startIcon={<WhatsAppIcon />} href={business.whatsapp} target="_blank" rel="noopener" sx={{ color: brand.cream, borderColor: "rgba(247,242,230,0.25)", "&:hover": { borderColor: brand.gold, color: brand.gold } }}>
                  WhatsApp
                </Button>
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.12}>
            <Box sx={{ borderRadius: 5, overflow: "hidden", height: { xs: 340, md: "100%" }, minHeight: 340, border: "1px solid", borderColor: "divider" }}>
              <iframe
                title="Qasim Traders location — Rawalpindi"
                src="https://www.google.com/maps?q=Rawalpindi,Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", filter: "grayscale(0.3) sepia(0.15)" }}
                loading="lazy"
              />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

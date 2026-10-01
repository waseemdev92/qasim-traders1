"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { business, hours } from "@/data/site";
import { brand } from "@/theme/theme";

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: "#fff", borderTop: `1px solid ${brand.line}` }}>
      <Container maxWidth="lg">
        <SectionHeading overline="Contact" title="Contact us" subtitle="Call or message us for bulk orders and current rates." />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
          <Reveal>
            <Box sx={{ height: "100%", p: { xs: 3, md: 4 }, borderRadius: 4, bgcolor: brand.emeraldDeep, color: "#fff", position: "relative", overflow: "hidden" }}>
              <Box aria-hidden sx={{ position: "absolute", right: -120, top: -120, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,106,.25), transparent 65%)" }} />
              <Typography variant="overline" sx={{ color: brand.champagne }}>Call or WhatsApp</Typography>
              <Typography component="a" href={`tel:${business.phoneRaw}`} sx={{ display: "block", fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 800, fontSize: { xs: 34, md: 44 }, letterSpacing: "-0.03em", color: "#fff", textDecoration: "none", mt: 0.5 }}>
                {business.phone}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
                <Button size="large" variant="contained" color="secondary" startIcon={<PhoneIcon />} href={`tel:${business.phoneRaw}`}>Call now</Button>
                <Button size="large" variant="outlined" startIcon={<WhatsAppIcon />} href={business.whatsapp} target="_blank" rel="noopener" sx={{ color: "#fff", borderColor: "rgba(255,255,255,.3)", "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,.06)" } }}>
                  Chat on WhatsApp
                </Button>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,.12)", alignItems: "flex-start" }}>
                <PlaceOutlinedIcon sx={{ color: brand.champagne, mt: 0.2 }} />
                <Typography sx={{ color: "rgba(255,255,255,.85)" }}>{business.address}</Typography>
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ height: "100%", p: { xs: 3, md: 4 }, borderRadius: 4, border: `1px solid ${brand.line}`, bgcolor: brand.canvas }}>
              <Typography variant="h5" sx={{ fontSize: 20 }}>Business hours</Typography>
              <Box sx={{ mt: 2, bgcolor: "#fff", borderRadius: 3, border: `1px solid ${brand.line}`, overflow: "hidden" }}>
                {hours.map((h, i) => (
                  <Stack key={h.day} direction="row" sx={{ justifyContent: "space-between", px: 2.5, py: 1.8, borderTop: i ? `1px solid ${brand.line}` : "none" }}>
                    <Typography sx={{ fontWeight: 600 }}>{h.day}</Typography>
                    <Typography sx={{ fontWeight: 600, color: h.time === "Closed" ? "#B42318" : brand.emerald }}>{h.time}</Typography>
                  </Stack>
                ))}
              </Box>
              <Stack direction="row" spacing={1.2} sx={{ mt: 2.5, alignItems: "flex-start", p: 2, borderRadius: 3, bgcolor: brand.emeraldSoft }}>
                <InfoOutlinedIcon sx={{ color: brand.emerald, fontSize: 20, mt: 0.2 }} />
                <Typography sx={{ fontSize: 14.5, color: brand.emeraldDeep }}>
                  Our shop is closed on Fridays, but we still deliver every day of the week, including Friday.
                </Typography>
              </Stack>
            </Box>
          </Reveal>
        </Box>
        <Reveal delay={0.1}>
          <Box sx={{ mt: 2.5, borderRadius: 4, overflow: "hidden", height: { xs: 280, md: 340 }, border: `1px solid ${brand.line}` }}>
            <iframe
              title="Qasim Traders location — Ganjmandi, Rawalpindi"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Chaudhary Bazar, Ganjmandi, Rawalpindi")}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
            />
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

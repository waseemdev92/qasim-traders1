"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SectionHeading from "./SectionHeading";
import ProductArt from "./ProductArt";
import Reveal from "./Reveal";
import { business, categories } from "@/data/site";
import { brand } from "@/theme/theme";

export default function Products() {
  return (
    <Box id="products" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="Our Products"
          title={<>Three essentials. <Box component="em" sx={{ color: brand.goldDeep }}>One standard.</Box></>}
          subtitle="Whether it's a 1 kg pack for your kitchen or a truckload for your business, every order gets the same care."
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.12}>
              <Box
                component={motion.div}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 5,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: "0 1px 2px rgba(13,15,11,0.04), 0 20px 50px -20px rgba(13,15,11,0.18)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ position: "relative", bgcolor: c.accentSoft }}>
                  <ProductArt kind={c.id as "rice" | "spices" | "onions"} height={200} />
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 18,
                      fontSize: 26,
                      fontWeight: 600,
                      color: brand.ink,
                      bgcolor: "rgba(255,253,247,0.85)",
                      px: 1.5,
                      borderRadius: 2,
                      backdropFilter: "blur(6px)",
                      direction: "rtl",
                    }}
                  >
                    {c.urdu}
                  </Typography>
                </Box>
                <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", flex: 1 }}>
                  <Typography variant="overline" sx={{ color: brand.goldDeep }}>0{i + 1}</Typography>
                  <Typography variant="h4" sx={{ fontSize: 28, mt: 0.5 }}>{c.title}</Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1.5, lineHeight: 1.7 }}>{c.blurb}</Typography>
                  <Stack spacing={1.3} sx={{ mt: 3, mb: 3 }}>
                    {c.items.map((it) => (
                      <Stack key={it.name} direction="row" spacing={1.4} sx={{ alignItems: "flex-start" }}>
                        <CheckCircleIcon sx={{ fontSize: 19, color: brand.gold, mt: "2px" }} />
                        <Box>
                          <Typography sx={{ fontWeight: 650, fontSize: 15 }}>{it.name}</Typography>
                          <Typography variant="caption" sx={{ color: brand.muted }}>{it.note}</Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<WhatsAppIcon />}
                    href={`https://wa.me/923325555003?text=${encodeURIComponent(`Assalam-o-Alaikum, I'd like rates for ${c.title}.`)}`}
                    target="_blank"
                    rel="noopener"
                    sx={{ mt: "auto", alignSelf: "flex-start" }}
                  >
                    Ask for rates
                  </Button>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.2}>
          <Typography sx={{ textAlign: "center", mt: 5, color: "text.secondary" }}>
            Looking for something specific? Call us on{" "}
            <Box component="a" href={`tel:${business.phoneRaw}`} sx={{ color: brand.goldDeep, fontWeight: 700, textDecoration: "none" }}>
              {business.phone}
            </Box>
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

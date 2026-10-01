"use client";

import { Box, Container, Typography } from "@mui/material";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { orderSteps } from "@/data/site";
import { brand } from "@/theme/theme";

const icons = [<TouchAppOutlinedIcon key="a" />, <WhatsAppIcon key="b" />, <LocalShippingOutlinedIcon key="c" />];

export default function OrderSteps() {
  return (
    <Box id="delivery" component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: brand.canvas }}>
      <Container maxWidth="lg">
        <SectionHeading
          overline="Delivery"
          title="How ordering works"
          subtitle="Add items to your cart, enter your address and send the order. We confirm the total and delivery time with you by phone or WhatsApp."
        />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5, position: "relative" }}>
          {orderSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Box sx={{ position: "relative", height: "100%", p: { xs: 3, md: 3.5 }, bgcolor: "#fff", borderRadius: 4, border: `1px solid ${brand.line}`, overflow: "hidden" }}>
                <Typography
                  aria-hidden
                  sx={{ position: "absolute", right: 18, top: 6, fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 800, fontSize: 84, color: brand.emeraldSoft, lineHeight: 1, letterSpacing: "-0.05em" }}
                >
                  0{i + 1}
                </Typography>
                <Box sx={{ position: "relative", width: 48, height: 48, borderRadius: 3, display: "grid", placeItems: "center", bgcolor: brand.emerald, color: "#fff" }}>{icons[i]}</Box>
                <Typography variant="h5" sx={{ position: "relative", mt: 2.5, fontSize: 20 }}>{s.title}</Typography>
                <Typography sx={{ position: "relative", mt: 1, color: brand.slate, lineHeight: 1.7 }}>{s.text}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

"use client";

import { Box, Container } from "@mui/material";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { rice, riceIntro, spices, spicesIntro } from "@/data/site";
import { brand } from "@/theme/theme";

export default function Products() {
  return (
    <>
      <Box id="rice" component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: brand.canvas }}>
        <Container maxWidth="lg">
          <SectionHeading overline="Rice" title="Steam rice" subtitle={riceIntro} />
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }, gap: { xs: 1.5, md: 2.5 } }}>
            {rice.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06} style={{ height: "100%" }}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>
      <Box id="spices" component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: "#fff", borderTop: `1px solid ${brand.line}`, borderBottom: `1px solid ${brand.line}` }}>
        <Container maxWidth="lg">
          <SectionHeading overline="Spices" title="Spices" subtitle={spicesIntro} />
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }, gap: { xs: 1.5, md: 2.5 } }}>
            {spices.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.06} style={{ height: "100%" }}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

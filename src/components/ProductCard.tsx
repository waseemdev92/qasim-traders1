"use client";

import { useState } from "react";
import { Box, Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { fmt, riceQty, spiceQty, type Product } from "@/data/site";
import { brand } from "@/theme/theme";
import { useCart } from "./CartContext";

export default function ProductCard({ p }: { p: Product }) {
  const isRice = p.kind === "rice";
  const opts = isRice ? riceQty : spiceQty;
  const [qty, setQty] = useState<number>(1);
  const { add } = useCart();

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
        borderRadius: 4,
        border: `1px solid ${brand.line}`,
        overflow: "hidden",
        transition: "box-shadow .3s, border-color .3s",
        "&:hover": { boxShadow: "0 30px 60px -30px rgba(6,26,20,.35)", borderColor: "rgba(14,77,58,.25)" },
        "&:hover img": { transform: "scale(1.05)" },
      }}
    >
      <Box sx={{ position: "relative", bgcolor: isRice ? "#F1F4F2" : "#F4F1EA", aspectRatio: isRice ? "4 / 5" : "1 / 1", overflow: "hidden" }}>
        <Box
          component="img"
          src={p.image}
          alt={isRice ? `${p.name} 25 kg bag` : `${p.name} in a bowl`}
          loading="lazy"
          sx={{ width: "100%", height: "100%", objectFit: isRice ? "contain" : "cover", p: isRice ? 2 : 0, display: "block", transition: "transform .6s cubic-bezier(.22,1,.36,1)" }}
        />
        <Box sx={{ position: "absolute", top: 12, left: 12, px: 1.1, py: 0.4, borderRadius: 1.5, bgcolor: "rgba(255,255,255,.92)", backdropFilter: "blur(6px)", fontSize: 11, fontWeight: 700, color: brand.emerald, letterSpacing: ".04em" }}>
          {isRice ? "25 KG BAG" : "PER KG"}
        </Box>
      </Box>
      <Box sx={{ p: 2.2, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography sx={{ fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 750, fontSize: 16.5, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{p.name}</Typography>
        <Typography sx={{ fontSize: 13, color: brand.muted, mt: 0.3 }}>{p.tag}</Typography>
        <Stack direction="row" sx={{ alignItems: "baseline", columnGap: 0.8, flexWrap: "wrap", mt: 1.5, mb: 2 }}>
          <Typography sx={{ fontFamily: '"Plus Jakarta Sans Variable"', fontWeight: 800, fontSize: { xs: 18, md: 21 }, color: brand.ink, whiteSpace: "nowrap" }}>{fmt(p.price)}</Typography>
          <Typography sx={{ fontSize: 12.5, color: brand.muted }}>{isRice ? "per 25 kg bag" : "per kg"}</Typography>
        </Stack>
        <Stack direction={isRice ? "column" : { xs: "column", sm: "row" }} spacing={1} sx={{ mt: "auto" }}>
          <Select
            size="small"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            sx={{ minWidth: 92, fontSize: 14, fontWeight: 600, "& .MuiSelect-select": { py: 0.9 } }}
            inputProps={{ "aria-label": "Quantity" }}
          >
            {opts.map((o) => (
              <MenuItem key={o} value={o}>
                {o} {isRice ? "bag" : "kg"}
              </MenuItem>
            ))}
          </Select>
          <Button fullWidth variant="contained" startIcon={<AddShoppingCartIcon sx={{ fontSize: 18 }} />} onClick={() => add(p.id, qty)} sx={{ py: 0.9 }}>
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

"use client";

import { createTheme } from "@mui/material/styles";

// Emerald & champagne — clean, light, enterprise.
export const brand = {
  emerald: "#0E4D3A",
  emeraldDeep: "#08291F",
  emeraldNight: "#061A14",
  emeraldSoft: "#E7F0EC",
  champagne: "#C8A96A",
  champagneLight: "#E9D9B4",
  champagneDeep: "#9E8045",
  ink: "#0B1A14",
  slate: "#4B5A53",
  muted: "#7A8781",
  line: "#E3E8E5",
  canvas: "#F6F7F5",
  white: "#FFFFFF",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: brand.emerald, dark: brand.emeraldDeep, light: "#2C6B57", contrastText: "#fff" },
    secondary: { main: brand.champagne, dark: brand.champagneDeep, light: brand.champagneLight, contrastText: brand.ink },
    background: { default: brand.canvas, paper: brand.white },
    text: { primary: brand.ink, secondary: brand.slate },
    divider: brand.line,
    success: { main: "#1F8A5B" },
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: '"Inter Variable", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: '"Plus Jakarta Sans Variable", "Inter Variable", sans-serif', fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04 },
    h2: { fontFamily: '"Plus Jakarta Sans Variable", "Inter Variable", sans-serif', fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 },
    h3: { fontFamily: '"Plus Jakarta Sans Variable", "Inter Variable", sans-serif', fontWeight: 750, letterSpacing: "-0.02em" },
    h4: { fontFamily: '"Plus Jakarta Sans Variable", "Inter Variable", sans-serif', fontWeight: 750, letterSpacing: "-0.015em" },
    h5: { fontFamily: '"Plus Jakarta Sans Variable", "Inter Variable", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Plus Jakarta Sans Variable", "Inter Variable", sans-serif', fontWeight: 700 },
    overline: { fontWeight: 700, letterSpacing: "0.16em", fontSize: "0.72rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 650 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 18,
          paddingBlock: 9,
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: { boxShadow: "0 1px 0 rgba(255,255,255,.15) inset, 0 8px 20px -8px rgba(14,77,58,.55)" },
            },
          ],
        },
        sizeLarge: { paddingInline: 24, paddingBlock: 13, fontSize: "0.98rem" },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10, backgroundColor: "#fff" } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
});

export default theme;

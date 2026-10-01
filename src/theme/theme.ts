"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const brand = {
  ink: "#0D0F0B",
  inkSoft: "#15180F",
  panel: "#1A1D14",
  gold: "#C9A24A",
  goldLight: "#E6C77A",
  goldDeep: "#9C7A2E",
  cream: "#F7F2E6",
  creamDeep: "#EDE3CC",
  paprika: "#B4492B",
  turmeric: "#D99A1E",
  leaf: "#4E6B3A",
  muted: "#8E8A7C",
};

let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: brand.gold, dark: brand.goldDeep, light: brand.goldLight, contrastText: brand.ink },
    secondary: { main: brand.ink, contrastText: brand.cream },
    background: { default: brand.cream, paper: "#FFFDF7" },
    text: { primary: brand.ink, secondary: "#5B5848" },
    divider: "rgba(13,15,11,0.08)",
  },
  shape: { borderRadius: 5 },
  typography: {
    fontFamily: "var(--font-sans), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    h1: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05 },
    h2: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.1 },
    h3: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 600, letterSpacing: "-0.01em" },
    h4: { fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 600 },
    h5: { fontWeight: 650 },
    h6: { fontWeight: 650 },
    overline: { fontWeight: 700, letterSpacing: "0.22em", fontSize: "0.72rem" },
    button: { textTransform: "none", fontWeight: 650, letterSpacing: "0.01em" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22, paddingBlock: 11 },
        sizeLarge: { paddingInline: 28, paddingBlock: 14, fontSize: "1rem" },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
});

theme = responsiveFontSizes(theme, { factor: 2.4 });

export default theme;

# Qasim Traders — Demo Website

Premium rice, spices & fried onions · Retail & Wholesale · Rawalpindi
Demo prepared by **Aevrix AI Technologies**.

## Stack
- Next.js (App Router) + TypeScript
- MUI (Material UI) with a custom theme — `src/theme/theme.ts`
- Framer Motion for animations
- Self-hosted fonts (Inter + Playfair Display via @fontsource)

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit content
All text (phone numbers, products, POS features, comparison table) lives in `src/data/site.ts`.

## Structure
- `src/app/` — layout, page, global CSS, favicon
- `src/components/` — TopBanner, Navbar, Hero, Marquee, Products, Wholesale, WhyUs, Contact, AevrixPOS, Footer, FloatingWhatsApp

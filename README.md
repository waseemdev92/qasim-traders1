# Qasim Traders — Demo Website

Rice, Spices & Pulses · Established 1952 · Ganjmandi, Rawalpindi
Demo prepared by **Aevrix AI Technologies**.

## Stack
- Next.js (App Router) + TypeScript
- MUI with a custom emerald & champagne theme — `src/theme/theme.ts`
- Framer Motion animations
- Self-hosted fonts (Inter + Plus Jakarta Sans via @fontsource)

## Features
- Rice (per 25 kg bag) and spices (per kg) catalog with real product images (`public/images`)
- Cart drawer → order sent on WhatsApp with name, phone and address
- How ordering works, contact & business hours
- Aevrix message + POS section

## Run
```bash
npm install
npm run dev
```

All content (products, prices, phone, hours) lives in `src/data/site.ts`.

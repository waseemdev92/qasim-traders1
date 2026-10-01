export const business = {
  name: "Qasim Traders",
  tagline: "Premium Rice, Spices & Fried Onions",
  city: "Rawalpindi",
  phone: "0332 5555003",
  phoneRaw: "+923325555003",
  whatsapp: "https://wa.me/923325555003?text=" + encodeURIComponent("Assalam-o-Alaikum Qasim Traders, I would like to place an order."),
};

export const aevrix = {
  name: "Aevrix AI Technologies",
  phone: "0347 8520705",
  phoneRaw: "+923478520705",
  whatsapp:
    "https://wa.me/923478520705?text=" +
    encodeURIComponent("Assalam-o-Alaikum Aevrix, I saw the Qasim Traders demo website and I'm interested."),
  tagline: "Website + POS + Automation — one trusted tech partner",
  motto: "Engineering Intelligence. Empowering Businesses.",
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export type ProductCategory = {
  id: string;
  title: string;
  urdu: string;
  blurb: string;
  accent: string;
  accentSoft: string;
  items: { name: string; note: string }[];
};

export const categories: ProductCategory[] = [
  {
    id: "rice",
    title: "Premium Rice",
    urdu: "چاول",
    blurb: "Long, aromatic grains — aged, cleaned and graded for biryani, pulao and everyday cooking.",
    accent: "#E9DFC6",
    accentSoft: "#F6F0E1",
    items: [
      { name: "Super Kernel Basmati", note: "Aged · extra long grain" },
      { name: "1121 Sella Basmati", note: "Golden sella · non-sticky" },
      { name: "1121 Steam Basmati", note: "Bright white · fluffy" },
      { name: "Daily Use Rice", note: "Value grade · households" },
    ],
  },
  {
    id: "spices",
    title: "Pure Spices",
    urdu: "مصالحہ جات",
    blurb: "Whole and ground spices with deep colour and strong aroma — no fillers, no shortcuts.",
    accent: "#B4492B",
    accentSoft: "#F4E1D8",
    items: [
      { name: "Red Chilli Powder", note: "Rich colour · balanced heat" },
      { name: "Haldi (Turmeric)", note: "Bright & earthy" },
      { name: "Dhania & Zeera", note: "Whole or ground" },
      { name: "Garam Masala", note: "House blend" },
    ],
  },
  {
    id: "onions",
    title: "Fried Onions",
    urdu: "تلی ہوئی پیاز",
    blurb: "Crispy, golden-brown fried onions for biryani, qorma and pulao — consistent batch after batch.",
    accent: "#C27A2C",
    accentSoft: "#F5E6D2",
    items: [
      { name: "Crispy Fried Onion", note: "Golden · ready to use" },
      { name: "Restaurant Bulk Packs", note: "For kitchens & caterers" },
      { name: "Retail Packs", note: "Home kitchen sizes" },
      { name: "Custom Orders", note: "On request" },
    ],
  },
];

export const stats = [
  { value: "Retail", label: "Home kitchens" },
  { value: "Wholesale", label: "Shops, hotels & caterers" },
  { value: "3", label: "Core product lines" },
  { value: "Rawalpindi", label: "Serving the twin cities" },
];

export const whyUs = [
  { title: "Hand-Picked Quality", text: "Every lot is checked for grain length, aroma, colour and cleanliness before it reaches you." },
  { title: "Fair, Honest Rates", text: "Transparent pricing for retail customers and competitive slabs for bulk buyers." },
  { title: "Consistent Supply", text: "Reliable stock for restaurants, caterers and shops that can't afford to run out." },
  { title: "Clean & Sealed Packing", text: "Hygienically packed to keep freshness, aroma and crunch locked in." },
];

export const posFeatures = [
  { title: "Retail & Wholesale Billing", text: "Separate retail and wholesale rates, discounts and quick counter billing." },
  { title: "Party Ledger (Khata)", text: "Track credit, payments and outstanding balances of every shop and customer." },
  { title: "Inventory & Stock Costing", text: "Track stock by bag and kg, wastage and per-item cost so you know your real profit." },
  { title: "Delivery & WhatsApp Orders", text: "Manage delivery orders and receive website/WhatsApp orders straight into your POS." },
  { title: "Owner Dashboard", text: "Daily sales, best sellers, staff and branch reports — on your phone, anywhere." },
  { title: "Works Even Offline", text: "Load-shedding or internet down? Billing keeps running and syncs when back online." },
];

export const posComparison = [
  "Built around YOUR products & workflow",
  "Urdu + English receipts",
  "Website & WhatsApp order integration",
  "Works offline, syncs automatically",
  "You own your data — no lock-in",
  "Direct local support (call / WhatsApp)",
  "Custom features added on request",
  "Transparent pricing, no hidden charges",
];

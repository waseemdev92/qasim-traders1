export const business = {
  name: "Qasim Traders",
  tagline: "Rice, Spices & Pulses",
  established: 1952,
  address: "Shop No. V-219, Chaudhary Bazar, Ganjmandi, Rawalpindi",
  phone: "0332 5555003",
  phoneRaw: "+923325555003",
  whatsappNumber: "923325555003",
  whatsapp: "https://wa.me/923325555003",
  hoursShort: "Open 9 AM – 10 PM · Friday closed",
  deliveryShort: "Delivery available all 7 days, even Friday",
};

export const hours = [
  { day: "Monday to Thursday", time: "9 AM – 10 PM" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday and Sunday", time: "9 AM – 10 PM" },
  { day: "Delivery", time: "Monday to Sunday" },
];

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
  { label: "Rice", href: "#rice" },
  { label: "Spices", href: "#spices" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contact", href: "#contact" },
];

export type Product = {
  id: string;
  name: string;
  tag: string;
  price: number;
  image: string;
  kind: "rice" | "spice";
};

export const riceIntro = "Full 25 kg bags for homes, shops and events. Prices are per 25 kg bag.";
export const spicesIntro = "Whole and ground spices, priced per kg. Choose from half a kilo upwards.";

export const rice: Product[] = [
  { id: "mizaeel", name: "Mizaeel Steam Rice", tag: "Long grain 1121 steam", price: 8250, image: "/images/rice-mizaeel.jpg", kind: "rice" },
  { id: "strawberry", name: "Strawberry Steam Rice", tag: "Everyday steam rice", price: 8438, image: "/images/rice-strawberry.jpg", kind: "rice" },
  { id: "silver", name: "Silver Steam Rice", tag: "Best value steam rice", price: 7500, image: "/images/rice-silver.jpg", kind: "rice" },
  { id: "seerat", name: "Seerat Steam Rice", tag: "Premium long grain", price: 8875, image: "/images/rice-seerat.jpg", kind: "rice" },
  { id: "al-sabar-gold", name: "Al Sabar Gold Steam Rice", tag: "Extra long grain", price: 8125, image: "/images/rice-al-sabar-gold.jpg", kind: "rice" },
];

const spice = (id: string, name: string, price: number, tag = "Fresh and pure"): Product => ({
  id,
  name,
  tag,
  price,
  image: `/images/${id}.jpg`,
  kind: "spice",
});

export const spices: Product[] = [
  spice("crushed-chilli-powder", "Crushed Chilli Powder", 550),
  spice("red-chilli-powder", "Red Chilli Powder", 550),
  spice("turmeric-powder", "Turmeric Powder", 550),
  spice("coriander-seeds", "Coriander Seeds", 570),
  spice("coriander-powder", "Coriander Powder", 570),
  spice("black-pepper", "Black Pepper", 2300),
  spice("black-pepper-powder", "Black Pepper Powder", 2200),
  spice("white-cumin-seeds", "White Cumin Seeds", 1200),
  spice("indian-cloves", "Indian Cloves", 3400),
  spice("black-cardamom", "Black Cardamom", 3350),
  spice("cinnamon", "Cinnamon", 7500),
  spice("garam-masala-premium", "Garam Masala (Premium)", 1400, "Higher quality blend"),
  spice("garam-masala-standard", "Garam Masala (Standard)", 1000, "Everyday quality blend"),
  spice("fried-onions", "Fried Onions", 300),
];

export const riceQty = [1, 2, 3, 5, 10];
export const spiceQty = [0.5, 1, 2, 3, 5];

export const fmt = (n: number) => "Rs " + Math.round(n).toLocaleString("en-US");

export const orderSteps = [
  { title: "Choose", text: "Pick rice bags or spices by the kilo and add them to your cart." },
  { title: "Send your order", text: "Enter your name, phone and address. Your order goes to us on WhatsApp." },
  { title: "Get it delivered", text: "We deliver to your door. Delivery charges depend on your area and order size." },
];

export const posFeatures = [
  { title: "Retail & Wholesale Billing", text: "Bag and per-kg pricing, retail and wholesale rates, discounts and quick counter billing." },
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

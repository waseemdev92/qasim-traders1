import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import OrderSteps from "@/components/OrderSteps";
import Contact from "@/components/Contact";
import AevrixPOS from "@/components/AevrixPOS";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <OrderSteps />
        <Contact />
        <AevrixPOS />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </>
  );
}

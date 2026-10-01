import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Wholesale from "@/components/Wholesale";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import AevrixPOS from "@/components/AevrixPOS";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Wholesale />
        <WhyUs />
        <Contact />
        <AevrixPOS />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

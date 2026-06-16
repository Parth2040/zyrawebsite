import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShoeSection from "@/components/ShoeSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import Footer from "@/components/Footer";
import { shoes } from "@/lib/shoes";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      {shoes.map((shoe, index) => (
        <ShoeSection key={shoe.id} shoe={shoe} index={index} />
      ))}
      <MarqueeStrip />
      <Footer />
    </main>
  );
}

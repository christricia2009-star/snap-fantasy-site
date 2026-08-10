import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductMap from "@/components/ProductMap";
import Comparison from "@/components/Comparison";
import Playbook from "@/components/Playbook";
import Friends from "@/components/Friends";
import UnderTheHood from "@/components/UnderTheHood";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <ProductMap />
        <Comparison />
        <Playbook />
        <Friends />
        <UnderTheHood />
        <Security />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyItMatters from "./components/WhyItMatters";
import Innovation from "./components/Innovation";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light">
      <Navbar />
      <Hero />
      <WhyItMatters />
      <Innovation />
      <Impact />
      <Footer />
    </main>
  );
}

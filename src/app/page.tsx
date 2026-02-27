import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundGrid from "@/components/BackgroundGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      <BackgroundGrid />
      <Navbar />
      <Hero />
    </main>
  );
}

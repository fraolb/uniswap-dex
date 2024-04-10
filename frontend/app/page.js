import Image from "next/image";
import { NavBar, HeroSection } from "@/Components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div>
        <HeroSection />
      </div>
    </main>
  );
}

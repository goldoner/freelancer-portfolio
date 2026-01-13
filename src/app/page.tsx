import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Rates from "@/components/sections/Rates";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stack />
        <Experience />
        <Rates />
        <Contact />
      </main>
    </>
  );
}

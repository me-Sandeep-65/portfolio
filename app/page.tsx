import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center justify-between p-8 px-36 w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
    <Footer/>
  </>);
}

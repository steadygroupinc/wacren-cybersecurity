import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyCybersecurity from "@/components/WhyCybersecurity";
import Pillars from "@/components/Pillars";
import Architecture from "@/components/Architecture";
import Components from "@/components/Components";
import Milestones from "@/components/Milestones";
import GetInvolved from "@/components/GetInvolved";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhyCybersecurity />
      <Pillars />
      <Architecture />
      <Components />
      <Milestones />
      <GetInvolved />
      <Partners />
      <Footer />
    </main>
  );
}

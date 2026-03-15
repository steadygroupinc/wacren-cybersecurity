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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WACREN Cybersecurity & Trust Programme",
    "url": "https://cybersecurity.wacren.net",
    "logo": "https://cybersecurity.wacren.net/logo.png",
    "description": "Building Africa's Cybersecurity Trust Infrastructure for Research and Education.",
    "sameAs": [
      "https://twitter.com/wacren",
      "https://www.linkedin.com/company/west-and-central-african-research-and-education-network/",
      "https://mastodon.social/@wacren",
      "https://bsky.app/profile/wacren.bsky.social"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Steps } from "@/components/sections/Steps/Steps";
import { Why } from "@/components/sections/Why/Why";
import { Trust } from "@/components/sections/Trust/Trust";
import { Expert } from "@/components/sections/Expert/Expert";
import { Conditions } from "@/components/sections/Conditions/Conditions";
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { Renew } from "@/components/sections/Renew/Renew";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Pricing } from "@/components/sections/Pricing/Pricing";
import { Faq } from "@/components/sections/Faq/Faq";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Why />
        <Steps />
        <Expert />
        <Trust />
        <Conditions />
        <Benefits />
        <Renew />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

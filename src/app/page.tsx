import { Navbar } from "@/components/ui";
import {
  ContactSection,
  FinalCtaSection,
  HeroSection,
  TrustBadgeSection,
  WhyHappyCleanSection,
  ServiceSection,
  BeforeAfterSection,
  ProblemCustomerSection,
  TestimonialsSection,
  FaqSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TrustBadgeSection />
      <WhyHappyCleanSection />
      <ServiceSection />
      <BeforeAfterSection />
      <ProblemCustomerSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
    </main>
  );
}

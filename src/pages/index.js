import { Footer } from "@/components/Footer/Footer";
import { PageMargin } from "@/components/PageMargin/PageMargin";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ProcessSection } from "@/components/ProcessSection/ProcessSection";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { OfferingSection } from "@/components/OfferingSection/OfferingSection";
import { DecoratorSection } from "@/components/DecoratorSection/DecoratorSection";
import { CommitmentSection } from "@/components/CommitmentSection/CommitmentSection";
import { SubscriptionSection } from "@/components/SubscriptionSection/SubscriptionSection";

export default function Index() {
  return (
    <>
      <HeroSection />

      <PageMargin>
        <DecoratorSection />

        <ProcessSection />

        <CommitmentSection />
      </PageMargin>

      <FeaturesSection />

      <PageMargin>
        <OfferingSection />
      </PageMargin>

      <SubscriptionSection />

      <Footer />
    </>
  );
}

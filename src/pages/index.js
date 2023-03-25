import { useState } from "react";

import { Button } from "@/components/Elements/Button/Button";
import { PageMargin } from "@/components/PageMargin/PageMargin";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { TextInput } from "@/components/Elements/TextInput/TextInput";
import { SubscriptionForm } from "@/components/Form/SubscriptionForm";
import { ProcessSection } from "@/components/ProcessSection/ProcessSection";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { OfferingSection } from "@/components/OfferingSection/OfferingSection";
import { DecoratorSection } from "@/components/DecoratorSection/DecoratorSection";
import { CommitmentSection } from "@/components/CommitmentSection/CommitmentSection";
import { SubscriptionSection } from "@/components/SubscriptionSection/SubscriptionSection";

export default function Index() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (value) => setEmail(value);

  return (
    <>
      <HeroSection />

      {/* Subscription form displayed at mobile view */}
      <PageMargin>
        <div className="py-12 md:hidden">
          <SubscriptionForm value={email}>
            <p className="text-sm text-white text-gray-600">
              Join the waitlist to get notified when we launch
            </p>
            <TextInput
              variant="inverse"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmailChange}
            />
            <Button type="submit">
              <a href="#subscription_section">Joint the Waitlist</a>
            </Button>
          </SubscriptionForm>
        </div>

        <DecoratorSection />

        <ProcessSection />

        <CommitmentSection />
      </PageMargin>

      <FeaturesSection />

      <PageMargin>
        <OfferingSection />
      </PageMargin>

      <SubscriptionSection />
    </>
  );
}

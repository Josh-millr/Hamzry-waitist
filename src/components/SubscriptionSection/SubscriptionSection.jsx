import { useState } from "react";

import { Button } from "../Elements/Button/Button";
import { TextInput } from "../Elements/TextInput/TextInput";
import { SubscriptionForm } from "../Form/SubscriptionForm";
import { PageMargin } from "../PageMargin/PageMargin";

export function SubscriptionSection() {
  const [email, setEmail] = useState("");

  console.log(email);

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  return (
    <div id="subscription_section" className="bg-[#FCF5EB] py-36">
      <PageMargin>
        <div className="mx-auto grid max-w-lg gap-y-12">
          <div className="grid place-items-center text-center">
            <div className="grid gap-y-4">
              <div className="grid gap-y-2 md:gap-y-4">
                <p className="font-sans text-xs font-bold uppercase text-[#108239]">
                  {"Don't"} miss out on the opportunity
                </p>
                <h2 className="font-sans text-2xl font-bold sm:text-3xl">
                  Join our waitlist today
                </h2>
              </div>
              <p className="font-sans text-sm md:text-base">
                Join our vibrant community of freelancers and businesses. Join
                our waitlist today and be the first to know when we launch!
              </p>
            </div>
          </div>

          <div className="inline">
            <div className="flex-col gap-y-2">
              <p className="mx-auto w-full max-w-md font-sans text-sm text-gray-600">
                Join the waitlist to get notified when we launch
              </p>
              <SubscriptionForm value={email}>
                <TextInput
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleEmailChange}
                />
                <Button type="submit">Join the waitlist</Button>
              </SubscriptionForm>
            </div>
          </div>
        </div>
      </PageMargin>
    </div>
  );
}

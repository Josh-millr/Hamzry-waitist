import Image from "next/image";

import { Button } from "../Elements/Button/Button";
import { PageMargin } from "../PageMargin/PageMargin";

import documentRating from "@/assets/illustrations/document-rating.svg";

export function FeaturesSection() {
  return (
    <div className="bg-[#115B61]">
      <PageMargin>
        <div className="flex flex-col gap-y-10 py-16 md:py-20 lg:flex-row lg:place-items-center lg:gap-x-10">
          <div className="inine relative h-[286px] w-fill md:h-[316px] md:w-[328px] lg:h-[356px] lg:w-[678px]">
            <Image
              fill
              className="rounded-xl"
              src={documentRating}
              style={{ objectFit: "cover" }}
              alt="Women with laptop smilling"
            />
          </div>
          <div className="grid gap-y-4">
            <p className="text-base text-white">
              Our marketplace features a rating and review system, secure
              payment processing, and a support team dedicated to helping our
              users succeed
            </p>
            <Button type="button" variant="inverse">
              <a href="#subscription_section">Joint the Waitlist</a>
            </Button>
          </div>
        </div>
      </PageMargin>
    </div>
  );
}

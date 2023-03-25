import { motion } from "framer-motion"

import { RatingChip, PaymentChip, MilestoneChip } from "../Chips/Chips";

export function DecoratorSection() {
  return (
    <div className="h-[696px] w-full py-10 md:h-[636px]">
      <RatingChip
        className="relative top-[45px] -left-[80px] sm:left-[0px]"
        count={374}
        name="James Okafor"
        img="https://picsum.photos/id/375/200"
      />
      <MilestoneChip
        count={8}
        className="relative top-[45px] left-[256px] sm:left-[406px] md:top-[40px] md:left-[549px] lg:left-[800px]"
      />
      <PaymentChip
        amount="723,450"
        className="relative top-[50px] -left-[20px] lg:left-[290px]"
      />

      <RatingChip
        className="relative top-[100px] -left-[1px] sm:left-[320px] lg:left-[690px]"
        count={374}
        name="James Okafor"
        img="https://picsum.photos/id/375/200"
      />
      <PaymentChip
        amount="723,450"
        className="relative top-[170px] left-[111px] md:left-[600px] lg:left-[400px]"
      />
      <MilestoneChip
        count={8}
        className="relative top-[253px] -left-[17px] md:top-[52px]"
      />
    </div>
  );
}

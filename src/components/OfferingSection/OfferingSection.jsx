import Image from "next/image";

import womenWithLaptop from "@/assets/images/women-with-laptop-smiling.png";

export function OfferingSection() {
  return (
    <div className="flex flex-col place-items-center gap-10 py-12 md:flex-row md:py-24">
      <div className="grid gap-4">
        <div className="grid">
          <p className="text-sm font-semibold text-[#108239]">
            Ready to Boost Your Career in the Creative Space?
          </p>
          <h2 className="text-3xl md:text-4xl">
            Join Hamzry waitlist and start landing high-paying gigs
          </h2>
        </div>
        <p className="text-sm">
          Join Hamzry Waitlist to Connect with Top Brands and Showcase Your
          Creative Talent to the World. Whether you are a graphic designer,
          social media manager,content writer or copywriter, Hamzry has the
          platform to help you elevate your career and connect with global
          clients. Join us now to access exclusive opportunities in web design,
          branding, content creation, and more.
        </p>
      </div>
      <div className="relative order-first h-[240px] w-full sm:h-[308px] md:order-last md:w-[1400px]">
        <Image
          fill
          src={womenWithLaptop}
          alt="Hero Image"
          className="rounded-[24px]"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

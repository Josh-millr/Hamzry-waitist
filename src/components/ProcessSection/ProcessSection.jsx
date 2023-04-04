import { useState, useEffect } from "react";

import { Button } from "../Elements/Button/Button";
import { ProcessCard } from "../ProcessCard/ProcessCard";

import blackWomenWithLaptop from "@/assets/images/black-woman-with-laptop.png";
import whiteBusinessPeople from "@/assets/images/white-business-people.png";

export function ProcessSection() {

  return (
    <div className="mx-auto grid max-w-3xl gap-y-24 py-10">
      <div className="grid place-items-center items-center gap-y-2 text-center">
        <p className="text-base font-semibold text-[#108239]">
          Welcome to Hamzry
        </p>
        <div className="grid gap-y-4">
          <h2 className="text-3xl font-bold md:font-medium">
            Where talent meets opportunity{" "}
          </h2>
          <p className="text-center text-sm md:text-base">
            Are you tired of the traditional job market and looking for a more
            flexible and rewarding way to work? Work with the largest network of
            independent professionals and get things done-from quick turnarounds
            to big transformations.
          </p>
        </div>
        <span className="mt-8">
          <Button type="submit">
            <a href="#subscription_section">Join the Waitlist</a>
          </Button>
        </span>
      </div>

      <div className="flex flex-col place-items-center gap-6 sm:flex-row">
        <ProcessCard
          variant={"fill"}
          type="freelancer"
          img={blackWomenWithLaptop}
          imgAlt="woman with laptop"
          description="With our platform, you can sell your services as gigs or apply for projects, all while having complete control over your work schedule"
          title="Sell their service as gigs"
        />
        <ProcessCard
          variant={"stroke"}
          type="Client/Business Owners"
          img={whiteBusinessPeople}
          imgAlt="woman with laptop"
          description="You can use hamzry to recruit and hire top tier Nigerian talent for your long and short term projects"
          title="Find and hire the talent"
        />
      </div>
    </div>
  );
}

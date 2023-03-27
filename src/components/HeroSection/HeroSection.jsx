import { useState, useContext } from "react"; // useEffect, useRef,
import Image from "next/image";
// import Typed from "typed.js";

import { StoreContext } from "@/context/Store";

import { Button } from "../Elements/Button/Button";
import { TextInput } from "../Elements/TextInput/TextInput";
import { SubscriptionForm } from "../Form/SubscriptionForm";

import heroImage from "@/assets/images/hero-image.png";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const { loading } = useContext(StoreContext);

  // Create reference to store the DOM element containing the animation
  // const el = useRef(null);

  // Create reference to store the Typed instance itself
  // const typed = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: [
  //       "Design",
  //       "Marketing",
  //       "Writing",
  //       "Translation",
  //       "Video",
  //       "Animation",
  //       "Programming",
  //       "Data Analysis",
  //       "Business",
  //       "Photography",
  //     ],

  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     backDelay: 100,

  //     loop: true,
  //     loopCount: Infinity,
  //   };

  //   typed.current = new Typed(el.current, options);

  //   return () => {
  //     // Make sure to destroy Typed instance during cleanup
  //     // to prevent memory leaks
  //     typed.current.destroy();
  //   };
  // }, []);

  const handleEmailChange = (value) => setEmail(value);

  return (
    <header className="relative mx-auto flex max-w-7xl place-content-center px-6 py-20 md:py-32">
      <Image
        className="bg-gray-500 lg:rounded-[32px]"
        src={heroImage}
        fill
        alt="Hero Image"
        style={{ objectFit: "cover" }}
        placeholder="blur"
      />

      <div className="z-10 grid place-items-center gap-y-10 text-white">
        <div className="grid max-w-3xl gap-y-4">
          <div className="grid place-items-center gap-2">
            <h1 className="text-xs uppercase tracking-widest">
              A marketplace for digital services
            </h1>
            <h2 className="text-center text-4xl font-bold lg:text-5xl">
              Are you a talented freelancer? {"We’ve"} got jobs for you! <br />
              {/* <span className="text-green-400">
                <span ref={el}></span>Jobs!
              </span> */}
             </h2>
          </div>

          {/* To place description text */}
          <p className="mx-auto max-w-md text-center text-sm text-white">
            Hamzry is a new platform that connects top clients from all over the
            world to{" "}
            <span className="text-green-400">Nigerian Freelancers.</span>
          </p>
        </div>

        {/* Subscription form displayed at tab/desk view */}
        <div className="w-full md:block">
          <div className="flex-col gap-y-2">
            <p className="mx-auto w-full max-w-md text-sm text-white">
              Join the waitlist to get notified when we launch
            </p>
            <SubscriptionForm value={email}>
              <TextInput
                type="email"
                value={email}
                disabled={loading}
                placeholder="Enter your email"
                onChange={handleEmailChange}
              />
              <Button type="submit">Join the waitlist</Button>
            </SubscriptionForm>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useContext, useEffect } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import { StoreContext } from "@/context/Store";
import { PageMargin } from "@/components/PageMargin/PageMargin";

const ReactPixel = dynamic(
  () => import("react-facebook-pixel").then((x) => x.default),
  {
    ssr: false,
  }
);

export default function SuccessPage() {
  const { setLoading, loading } = useContext(StoreContext);

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        // Track Waitlist Subscripton leading
        ReactPixel.track("Lead");
      })
      .then(() => console.log("Tracked new lead"));
  }, []);

  useEffect(() => setLoading(false), [setLoading]);

  return (
    <div className="bg-[#FCF5EB] ">
      <PageMargin>
        <div className="grid place-items-center gap-y-16 py-36 text-center">
          <div className="grid place-items-center gap-y-4">
            <div className="grid place-items-center gap-y-2">
              <p className="text-sm uppercase text-[#108239]">
                Email address received successfully
              </p>
              <h1 className="text-4xl font-bold">
                Thank You for Joining the Waitlist
              </h1>
            </div>
            <p className="text-base">You will be notified when we launch</p>
          </div>

          <div className="grid place-items-center gap-y-4">
            <p className="text-sm">
              kindly follow us on social media to stay updated
            </p>
            <div className="flex gap-x-2 sm:order-last">
              {/* Facebook account link... */}
              <a href="https://www.facebook.com/hamzry" target="_blank">
                <div className="rounded-full bg-gray-700 p-2">
                  <TiSocialFacebook size={24} color="#FFFFFF" />
                </div>
              </a>
              {/* Instagram account link... */}
              <a
                href="https://www.instagram.com/hamzrydigital/"
                target="_blank"
              >
                <div className="rounded-full bg-gray-700 p-2">
                  <IoLogoInstagram size={24} color="#FFFFFF" />
                </div>
              </a>
              {/* Linkedin account link... */}
              <a
                href="https://www.linkedin.com/company/hamzry/"
                target="_blank"
              >
                <div className="rounded-full bg-gray-700 p-2">
                  <TiSocialLinkedin size={24} color="#FFFFFF" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </PageMargin>
    </div>
  );
}

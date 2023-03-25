import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import { PageMargin } from "../PageMargin/PageMargin";

export function Footer() {
  return (
    <PageMargin>
      <div className="flex flex-col gap-y-8 py-8 sm:flex-row sm:justify-between">
        <div className="flex gap-x-2 sm:order-last">
          {/* Facebook account link... */}
          <a href="http://">
            <div className="rounded-full bg-gray-700 p-2">
              <TiSocialFacebook size={24} color="#FFFFFF" />
            </div>
          </a>
          {/* Instagram account link... */}
          <a href="http://">
            <div className="rounded-full bg-gray-700 p-2">
              <IoLogoInstagram size={24} color="#FFFFFF" />
            </div>
          </a>
          {/* Linkedin account link... */}
          <a href="http://">
            <div className="rounded-full bg-gray-700 p-2">
              <TiSocialLinkedin size={24} color="#FFFFFF" />
            </div>
          </a>
        </div>
        <p className="text-sm text-gray-600 sm:order-first">2023 © Hamzry Ltd</p>
      </div>
    </PageMargin>
  );
}

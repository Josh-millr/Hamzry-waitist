import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

import { PageMargin } from "../PageMargin/PageMargin";

export function Footer() {
  return (
    <PageMargin>
      <div className="flex flex-col gap-y-8 py-8 sm:flex-row sm:justify-between">
        <div className="flex gap-x-2 sm:order-last">
          {/* Facebook account link... */}
          <a href="https://web.facebook.com/hamzry?hc_ref=ARQxqpt0adoinuu6kdJm-tcB2zrEKGV-cgbS_wACj0eRNHx8Xa0hXYb-56c6Z6IpVI0&fref=nf&__xts__[0]=68.ARAyk2sNxUrr2DvJizGpr9zy8rUPB4Mu2yRd5ZqJZUY9Ro58fH---cUZZ0j-7EhsTiWhmq-egCL_isryqaoVgJoB_H6jBEjcxXLUoGM2Yp60p452dVX0657TmsoSbdVFJtUjPB3nxY0yJEphnP8ubD-qU6L2uPPOi3xqxlMBsDRBgOblajnsLbfByeCvmLdbpHRU2y9dlnzmsV6048isHSp2D2ZmiIOwTGkNHnNcXTfnsEfo6MkivQhaGCAMTX7-Z0kZdOqF9okzdlBOcKDOhkCzMMaVpySAdQbhczAOWA3lZOzrU5Y&_rdc=1&_rdr">
            <div className="rounded-full bg-gray-700 p-2">
              <TiSocialFacebook size={24} color="#FFFFFF" />
            </div>
          </a>
          {/* Instagram account link... */}
          <a href="https://www.instagram.com/hamzrydigital/">
            <div className="rounded-full bg-gray-700 p-2">
              <IoLogoInstagram size={24} color="#FFFFFF" />
            </div>
          </a>
          {/* Linkedin account link... */}
          <a href="https://ng.linkedin.com/company/hamzry?trk=public_post_feed-actor-name">
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

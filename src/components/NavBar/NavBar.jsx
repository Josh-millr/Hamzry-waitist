import Link from "next/link";
import Image from "next/image";

import hamzryBrandLogo from "@/assets/images/logo/hamzry-full-colored.svg";

export function NavBar() {
  return (
    <nav>
      <div className="mx-auto flex max-w-screen-lg place-content-center py-4">
        <Link href="/" className="inline">
          <Image
            height={40}
            width={132}
            src={hamzryBrandLogo}
            alt="hamzry brand logo"
          />
        </Link>
      </div>
    </nav>
  );
}

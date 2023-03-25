import { DM_Sans } from "next/font/google";

import { Store } from "@/context/Store";
import { Footer } from "@/components/Footer/Footer";
import { NavBar } from "@/components/NavBar/NavBar";
import { Loader } from "@/components/Elements/Loader/Loader";

import "@/style/globals.css";

const dmSans = DM_Sans({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-DMSans",
  weight: ["400", "500", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Store>
        <Loader />

        <NavBar />

        <div className={`${dmSans.variable} font-sans`}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </Store>
    </>
  );
}

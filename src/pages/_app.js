import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DM_Sans } from "next/font/google";

import { Store } from "@/context/Store";
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
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('763573695055805') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  
  return (
    <>
      <Store>
        <Loader />

        <NavBar />

        <div className={`${dmSans.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </Store>
    </>
  );
}

import "@/styles/globals.css";
import "@/styles/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className={font.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

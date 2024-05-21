import "@/styles/globals.css";
import "@/styles/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pagetrans } from "@/utils/animations";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function App({ Component, pageProps }) {
  const path = usePathname()

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
      <AnimatePresence mode="wait">
        <motion.div key={path} >
          <motion.div className="pagetrans" variants={pagetrans} initial='initial' animate='animate' exit='exit' />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

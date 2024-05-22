import { AnimatePresence, motion } from "framer-motion";
import style from "./header.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { headeranim } from "@/utils/animations";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollY;
      setShowHeader(isScrollingUp || currentScrollY === 0);
      setPrevScrollY(currentScrollY);
      setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showHeader && (
          <motion.header
            variants={headeranim}
            initial="initial"
            animate="animate"
            exit="exit"
            key={"header"}
            className={style.header}
          >
            <div className={style.main}>
              <p className="h3">Portfolio</p>
              <Button setOpen={setOpen} open={open} />
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && <Nav setOpen={setOpen} key={"navbar"} />}
      </AnimatePresence>
    </>
  );
}

export function Button({ open, setOpen }) {
  return (
    <button onClick={() => setOpen(!open)} className={`${style.button}`}>
      <div style={{ top: open ? "-100%" : "0%" }} className={style.slider}>
        <span>Menu</span>
        <span>Close</span>
      </div>
    </button>
  );
}

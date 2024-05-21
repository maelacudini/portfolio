import { AnimatePresence } from "framer-motion";
import style from "./header.module.scss";
import { useState } from "react";
import Nav from "./nav/Nav";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={style.header}>
        <Image
          alt="logo"
          src={"/logo.svg"}
          height={25}
          width={25}
          loading="lazy"
        />
        <p onClick={() => setOpen(!open)}>MENU</p>
      </header>

      <AnimatePresence>
        {open && <Nav setOpen={setOpen} key={"navbar"} />}
      </AnimatePresence>
    </>
  );
}

import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { links } from "@/utils/data";
import { navtrans } from "@/utils/animations";
import CustomLink from "../../customLink/CustomLink";

export default function Nav({ setOpen }) {
  return (
    <motion.nav
      variants={navtrans}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.nav}
    >
      <div className={style.main}>
        <div className={style.links}>
          {links.map((link, i) => (
            <CustomLink
              classes={"h1"}
              key={i + link.name}
              link={link}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

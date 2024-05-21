import style from "./hero.module.scss";
import Image from "next/image";
import me from "../../../public/images/me.jpg";
import { motion } from "framer-motion";
import { homeherotrans, titletrans } from "@/utils/animations";

export default function Hero() {
  return (
    <section className={style.hero}>
      <motion.div
        variants={homeherotrans}
        initial="initial"
        animate="animate"
        className={style.bg}
      >
        <Image alt="me" src={me} placeholder="blur" fill loading="eager" />
      </motion.div>
      <div className={style.center}>
        <div className={style.studio}>
          <motion.div
            variants={titletrans}
            initial="initial"
            animate="animate"
            custom={1}
            viewport={{ once: false }}
          >
            <Image
              loading="eager"
              priority
              alt="studio"
              src={"/general/STUDIO.svg"}
              width={1000}
              height={100}
            />
          </motion.div>
        </div>
        <div className={style.info}>
          <small>Since 2012</small>
          <small>Rome, Italy</small>
        </div>
      </div>
    </section>
  );
}

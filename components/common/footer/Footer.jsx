import { socials } from "@/utils/data";
import style from "./footer.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomLink from "../customLink/CustomLink";
import Title from "../title/Title";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  function backtotop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  let contact = { name: "Send an Email →", href: "mailto:" };

  return (
    <motion.footer style={{ y }} ref={ref} className={style.footer}>
      <div className={style.main}>
        <div className={style.hello}>
          <div>
            <Title paragraph={"Say hello"} classes={"h1 white"} />
            <CustomLink link={contact} classes={"h3 gray"} />
          </div>
          <button className="btn" onClick={backtotop}>
            Back to top
          </button>
        </div>

        <div className={style.end}>
          <div className={style.inner}>
            <p className="white">SOCIALS</p>
            <div className={style.links}>
              {socials.map((social, i) => (
                <CustomLink
                  key={i + social.name}
                  link={social}
                  classes={"gray"}
                />
              ))}
            </div>
          </div>
          <div className={style.inner}>
            <p className="white">WHERE AND WHEN</p>
            <div className={style.links}>
              <p className="gray">Street and number</p>
              <p className="gray">Rome, Italy</p>
              <p className="gray">Open from Monday to Friday</p>
            </div>
          </div>
          <div className={style.inner}>
            <p className="white">USEFUL NUMBERS</p>
            <div className={style.links}>
              <p className="gray">+12 345 678 9012</p>
              <p className="gray">+09 876 543 2109</p>
            </div>
          </div>
          <div className={style.inner}>
            <p className="gray">
              * This project is entirely a product of my imagination and does
              not represent any real company or entity; any references to
              people, things, or events are purely coincidental.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

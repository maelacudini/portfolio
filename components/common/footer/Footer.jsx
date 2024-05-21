import { socials } from "@/utils/data";
import style from "./footer.module.scss";
import { usePathname } from "next/navigation";
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
  const y = useTransform(scrollYProgress, [0, 1], [250, 0]);
  const ySpring = useSpring(y, { stiffness: 150, damping: 50, bounce: 0 });

  const pathname = usePathname();
  if (pathname === "/") {
    return null;
  }

  function backtotop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  let contact = { name: "Send an Email →", href: "mailto:" };

  return (
    <motion.footer style={{ y: ySpring }} ref={ref} className={style.footer}>
      <div className={style.main}>
        <div className={style.hello}>
          <div>
            <Title paragraph={"SAY HELLO"} />
            <CustomLink link={contact} classes={"h3 gray"} />
          </div>
          <p className="btn" onClick={backtotop}>
            Back to top
          </p>
        </div>

        <div className={style.end}>
          <div className={style.inner}>
            <p>SOCIALS</p>
            {socials.map((social, i) => (
              <CustomLink
                key={i + social.name}
                link={social}
                classes={"gray"}
              />
            ))}
          </div>
          <div className={style.inner}>
            <p>WHERE AND WHEN</p>
            <p className="gray">Street and number</p>
            <p className="gray">Rome, Italy</p>
            <p className="gray">Open from Monday to Friday</p>
          </div>
          <div className={style.inner}>
            <p>USEFUL NUMBERS</p>
            <p className="gray">+12 345 678 9012</p>
            <p className="gray">+09 876 543 2109</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

import style from "./line.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Line({ container }) {
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <motion.div style={{ width }} className={style.line} />;
}

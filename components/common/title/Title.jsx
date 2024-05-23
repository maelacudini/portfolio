import { titletrans } from "@/utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";

export default function Title({ paragraph, classes }) {
  let words = paragraph.split(" ");

  return (
    <div className={style.title}>
      {words.map((word, i) => (
        <span className={style.word} key={i + word}>
          <motion.p
            className={classes}
            variants={titletrans}
            initial="initial"
            whileInView="animate"
            custom={i + 1}
          >
            {word}&nbsp;
          </motion.p>
        </span>
      ))}
    </div>
  );
}

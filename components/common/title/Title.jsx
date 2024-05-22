import { titletrans } from "@/utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";

export default function Title({ paragraph, classes }) {
  let words = paragraph.split(" ");
  let index = 1;

  return (
    <div className={style.title}>
      {words.map((word, i) => (
        <span className={style.word} key={i + word}>
          {word.split("").map((letter, j) => {
            const currentIndex = index++;
            return (
              <span key={j + letter} className={style.letter}>
                <motion.p
                  className={classes}
                  variants={titletrans}
                  initial="initial"
                  whileInView="animate"
                  custom={currentIndex}
                >
                  {letter}
                </motion.p>
              </span>
            );
          })}
          &nbsp;&nbsp;&nbsp;
        </span>
      ))}
    </div>
  );
}

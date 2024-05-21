import { titletrans } from "@/utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";

export default function Title({ paragraph }) {
  let words = paragraph.split(" ");

  return (
    <div className={style.title}>
      {words.map((word, i) => (
        <span className={style.word} key={i + word}>
          {word.split("").map((letter, j) => (
            <span key={j + letter} className={style.letter}>
              <motion.p
                className="h1"
                variants={titletrans}
                initial="initial"
                whileInView="animate"
                custom={j + 1}
              >
                {letter}
              </motion.p>
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

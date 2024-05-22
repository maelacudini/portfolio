import { useScroll, useTransform, motion } from "framer-motion";
import style from "./vision.module.scss";
import { useRef } from "react";

export default function Vision() {
  const paragraph =
    "From understanding our ambitions, to crafting the direction, to executing with speed, Primary nailed it from the beginning. We are in love with all of it.";
  const words = paragraph.split(" ");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center end", "center start"],
  });

  return (
    <div ref={container} className={style.vision}>
      <div className={style.main}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={style.word}>
      <p className={`h2 ${style.shadow}`}>{children}</p>
      <motion.p style={{ opacity: opacity }} className="h2">
        {children}
      </motion.p>
    </span>
  );
};

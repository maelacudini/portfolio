import { useScroll, useTransform, motion } from "framer-motion";
import style from "./vision.module.scss";
import { useRef } from "react";

export default function Vision() {
  const paragraph =
    "Our Vision is to Transform Every Moment into a Masterpiece, Capturing the Authenticity and Emotion of Each Experience. We Strive to Continuously Innovate and Elevate the Art of Photography, Delivering Unparalleled Quality and Personalization to Every Client.";
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

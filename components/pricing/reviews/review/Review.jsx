import { useEffect, useState } from "react";
import style from "./review.module.scss";
import { motion } from "framer-motion";

export default function Review({ review, i }) {
  const date = new Date(review.date).toDateString();

  return (
    <motion.section
      style={{
        rotate:
          i % 2
            ? `${i + 1 * Math.random()}deg`
            : `${i + 1 * -Math.random()}deg`,
        marginLeft:
          i % 2 ? `${i * Math.random()}rem` : `${i * -Math.random()}rem`,
        marginTop:
          i % 2 ? `${i * Math.random()}rem` : `${i * -Math.random()}rem`,
      }}
      drag
      dragConstraints={{
        top: -500,
        right: 500,
        bottom: 500,
        left: -500,
      }}
      dragTransition={{ bounceStiffness: 250, bounceDamping: 25 }}
      dragElastic={0.5}
      whileTap={{ cursor: "grabbing" }}
      className={style.review}
    >
      <div className={style.intro}>
        <p className="h4">{review.client}</p>
        <p className="gray">{date}</p>
      </div>
      <p>{review.description}</p>
    </motion.section>
  );
}

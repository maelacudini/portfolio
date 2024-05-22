import { projects } from "@/utils/data";
import style from "./gallery.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-250, 0]);

  return (
    <section ref={ref} className={style.gallery}>
      {projects.map((project, i) => {
        return (
          <div key={i} className={style.container}>
            <motion.div style={{ y }} className={style.image}>
              <Image
                alt={project.title}
                src={project.image[0]}
                height={500}
                width={500}
                loading="lazy"
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}

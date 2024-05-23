import style from "./gallery.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/utils/data";

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
                height={800}
                width={800}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}

import { projects } from "@/utils/data";
import style from "./gallery.module.scss";
import { motion } from "framer-motion";
import { slideup } from "@/utils/animations";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className={style.gallery}>
      {projects.map((project, i) => (
        <motion.article
          style={{ justifyContent: i % 2 ? "flex-end" : "flex-start" }}
          className={style.project}
          variants={slideup}
          custom={i + 1}
          initial="initial"
          animate="animate"
          viewport={{ once: false }}
          key={i + project.title}
        >
          <div className={style.inner}>
            <div className={style.imgcont}>
              <Image
                alt={project.title}
                src={project.image[0]}
                height={500}
                width={500}
                priority={i === 0 && true}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className={style.details}>
              <small>{project.date}</small>
              <small>{project.role}</small>
            </div>
            <p>{project.title}</p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

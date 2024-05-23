import { projects } from "@/utils/data";
import style from "./gallery.module.scss";
import { motion } from "framer-motion";
import { slideup } from "@/utils/animations";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className={style.gallery}>
      {projects.map((project, _) =>
        project.image.map((image, i) => (
          <motion.article
            className={style.project}
            variants={slideup}
            custom={i + 1}
            initial="initial"
            animate="animate"
            viewport={{ once: false }}
            key={i + project.title}
          >
            <Image
              alt={project.title}
              src={image}
              height={1000}
              width={500}
              priority={i === 0 && true}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <p className={style.details}>{project.title}</p>
          </motion.article>
        ))
      )}
    </section>
  );
}

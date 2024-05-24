import { projects } from "@/utils/data";
import style from "./gallery.module.scss";
import { motion } from "framer-motion";
import TrackCursorImage from "@/components/common/trackCursorImage/TrackCursorImage";

export default function Gallery() {
  return (
    <section className={style.gallery}>
      {projects.map((project, _) =>
        project.image.map((image, i) => (
          <motion.article key={i + project.title} className={style.project}>
            <TrackCursorImage
              alt={project.title}
              height={1000}
              width={800}
              image={image}
            />
          </motion.article>
        ))
      )}
    </section>
  );
}

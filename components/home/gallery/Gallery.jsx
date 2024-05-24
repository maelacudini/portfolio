import style from "./gallery.module.scss";
import { projects } from "@/utils/data";
import TrackCursorImage from "@/components/common/trackCursorImage/TrackCursorImage";

export default function Gallery() {
  return (
    <section className={style.gallery}>
      {projects.map((project, i) => (
        <div key={i} className={style.container}>
          <TrackCursorImage
            alt={project.title}
            height={1000}
            width={800}
            image={project.image[0]}
          />
        </div>
      ))}
    </section>
  );
}

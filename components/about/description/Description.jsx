import { core } from "@/utils/data";
import style from "./description.module.scss";
import { motion } from "framer-motion";
import { slideup } from "@/utils/animations";

export default function Description() {
  return (
    <section className={style.description}>
      <div className={style.inner}>
        <p>PHOTOGRAPHER / VISUAL DESIGNER</p>
        <p className="h4">
          Capturing the essence of Rome since 2012, I'm a passionate
          photographer who thrives on turning everyday moments into stunning
          visual stories. Whether it's the enchanting streets of Trastevere, the
          timeless beauty of the Colosseum, or breathtaking locations around the
          globe, I find inspiration in life's vibrant moments and historic
          charm. With a laid-back vibe and an eye for detail, my mission is to
          create photos that feel authentic and unforgettable
        </p>
      </div>
      <div className={style.inner}>
        <p>CORE FOCUS</p>
        <p className="h4">
          Capturing moments with creativity, passion, and precision to tell
          compelling stories through the lens.
        </p>
        <div className={style.core}>
          {core.map((c, i) => (
            <motion.p
              variants={slideup}
              initial="initial"
              whileInView="animate"
              custom={i + 1}
              key={i}
            >
              {c}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

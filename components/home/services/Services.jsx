import Line from "@/components/common/line/Line";
import style from "./services.module.scss";
import Title from "@/components/common/title/Title";
import { useRef } from "react";
import { services } from "@/utils/data";
import { motion } from "framer-motion";
import { slideup } from "@/utils/animations";

export default function Services() {
  const container = useRef(null);
  const paragraph =
    "On your marks. Get set. Go-to-market. Quickly launch your company past the competition.";

  return (
    <section className={style.services}>
      <div className={style.col}>
        <p>SERVICES</p>
      </div>
      <div className={style.col}>
        <Title classes={"h2"} paragraph={paragraph} />
        <p className="gray h4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          officia accusamus fugiat veritatis aut repellendus at. Quae, debitis.
          Dolores, dolor soluta quo quibusdam doloribus similique obcaecati et
          dignissimos quaerat officia.
        </p>
        <div className={style.row}>
          {services.map((service, i) => (
            <motion.p
              custom={i + 1}
              variants={slideup}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              key={i + service}
            >
              {service}
            </motion.p>
          ))}
        </div>
        <Line container={container} />
      </div>
    </section>
  );
}

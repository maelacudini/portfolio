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
    "Bringing Your Moments to Life Through the Lens – Exceptional Photography for Every Occasion.";

  return (
    <section className={style.services}>
      <div className={style.col}>
        <p>SERVICES</p>
      </div>
      <div className={style.col}>
        <Title classes={"h2"} paragraph={paragraph} />
        <p className="gray h4">
          At Our Studio, We Believe Every Picture Tells a Unique Story. Our
          Passionate Team of Photographers Is Dedicated to Providing
          High-Quality, Customized Photography Services That Perfectly Capture
          the Essence of Your Special Moments. From Family Portraits to
          Corporate Events, We Are Here to Make Your Memories Last Forever.
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

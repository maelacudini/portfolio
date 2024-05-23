import { prices } from "@/utils/data";
import style from "./prices.module.scss";
import { motion } from "framer-motion";
import Title from "@/components/common/title/Title";
import { slideup } from "@/utils/animations";

export default function Prices() {
  let paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et itaque eum ad doloribus quibusdam commodi nesciunt assumenda suscipit ea ab.";
  return (
    <section className={style.prices}>
      <div className={style.col}>
        <p>PRICES</p>
      </div>
      <div className={style.col}>
        <Title classes={"h2"} paragraph={paragraph} />
        <p className="h4 gray">
          * Prices may be different from occasion to occasion. Dolores veniam
          tenetur aspernatur eaque aliquam expedita nesciunt repudiandae.
        </p>
        <div className={style.list}>
          {prices.map((price, i) => (
            <motion.div
              custom={i + 1}
              variants={slideup}
              initial="initial"
              whileInView="animate"
              key={i}
              className={style.item}
            >
              <p>{price.service}</p>
              <p>{price.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

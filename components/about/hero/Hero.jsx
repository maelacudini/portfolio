import Image from "next/image";
import style from "./hero.module.scss";
import me from "../../../public/images/mebis.jpg";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ySpring = useSpring(y, { stiffness: 100, damping: 50, bounce: 0 });
  const xSpring = useSpring(x, { stiffness: 100, damping: 50, bounce: 0 });

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <section onMouseMove={handleMouse} className={style.hero}>
      <div className={style.main}>
        {Array.from({ length: 5 }).map((_, index) => {
          const top = useTransform(
            ySpring,
            [0, 1000],
            [(index + 1) * -10, (index + 1) * 10]
          );
          const left = useTransform(
            xSpring,
            [0, 1000],
            [(index + 1) * -10, (index + 1) * 10]
          );
          return (
            <motion.div
              style={{ top, left }}
              key={index}
              className={style.item}
            >
              <Image
                src={me}
                alt={`Image ${index + 1}`}
                fill
                loading="eager"
                priority
                placeholder="blur"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

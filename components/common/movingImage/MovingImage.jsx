import Image from "next/image";
import style from "./movingImage.module.scss";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MovingImage({ image }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ySpring = useSpring(y, { stiffness: 100, damping: 50, bounce: 0 });
  const xSpring = useSpring(x, { stiffness: 100, damping: 50, bounce: 0 });

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  return (
    <section ref={ref} onMouseMove={handleMouse} className={style.movingImage}>
      {Array.from({ length: 5 }).map((_, index) => {
        const top = useTransform(
          ySpring,
          [0, dimensions.height],
          [index * 10, index * -10]
        );
        const left = useTransform(
          xSpring,
          [0, dimensions.width],
          [index * 10, index * -10]
        );
        return (
          <motion.div style={{ top, left }} key={index} className={style.item}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              loading="eager"
              priority
              placeholder="blur"
            />
          </motion.div>
        );
      })}
    </section>
  );
}

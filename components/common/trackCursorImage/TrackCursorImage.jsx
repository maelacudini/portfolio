import Image from "next/image";
import style from "./trackCursorImage.module.scss";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TrackCursorImage({ image, width, height, alt }) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [-25, 25]);
  const rotateXSpring = useSpring(rotateX, { stiffness: 250, damping: 25 });
  const rotateY = useTransform(x, [0, 400], [-25, 25]);
  const rotateYSpring = useSpring(rotateY, { stiffness: 250, damping: 25 });

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.section
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        perspective: 400,
      }}
      onMouseMove={handleMouse}
      className={style.image}
    >
      <Image
        alt={alt}
        src={image}
        width={width}
        height={height}
        loading="lazy"
        quality={50}
      />
    </motion.section>
  );
}

import { useEffect, useRef } from "react";
import style from "./slidindText.module.scss";
import gsap from "gsap";

export default function SlidingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    let animationId;
    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
      }
      xPercent += 0.05 * -1;
      animationId = requestAnimationFrame(animate);
    };

    if (firstText.current && secondText.current) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [firstText, secondText]);

  return (
    <section className={style.slidingText}>
      <div className={style.slider}>
        <p ref={firstText} className="h4">
          Something Something Something Something Something Something Something
          Something Something Something Something Something Something Something
        </p>
        <p ref={secondText} className="h4">
          Something Something Something Something Something Something Something
          Something Something Something Something Something Something Something
        </p>
      </div>
    </section>
  );
}

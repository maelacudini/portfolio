import MovingImage from "@/components/common/movingImage/MovingImage";
import style from "./details.module.scss";
import me from "../../../public/images/me.jpg";
import Title from "@/components/common/title/Title";
import { useRef } from "react";
import Line from "@/components/common/line/Line";

export default function Details() {
  const container = useRef(null);
  const paragraph =
    "At Primary, we believe exceptional branding is possible without the wait. So we created Brand Sprints: timeless branding in just one week.";

  return (
    <section ref={container} className={style.details}>
      <div className={style.img}>
        <MovingImage image={me} />
      </div>

      <div className={style.main}>
        <div className={style.col}>
          <p>DETAILS</p>
        </div>
        <div className={style.col}>
          <Title classes={"h2"} paragraph={paragraph} />
          <Line container={container} />
        </div>
      </div>
    </section>
  );
}

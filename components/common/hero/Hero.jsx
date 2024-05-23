import Title from "@/components/common/title/Title";
import style from "./hero.module.scss";

export default function Hero({ paragraph }) {
  return (
    <section className={style.hero}>
      <Title classes={"h1"} paragraph={paragraph} />
    </section>
  );
}

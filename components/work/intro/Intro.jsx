import Title from "@/components/common/title/Title";
import style from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={style.intro}>
      <p>WORK / PERSONAL PROJECTS</p>
      <Title paragraph={"Dive into my projects"} />
      <p className="h4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi
        dolorem deserunt voluptatum, reprehenderit nulla ullam, ipsam saepe quis
        culpa cupiditate, ad dolor doloribus aut vitae. Distinctio iusto ad nam.
      </p>
    </section>
  );
}

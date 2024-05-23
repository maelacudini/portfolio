import { reviews } from "@/utils/data";
import style from "./reviews.module.scss";
import Review from "./review/Review";

export default function Reviews() {
  return (
    <section className={style.reviews}>
      <div className={style.main}>
        {reviews.map((review, i) => {
          return <Review i={i} key={i + review.client} review={review} />;
        })}
      </div>
    </section>
  );
}

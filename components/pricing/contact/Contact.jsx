import { people } from "@/utils/data";
import style from "./contact.module.scss";
import Image from "next/image";
import Title from "@/components/common/title/Title";
import { motion } from "framer-motion";
import { slideup } from "@/utils/animations";

export default function Contact() {
  return (
    <section className={style.contact}>
      <Title
        classes={"h2"}
        paragraph={
          "Contact us to learn more about our process, availability, prices."
        }
      />
      <div className={style.cards}>
        {people.map((person, i) => (
          <motion.div
            custom={i + 1}
            variants={slideup}
            initial="initial"
            whileInView="animate"
            key={i}
            className={style.person}
          >
            <div className={style.col}>
              <Image
                alt="avatar"
                src={person.avatar}
                height={100}
                width={100}
                className={style.image}
                loading="lazy"
              />
            </div>
            <div className={style.col}>
              <div className={style.inner}>
                <p className="h4">{person.name}</p>
                <p>{person.role}</p>
              </div>
              <div className={style.inner}>
                <p className="h4">{person.phone}</p>
                <div>
                  {person.social.map((social, i) => (
                    <a key={i} href={social.href}>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

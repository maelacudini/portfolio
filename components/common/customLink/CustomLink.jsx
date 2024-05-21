import Link from "next/link";
import style from "./customLink.module.scss";

export default function CustomLink({ link, classes, onClick }) {
  return (
    <div className={style.link} onClick={onClick ? onClick : undefined}>
      <PerspectiveText name={link.name} href={link.href} classes={classes} />
    </div>
  );
}

function PerspectiveText({ name, href, classes }) {
  return (
    <Link href={href} className={style.perspectiveText}>
      <p className={classes}>{name}</p>
      <p className={classes}>{name}</p>
    </Link>
  );
}

import React from "react";
import styles from "./content.module.scss";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.scss";
interface Props {
  title: string;
  date: Date;
  img?: string;
}
const Content = ({ title, date, img }: Props) => {
  return (
    <article className={styles.article}>
      <div className={styles.title}>{title}</div>
      <br />

      {img && <Image src={img} alt={title} width={200} height={200} />}
      <small className={utilStyles.lightText}>{date.toString()}</small>
    </article>
  );
};

export default Content;

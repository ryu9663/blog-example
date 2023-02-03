import React from "react";
import styles from "./content.module.scss";
import Image from "next/image";

interface Props {
  title: string;
  date: Date;
  img?: string;
}
const Content = ({ title, date, img }: Props) => {
  return (
    <article className={styles.article}>
      <div className={styles.title}>{title}</div>
      {img && <Image src={img} alt={title} width={200} height={200} />}
      <span className={styles.date}>{date.toString()}</span>
    </article>
  );
};

export default Content;

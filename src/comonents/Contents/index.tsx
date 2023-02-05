import React from "react";
import styles from "./contents.module.scss";
import Content from "../Content";
import Link from "next/link";
import { PostType } from "@/lib/posts";

interface Props {
  allPosts: PostType[];
}

const Contents = ({ allPosts }: Props) => {
  return (
    <ul className={styles.wrapper}>
      {allPosts.map(({ id, title, date, img }) => (
        <li key={id}>
          <Link href={`post/${id}`} className={styles.hello}>
            <Content title={title} date={date} img={img} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Contents;

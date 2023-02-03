import React from "react";
import styles from "./contents.module.scss";
import Content from "../Content";
import Link from "next/link";
import { PostType } from "@/lib/posts";

interface ContentType extends PostType {
  img: string;
}
interface Props {
  allPosts: PostType[];
}

const Contents = ({ allPosts }: Props) => {
  return (
    <div className={styles.wrapper}>
      {allPosts.map(({ id, title, date, img }, index: number) => (
        <div key={id}>
          <Link href={`post/${index + 1}`} className={styles.hello}>
            <Content title={title} date={date} img={img} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Contents;

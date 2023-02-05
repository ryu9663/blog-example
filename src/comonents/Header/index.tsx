import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

const name = "JUNE";
export const siteTitle = "JUNE's BLOG";

const header = () => {
  return (
    <>
      <header className={styles.header}>
        <>
          <Link href="/" legacyBehavior>
            <a className={styles.header_logo}>home</a>
          </Link>
        </>
      </header>
    </>
  );
};

export default header;

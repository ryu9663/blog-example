import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Alert from "@/comonents/Alert";
import Contents from "@/comonents/Contents";
import { getSortedPostsData } from "@/lib/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const HomePage: React.FC = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>june's blog</title>
      </Head>
      <h1>Welcome to June's blog</h1>
      <Alert type="success">
        <button>alert</button>
      </Alert>
      <section>
        <Contents allPosts={allPosts} />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData();

  return {
    props: {
      allPosts,
    },
  };
};

export default HomePage;

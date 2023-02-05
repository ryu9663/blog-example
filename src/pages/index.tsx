import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Alert from "@/comonents/Alert";
import Contents from "@/comonents/Contents";
import { getSortedPostsData } from "@/lib/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { siteTitle } from "@/comonents/Header";

const HomePage: React.FC = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
  console.log(allPosts);
  return {
    props: {
      allPosts,
    },
  };
};

export default HomePage;

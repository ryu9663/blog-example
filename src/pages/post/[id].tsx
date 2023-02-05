import Date from "@/comonents/Date";
import { PostDataType, getAllPostIds, getPostData } from "@/lib/posts";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import utilStyles from "../../styles/utils.module.scss";
interface Props {
  postData: PostDataType;
  path: ParsedUrlQuery;
}

const Post = ({ postData }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Title : {postData.title}</h1>
        <br />
        {postData.id}
        <br />
        {/* {postData.date} */}
        {postData.date && (
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
        )}
        <br />
        {postData.img && (
          <Image
            src={postData.img}
            alt={id as string}
            width={200}
            height={200}
          />
        )}
        <br />
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  let postData;

  if (!!params && typeof params.id === "string") {
    // file's name doesn't contain three dots (...)
    // if file's name contains three dots like "[...id].tsx" then params.id will be like ['a','b','c']
    postData = await getPostData(params.id);
  }
  return {
    props: { postData },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export default Post;

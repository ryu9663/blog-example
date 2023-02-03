import { useRouter } from "next/router";
import React from "react";

const Post = (props: any) => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(props);
  return (
    <>
      <div>Title : {pid}</div>
    </>
  );
};

export default Post;

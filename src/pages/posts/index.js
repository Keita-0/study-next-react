import Head from "next/head";
import { Layout } from "../../components/Layout";
import { Posts as PostsComponents } from "../../components/Posts";

const Posts = () => {
  return (
    <>
      <title>Posts page</title>
      <PostsComponents />
    </>
  );
};

export default Posts;

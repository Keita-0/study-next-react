import Head from "next/head";
import { Layout } from "../../components/Layout";
import { Posts as PostsComponents } from "../../components/Posts";

const Posts = () => {
  return (
    <Layout>
      <Head>
        <title>Posts page</title>
      </Head>
      <PostsComponents />
    </Layout>
  );
};

export default Posts;

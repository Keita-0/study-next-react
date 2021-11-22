import Head from "next/head";
import { usePost } from "../../components/hooks/usePost";
import { Layout } from "../../components/Layout";

const PostId = () => {
  const { post, user, error, isLoading } = usePost();

  return (
    <Layout>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <div>{user?.name}</div>
      </div>
    </Layout>
  );
};

export default PostId;

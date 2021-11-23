import Head from "next/head";
import { CommentsByPostId } from "../../components/Comments/CommentsByPostId";
import { usePost } from "../../components/hooks/usePost";
import { UserByUserId } from "../../components/Users/UserByUserId";

const PostId = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>loading中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId userId={data?.userId} />
      </div>
      <CommentsByPostId id={data?.id} />
    </>
  );
};

export default PostId;

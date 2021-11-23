import Head from "next/head";
import { useComment } from "../../components/hooks/useComment";
import { PostsByPostId } from "../../components/Posts/PostsByPostId";

const UserId = () => {
  const { comment, error, isLoading } = useComment();

  return (
    <>
      <Head>
        <title>{comment?.name}</title>
      </Head>
      <div>
        <h1>{comment?.name}</h1>
        <p>{comment?.email}</p>
        <div>{comment?.body}</div>
      </div>
      <div>
        <h2>Article</h2>
        <PostsByPostId postId={comment?.postId} />
      </div>
    </>
  );
};

export default UserId;

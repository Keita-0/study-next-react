import Head from "next/head";
import { useComment } from "../../components/hooks/useComment";

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
    </>
  );
};

export default UserId;

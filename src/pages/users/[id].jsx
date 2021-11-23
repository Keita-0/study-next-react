import Head from "next/head";
import { useUser } from "../../components/hooks/useUser";
import { PostsByUserId } from "../../components/Posts/PostsByUserId";

const UserId = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <div>
        <h2>Detail</h2>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
      <div>
        <h2>Posts</h2>
        <PostsByUserId id={user?.id} />
      </div>
    </>
  );
};

export default UserId;

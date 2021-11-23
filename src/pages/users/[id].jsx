import Head from "next/head";
import { SWRConfig } from "swr";
import { useUser } from "../../components/hooks/useUser";
import { PostsByUserId } from "../../components/Posts/PostsByUserId";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: userData,
      },
    },
  };
};

const UserId = (props) => {
  const { fallback } = props;
  const { user, error, isLoading } = useUser();

  return (
    <>
      <SWRConfig value={{ fallback }}>
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
      </SWRConfig>
    </>
  );
};

export default UserId;

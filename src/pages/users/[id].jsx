import Head from "next/head";
import { useUser } from "../../components/hooks/useUser";

const UserId = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>{user?.name}</title>
      </Head>
      <div>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
        <div>{user?.phone}</div>
      </div>
    </>
  );
};

export default UserId;

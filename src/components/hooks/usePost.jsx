import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

export const usePost = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

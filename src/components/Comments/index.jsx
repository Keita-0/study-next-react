import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "../../utils/fetcher";

const useComment = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComment();

  if (isLoading) {
    return <div>loading中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>No Data!!</div>;
  }

  return (
    <ol>
      {data.map((commnent) => {
        return (
          <li key={commnent.id}>
            <Link href={`/comments/${commnent.id}`}>
              <a>{commnent.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

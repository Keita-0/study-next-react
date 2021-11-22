import Link from "next/link";
import { useComments } from "../hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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

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
    <ul className="space-y-4">
      {data.map((commnent) => {
        return (
          <li key={commnent.id} className="border-b pb-2">
            <Link href={`/comments/${commnent.id}`}>
              <a className="block text-sm hover:text-blue-500">
                {commnent.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

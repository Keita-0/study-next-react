import Link from "next/link";
import { useCommentsByPostsId } from "../hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(props.id);

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
              <a>{commnent.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

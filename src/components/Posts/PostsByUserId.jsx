import Link from "next/link";
import { usePostsByUserId } from "../hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
      {data.map((post) => {
        return (
          <li key={post.id}>
            <p>{post.title}</p>
            <Link href={`/posts/${post.id}`}>
              <a>{post.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

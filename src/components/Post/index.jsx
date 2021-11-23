import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "../../utils/fetcher";
import { useRouter } from "next/dist/client/router";

export const Post = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  if (!data && !error) {
    return <div>loading中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data && data.length === 0) {
    return <div>No Data!!</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

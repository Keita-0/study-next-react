import Link from "next/link";
import { usePost } from "../hooks/usePost";

export const PostsByPostId = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>loading中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data.id}`}>
      <a>{data.title}</a>
    </Link>
  );
};

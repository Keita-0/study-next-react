import { useCallback, useEffect, useState, useReducer } from "react";
import useSWR from "swr";
import Link from "next/link";
import { fetcher } from "../../utils/fetcher";

const usePost = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const Post = () => {
  const { data, error, isLoading, isEmpty } = usePost();

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
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

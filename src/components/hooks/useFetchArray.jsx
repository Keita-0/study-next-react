import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const usePosts = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/posts");
};

export const useUsers = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/users");
};

export const useComments = () => {
  return useFetchArray("https://jsonplaceholder.typicode.com/comments");
};

export const useCommentsByPostsId = (id) => {
  return useFetchArray(
    id ? `https://jsonplaceholder.typicode.com/comments?postId=${id}` : null
  );
};

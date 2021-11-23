import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props?.userId
      ? `https://jsonplaceholder.typicode.com/users/${props.userId}`
      : null,
    fetcher
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data?.name}</div>;
};

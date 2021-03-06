import Link from "next/link";
import { useUsers } from "../hooks/useFetchArray";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
    <ul className="grid grid-cols-3 gap-4">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a className="block p-2 shadow border-2 rounded hover:bg-gray-100">
                <h1 className="font-bold">{user.name}</h1>
                <div className="text-sm">{user.email}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

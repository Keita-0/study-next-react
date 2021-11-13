import Head from "next/head";
import { useCallback, useEffect, useState, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("no such action");
  }
};

export const Posts = () => {
  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPost = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        throw new Error("データがありません");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (e) {
      dispatch({ type: "error", error: e });
    } finally {
      //   setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (state.loading) {
    return <div>loading中です。</div>;
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    return <div>No Data!!</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};

import Head from "next/head";
import { Posts as PostsComponents } from "../../components/Posts";
import styles from "../../styles/Home.module.css";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts page</title>
      </Head>
      <PostsComponents />
    </div>
  );
};

export default Home;

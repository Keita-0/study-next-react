import Head from "next/head";
import { Posts } from "../../components/Posts";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
      </Head>
      <Posts />
    </div>
  );
};

export default Home;

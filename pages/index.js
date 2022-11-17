import styles from "../styles/Home.module.css";
import Count from "./features/counter";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/postList";

export default function Home() {
  return (
    <>
      <Count />
      <AddPostForm />
      <PostList />
    </>
  );
}

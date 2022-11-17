import { useSelector, useDispatch } from "react-redux";
import { SelectAllPosts } from "./postsSlice";
import React from "react";

function PostList() {
  const posts = useSelector(SelectAllPosts);
  console.log(posts);
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <h3>{post.content}</h3>
    </article>
  ));
  return (
    <>
      <section>
        <h2>Posts</h2>
        {renderPosts}
      </section>
    </>
  );
}

export default PostList;

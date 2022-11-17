import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };
  return (
    <>
      <h1>AddPostForm</h1>
      <section>
        <form>
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postContent">Post Content</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button type="button" onClick={onSavePostClicked}>
            save Post{" "}
          </button>
        </form>
      </section>
    </>
  );
}

export default AddPostForm;

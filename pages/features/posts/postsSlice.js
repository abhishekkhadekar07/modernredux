import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "John cena vs undertaker", content: "here is the champ" },
  { id: 2, title: "John cena vs undertaker", content: "here is the champ" },
  { id: 3, title: "John cena vs undertaker", content: "here is the champ" },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const SelectAllPosts = (state) => state.posts;
export default postSlice.reducer;
export const { postAdded } = postSlice.actions

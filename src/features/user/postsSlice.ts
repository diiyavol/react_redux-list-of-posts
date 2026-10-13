/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types/Post';

type UsersState = {
  items: Post[];
  post: Post | null;
  loaded: boolean;
  hasError: boolean;
};

const initialState: UsersState = {
  items: [],
  post: null,
  loaded: false,
  hasError: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.items = action.payload;
    },
    setPost: (state, action: PayloadAction<Post | null>) => {
      state.post = action.payload;
    },
    setError: (state, action) => {
      state.hasError = action.payload;
    },
    setLoaded: (state, action) => {
      state.loaded = action.payload;
    },
  },
});

export const { setPosts, setPost, setError, setLoaded } = postsSlice.actions;
export default postsSlice.reducer;

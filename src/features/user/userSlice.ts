/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { Post } from '../../types/Post';

type UsersState = {
  users: User[];
  user: User | null;
  author: Post | null;
};

const initialState: UsersState = {
  users: [],
  user: null,
  author: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setAuthor: (state, action: PayloadAction<Post | null>) => {
      state.author = action.payload;
    },
  },
});

export const { setUsers, setUser, setAuthor } = userSlice.actions;
export default userSlice.reducer;

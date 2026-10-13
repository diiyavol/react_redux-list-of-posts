import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice';
import { userSlice } from '../features/user/userSlice';
import { postsSlice } from '../features/user/postsSlice';
import { currentUserSlice } from '../features/user/currentUserSlice';
import { commentsSlice } from '../features/user/commentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userSlice.reducer,
    posts: postsSlice.reducer,
    currentUser: currentUserSlice.reducer,
    comments: commentsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */

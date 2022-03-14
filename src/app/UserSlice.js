import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export default UserSlice.reducer;

export const { getUser, removeUser } = UserSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const posterIdSlice = createSlice({
  name: 'posterId',
  initialState: {
    posterId: '',
  },
  reducers: {
    idChange: (state, action) => {
      state.posterId = action.payload;
    }
  }
})

export const { idChange } = posterIdSlice.actions

export default posterIdSlice.reducer
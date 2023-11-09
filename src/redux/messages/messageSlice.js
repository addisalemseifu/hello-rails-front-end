import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMessage = createAsyncThunk('messages/getMessage', async () => {
  const response = await fetch('http://localhost:3000/api/v1/messages');
  const data = await response.json();
  return data;
});

const initialState = {
  message: [],
  isLoading: true,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: {
    [getMessage.pending]: (state) => {
      state.isLoading = true;
    },
    [getMessage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    [getMessage.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addAppointment, removeAppointment } = messageSlice.actions;
export default messageSlice.reducer;

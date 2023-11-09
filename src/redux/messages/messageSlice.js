import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const dataUrl = 'http://localhost:4000/api/v1/doctors/:doctor_id/appointments';

// export const getMessage = createAsyncThunk('message/getMessage', async () => axios.get('/api/v1/messages')
//   .then((res) => res.data)
//   .catch((err) => console.log(err)));

// export const getMessage = createAsyncThunk('message/getMessage', async () => fetch('http://localhost:3000/api/v1/messages', {
//   method: 'GET',
// })
//   .then(response => response.json())
//   .then(data => console.log(data)));

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
  reducers: {
    // addAppointment: (state, action) => {
    //   state.reservation = [...state.books, action.payload];
    // },
    // removeAppointment: (state, action) => {
    //   const bookId = action.payload;
    //   state.books = state.books.filter((item) => item.item_id !== bookId);
    // },
  },
  extraReducers: {
    [getMessage.pending]: (state) => {
      
      state.isLoading = true;
      console.log(state.isLoading )
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

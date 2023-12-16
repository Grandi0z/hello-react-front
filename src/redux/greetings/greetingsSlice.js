import { createSlice } from '@reduxjs/toolkit';
import fetchRadomGreetings from '../../utils/fetchApi';

const name = 'greetings';
const initialState = {
  greetings: [],
  isLoading: false,
  error: '',
};

const greetingsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRadomGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRadomGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greetings = action.payload;
      })
      .addCase(fetchRadomGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default greetingsSlice.reducer;

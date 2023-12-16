import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRadomGreetings = createAsyncThunk('greetings/fetchRadomGreetings',
  async (thunkAPI) => {
    const url = 'http://127.0.0.1:3000/hello/index';
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export default fetchRadomGreetings;

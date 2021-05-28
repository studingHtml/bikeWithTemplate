import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accountApi from '../../api/accountApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call API to register
  const data = await accountApi.register(payload);
  //save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));
  //return to user data
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  //call API to register
  const data = await accountApi.login(payload);
  //save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));
  //return to user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  }
});

const { reducer } = userSlice;

export default reducer;
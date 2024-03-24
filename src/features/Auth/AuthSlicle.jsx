import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";

const initialState = {
  userLogin:{},
  userOwnerChalet:{},
  isLoading: false,
  error: null,
}; 

 const createLoginUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    const response = await baseUrl.post(
      'Auth/Authentication_Code_broker',formData);
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error
  }
});


 const createUserOwnerChalet = createAsyncThunk('auth/owner', async (formData, thunkAPI) => {
  try {
    const response = await baseUrl.post(
      'Auth/Authentication_Code_chalet',formData);
      console.log(response);
      console.log(response.data);
    return response.data;
  } catch (error) {
    return error
  }
});




const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder


      .addCase(createLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLoginUser.fulfilled, (state, action) => {
        state.userLogin = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(createUserOwnerChalet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUserOwnerChalet.fulfilled, (state, action) => {
        state.userOwnerChalet = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createUserOwnerChalet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
 }}
      );
export { createLoginUser ,createUserOwnerChalet };

export default authSlice.reducer;
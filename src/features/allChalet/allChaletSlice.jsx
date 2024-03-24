import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";

const initialState = {
   allCahlet:[],
   allBookChalet:[],
   statusBook:[],
   bookChalet:[],
    isLoading: false,
    error: null,
  };
  
  
   
  const getAllChalet = createAsyncThunk('get/chalet', async (_, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          'user/Get-Notification'
        //   , {
        //     headers: {
        //         Authorization:` Bearer ${token}` // Include token in the request headers
        //     }
        // }
        );
          console.log(response);
        return response;
      } catch (error) {
        return error
      }
    });


  const getAllBookChalet = createAsyncThunk('get/bookchalet', async (_, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          'user/Get-Notification'
        //   , {
        //     headers: {
        //         Authorization:` Bearer ${token}` // Include token in the request headers
        //     }
        // }
        );
          console.log(response);
        return response;
      } catch (error) {
        return error
      }
    });


  const getStatusBook = createAsyncThunk('get/statusbook', async (_, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          'user/Get-Notification'
        //   , {
        //     headers: {
        //         Authorization:` Bearer ${token}` // Include token in the request headers
        //     }
        // }
        );
          console.log(response);
        return response;
      } catch (error) {
        return error
      }
    });



  
  
    const bookOneChalet = createAsyncThunk(  'book/onechalet', async (formData , thunkAPI) => {
      try {
        const response = await baseUrl.post(
          'Bookshalihat/store',
          formData,
          {
            params: {
              name: formData.name,
              date_arrival: formData.date_arrival,
              Departure_Date: formData.Departure_Date,
              phone : formData.phone
            }
            // ,headers: {
            //   Authorization:` Bearer ${token}` // Enclose the token interpolation in backticks
            // }
          }
        );
        console.log(response);
        return response.data;
      } catch (error) {
        // You might want to handle errors more appropriately here
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );



    const allChaletSlice = createSlice({
        name: 'chalet',
      
        initialState,
        reducers: {},
        extraReducers: (builder) => {
          builder
            .addCase(getAllChalet.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getAllChalet.fulfilled, (state, action) => {
              state.allCahlet = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getAllChalet.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            

            .addCase(getAllBookChalet.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getAllBookChalet.fulfilled, (state, action) => {
              state.allBookChalet = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getAllBookChalet.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
            .addCase(getStatusBook.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(getStatusBook.fulfilled, (state, action) => {
              state.statusBook = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(getStatusBook.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })


            .addCase(bookOneChalet.pending, (state) => {
              state.isLoading = true;
              state.error = null;
            })
            .addCase(bookOneChalet.fulfilled, (state, action) => {
              state.bookChalet = action.payload;
              state.isLoading = false;
              state.error = null;
            })
            .addCase(bookOneChalet.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
            })
            
  
  
           

            }}
            );
      export { getAllChalet , getAllBookChalet , getStatusBook ,bookOneChalet };
      
      export default allChaletSlice.reducer;
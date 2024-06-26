import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../Api/baseURL";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
   allCahlet:[],
   allBookChalet:[],
   statusBook:[],
   bookChalet:[],
            oneChalet:{},
            oneChaletBroker:{},
            isLoadingOneChalet:false,

    isLoading: false,
    error: null,
  };
  
  
   
  const getAllChalet = createAsyncThunk('get/chalet', async (_, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          'api/Chalet/Get'
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


    const getOneChaletById = createAsyncThunk('get/chalet/one', async (id, thunkAPI) => {
      try {
        const response = await baseUrl.post(
          `api/Chalet/get_id?id=${id}`
          ,{
            // Add headers for authorization or other required headers
            headers: {
              'Content-Type': 'application/json', // Example content type header
              'Access-Control-Allow-Origin': '*',
              'Origin': 'http://localhost:5173',
              
              
            },
          }
        );
          console.log(response);
        return response;
      } catch (error) {
        return error
      }
    });


    
    const getOneChaletByIdBroker = createAsyncThunk('get/chalet/oneBroker', async (id, thunkAPI) => {
      try {
        const response = await baseUrl.post(
          `api/Broker/Get_ChaletBroker_id?id=${id}`
          ,{
            // Add headers for authorization or other required headers
            headers: {
              'Content-Type': 'application/json', // Example content type header
              'Access-Control-Allow-Origin': '*',
              'Origin': 'http://localhost:5173',
              
              
            },
          }
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


  const getStatusBook = createAsyncThunk('get/statusbook', async (id, thunkAPI) => {
      try {
        const response = await baseUrl.get(
          `api/Bookshalihat/StatusBook?id=${id}`
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



  
  
    const bookOneChalet = createAsyncThunk(
      'book/onechalet',
      async ({ formData, id }, thunkAPI) => {
        try {
          const response = await baseUrl.post(
            `api/Bookshalihat/store?id=${id}`,
            formData,
            {
              params: {
                name: formData.name,
                date_arrival: formData.date_arrival,
                Departure_Date: formData.Departure_Date,
                phone: formData.phone
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
              toast.success('تم حجز الشالية بنجاح')

            })
            .addCase(bookOneChalet.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
              toast.error("حدث خطأ في الحجز")

            })

            
            .addCase(getOneChaletById.pending, (state) => {
              state.isLoadingOneChalet = true;
              state.error = null;
            })
            .addCase(getOneChaletById.fulfilled, (state, action) => {
              state.oneChalet = action.payload;
              state.isLoadingOneChalet = false;
              state.error = null;
            })
            .addCase(getOneChaletById.rejected, (state, action) => {
              state.isLoadingOneChalet = false;
              state.error = action.payload;
            })


            .addCase(getOneChaletByIdBroker.pending, (state) => {
              state.isLoadingOneChalet = true;
              state.error = null;
            })
            .addCase(getOneChaletByIdBroker.fulfilled, (state, action) => {
              state.oneChaletBroker = action.payload;
              state.isLoadingOneChalet = false;
              state.error = null;
            })
            .addCase(getOneChaletByIdBroker.rejected, (state, action) => {
              state.isLoadingOneChalet = false;
              state.error = action.payload;
            })
            
            
  
  
           

            }}
            );
      export { getAllChalet , getAllBookChalet , getStatusBook ,bookOneChalet,getOneChaletById,getOneChaletByIdBroker };
      
      export default allChaletSlice.reducer;
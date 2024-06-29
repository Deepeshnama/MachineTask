import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "./cardService";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    allProducts: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
    reducers: {
        deleteData: (state, action) => {
            return {
                ...state,
                allProducts : state.allProducts.filter((item) => item.id !== action.payload)
            }
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardData.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCardData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allProducts = action.payload;
      })
      .addCase(getCardData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const {deleteData} = cardSlice.actions

export default cardSlice.reducer;

// Get Card Data Thunk

export const getCardData = createAsyncThunk("GET/DATA", async () => {
  try {
    return await getData();
  } catch (error) {
    console.log(error);
  }
})

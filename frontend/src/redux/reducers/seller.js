import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading:true,
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadSellerRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.seller = action.payload;
      state.isSeller = true; 
    })

    .addCase("LoadSellerFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.isSeller = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});


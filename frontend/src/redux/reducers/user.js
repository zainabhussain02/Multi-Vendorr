// // import { createReducer } from "@reduxjs/toolkit";

// // const initialState = {
// //   isAuthenticated: false,
// // };

// // export const userReducer = createReducer(initialState, {
// //   LoadUserRequest: (state) => {
// //     state.loading = true;
// //   },
// //   LoadUserSuccess: (state, action) => {
// //     state.isAuthenticated = true;
// //     state.loading = false;
// //     state.use = action.payload;
// //   },
// //   LoadUserFail: (state, action) => {
// //     state.loading = false;
// //       state.error = action.payload;
// //       state.isAuthenticated = false;
// //   },
// //   clearErrors: (state) => {
// //     state.error = null;
// //   },
// // });



import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});






         
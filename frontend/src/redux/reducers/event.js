// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const eventReducer = createReducer(initialState, (builder) => {
//   builder
//     // Create Event
//     .addCase("eventCreateRequest", (state) => {
//       state.isLoading = true;
//     })
//     .addCase("eventCreateSuccess", (state, action) => {
//       state.isLoading = false;
//       state.event = action.payload;
//       state.success = true;
//     })
//     .addCase("eventCreateFail", (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       state.success = false;
//     })

//     // Get all events of shop
//     .addCase("getAlleventsShopRequest", (state) => {
//       state.isLoading = true;
//     })
//     .addCase("getAlleventsShopSuccess", (state, action) => {
//       state.isLoading = false;
//       state.events = action.payload;
//     })
//     .addCase("getAlleventsShopFailed", (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     })

//     // Delete event of a shop
//     .addCase("deleteeventRequest", (state) => {
//       state.isLoading = true;
//     })
//     .addCase("deleteeventSuccess", (state, action) => {
//       state.isLoading = false;
//       state.message = action.payload;
//     })
//     .addCase("deleteeventFailed", (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     })

//     // Get all events (admin)
//     .addCase("getAlleventsRequest", (state) => {
//       state.isLoading = true;
//     })
//     .addCase("getAlleventsSuccess", (state, action) => {
//       state.isLoading = false;
//       state.allEvents = action.payload;
//     })
//     .addCase("getAlleventsFailed", (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     })

//     // Clear Errors
//     .addCase("clearErrors", (state) => {
//       state.error = null;
//     });
// });




import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    // Create event
    .addCase("eventCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("eventCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase("eventCreateFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // // Get all events of shop
    .addCase("getAlleventsShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAlleventsShopSuccess", (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase("getAlleventsShopFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // // Delete event of a shop
    .addCase("deleteeventRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteeventSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("deleteeventFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // // Get all products
    // .addCase("getAllProductsRequest", (state) => {
    //   state.isLoading = true;
    // })
    // .addCase("getAllProductsSuccess", (state, action) => {
    //   state.isLoading = false;
    //   state.allProducts = action.payload;
    // })
    // .addCase("getAllProductsFailed", (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })

    // // ✅ Add get product details
    // .addCase("getProductDetailsRequest", (state) => {
    //   state.isLoading = true;
    // })
    // .addCase("getProductDetailsSuccess", (state, action) => {
    //   state.isLoading = false;
    //   state.product = action.payload;
    // })
    // .addCase("getProductDetailsFailed", (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })

    // Clear Errors
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

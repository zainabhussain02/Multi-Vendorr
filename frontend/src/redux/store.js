
// import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./reducers/user"; 

// import { cartReducer } from "./reducers/cart";


// const Store = configureStore({
//   reducer: {
//     user: userReducer,
//      cart: cartReducer,
//   },
// });

// export default Store;


import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
// import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
import { sellerReducer } from "./reducers/seller";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default Store;

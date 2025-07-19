


// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   LoginPage,
//   SignupPage,
//   HomePage,
//   ProductsPage,
//   BestSelingPage,
//   EventPage,
//   FaqPage,
//   CheckoutPage,
//   PaymentPage,
//   OrderSuccessPage,
// } from "./routes/Routes.js";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import ActivationPage from "./pages/ActivationPage";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { loadUser } from "./redux/actions/user.js";
// import Store from "./redux/store.js";
// // import { useSelector } from "react-redux";
// import axios from "axios";
// import { server } from "./server";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


//  const App = () => {
//   const [stripeApikey, setStripeApiKey] = useState("");

//   async function getStripeApikey() {
//     const { data } = await axios.get(`${server}/payment/stripeapikey`);
//     setStripeApiKey(data.stripeApikey);
//   }
//   useEffect(() => {
//     Store.dispatch(loadUser());
//     // Store.dispatch(loadSeller());
//     // Store.dispatch(getAllProducts());
//     // Store.dispatch(getAllEvents());
//     getStripeApikey();
//   }, []);

//   return (
//     <>
//       {loading ? null : (
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/sign-up" element={<SignupPage />} />
//             <Route
//               path="/activation/:activation_token"
//               element={<ActivationPage />}
//             />
//             <Route path="/products" element={<ProductsPage />} />
//             {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
//             <Route path="/best-selling" element={<BestSelingPage />} />
//             <Route path="/events" element={<EventPage />} />
//             <Route path="/faq" element={<FaqPage />} />
//             <Route
//               path="/checkout"
//               element={
//                 <ProtectedRoute>
//                   <CheckoutPage />
//                 </ProtectedRoute>
//               }
//             />

//             {stripeApiKey && (
//               <Route
//                 path="/payment"
//                 element={
//                   <ProtectedRoute>
//                     <Elements stripe={loadStripe(stripeApiKey)}>
//                       <PaymentPage />
//                     </Elements>
//                   </ProtectedRoute>
//                 }
//               />
//             )}

//             <Route
//               path="/order-success"
//               element={
//                 <ProtectedRoute>
//                   <OrderSuccessPage />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>

//           <ToastContainer
//             position="bottom-center"
//             autoClose={5000}
//             hideProgressBar={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </BrowserRouter>
//       )}
//     </>
//   );
// };

// export default App;





import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  ProductsPage,
  BestSelingPage,
  EventPage,
  FaqPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
} from "./routes/Routes.js";
import ProtectedRoute from "./routes/ProtectedRoute";
import ActivationPage from "./pages/ActivationPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { loadUser } from "./redux/actions/user.js";
import Store from "./redux/store.js";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const App = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [loading, setLoading] = useState(true);

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get(`${server}/payment/stripeapikey`);
      setStripeApiKey(data.stripeApikey);
    } catch (error) {
      console.error("Stripe API Key fetch failed", error);
    }
  }

  useEffect(() => {
    const init = async () => {
      await Store.dispatch(loadUser());
      await getStripeApiKey();
      setLoading(false);
    };
    init();
  }, []);

  if (loading) return null;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/activation/:activation_token" element={<ActivationPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/best-selling" element={<BestSelingPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
         <Route
  path="/payment"
  element={
    <ProtectedRoute>
      <Elements stripe={loadStripe(stripeApiKey)}>
        <PaymentPage />
      </Elements>
    </ProtectedRoute>
  }
/>
          <Route
            path="/order-success"
            element={
              <ProtectedRoute>
                <OrderSuccessPage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
};

export default App;


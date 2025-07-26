import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./routes/Routes.js";
import { ShopDashboardPage ,ShopCreateProduct,ShopAllProducts,ShopCreateEvents  } from "./routes/ShopRoutes.js";
import ProtectedRoute from "./routes/ProtectedRoute";
// import { ShopHomePage } from "./ShopRoutes"; // ✅ curly braces for named import
import ShopHomePage from "./pages/ShopHomePage";
import ActivationPage from "./pages/ActivationPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { loadSeller, loadUser } from "./redux/actions/user.js";
import Store from "./redux/store.js";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useSelector, useDispatch } from "react-redux";
import SellerProtectedRoute from "./routes/SellerProtectedRoute.js";

const App = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [loading, setLoading] = useState(true);
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get(`${server}/payment/stripeapikey`);
      setStripeApiKey(data.stripeApikey);
    } catch (error) {
      console.error("Stripe API Key fetch failed", error);
    }
  }

  // useEffect(() => {
  //   const init = async () => {
  //     await Store.dispatch(loadUser());
  //     await Store.dispatch(loadSeller());
  //     await getStripeApiKey();
  //     setLoading(false);
  //   };
  //   init();
  // }, []);

  useEffect(() => {
    const init = async () => {
      await dispatch(loadUser());
      await dispatch(loadSeller());
      await getStripeApiKey();
      setLoading(false);
    };
    init();
  }, [dispatch]);

  // if (loading || isLoading) return null;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
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
            path="/order/success/:id"
            element={
              <ProtectedRoute>
                <OrderSuccessPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute> */}
          {/* <ProfilePage />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/shop-login" element={<ShopLoginPage />} />
          <Route
            path="/shop-create"
            element={
              <ProtectedRoute isSeller={isSeller}>
                <ShopCreatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
           <Route
            path="/dashboard-create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-products"
            element={
              <SellerProtectedRoute>
                <ShopAllProducts />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEvents/>
              </SellerProtectedRoute>
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

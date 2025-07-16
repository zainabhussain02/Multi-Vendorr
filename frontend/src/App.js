import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage,HomePage } from "./Routes.js";
import ActivationPage from "./pages/ActivationPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import axios from "axios";
// import { server } from "./server.js";
import { loadUser } from "./redux/actions/user.js";
import Store from "./redux/store.js";
const App = () => {
  useEffect(() => {
   Store.dispatch(loadUser());
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />

        {/* <Route path="/user/activate/:token" element={<ActivationPage/>}/>   */}

        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
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
  );
};
export default App;

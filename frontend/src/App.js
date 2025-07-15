import React from 'react'
import "./App.css"
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import {LoginPage,SignupPage} from "./Routes.js";
import ActivationPage from "./pages/ActivationPage"; 

 const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage/>} />
       
          {/* <Route path="/user/activate/:token" element={<ActivationPage/>}/>   */}

       <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />  
        

         
        </Routes>
        </BrowserRouter>

  )
}
export default App  

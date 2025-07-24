// import axios from "axios";
// import { server } from "../../server";

// //load user

// export const loadUser=()=>async(dispatch)=>{
//     try {
//         dispatch({
//            type:  "LoadUserRequest",
           
//         });
//         const {data}=await axios.getAdapter(`${server}/user/getUser`,{withCredentials:true}); 
//     dispatch({
//         type:"   LoadUserSucces",
//         payload:data.user,
//     })
    
//     } catch (error) {
//         dispatch({
//             type:"LoadUserFail",
//             payload:error.response.data.message,
//         });
//     }
// }


import axios from "axios";
import { server } from "../../server";
// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`${server}/user/getUser`, {
      withCredentials: true,
    });

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response?.data?.message || "Failed to load user",
    });
  }
};

//load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadSellerRequest" });

    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });

    dispatch({
      type: "LoadSellerSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response?.data?.message || "Failed to load user",
    });
  }
};

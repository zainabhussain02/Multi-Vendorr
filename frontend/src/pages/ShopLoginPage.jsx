// import React, { useEffect } from "react";
// import ShopLogin from "../components/Shop/ShopLogin";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ShopLoginPage = () => {
//   const navigate = useNavigate();
//   //  const {isSeller,seller} = useSelector((state)=>state.seller);
//   const { isAuthenticated: isSeller, seller } = useSelector(
//     (state) => state.seller
//   );

//   useEffect(() => {
//     console.log("isSeller:", isSeller);
//     console.log("seller:", seller);
//     if (isSeller === true && seller?._id) {
//       navigate(`/shop/${seller._id}`);
//     }
//   }, [isSeller, seller, navigate]);
//   return (
//     <div>
//       <ShopLogin />
//     </div>
//   );
// };

// export default ShopLoginPage;


import React, { useEffect } from "react";
import ShopLogin from "../components/Shop/ShopLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated: isSeller, seller } = useSelector(
    (state) => state.seller
  );

  useEffect(() => {
    if (isSeller === true && seller?._id) {
      navigate(`/shop/${seller._id}`);
    }
  }, [isSeller, seller, navigate]);

  // 👉 Prevent rendering login form if already logged in
  if (isSeller && seller?._id) {
    return null; // or a loader/spinner
  }

  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;

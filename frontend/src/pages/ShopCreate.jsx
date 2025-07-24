// import React, { useEffect } from 'react'
// import ShopCreate from "../components/Shop/ShopCreate";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

// const ShopCreatePage = () => {
// const navigate = useNavigate();
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
//         <ShopCreate/>
//     </div>
//   )
// }

// export default ShopCreatePage


import React, { useEffect } from 'react'
import ShopCreate from "../components/Shop/ShopCreate";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated: isSeller, seller: reduxSeller } = useSelector(
    (state) => state.seller
  );

  // Safely get seller from localStorage if redux is empty
  let seller = reduxSeller;
  if (!seller) {
    try {
      const sellerData = localStorage.getItem("seller");
      if (sellerData && sellerData !== "undefined") {
        seller = JSON.parse(sellerData);
      }
    } catch (err) {
      console.error("Failed to parse seller from localStorage", err);
    }
  }

  useEffect(() => {
    console.log("isSeller:", isSeller);
    console.log("seller:", seller);
    if (isSeller === true && seller?._id) {
      navigate(`/shop/${seller._id}`);
    }
  }, [isSeller, seller, navigate]);

  return (
    <div>
      <ShopCreate />
    </div>
  )
}

export default ShopCreatePage;

// import React from "react";
// import { AiOutlineGift } from "react-icons/ai";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import {FiPackage, FiShoppingBag} from "react-icons/fi";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { BiMessageSquareDetail } from "react-icons/bi";
// import { backend_url } from "../../../server";


// const DashboardHeader = () => {
//   const { seller } = useSelector((state) => state.seller);
//     console.log("Seller Avatar:", seller?.avatar); // 👈 yeh line yahan
//   return (
//     <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
//       <div>
//         <Link to="/dashboard">
//           <img
//             src="https://shopo.quomodothemes.website/assets/images/logo.svg"
//             alt=""
//           />
//         </Link>
//       </div>
//       <div className="flex items-center">
//         <div className="flex items-center mr-4">
//           <Link to="/dashboard/cupouns">
//             <AiOutlineGift
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>

//           <Link to="/dashboard/events">
//             <MdOutlineLocalOffer
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>

//            <Link to="/dashboard/products">
//             <FiShoppingBag
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>

//             <Link to="/dashboard/orders">
//             <FiPackage
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>

//             <Link to="/dashboard/messages">
//             <BiMessageSquareDetail
//               color="#555"
//               size={30}
//               className="mx-5 cursor-pointer"
//             />
//           </Link>

//            <Link to={`/shop/${seller._id}`}>
           
//             <img src={`${backend_url}${seller.avatar}`}
//              alt="" 
//              className="w-[50px] h-[50px] rounded-full object-cover"/>
//           </Link> 


//         </div>
//       </div>
//     </div>
//   );
// };



// export default DashboardHeader;


import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import downloadImg from '../../../Assests/download.png';
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div  >
        <Link to="/dashboard">
          {/* <img
            // src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            src="/Assests/download.png"
            alt="hh"
          /> */}
           <img src={downloadImg} alt="Download Image"
             className="w-40 ml-0" />
        </Link>

      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
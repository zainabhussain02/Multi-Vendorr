// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import axios from "axios";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { getAllEventsShop } from "../../redux/actions/event";
// import { useParams } from "react-router-dom";

// const ShopInfo = ({ isOwner }) => {
//   const { seller } = useSelector((state) => state.seller);
//   // const { id } = useParams();
//   //   const dispatch = useDispatch();
  
//   //   useEffect(() => {
//   //     dispatch(getAllProductsShop(id));
//   //     dispatch(getAllEventsShop(id));
//   //   }, [dispatch,id]);
//   const logoutHandler = async () => {
//     axios.get(`${server}/shop/logout`, {
//       withCredentials: true,
//     });
//     window.location.reload();
//   };
//   console.log(seller.avatar);
//   return (
//     <div>
//       <div className="w-full py-5">
//         <div className="w-full flex items-center justify-center">
//           <img
//             src={`${backend_url}uploads/${seller.avatar?.url}`}
//             alt="shop avatar"
//             className="w-[150px] h-[150px] object-cover rounded-full"
//           />
//         </div>
//         <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
//         <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
//           {seller.description}
//         </p>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Address</h5>
//         <h4 className="text-[#000000a6]">{seller.address}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Phone Number</h5>
//         <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Total Products</h5>
//         <h4 className="text-[#000000a6]">10</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Shop Ratings</h5>
//         <h4 className="text-[#000000a6]">4/5s</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Joined On</h5>
//         <h4 className="text-[#000000a6]">{seller.createdAt.slice(0, 10)}</h4>
//       </div>
//       {isOwner && (
//         <div className="py-3 px-4">
//           <div className={`${styles.button} !w-full !h-[42px] !roumded-[5px]`}>
//             <span className="text-white">Edit Shop</span>
//           </div>
//           <div
//             className={`${styles.button} !w-full !h-[42px] !roumded-[5px]`}
//             onClick={logoutHandler}
//           >
//             <span className="text-white">Log Out</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopInfo;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import axios from "axios";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { getAllEventsShop } from "../../redux/actions/event";
// import { useParams } from "react-router-dom";

// const ShopInfo = ({ isOwner }) => {
//   const { products,isLoading} = useSelector((state) => state.products);
//   const { seller } = useSelector((state) => state.seller);
//   const { id } = useParams();
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(getAllProductsShop(id));
//       dispatch(getAllEventsShop(id));
//     }, [dispatch,id]);


//   const logoutHandler = async () => {
//     axios.get(`${server}/shop/logout`, {
//       withCredentials: true,
//     });
//     window.location.reload();
//   };
//   console.log(seller.avatar);
//   return (
//     <div>
//       <div className="w-full py-5">
//         <div className="w-full flex items-center justify-center">
//           <img
//             src={`${backend_url}uploads/${seller.avatar?.url}`}
//             alt="shop avatar"
//             className="w-[150px] h-[150px] object-cover rounded-full"
//           />
//         </div>
//         <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
//         <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
//           {seller.description}
//         </p>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Address</h5>
//         <h4 className="text-[#000000a6]">{seller.address}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Phone Number</h5>
//         <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Total Products</h5>
//         <h4 className="text-[#000000a6]">10</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Shop Ratings</h5>
//         <h4 className="text-[#000000a6]">4/5s</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Joined On</h5>
//         <h4 className="text-[#000000a6]">{seller.createdAt.slice(0, 10)}</h4>
//       </div>
//       {isOwner && (
//         <div className="py-3 px-4">
//           <div className={`${styles.button} !w-full !h-[42px] !roumded-[5px]`}>
//             <span className="text-white">Edit Shop</span>
//           </div>
//           <div
//             className={`${styles.button} !w-full !h-[42px] !roumded-[5px]`}
//             onClick={logoutHandler}
//           >
//             <span className="text-white">Log Out</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopInfo;




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import Loader from "../Shop/Layout/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProductsShop } from "../../redux/actions/product";

// const ShopInfo = ({ isOwner }) => {
//   const [data,setData] = useState({});
//   const {products} = useSelector((state) => state.products);
//    const { seller } = useSelector((state) => state.seller);
//   const [isLoading,setIsLoading] = useState(false);
//   const {id} = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProductsShop(id));
//     setIsLoading(true);
//     axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
//      setData(res.data.shop);
//      setIsLoading(false);
//     }).catch((error) => {
//       console.log(error);
//       setIsLoading(false);
//     })
//   }, [])


//   const logoutHandler = async () => {
//     axios.get(`${server}/shop/logout`,{
//       withCredentials: true,
//     });
//     window.location.reload();
//   };

//     console.log(data);
//   return (
//    <>
//    {
//     isLoading  ? (
//       <Loader />
//     ) : (
//       <div>
//       <div className="w-full py-5">
//         <div className="w-full flex item-center justify-center">
//           <img
//             // src={`${backend_url}uploads/${seller.avatar?.url}`}
//             src={`${backend_url}${data.avatar}`}
//             alt="shop avatar"
//             className="w-[150px] h-[150px] object-cover rounded-full"
//           />
//         </div>
//         <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
//         <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
//           {data.description}
//         </p>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Address</h5>
//         <h4 className="text-[#000000a6]">{data.address}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Phone Number</h5>
//         <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Total Products</h5>
//         <h4 className="text-[#000000a6]">{products && products.length}</h4>
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Shop Ratings</h5>
        
//       </div>
//       <div className="p-3">
//         <h5 className="font-[600]">Joined On</h5>
//         <h4 className="text-[#000000b0]">{data?.createdAt?.slice(0, 10)}</h4>
//       </div>
//       {isOwner && (
//         <div className="py-3 px-4">
//            <Link to="/settings">
//            <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
//             <span className="text-white">Edit Shop</span>
//           </div>
//            </Link>
//           <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
//           onClick={logoutHandler}
//           >
//             <span className="text-white">Log Out</span>
//           </div>
//         </div>
//       )}
//     </div>
//     )
//    }
//    </>
//   );
// };

// export default ShopInfo;



import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { backend_url, server } from "../../server";
import axios from "axios";

const ShopInfo = ({ isOwner, shop: passedShop, image: passedImage }) => {
  const [data, setData] = useState(passedShop || {});
  const [isLoading, setIsLoading] = useState(!passedShop);
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!passedShop && id) {
      dispatch(getAllProductsShop(id));
      setIsLoading(true);
      axios
        .get(`${server}/shop/get-shop-info/${id}`)
        .then((res) => {
          setData(res.data.shop);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="w-full py-5">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={
              passedImage
                ? `${backend_url}${passedImage}`
                : data.avatar
                ? `${backend_url}${data.avatar}`
                : "https://via.placeholder.com/150"
            }
            className="w-[150px] h-[150px] object-cover rounded-full"
            alt=""
          />
          <div className="pl-8">
            <h3 className={`${styles.shop_name}`}>{data.name}</h3>
            <h5 className="pb-3 text-[15px]">
              {data?.address}
            </h5>
            <h5 className="text-[15px] text-[#000000a6]">
              {data?.phoneNumber}
            </h5>
          </div>
        </div>
        <div>
          <p>
            Since <strong>{data?.createdAt?.slice(0, 10)}</strong>
          </p>
        </div>
      </div>
      <br />
      <h3 className="text-[20px] font-[600] font-Roboto pb-2">All Products</h3>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[30px] xl:grid-cols-5 xl:gap-[35px] mb-12 border-0">
        {products &&
          products.map((i, index) => (
            <ProductCard data={i} key={index} isShop={true} />
          ))}
      </div>
    </div>
  );
};

export default ShopInfo;

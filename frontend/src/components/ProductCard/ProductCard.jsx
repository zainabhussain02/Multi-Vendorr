// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../styles/styles";
// import ProuctDetailsCard from "../ProuctDetailsCard/ProuctDetailsCard";
// import { backend_url } from "../../server";

// import {
//   AiFillAlert,
//   AiFillHeart,
//   AiFillStar,
//   AiOutlineEye,
//   AiOutlineHeart,
//   AiOutlineShoppingCart,
//   AiOutlineStar,
// } from "react-icons/ai";

// const ProductCard = ({ data }) => {
//   const [click, setClick] = useState(false);
//   const [open, setOpen] = useState(false);

//   const d = data.name;
//   const product_name = d.replace(/\s+/g, "-");

//   return (
//     <>
//       <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
//         <div className="flex justify-end"></div>
//         <Link to={`/product/${product_name}`}>
//           {console.log("Image path:", data?.imageUrl?.[0])}
// {console.log("Full URL:", `${backend_url}${data?.imageUrl?.[0]?.url}`)}

//           {console.log("Full product data:", data)}
// <img
//   src={data?.imageUrl?.[0]?.url}
//   alt="product"
//   className="w-full h-[170px] object-contain"
// />

//         </Link>
//         <Link to="/">
//           <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
//         </Link>

//         <Link to={`/product/${product_name}`}>
//           <h4 className="pb-3 font-[500]">
//             {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
//           </h4>
//           <div className="flex">
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               size={20}
//               color="#F6BA00"
//             />
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               size={20}
//               color="#F6BA00"
//             />
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               size={20}
//               color="#F6BA00"
//             />
//             <AiFillStar
//               className="mr-2 cursor-pointer"
//               size={20}
//               color="#F6BA00"
//             />
//             <AiOutlineStar
//               className="mr-2 cursor-pointer"
//               size={20}
//               color="#F6BA00"
//             />
//           </div>

//           <div className="py-2 flex items-center justify-between">
//             <div className="flex items-center">
//               {data.discountPrice ? (
//                 <>
//                   <h5 className={`${styles.productDiscountPrice}`}>
//                     {data.discountPrice}$
//                   </h5>
//                   <h4 className={`${styles.price} ml-2`}>{data.price}$</h4>
//                 </>
//               ) : (
//                 <h5 className={`${styles.productDiscountPrice}`}>
//                   {data.price}$
//                 </h5>
//               )}
//             </div>
//             <span className="font-[400] text-[17px] text-[#68d284]">
//               {data.totalSell} sold
//             </span>
//           </div>
//         </Link>

//         {/* side option */}

//         <div>
//           {click ? (
//             <AiFillHeart
//               size={22}
//               className="cursor-pointer absolute right-2 top-5"
//               onClick={() => setClick(!click)}
//               color={click ? "red" : "#333"}
//               title="Remove from wishlist"
//             />
//           ) : (
//             <AiOutlineHeart
//               size={22}
//               className="cursor-pointer absolute right-2 top-5"
//               onClick={() => setClick(!click)}
//               color={click ? "red" : "#333"}
//               title="Add to wishlist"
//             />
//           )}
//           <AiOutlineEye
//             size={22}
//             className="cursor-pointer absolute right-2 top-14"
//             onClick={() => setOpen(!open)}
//             color="#333"
//             title="Quick view"
//           />
//           <AiOutlineShoppingCart
//             size={25}
//             className="cursor-pointer absolute right-2 top-24"
//             onClick={() => setOpen(!open)}
//             color="#444"
//             title="Add to cart"
//           />

//           {open ? <ProuctDetailsCard setOpen={setOpen} data={data} /> : null}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;



// .......www
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import ProuctDetailsCard from "../ProuctDetailsCard/ProuctDetailsCard";
import { backend_url } from "../../server";

import {
  AiFillAlert,
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          {console.log("Image path:", data?.imageUrl?.[0])}
{console.log("Full URL:", `${backend_url}${data?.imageUrl?.[0]?.url}`)}

          {console.log("Full product data:", data)}
<img
  src={data?.imageUrl?.[0]?.url}
  alt="product"
  className="w-full h-[170px] object-contain"
/>


        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>

        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
            <AiOutlineStar
              className="mr-2 cursor-pointer"
              size={20}
              color="#F6BA00"
            />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              {data.discountPrice ? (
                <>
                  <h5 className={`${styles.productDiscountPrice}`}>
                    {data.discountPrice}$
                  </h5>
                  <h4 className={`${styles.price} ml-2`}>{data.price}$</h4>
                </>
              ) : (
                <h5 className={`${styles.productDiscountPrice}`}>
                  {data.price}$
                </h5>
              )}
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.totalSell} sold
            </span>
          </div>
        </Link>

        {/* side option */}

        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => setOpen(!open)}
            color="#444"
            title="Add to cart"
          />

          {open ? <ProuctDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;

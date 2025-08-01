// import React, { useState } from 'react'
// import   {RxCross2}  from "react-icons/rx"
// const ProuctDetailsCard = ({setOpen,data}) => {
//     const [count,setCount]= useState(1);
//     const [click,setClick]= useState(false);
//     const [select,setSelect]=useState(false);
//   return (
//     <div className='bg-white '>
// {
//     data ? (
//         <div className='fixed w-full h-screen top-0 bg-[#00000030] z-40 flex items-center justify-center'>
//                  <div className='w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4'>
//                    <RxCross2
//                     size={30}
//                     className="absolute right-3 top-3 z-50"
//                     onClick={()=>setOpen(false)} />
//                  </div>
//         </div>
//     ) : null
// }
//     </div>
//   )
// }

// export default ProuctDetailsCard

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import styles from "../../styles/styles";
import { AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { backend_url } from "../../server";

const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  // const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
   console.log("data:", data);
  console.log("shop id:", data?.shop?._id);
  return (
    <>
      {data ? (
        <div className="fixed inset-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="relative w-[90%] max-w-[800px] h-[90vh] overflow-y-auto bg-white rounded-md shadow-lg p-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-black transition"
            >
              <RxCross2 size={24} />
            </button>

            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                {/* Product Image */}
                {data?.imageUrl?.[0]?.url ? (
                  // <img src={data.imageUrl[0].url} alt={data.name} />
                  
<img src={`${backend_url}${data?.imageUrl?.[0]?.url}`} alt={data.name} />
                ) : (
                  <p className="text-red-500">No image available</p>
                )}
                {/* Shop Avatar */}
                {/* <div className="flex mt-2">
                  {data?.shop?.shopAvatar?.url ? (
                    <img
                      src={data.shop.shopAvatar.url}
                      alt="Shop Avatar"
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  ) : (
                    <p className="text-red-500">No avatar</p>
                  )}

                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ( {data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div> */}
               
                <Link
                  to={`/shop/preview/${data.shop._id}`}
                  className="flex mt-2 items-center"
                >
                  {data?.shop?.shopAvatar?.url ? (
                    <img
                      src={data.shop.shopAvatar.url}
                      alt="Shop Avatar"
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  ) : (
                    <p className="text-red-500">No avatar</p>
                  )}

                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </Link>
                {/* message */}
                <div
                  className={`${styles.button} bg-black mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">
                  ({data.totalSell}) Sold Out
                </h5>
              </div>
              <div className="w-full 800px:[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p>{data.description}</p>

                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discountPrice}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {" "}
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-2 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                      onClick={decrementCount}
                    >
                      -
                    </button>

                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>

                  {/* like button */}
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer "
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer "
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                  {/* like button end */}
                </div>
                {/* button */}
                <div
                  className={`${styles.button} mt-6 rounded-[4px]  h-11  items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                {/* button */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetailsCard;

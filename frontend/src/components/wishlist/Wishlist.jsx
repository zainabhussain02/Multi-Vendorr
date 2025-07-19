import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and  8gb ram silver colour",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and  8gb ram silver colour",
      description: "test",
      price: 245,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and  8gb ram silver colour",
      description: "test",
      price: 645,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 in-h-full w-[25%] h-screen bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross2
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>

          {/* Header */}
          <div className={`${styles.normalFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* Cart items list */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center gap-3">
        <RxCross2 className="cursor-pointer" />
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          className="w-[80px] h-[80px] object-cover"
          alt="product"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="text-[16px] text-[#d02222] font-[600] pt-1 font-Roboto">
            US${totalPrice}
          </h4>
        </div>

        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

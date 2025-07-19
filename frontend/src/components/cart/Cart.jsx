import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
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
      <div className="fixed top-0 right-0 w-[25%] h-screen bg-white flex flex-col justify-between shadow-sm">
        {/* Close button */}
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross2
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>

          {/* Header */}
          <div className={`${styles.normalFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* Cart items list */}
          <div className="w-full border-t overflow-y-auto max-h-[75vh] px-2">
            {cartData.map((item, index) => (
              <CartSingle key={index} data={item} />
            ))}
          </div>
        </div>

        {/* Checkout Button */}
        <div className="px-5 mb-3">
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-full bg-[#e44343] rounded-[5px]">
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Checkout Now (USD$1080)
              </h1>
            </div>
          </Link>
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
        {/* Quantity buttons */}
        <div className="flex flex-col items-center gap-2">
          <button
            className="bg-[#e44343] text-white w-[25px] h-[25px] rounded-full flex items-center justify-center"
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={16} />
          </button>
          <span className="text-[14px] font-[500]">{value}</span>
          <button
            className="bg-[#e4e4e4] text-[#333] w-[25px] h-[25px] rounded-full flex items-center justify-center"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={14} />
          </button>
        </div>

        {/* Product image */}
        <img
          src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
          className="w-[80px] h-[80px] object-cover"
          alt="product"
        />

        {/* Product info */}
        <div className="flex flex-col justify-between ml-2 w-full">
          <h1 className="text-[15px] font-[500] leading-5">{data.name}</h1>
          <h4 className="text-[14px] text-[#00000082] font-[400]">
            ${data.price} x {value}
          </h4>
          <h4 className="text-[16px] text-[#d02222] font-[600] pt-1">
            US${totalPrice}
          </h4>
        </div>

        {/* Remove item */}
        <RxCross2 className="cursor-pointer ml-2" />
      </div>
    </div>
  );
};

export default Cart;

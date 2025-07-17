import React from "react";
import styles from "../../styles/styles";

import CountDown from "./CountDown";
const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2 `}>
      <div className="w-full lg:w-[50%] flex justify-center items-center">
        <img
          src="https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1"
          alt="event"
          className="max-w-[450px] max-h-[450px] object-contain"
        />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-center p-4">
        <h1 className={`${styles.productTitle}`}>
          Smart Watch Amazfit Active 2.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          repudiandae eaque fuga expedita saepe atque, voluptatem illum quisquam
          consequatur, nam rerum est omnis, molestias cupiditate necessitatibus
          quis ab sed magni. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia repudiandae eaque fuga expedita saepe atque, voluptatem
          illum quisquam consequatur, nam rerum est omnis, molestias cupiditate
          necessitatibus quis ab sed magni.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] line-through ">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 Sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;

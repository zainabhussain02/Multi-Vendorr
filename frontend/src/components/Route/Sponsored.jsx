import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-center gap-12 min-w-[700px]">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt="Sony"
            className="w-[120px] object-contain flex-shrink-0"
          />

          <img
            src="https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png"
            alt="Microsoft"
            className="w-[120px] object-contain flex-shrink-0"
          />

          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            alt="Dell"
            className="w-[120px] object-contain flex-shrink-0"
          />

          <img
            src="https://images.seeklogo.com/logo-png/32/2/novo-lg-logo-png_seeklogo-320154.png"
            alt="LG"
            className="w-[120px] object-contain flex-shrink-0"
          />

          <img
            src="https://images.seeklogo.com/logo-png/30/2/apple-pay-logo-png_seeklogo-303597.png"
            alt="Apple"
            className="w-[120px] object-contain flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;

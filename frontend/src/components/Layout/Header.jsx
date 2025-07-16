
import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData, categoriesData } from "../../static/data";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import{ CgProfile} from "react-icons/cg";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };

  // Scroll listener with cleanup
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top header */}
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#0e2fc3] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 && (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData.map((i, index) => {
                  const Product_name = i.name.replace(/\s+/g, "-");
                  return (
                    <Link key={index} to={`/product/${Product_name}`}>
                      <div className="w-full flex items-start py-3">
                        <img
                          src={i.imageUrl?.[0]?.url}
                          alt={i.name}
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Become seller */}
          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-white flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Header Bar */}
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-10" : ""
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* Categories */}
          <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button
              className={`h-[100%] w-full justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
            >
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropdown)}
            />
            {dropdown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          {/* navItems */}

          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>




<div className="flex">
          <div className={`${styles.normalFlex}`}> 
            <div className="relative cursor-pointer mr-[15px">
              <AiOutlineHeart
              size={30}
              color="rgb(255 255 255 / 834)"
              />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                0
              </span>
            </div>

          </div>


 <div className={`${styles.normalFlex}`}> 
            <div className="relative cursor-pointer mr-[15px">
              <AiOutlineShoppingCart
              size={30}
              color="rgb(255 255 255 / 834)"
              />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                1
              </span>
            </div>
</div>

<div className={`${styles.normalFlex}`}> 
            <div className="relative cursor-pointer mr-[15px]">
              <Link to ="/login">
              <CgProfile
              size={30}
              color="rgb(255 255 255 / 83%)"
              />
              </Link>
              
            </div>
</div>
          </div>

          
        </div>
      </div>

    </>
  );
};

export default Header;

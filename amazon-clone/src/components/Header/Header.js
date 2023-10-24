import React, { useEffect, useRef, useState } from "react";
import { logo } from "../../assets/index";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { items } from "../../constants";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("All");

  const products = useSelector((state) => state.amazonReducer.products);

  //I was trying use ref method to hide list item but not working
  // const ref = useRef();
  // useEffect(() => {
  //     document.body.addEventListener("click", (e) => {
  //         if (e.target.contains(ref.current)) {
  //             setShowAll(false);
  //         }
  //     })
  // }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("span")) {
        setShowAll(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 z-50 ">
      <div className="w-full bg-amazon_blue text-white flex items-center p-1 px-2 justify-between">
        {/* Left side */}
        <Link to='/'>
          <div className="headerHover">
            <img className="w-24" src={logo} alt="Amazon" />
          </div>
        </Link>

        <div className="headerHover hidden mdl:inline-flex">
          <LocationIcon />
          <p className="flex flex-col text-sm font-light text-lightText">
            Deliver to{" "}
            <span className="font-semibold text-whiteText -mt-1">Oman</span>
          </p>
        </div>

        {/* mid search part */}
        <div className="h-10 rounded-md flex flex-grow relative mx-2 hidden lgl:inline-flex">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-auto h-full text-xs flex items-center justify-center text-[#6a6155] hover:text-amazon_blue bg-gray-200 hover:bg-gray-300  cursor-pointer rounded-tl-md rounded-bl-md px-2 "
          >
            {search}
            <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-48 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] text-black text-md font-titleFont flex-col gap-1 z-50 border-amazon_blue rounded-lg">
                {items.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSearch(item)}
                    className="hover:text-white hover:bg-[#838383] p-1 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            placeholder="Website by sudhanshu gautam"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        {/* right side */}

        {/* Signin start here */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-sm md:text-xs text-white md:text-lightText font-light">Hello, sign in</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden md:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>

        <div className="flex flex-col items-start justify-center headerHover hidden lgl:inline-flex">
          <p className="text-xs font-light text-lightText">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        <Link to='/cart'>
          {/* ========== Cart Start here ============ */}
          <div className="flex items-center justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-sm font-semibold b-6 text-whiteText mt-3 ">
              Cart{" "}
              <span className=" absolute text-xs left-7 top-1 font-semibold bg-amazon_yellow rounded-full p-1 h-4 flex items-center justify-center text-amazon_blue">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {/* ========== Cart End here ============ */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;

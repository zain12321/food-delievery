import React, { useState } from "react";
import webLogo from "../assets/webLogo.png";
import { CgProfile } from "react-icons/cg";
import { BsBucket } from "react-icons/bs";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header({ darkTheme, setDarkTheme }) {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState();
  const { carts } = useSelector((elem) => elem.user);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <div
      className="flex z-20 items-center justify-between w-screen px-4 md:px-12 lg:px-24 shadow-sm bg-white
     dark:bg-slate-700 dark:text-white py-2 fixed"
    >
      <div className="flex items-center flex-col">
        <Link to="/">
          <img className="h-14 w-14" src={webLogo} alt="logo" />
        </Link>
        <p className="font-bold text-[20px]">Tasty Treat</p>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex space-x-9 items-center dark:text-white">
          <Link to="/">
            <li
              className={`${active === "Home" ? "active h-but" : "h-but"}`}
              onClick={() => setActive("Home")}
            >
              Home
            </li>
          </Link>

          <Link to="/foods">
            <li
              className={`${active === "Foods" ? "active h-but" : "h-but"}`}
              onClick={() => setActive("Foods")}
            >
              Foods
            </li>
          </Link>
          <Link to="/cart">
            <li
              className={`${active === "Cart" ? "active h-but" : "h-but"}`}
              onClick={() => setActive("Cart")}
            >
              Cart
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`${active === "Contact" ? "active h-but" : "h-but"}`}
              onClick={() => setActive("Contact")}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-6 relative">
        <div className="flex sm:hidden" onClick={() => setMenu(!menu)}>
          <HiMenu className="h-icons" />
        </div>
        {menu ? (
          <div className="bg-gray-300 px-4 py-3 dark:text-black rounded-lg absolute top-9 right-16">
            <ul className="flex flex-col space-y-9 items-center dark:text-black">
              <Link to="/">
                {" "}
                <li
                  className={`${active === "Home" ? "active h-but" : "h-but"}`}
                  onClick={() => setActive("Home")}
                >
                  Home
                </li>
              </Link>
              <Link to="/foods">
                <li
                  className={`${active === "Foods" ? "active h-but" : "h-but"}`}
                  onClick={() => setActive("Foods")}
                >
                  Foods
                </li>
              </Link>
              <Link to="/cart">
                <li
                  className={`${active === "Cart" ? "active h-but" : "h-but"}`}
                  onClick={() => setActive("Cart")}
                >
                  Cart
                </li>
              </Link>
              <Link to="contact">
                <li
                  className={`${
                    active === "Contact" ? "active h-but" : "h-but"
                  }`}
                  onClick={() => setActive("Contact")}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
        <div
          className="flex items-center cursor-pointer relative"
          onClick={handleClick}
        >
          <p
            className="bg-red-600 absolute bottom-4 left-4
                     text-white font-bold py-[1px] text-center px-1 text-[13px] rounded-full"
          >
            {carts.length}
          </p>
          <BsBucket className="h-icons" />
        </div>
        <CgProfile className="h-icons" />
        <p onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <MdOutlineLightMode className="h-icons" />
          ) : (
            <MdDarkMode className="h-icons" />
          )}
        </p>
      </div>
      {showMenu && (
        <div
          className="absolute right-0 top-0 text-black sm:px-2 py-2 
        overflow-y-auto h-screen bg-gray-200 border-gray-300 border"
        >
          <div
            className="bg-[#fd2020] h-8 cursor-pointer w-8 flex items-center justify-center text-white rounded-full"
            onClick={handleMenuClose}
          >
            X
          </div>
          <ul className="px-11 mt-9 space-y-2">
            <li className="flex font-bold text-[#212245] text-[24px] flex-col items-center">
              Your Cart Here
            </li>

            {carts.length >= 1 ? (
              <div
                className="text-center text-[19px] flex justify-between items-center bg-green-500 py-2 px-3 rounded-md text-white
         "
              >
                Your Cart Quantity
                <span
                  className="bg-white rounded-full flex items-center
          justify-center text-[#212245] px-4 py-2
         "
                >
                  {carts.length}
                </span>
              </div>
            ) : (
              <button className="bg-[#fd2020] px-8 py-2 rounded-md text-white">
                No Item Select
              </button>
            )}
            <div className="grid mt-8 grid-cols-1 gap-3">
              {carts?.map((elem) => {
                const { title, price, image } = elem;
                return (
                  <div
                    className="border-2 flex space-x-3 space-y-3 items-center
 max-w-[300px] md:max-w-[350px] py-4 border-gray-200 bg-gray-100 rounded-md px-3"
                  >
                    <img
                      className="w-12 sm:w-20 h-12 sm:h-20 hover:scale-110 cursor-pointer translate-y-2 transition duration-500"
                      src={image}
                      alt=""
                    />
                    <p className="text-[#212245] font-bold text-[15px]">
                      {title}
                    </p>
                    <p className="flex items-center justify-center px-3">
                      <p className="text-[#fd2020] font-bold text-[16px]">
                        {price}
                      </p>
                    </p>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

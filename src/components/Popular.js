import React, { useState } from "react";
import PopularItem from "../data";
import { FaHamburger } from "react-icons/fa";
import { IoMdPizza } from "react-icons/io";
import { GiSlicedBread } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddCart } from "../redux/cartItem";

function Popular() {
  const dispatch = useDispatch();
  const [item, setItem] = useState(PopularItem);

  const filterItem = (CategoryItem) => {
    const updatedItems = PopularItem.filter((curElem) => {
      return curElem.price === CategoryItem;
    });
    setItem(updatedItems);
  };

  return (
    <div className="md:mx-12 xl:mx-44 mx-4">
      <h1 className="text-center py-7 pop text-[34px] dark:text-[#777777] font-bold">
        Popular Food
      </h1>
      <div
        className="bg-[#fd2020] text-white rounded-lg py-3
     px-1 sm:px-4 flex items-center justify-center my-4 "
      >
        <ul
          className=" grid 
     grid-cols-4 lg:grid-cols-5 xl:space-x-24"
        >
          <li
            onClick={() => setItem(PopularItem)}
            className="hover:bg-white hover:text-black font-bold
      max-w-[50px] text-center rounded-lg p-2"
          >
            All
          </li>
          <li onClick={() => filterItem("$24")} className="popular ">
            <FaHamburger className="pop-i" />
            <span>Burger</span>
          </li>
          <li onClick={() => filterItem("$115")} className="popular">
            <IoMdPizza className="pop-i" />
            <span>Pizza</span>
          </li>
          <li onClick={() => filterItem("$40")} className="popular">
            <GiSlicedBread className="pop-i" />
            <span>Bread</span>
          </li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {item?.map((elem) => {
          const { title, price, image } = elem;
          return (
            <div
              className="border-2 flex flex-col space-y-3 items-center
mx-2 max-w-[300px] md:max-w-[350px] py-4 border-gray-200 bg-gray-10"
            >
              <img
                className="w-24 h-24 hover:scale-110 cursor-pointer translate-y-2 transition duration-500"
                src={image}
                alt=""
              />
              <p className="text-[#212245] dark:text-[#777777] font-bold text-[18px]">{title}</p>
              <p className="flex items-center justify-between w-full px-3">
                <p className="text-[#fd2020] font-bold text-[22px]">{price}</p>
                <button
                  className="bg-[#fd2020] text-white font-bold rounded-ms px-3 py-2"
                  onClick={() => dispatch(AddCart(elem))}
                >
                  Add To Cart
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;

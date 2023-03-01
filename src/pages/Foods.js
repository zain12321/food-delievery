import React, { useState } from "react";
import PopularItem from "../data";
import { FcSearch } from "react-icons/fc";
import { FaHamburger } from "react-icons/fa";
import { IoMdPizza } from "react-icons/io";
import { GiSlicedBread } from "react-icons/gi";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../redux/cartItem";

function Foods() {
  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState(PopularItem);
  const { carts } = useSelector((val) => val.user);
  const dispatch = useDispatch();
  const filterItem = (CategoryItem) => {
    const updatedItems = PopularItem.filter((curElem) => {
      return curElem.price === CategoryItem;
    });
    setItem(updatedItems);
  };

  return (
    <div className="pt-[90px] ">
      <div className="common__section my-3 flex items-center justify-center text-white font-bold text-[35px]">
        All Foods Here
      </div>
      <div className="md:mx-12 sm:mx-6 mx-3 lg:mx-20 xl:mx-24">
        <div className="md:flex items-center justify-between space-x-5">
          <div className="flex border-[#383a7a] flex-1 py-3 px-3 my-3 border-2 items-center rounded-full justify-between">
            <input
              className="flex-1 px-2 dark:text-[#fff] bg-transparent dark:placeholder:text-[#fff] outline-none placeholder:text-[17px] placeholder:text-[#333] 
        font-medium "
              type="text"
              placeholder="Search here..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <p className="dark:bg-green-500 bg-yellow-400 flex items-center justify-center cursor-pointer h-9 w-9 rounded-full">
              <FcSearch className="footer-i" />
            </p>
          </div>
          <div>
            <select
              className="py-[5px] outline-none w-[250px] sm:w-[300px] px-2 my-3 md:my-0 cursor-pointer rounded-full border-black border-2"
              onChange={(event) => {
                const selectedOption = event.target.value;
                if (selectedOption === "All") {
                  setItem(PopularItem);
                } else if (selectedOption === "$24") {
                  filterItem("$24");
                } else if (selectedOption === "$115") {
                  filterItem("$115");
                } else if (selectedOption === "$40") {
                  filterItem("$40");
                }
              }}
            >
              <option value="All">All</option>
              <option value="$24">Burger</option>
              <option value="$115">Pizza</option>
              <option value="$40">Bread</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {item
            ?.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div
                  key={val.id}
                  className="border-2 flex flex-col space-y-3 items-center
                  mx-2 max-w-[300px] md:max-w-[350px] py-4 border-gray-200 bg-gray-100 "
                >
                  <img
                    className="w-24 h-24 hover:scale-110 cursor-pointer translate-y-2 transition duration-500"
                    src={val.image}
                    alt=""
                  />
                  <p className="text-[#212245] font-bold text-[18px]">
                    {val.title}
                  </p>
                  <p className="flex items-center justify-between w-full px-3">
                    <p className="text-[#fd2020] font-bold text-[22px]">
                      {val.price}
                    </p>
                    <button
                      className="bg-[#fd2020] text-white font-bold rounded-ms px-3 py-2"
                      onClick={() => dispatch(AddCart(val))}
                    >
                      Add To Cart
                    </button>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-11">
        <Footer />
      </div>
    </div>
  );
}

export default Foods;

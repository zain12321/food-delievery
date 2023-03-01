import React from "react";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function Cart() {
  const { carts } = useSelector((elem) => elem.user);
  return (
    <div className="pt-[90px]">
      <div className="common__section my-3 flex items-center justify-center text-white font-bold text-[35px]">
        Your Cart Here
      </div>
      <div className="flex items-center text-center flex-col space-y-4">
        <h1 className="font-bold text-[30px] dark:text-[#777777] flex items-center">
          Cart Is{" "}
          {carts.length >= 0 ? (
            <p className="pl-1">Here</p>
          ) : (
            <p className="pl-1"> Empty</p>
          )}
        </h1>
        {carts.length >= 1 ? (
          <p className="font-bold text-[23px]">Carts Item : {carts.length}</p>
        ) : (
          <button className="bg-[#fd2020] py-2 px-3 text-[17px] text-white">
            No Item Selected
          </button>
        )}
      </div>
      <div className="grid mt-8 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {carts?.map((elem) => {
          const { title, price, image } = elem;
          return (
            <div
              className="border-2 flex flex-col space-y-3 items-center
mx-2 max-w-[300px] md:max-w-[350px] py-4 border-gray-200 bg-gray-100"
            >
              <img
                className="w-24 h-24 hover:scale-110 cursor-pointer translate-y-2 transition duration-500"
                src={image}
                alt=""
              />
              <p className="text-[#212245] font-bold text-[18px]">{title}</p>
              .com
              <p className="flex items-center justify-center px-3">
                <p className="text-[#fd2020] font-bold text-[22px]">{price}</p>
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-11">
        <Footer />
      </div>
    </div>
  );
}

export default Cart;

import React, { useState } from "react";
import { SiGooglemessages } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

function Message() {
  const [openBox, setOpenBox] = useState();
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const EventChange = (event) => {
    setInputList(event.target.value);
  };
  const ListOfItems = () => {
    setItems((OldItems) => {
      return [...OldItems, inputList];
    });
  };

  return (
    <div className="">
      <div className="relative">
        <div
          onClick={() => setOpenBox(!openBox)}
          className="fixed cursor-pointer bottom-[80px]
         md:bottom-2 xl:bottom-10 md:right-8 right-5 flex items-center 
    justify-center lg:right-16 h-16 rounded-full w-16 bg-[#fd2020]"
        >
          <SiGooglemessages className="text-white h-8 w-8" />
        </div>
      </div>
      {openBox ? (
        <div
          className="bg-gray-200 max-w-[310px] md:max-w-[350px] flex flex-col 
            justify-between shadow-2xl border-[#333]
             min-h-[300px] lg:min-h-[250px] xl:min-h-[350px]
              bottom-[170px] md:bottom-[70px] xl:bottom-[120px] right-3 lg:right-8
         fixed z-50 rounded-tl-md rounded-tr-md"
        >
          <div
            className="bg-[#fd2020] text-[20px] text-white font-bold px-2 py-4 
                      rounded-tl-md rounded-tr-md"
          >
            Chat With Us
          </div>
          <div className="text-center py-2">Today</div>
          <div className="overflow-y-auto space-y-3 py-4 max-h-[130px] lg:max-h-[250px]">
            {Items.map((itemval) => {
              return (
                <div className="flex flex-row-reverse mb-2">
                  <div className="flex">
                    <div className="mr-3 rounded-full py-2 px-4 bg-gray-400 flex">
                      <span className="text-[15px] font-extrabold">
                        <button>{itemval}</button>
                      </span>
                    </div>
                    <p className="flex ">
                      <span className="mt-3 text-[12px] font-medium pr-1">
                        now
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center space-x-1 sm:space-x-3 border-t border-[#333] py-3 sm:px-3 px-[2px]">
            <input
              onChange={EventChange}
              required
              maxLength={30}
              placeholder="Enter Your Chat"
              name="chat"
              type="chat"
              className="py-2 border-2 border-[#333]
    text-[#333] px-1 rounded-full"
            />
            <MdAttachFile className="h-icons" />
            <RiDeleteBin6Line className="h-icons" />
            <IoMdSend className="h-icons" onClick={ListOfItems} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Message;

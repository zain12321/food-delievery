import React from "react";
import SlidersTest from "./SlidersTest";

function Testimonials() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:mx-24 md:mx-12 px-4">
      <div className="space-y-3 flex flex-col pt-11">
        <div>
          <p className="text-[#fd2020] text-[25px] font-bold">Testimonials</p>
          <h1
            className="text-[25px] dark:text-[#777777] md:text-[35px] pop font-bold
                "
          >
            What our <span className="text-[#fd2020]">customers</span> are
            saying
          </h1>
          <p className="text-[#777777] text-[19px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            quasi qui minus quos sit perspiciatis inventore quis provident
            placeat fugiat!
          </p>
        </div>
        <SlidersTest />
      </div>
      <div>
        <img
          src="https://food-delivery-ecommerce-app.netlify.app/static/media/network.7deb539d.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Testimonials;

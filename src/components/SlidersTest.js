import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slide = [
  {
    id: 1,
    image:
      "https://food-delivery-ecommerce-app.netlify.app/static/media/ava-3.14420750.jpg",
    name: "John Doe",
  },
  {
    id: 2,
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/312277773_199183549178646_6748241584013492242_n.jpg?ccb=11-4&oh=01_AdQUcSKjN2BRkbi9kHNOHqzmm1g8hmq7FrOqmZCqAKhf0w&oe=640B319D",
    name: "Zubair Butt",
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/ogw/AAEL6sjuTdR61JCY4n3Fm1764JCSNTBYuIeez-PitQR9=s32-c-mo",
    name: "Author-",
  },
];
export default function SlidersTest() {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="flex max-w-[500px] py-6 mx-4 md:mx-0">
      {slide.map((slides) => {
        const { image, name } = slides;
        return (
          <div className="flex flex-col w-[100px] text-black space-y-3">
            <h3 className="text-[#777777] text-[16px] sm:text-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
              quasi qui minus quos sit perspiciatis inventore quis provident
              placeat fugiat! Distinctio quasi qui minus quos sit perspiciatis
              inventore quis provident placeat fugiat!
            </h3>
            <div className="flex items-center space-x-5">
              <img className="h-12 w-12 rounded-md" src={image} alt="" />
              <p className="font-bold text-[18px] dark:text-[#777777]">
                {name}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

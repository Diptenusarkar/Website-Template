import React from "react";
import banner from "../Assets/banner2.jpg";
import { imagesData } from "../data";
import { Card } from "./Cart";

const Aboutus = () => {
  return (
    <div className="">
    <div>
  <img
    src={banner}
    className="w-full h-[400px] opacity-50 relative"
    alt=""
  />
  <h1 className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
    About Us
  </h1>
</div>


      <div>
        <h1 className="text-center text-3xl mt-[80px]">Our Team</h1>
      </div>

      <div className="flex items-center flex-wrap mx-[100px] justify-center gap-10 my-[100px] ">
        {imagesData.map((image) => {
          return <Card {...image} />;
        })}
      </div>
    </div>
  );
};

export default Aboutus;

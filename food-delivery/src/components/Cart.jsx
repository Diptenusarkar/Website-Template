import React from "react";

export const Card = ({ image, name, uid }) => {
  return (
    <div>
      <div className=" shadows flex flex-col justify-center items-center p-4 hover:scale-110 transition-all ease-in-out duration-300 rounded-xl">
        <div className="w-[200px] h-[300px] overflow-hidden">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <h3>{uid}</h3>
      </div>
    </div>
  );
};

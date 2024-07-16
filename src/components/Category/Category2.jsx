import React from "react";
import Image3 from "../../assets/imgs/img24.png";

import Image2 from "../../assets/imgs/img8.png";
import Image1 from "../../assets/imgs/img7.png";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-zinc-950 to-zinc-900 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
              <p className="mb-[2px] text-white">Welcome</p>
                <p className="text-xl font-semibold mb-[2px]">To</p>
                <p className="text-2xl xl:text-2xl font-bold opacity-40 mb-2">
                  Modern Home
                </p>
               <Link to='/shop'><Button
                  text="Shop"
                  bgColor={"bg-white"}
                  textColor={"text-zinc-950 "}
                /></Link> 
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[180px] sm:w-[160px] md:w-[100px] lg:w-[330px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
         {/* Second col */}
<div className="py-10 pl-10 bg-gradient-to-br from-gray-100 to-gray-100 text-white rounded-3xl relative h-[320px] flex flex-col items-start">
  <img src={Image2} alt="" className="w-[90px] " />
  <br></br>
  <div className="mt-auto">
  <Link to='/shop'><Button
      text="Shop"
      bgColor={"bg-zinc-950"}
      textColor={"text-white"}
    /></Link>
  </div>
</div>
{/* Third col */}
<div className="py-10 pl-10 bg-gradient-to-br from-gray-100 to-gray-100 text-white rounded-3xl relative h-[320px] flex flex-col items-start">
  <img src={Image3} alt="" className="w-[150px]" /><br></br>
  <div className="mt-auto">
  <Link to='/shop'><Button
      text="Shop"
      bgColor={"bg-zinc-950"}
      textColor={"text-white"}
    /></Link>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Category;

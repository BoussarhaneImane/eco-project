import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/imgs/img5.png";
import Image2 from "../../assets/imgs/img2.png";

import Button from "../Shared/Button";

const Category = () => {
  return (
     <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-green-700 to-green-800 text-white rounded-3xl relative h-[320px] flex items-end">
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
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col */}
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
              src={Image2}
              alt=""
              className="w-[150px] sm:w-[150px] md:w-[130px] lg:w-[300px] absolute top-1/2 -translate-y-1/2 -right-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

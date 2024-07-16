import React from "react";
import { Link } from "react-router-dom";
import image from '../../assets/imgs/chambre.jpg'
const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 m-0">
      <div className="container">
        <div
        
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-green-700"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-lg">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-lg lg:text-4xl font-bold"
            >
              {" "}
              {data.title}
            </h1><br></br>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={image}
              alt=""
              className="scale-125 w-[300px] md:w-[290px] mx-auto  object-cover rounded-xl"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">
              {data.title2}
            </p>
            <p data-aos="fade-up" className=" text-xs sm:text-4xl font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-xs tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <Link to='/shop'><button
               
               className="bg-white py-2 px-4 rounded-full text-zinc-950"
             >
               Shop Now
             </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

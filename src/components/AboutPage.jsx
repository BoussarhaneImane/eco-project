import React from "react";
import Slider from "react-slick";
import Image1 from "./Shop/components/imgs/BACK.jpg";
import Partners from "./Partners/Partners";
import Button from "./Shared/Button";
import { IoMdStar } from "react-icons/io";
import './About.css'
import people from './Shop/components/imgs/people1.jpg'
import people2 from './Shop/components/imgs/people2.jpg'
import people3 from './Shop/components/imgs/people3.jpg'
import { FaMobileAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: " Welcome to our modern home shop! We are dedicated to providing you with the latest trends and designs in home decor and furnishings. Whether you're looking to reamp your living room, update your kitchen, or add a touch of elegance to your bedroom, we have everything you need to transform your space into a modern masterpiece.",
    subtitle1:"About Us"
  },
 
  
];
const FooterLinks = [
     {
       title: "Home",
       link: "/#",
     },
     {
       title: "About",
       link: "/#about",
     },
     {
       title: "Contact",
       link: "/#contact",
     },
     {
       title: "Blog",
       link: "/#blog",
     },
   ];
const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (<>
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Img section */}
                  <div className="order-2 sm:order-1">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-96 mx-auto sm:mx-auto relative z-40 rounded-2xl"
                      />
                    </div>
                  </div>
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-1 sm:order-2 relative z-10 ">
                   
                   
                  <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-green-700 font-bold text-5xl "
                    >
                      {data.subtitle1}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-gray-700 "
                    >
                      {data.subtitle}
                    </h1>
                    
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-zinc-950"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
     

    </div>
    
    <div className="testimonials">
  <h2 className="testimonials-title text-center text-xs md:text-2xl xs:text-1xl mb-4 ">What Our Customers Say About Our Website</h2>
  <div className="testimonial-cards flex flex-wrap justify-center gap-4">
    <div className="testimonial-card bg-green-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <img src={people} alt="Person 1" className="w-24 h-24 rounded-full mx-auto mb-2" />
      <div className="flex justify-center mb-2">
        <span style={{position:'relative',top:'5px',right:'70px'}}  className="text-yellow-500"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
      </div>
      <p className="testimonial-text text-center text-white mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra elit eget magna condimentum tincidunt.</p>
      <p className="testimonial-author text-center text-white">- John Doe</p>
    </div>
    <div className="testimonial-card bg-green-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <img src={people2} alt="Person 2" className="w-24 h-24 rounded-full mx-auto mb-2" />
      <div className="flex justify-center mb-2">
        <span style={{position:'relative',top:'5px',right:'68px'}}  className="text-yellow-500"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
      </div>
      <p className="testimonial-text text-center text-white mb-2">Vestibulum ac magna in est posuere suscipit. Integer sit amet vestibulum purus. Sed et mauris non sapien placerat sodales.</p>
      <p className="testimonial-author text-center text-white">- Jane Smith</p>
    </div>
    <div className="testimonial-card bg-green-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <img src={people3} alt="Person 3" className="w-24 h-24 rounded-full mx-auto mb-2" />
     
      <div className=" flex justify-center mb-2">
        <span style={{position:'relative',top:'2px',right:'68px'}} className="text-yellow-400"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span>
      </div>
      <p className="testimonial-text text-center text-white mb-2">Vestibulum ac magna in est posuere suscipit. Integer sit amet vestibulum purus. Sed et mauris non sapien placerat sodales.</p>
      <p className="testimonial-author text-center text-white">- David Johnson</p>
    </div>
  </div>
</div>
<Partners/>
<div className= " bg-gray-50 dark:bg-gray-950" >
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
         
            <a href="/" className="flex items-center text-green-700">
              <span className="mr-0" id="LOGOT">H</span>
              <IoHome className="text-xl" id="LOGO" />
              <span className="mr-0" id="LOGOT">ME</span>
            </a>
   
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <p className="text-gray-500 mt-4">
             make a lot websites
            </p>
            <a
              href=""
              target="_blank"
              className="inline-block bg-zinc-950 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
             Contact Us
            </a>
          </div>

          {/* Footer links */}
       
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
         
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Make Web site pvt,Full Stack Devloper </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 1234567890</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl text-green-700  hover:text-zinc-950  duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl text-green-700  hover:text-zinc-950  duration duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl text-green-700 hover:text-zinc-950 duration duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <footer className="text-center py-4 text-gray-600 dark:text-gray-400 text-sm">
          &copy; 2024 Full Stack Devloper . All Rights Reserved.
        </footer>
      </div>
    </div>
     </>
  );
};

export default Hero;

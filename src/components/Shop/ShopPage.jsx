
import React from "react";

import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";

import Store from "./components/Store";

import ShoppingCartProvider from "./context/ShoppingCartContext";
import Partners from "../Partners/Partners";
import { FaMobileAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
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
const ShopPage = () => {
  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Store/>
      </Container>
    </ShoppingCartProvider>
  
  
<Partners/>
    <div className="bg-gray-50 dark:bg-gray-950 ">
  <div className="container ">
    <div className="grid md:grid-cols-3 pb-20 pt-5">
      {/* company details */}
      <div className="py-8 px-4">
        <a href="/" className="flex items-center text-green-700">
          <span className="mr-0" id="LOGOT">H</span>
          <IoHome className="text-xl" id="LOGO" />
          <span className="mr-0" id="LOGOT">ME</span>
        </a>
        <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
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

export default ShopPage;


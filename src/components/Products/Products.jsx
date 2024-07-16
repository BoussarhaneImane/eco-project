import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import MicrowaveImg from "../../assets/imgs/m1.png";
import BlenderImg from "../../assets/imgs/m2.png";
import ToasterImg from "../../assets/imgs/m3.png";
import CoffeeMakerImg from "../../assets/imgs/m4.png";
import s1 from "../../assets/imgs/s1.png";
import s2 from "../../assets/imgs/s2.png";
import s3 from "../../assets/imgs/s3.png";
import s4 from "../../assets/imgs/s4.png";
const ProductsData = [
  {
    id: 1,
    img: MicrowaveImg,
    title: "Microwave Oven",
    price: "$120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: BlenderImg,
    title: "Blender",
    price: "$80",
    aosDelay: "200",
  },
  {
    id: 3,
    img: ToasterImg,
    title: "Toaster",
    price: "$50",
    aosDelay: "400",
  },
  {
    id: 4,
    img: CoffeeMakerImg,
    title: "Coffee Maker",
    price: "$100",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 5,
    img: s1,
    title: "Air fryer pro",
    price: "$150",
    aosDelay: "0",
  },
  {
    id: 6,
    img: s2,
    title: "Mixeur professionnel",
    price: "$120",
    aosDelay: "200",
  },
  {
    id: 7,
    img: s3,
    title: "machine a laver",
    price: "$80",
    aosDelay: "400",
  },
  {
    id: 8,
    img: s4,
    title: "Des rangements",
    price: "$200",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;

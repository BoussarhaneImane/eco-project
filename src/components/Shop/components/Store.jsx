import React from "react";
import { Row, Col } from "react-bootstrap";
import Partners from "../../Partners/Partners";

import StoreItem from "./StoreItem";
import img1 from "./imgs/img1x.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img4.png";
import img4 from "./imgs/img18.png";
import img5 from "./imgs/img8.png";
import img6 from "./imgs/img24.png";
import img7 from "./imgs/m1.png";
import img8 from "./imgs/img5.png";
import img9 from "./imgs/m4.png";
import img10 from "./imgs/s1.png";
import img11 from "./imgs/s3.png";
import img12 from "./imgs/s4.png";
import { FaMobileAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
const Store = () => {
  // Tableau d'objets contenant les données de chaque carte
  const items = [
    {
      id: 1,
      name: "Book",
      price: 10.99,
      imgUrl: img1
    },
    {
      id: 2,
      name: "Computer",
      price: 1199,
      imgUrl: img2,
    },
    {
      id: 3,
      name: "Banana",
      price: 1.05,
      imgUrl: img3,
    },
    {
      id: 4,
      name: "Car",
      price: 14000,
      imgUrl: img4,
    },
    {
      id: 5,
      name: "Car",
      price: 14000,
      imgUrl: img5,
    },
    {
      id: 6,
      name: "Car",
      price: 14000,
      imgUrl: img6,
    }
    ,
    {
      id: 7,
      name: "Car",
      price: 14000,
      imgUrl: img7,
    }
    ,
    {
      id: 8,
      name: "Car",
      price: 14000,
      imgUrl: img8,
    }
    ,
    {
      id: 9,
      name: "Car",
      price: 14000,
      imgUrl: img9,
    }
    ,
    {
      id: 10,
      name: "Car",
      price: 14000,
      imgUrl: img10,
    }
    ,
    {
      id: 11,
      name: "Car",
      price: 14000,
      imgUrl: img11,
    }
    ,
    {
      id: 12,
      name: "Car",
      price: 14000,
      imgUrl: img12,
    }
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

  return (
    <>
    <div className="container" >
      <Row md={2} xs={1} lg={3} className="g-3">
       
        {items.map(item => (
          <Col key={item.id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          </Col>
        ))}
      </Row>
              
    </div>
    
  

    </>
  );
};

export default Store;

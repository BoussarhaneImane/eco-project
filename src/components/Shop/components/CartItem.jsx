import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
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
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id, quantity }) => {
  const storeItems= [
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

  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
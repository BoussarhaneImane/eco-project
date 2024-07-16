import React from "react";
import {  Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import './style.css';
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="store-item">
    <Card className="h-100 w-60">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height:"180px",width:"160px" ,padding:'20px' }}
        className="ms-10"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="ms-2"></span>
          <span className="mr-16 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className=" w-32 cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 bg-green-800 text-white ml-10 text-sm" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <span  style={{ fontSize:'30px',cursor:'pointer'}} onClick={() => decreaseCartQuantity(id)}>-</span>
                <div>
                  <span className="text-xs">{quantity} in cart</span>
                </div>
                <span  style={{ fontSize:'30px',cursor:'pointer'}} onClick={() => increaseCartQuantity(id)}>+</span>
              </div>
              <button
             className=" cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 bg-gray-400 text-white text-sm"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default StoreItem;

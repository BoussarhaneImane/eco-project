import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../context/ShoppingCartContext";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white mb-3">
      <Container>
        <Nav className="me-auto">
          
        </Nav>
        {cartQuantity > 0 && (
          <button
            style={{ width: "3rem", height: "3rem", position: "relative" , border:" 2px solid green"  }}
          
            className="rounded-circle bg-white text-green-700"
            onClick={openCart}
          >
           <MdOutlineShoppingCart size={30} className="ms-2"/>
            <div
              className="rounded-circle bg-red-600 d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;

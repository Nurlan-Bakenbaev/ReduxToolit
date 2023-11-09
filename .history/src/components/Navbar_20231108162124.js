import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  console.log(useSelector((store) => store.cart.cartI));
  return (
    <nav className="nav-center">
      <h3> Redux Toolkit</h3>
      <div className="nav-container">
        <AiOutlineShoppingCart />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

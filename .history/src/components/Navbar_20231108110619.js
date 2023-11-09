import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <h3> Redux Toolkit</h3>
      <span>
        <span>{</span>
        <AiOutlineShoppingCart />
      </span>
    </nav>
  );
};
export default Navbar;

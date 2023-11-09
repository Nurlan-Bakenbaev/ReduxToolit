import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector} from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="">
      <h3> Redux Toolkit</h3>
      <span>
        <span>{amount}</span>
        <AiOutlineShoppingCart />
      </span>
    </nav>
  );
};
export default Navbar;

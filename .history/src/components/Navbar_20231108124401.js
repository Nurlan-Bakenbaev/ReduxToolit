import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector} from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="nav-center">
      <h3> Redux Toolkit</h3>
      <div className="nav-container">
        <span>{amount}</span>
        <AiOutlineShoppingCart />y
      </div>
    </nav>
  );
};
export default Navbar;

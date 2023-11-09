import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector} from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="nav-center">
      <h3> Redux Toolkit</h3>
      <div className="">
        <span>{amount}</span>
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};
export default Navbar;

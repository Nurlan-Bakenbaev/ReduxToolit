import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UseSelector } from "react-redux/es/hooks/useSelector"
;
const Navbar = () => {
  return (
    <nav>
      <h3> Redux Toolkit</h3>
      <span>
        <span></span>
        <AiOutlineShoppingCart />
      </span>
    </nav>
  );
};
export default Navbar;

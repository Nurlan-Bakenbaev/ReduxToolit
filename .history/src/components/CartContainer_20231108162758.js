import React from "react";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";
useSelector
const CartContainer = () => {
  return (
    <div>
      <Cartitem />
    </div>
  );
};

export default CartContainer;

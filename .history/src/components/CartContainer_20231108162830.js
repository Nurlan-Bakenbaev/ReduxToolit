import React from "react";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";

const CartContainer = () => {
    const {cartitem,total,amount}
  return (
    <div>
      <Cartitem />
    </div>
  );
};

export default CartContainer;

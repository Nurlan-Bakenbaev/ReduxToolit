import React from "react";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartitem, total, amount } = useSelector((state) => state.cart);
  if(amount < 1){
    return
  }
  
  return (
    <div>
      <Cartitem />
    </div>
  );
};

export default CartContainer;

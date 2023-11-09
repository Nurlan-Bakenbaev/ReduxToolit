import React from "react";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartitem, total, amount } = useSelector((state) => state.cart);
  if(amount < 1){
    return <section className="cart">
        <header>
            <h2>Your Bag </h2>
            <h4> </h4>
        </header>
    </section>
  }
  
  return (
    <div>
      <Cartitem />
    </div>
  );
};

export default CartContainer;

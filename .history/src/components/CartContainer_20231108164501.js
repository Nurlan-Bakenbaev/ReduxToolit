import React from "react";
import { useSelector } from "react-redux";
import Cartitem

const CartContainer = () => {
  const { cartitem, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag </h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      {cartItems.map((item)=>(
        <Cartitem/>
      )) }
    </section>
  );
};

export default CartContainer;

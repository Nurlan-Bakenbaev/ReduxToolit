import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartitem from "./Cartitem";
import { openModal } from "../redux/features/modalSlice";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
      {cartItems?.map((item) => (
        <Cartitem key={item.id} {...item} />
      ))}
      <footer>
        <div className="cart-total">
          <h4>
            total:<span>${total.toFixed(2)} </span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

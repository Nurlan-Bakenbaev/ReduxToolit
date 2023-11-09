import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  deleteOneItem,
  addItem,
  subsractItem,
} from "../redux/features/cartSlice";
import { useDispatch} from "react-redux";
const Cartitem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title} </h4>
        <h4 className="item-price">${price} </h4>
        <button
          onClick={() => dispatch(deleteOneItem(id))}
          className="remove-btn"
        >
          remove
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(addItem(id))} className="amount-btn">
          <AiOutlineUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => dispatch(subsractItem(id))}
          className="amount-btn"
        >
          <AiOutlineDown />
        </button>
      </div>
    </article>
  );
};
export default Cartitem;

import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const Cartitem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
     <img src={img} alt={title}/>
    <div>
      <h4>{title} </h4>
      <h4 className="item-price"> </h4>

    </div>
    </article>
  );
};
export default Cartitem;

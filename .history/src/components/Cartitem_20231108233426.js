import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const Cartitem = ({ id, img, title, price, amount }) => {
  return (
    <article>
     <img src={img} alt={title}/>
    </article>
  );
};
export default Cartitem;

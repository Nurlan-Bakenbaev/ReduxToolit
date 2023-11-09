import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const Cartitem = ({ id, img, title, price, amount }) => {
  return (
    <article>
     <img src={img} alt/>
    </article>
  );
};
export default Cartitem;

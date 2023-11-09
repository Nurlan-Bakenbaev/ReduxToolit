import React from "react";
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai";
const Cartitem = ({id,img,title,price,amount}) => {
  return (
    <div>
      <AiOutlineDown />
      <AiOutlineUp />

    </div>
  );
};
export default Cartitem;

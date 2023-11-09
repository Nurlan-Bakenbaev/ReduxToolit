import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/features/modalSlice";
import { clearCart } from "../redux/features/cartSlice";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div style={{ position: "relative" }} className="modal">
        <button
          className="btn cancel-btn"
          onClick={() => dispatch(openModal())}
          style={{
            padding: "5px",
            position: "absolute",
            top: "-35px",
            right: "10px",
          }}
        >
          X
        </button>
        <h4>Do you want to remove all the items? </h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
            className="btn confirm-btn"
            type="button"
          >
            Confirm
          </button>
          <button
            onClick={() => dispatch(openModal())}
            className=" btn clear-btn"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;

import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/features/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Do you want to remove all the items? </h4>
        <div className="btn-container">
          <button className="btn confirm-btn" type="button">
            Confirm
          </button>
          <button
            onClick={() => dispatch(openModal())}
            className="btn clear-btn"
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

import Navbar from "./components/Navbar";
import { calculateNewValue } from "./redux/features/cartSlice";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateNewValue());
  }, [cartItems]);
  return (
    <div>
      <Modal />
      <Navbar />
      <CartContainer />
    </div>
  );
}
export default App;

import Navbar from "./components/Navbar";
import { calculateNewValue, getCartItems } from "./redux/features/cartSlice";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateNewValue());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  if (isLoading) {
    return <div className="loading"><h1>Loading...</h1></div>;
  }
  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}
export default App;

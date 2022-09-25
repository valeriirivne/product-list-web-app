import './modal.styles.css';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = ({ cartItem }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.cart.isModalOpen);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const { name, count } = cartItems;

  const closeModal = () => {
    dispatch({ type: 'cart/SET_IS_MODEL_OPEN', payload: !isModalOpen });
  };

  const removeItemHandler = () => {
    dispatch({
      type: 'cart/SET_CART_ITEMS',
      payload: { ...cartItems, count: count - 1 },
    });
  };

  const addItemHandler = () => {
    dispatch({
      type: 'cart/SET_CART_ITEMS',
      payload: { ...cartItems, count: count + 1 },
    });
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal">
          <div className="title-quantity-flex">
            <div>{name}</div>
            <span className="quantity">
              <div className="arrow" onClick={removeItemHandler}>
                &#10094;
              </div>
              <span className="value">{count}</span>
              <div className="arrow" onClick={addItemHandler}>
                &#10095;
              </div>
            </span>
          </div>
          <button onClick={closeModal}>Confirm</button>
          <button className="close" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

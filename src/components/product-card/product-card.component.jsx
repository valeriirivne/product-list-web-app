import './product-card.styles.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Modal } from '../modal/modal.component';

export const ProductCard = (props) => {
  // const product = props.product;
  const { product } = props;
  const { imageUrl, name } = product;

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.cart.isModalOpen);

  const addProductToCart = () => {
    dispatch({ type: 'cart/SET_CART_ITEMS', payload: product });
    dispatch({ type: 'cart/SET_IS_MODEL_OPEN', payload: !isModalOpen });
    // dispatch({ type: 'cart/SET_IS_MODEL_OPEN', payload: product });
  };

  const deleteProductFromCart = () => {
    dispatch({ type: 'cart/SET_CART_ITEMS', payload: null });
    alert('You successfully deleted cart from the shopping cart!!!');
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="hat" />
      <span className="name">{name}</span>
      <button className="add-button" onClick={addProductToCart}>
        Add to card
      </button>
      <button className="remove-button" onClick={deleteProductFromCart}>
        Delete card from shopping list
      </button>
      {isModalOpen && <Modal cartItem={product} />}
    </div>
  );
};

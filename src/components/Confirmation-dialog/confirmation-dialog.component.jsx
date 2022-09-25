import { useDispatch, useSelector } from 'react-redux';

export const ConfirmationDialog = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.cart.isModalOpen);
  const closeModal = () => {
    dispatch({ type: 'cart/SET_IS_MODEL_OPEN', payload: !isModalOpen });
  };

  return (
    <div>
      <div>Are you sure</div>
      <button>NO</button>
      <button onClick={closeModal}>YES</button>
    </div>
  );
};

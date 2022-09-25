export const CART_INITIAL_STATE = {
  isModalOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case 'cart/SET_CART_ITEMS':
      return {
        ...state,
        cartItems: payload,
      };
    case 'cart/SET_IS_MODEL_OPEN':
      return {
        ...state,
        isModalOpen: payload,
      };
    default:
      return state;
  }
};

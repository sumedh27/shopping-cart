const initProducts = (state, products) => {
  return { ...state, products };
};

const productExistInCart = (state, { targetId }) => {
  return [...state.cart].some((product) => product.id === targetId);
};

const incrementProduct = (state, payload) => {
  const { targetId, targetQuantity } = payload;

  const copiedArr = [...state.cart];
  const updatedArr = copiedArr.map((product) => {
    const { quantity } = product;

    if (product.id === targetId) {
      return { ...product, quantity: quantity + (targetQuantity || 1) };
    }

    return product;
  });
  return { ...state, cart: updatedArr };
};

const decrementProduct = (state, { targetId }) => {
  const copiedArr = [...state.cart];
  const updatedArr = copiedArr.map((product) => {
    const { quantity } = product;

    if (product.id === targetId) {
      return { ...product, quantity: quantity - 1 };
    }

    return product;
  });

  return { ...state, cart: updatedArr };
};

const getItemFromProducts = (state, { targetId }) => {
  const copiedArr = [...state.products];
  return copiedArr.filter((item) => targetId === item.id)[0];
};

const addObjToCart = (state, { cartObj, quantity }) => {
  const cartObjWithQuantity = { ...cartObj, quantity };
  const copiedArr = [...state.cart];
  return { ...state, cart: [...copiedArr, cartObjWithQuantity] };
};

const addProductToCart = (state, { targetId, targetQuantity }) => {
  const product = getItemFromProducts(state, { targetId });

  if (!product) return;

  const productCheck = productExistInCart(state, { targetId });

  if (productCheck) {
    return incrementProduct(state, { targetId, targetQuantity });
  } else {
    const { title, price, image, id } = product;
    const cartObj = { title, price, image, id };
    return addObjToCart(state, { cartObj, quantity: targetQuantity });
  }
};

const deleteProductFromCart = (state, { targetId }) => {
  const copiedArr = [...state.cart];
  const updatedArr = copiedArr.filter((product) => product.id !== targetId);
  return { ...state, cart: updatedArr };
};

export function stateReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "INIT_PRODUCTS": {
      return initProducts(state, payload);
    }
    case "ADD_TO_CART": {
      return addProductToCart(state, payload);
    }
    case "DELETE_FROM_CART": {
      return deleteProductFromCart(state, payload);
    }
    case "DECREMENT_FROM_CART": {
      return decrementProduct(state, payload);
    }
    case "RESET_CART": {
      return { ...state, cart: [] };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

const initProducts = (state, products) => {
  return { ...state, products };
};

export function stateReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "INIT_PRODUCTS": {
      return initProducts(state, payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

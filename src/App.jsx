import { useCallback, useEffect, useReducer, useState } from "react";
import { stateReducer } from "./utils/stateReducer.js";
import useFetchGetReq from "./hooks/useFetchGetReq.jsx";
import Header from "./components/Header/Header.jsx";
import Page from "./route/Page.jsx";

export default function App() {
  const initialState = { products: [], cart: [] };
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [filterItems, setFilterItems] = useState({
    methods: {
      search: "",
      category: "",
    },
    prevMethod: {
      type: "search",
    },
  });
  const { products, isLoading, error } = useFetchGetReq();

  useEffect(() => {
    if (!isLoading && products) {
      dispatch({ type: "INIT_PRODUCTS", payload: products });
    }
  }, [isLoading, products]);

  const handleFilterItems = useCallback(({ type, value }) => {
    setFilterItems((filterItems) => {
      const prevMethod = filterItems.prevMethod.type;
      const prevValue = filterItems.methods[type];

      const isMethodChange = !(type === prevMethod);
      const isValueChange = !(value === prevValue);

      const anyValueChanged = isMethodChange || isValueChange;
      if (!anyValueChanged) return filterItems;

      return {
        ...filterItems,
        methods: {
          ...filterItems.methods,
          [type]: value,
        },
        prevMethod: {
          type,
        },
      };
    });
  }, []);

  const addToCart = useCallback((payload) => {
    return dispatch({ type: "ADD_TO_CART", payload });
  }, []);

  const deleteFromCart = useCallback(
    (payload) => dispatch({ type: "DELETE_FROM_CART", payload }),
    [],
  );

  const decrementFromCart = useCallback(
    (payload) => dispatch({ type: "DECREMENT_FROM_CART", payload }),
    [],
  );

  const resetCart = useCallback(() => {
    dispatch({ type: "RESET_CART" });
  }, []);

  const propsForPages = {
    products: state.products,
    cart: state.cart,
    filterItemsMethods: filterItems.methods,
    addToCart,
    deleteFromCart,
    decrementFromCart,
    resetCart,
    isLoading,
    error,
    handleFilterItems,
  };

  return (
    <>
      <Header cart={state.cart} />
      <Page {...propsForPages} />
    </>
  );
}

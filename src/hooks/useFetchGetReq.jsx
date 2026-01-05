import { useEffect, useReducer } from "react";

function productsReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "error": {
      return { ...state, isLoading: false, error: payload.err };
    }
    case "success": {
      return { ...state, isLoading: false, products: payload.data };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

function useFetchGetReq() {
  const [state, dispatch] = useReducer(productsReducer, {
    isLoading: true,
    products: null,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          headers: {
            "User-Agent": "personnel",
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP error: Status ${res.status}`);
        }

        let data = await res.json();

        dispatch({ type: "success", payload: { data } });
      } catch (err) {
        if (err.name === "AbortError") return;
        dispatch({ type: "error", payload: { err } });
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return state;
}

export default useFetchGetReq;

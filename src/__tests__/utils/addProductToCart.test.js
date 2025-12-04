import { beforeEach, describe, expect, test, vi } from "vitest";
import addProductToCart from "../../utils/addProductToCart";
import products from "../../utils/dummyProducts";

const productDummy = vi.mock("../dummyProducts", () => ({
  default: [
    { id: 1, title: "Test 1", price: 300 },
    { id: 2, title: "Test 2", price: 1000 },
  ],
}));

describe("Function is working?", () => {
  let setMock;

  beforeEach(() => {
    let cartState = [];
    setMock = vi.fn((fn) => {
      cartState = fn(cartState);
      return cartState;
    });
    vi.clearAllMocks();
  });

  test("add a product with quantity to the empty cart", () => {
    addProductToCart(setMock, productDummy, 1, 5);

    expect(setMock).toHaveBeenCalledOnce();

    const result = setMock.mock.results.at(0).value;

    const product = products.find((product) => product.id === 1);

    expect(result).toEqual([{ ...product, quantity: 5 }]);
  });

  test("don't add a product if the product id is not in the list", () => {
    addProductToCart(setMock, productDummy, 10, 10);

    expect(setMock).not.toHaveBeenCalledOnce();
  });

  test("add two products in the cart", () => {
    addProductToCart(setMock, productDummy, 1, 10);
    addProductToCart(setMock, productDummy, 2, 10);

    expect(setMock).toHaveBeenCalledTimes(2);

    const cart = setMock.mock.results.at(1).value;
    expect(cart).toHaveLength(2);
  });

  test("update quantity on adding same product to the cart", () => {
    addProductToCart(setMock, productDummy, 1, 10);
    addProductToCart(setMock, productDummy, 2, 3);
    addProductToCart(setMock, productDummy, 2, 7);

    const cart = setMock.mock.results.at(2).value;

    expect(cart).toHaveLength(2);
    expect(cart[1].quantity).toEqual(10);
  });
});

import { beforeEach, describe, expect, test, vi } from "vitest";
import deleteProduct from "../../utils/deleteProduct";

describe("Delete Function working?", () => {
  let setMock;

  beforeEach(() => {
    let cartState = [
      { id: 1, title: "Test 1", quantity: 5 },
      { id: 2, title: "Test 2", quantity: 10 },
      { id: 3, title: "Test 3", quantity: 3 },
      { id: 4, title: "Test 4", quantity: 4 },
    ];

    setMock = vi.fn((fn) => {
      cartState = fn(cartState);
      return cartState;
    });
    vi.clearAllMocks();
  });

  test("deletes a product with given id", () => {
    deleteProduct(setMock, 3);

    expect(setMock).toHaveBeenCalledOnce();

    const cart = setMock.mock.results.at(0).value;
    expect(cart.length).toEqual(3);
  });

  test("Cart stays same for invalid id", () => {
    deleteProduct(setMock, 67);

    expect(setMock).toHaveBeenCalledOnce();

    const cart = setMock.mock.results.at(0).value;

    expect(cart.length).toEqual(4);
  });
});

import { beforeEach, describe, expect, test, vi } from "vitest";
import updateQuantity from "../../utils/updateQuantity";

describe("update works?", () => {
  let setMock;

  beforeEach(() => {
    let setCart = [
      { id: 1, title: "Test 1", quantity: 5 },
      { id: 2, title: "Test 2", quantity: 1 },
      { id: 3, title: "Test 3", quantity: 11 },
    ];
    setMock = vi.fn((fn) => {
      setCart = fn(setCart);
      return setCart;
    });
  });

  test("cart quantity of valid id gets updated", () => {
    updateQuantity(setMock, 1, 3);

    expect(setMock).toHaveBeenCalledOnce();
    const result = setMock.mock.results.at(0).value;
    expect(result[0].quantity).toEqual(3);
  });

  test("cart quantity of invalid id doesn't update", () => {
    const validCart = [
      { id: 1, title: "Test 1", quantity: 5 },
      { id: 2, title: "Test 2", quantity: 1 },
      { id: 3, title: "Test 3", quantity: 11 },
    ];
    updateQuantity(setMock, 10, 3);

    expect(setMock).toHaveBeenCalledOnce();
    const result = setMock.mock.results.at(0).value;
    expect(result).toEqual(validCart);
  });
});

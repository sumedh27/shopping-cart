import { describe, expect, it, vi } from "vitest";
import addProductToCart from "../addProductToCart";
import products from "../dummyProducts";

vi.mock("../dummyProducts", () => ({
  default: [
    { id: 1, title: "Test 1", price: 300 },
    { id: 2, title: "Test 2", price: 1000 },
  ],
}));

describe("Function is working?", () => {
  it("add a product with quantity to the empty cart", () => {
    const setter = vi.fn((fn) => fn([]));

    addProductToCart(setter, 1, 5);

    expect(setter).toHaveBeenCalledOnce();

    const result = setter.mock.results[0].value;

    console.log(result);

    const product = products.find((p) => p.id === 1);
    expect(result).toEqual([{ ...product, quantity: 5 }]);
  });
});

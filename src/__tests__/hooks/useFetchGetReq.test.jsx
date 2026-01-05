import { renderHook, waitFor } from "@testing-library/react";
import useFetchGetReq from "../../hooks/useFetchGetReq";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

describe("init", () => {
  it("should return the initial values for data, error and loading", async () => {
    const { result } = renderHook(() => useFetchGetReq());
    const { isLoading, error, products } = result.current;

    expect(isLoading).toBe(true);
    expect(error).toBe(null);
    expect(products).toBe(null);
  });
});

describe("success", () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch");

  beforeAll(() => {
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve([
            {
              id: 1,
              title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              price: 109.95,
              description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
              category: "men's clothing",
              image:
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
              rating: {
                rate: 3.9,
                count: 120,
              },
            },
          ])
        ),
    };
    fetchSpy.mockReturnValue(mockResolveValue);
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });

  it("should fetch products", async () => {
    const { result } = renderHook(() => useFetchGetReq());

    expect(result.current.isLoading).toEqual(true);
    await waitFor(() => expect(result.current.products.length).toEqual(1));
    expect(result.current.isLoading).toEqual(false);
  });
});

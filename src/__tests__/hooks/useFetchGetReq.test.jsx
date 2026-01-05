import { renderHook, waitFor } from "@testing-library/react";
import useFetchGetReq from "../../hooks/useFetchGetReq";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("init", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(
      () => new Promise(() => {}) // never resolves
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should return the initial values for data, error and loading", async () => {
    const { result } = renderHook(() => useFetchGetReq());
    const { isLoading, error, products } = result.current;

    expect(isLoading).toBe(true);
    expect(error).toBe(null);
    expect(products).toBe(null);
  });
});

describe("success", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
              "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
            rating: {
              rate: 3.9,
              count: 120,
            },
          },
        ]),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should initially return true and then false", async () => {
    const { result } = renderHook(() => useFetchGetReq());
    const { isLoading } = result.current;
    expect(isLoading).toBe(true);

    await waitFor(() => {
      const { isLoading } = result.current;

      expect(isLoading).toBe(false);
    });
  });

  it("should fetch products", async () => {
    const { result } = renderHook(() => useFetchGetReq());

    expect(result.current.isLoading).toEqual(true);
    await waitFor(() => expect(result.current.products.length).toEqual(1));
    expect(result.current.isLoading).toEqual(false);
  });
});

describe("error", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: () => Promise.resolve({ message: "Bad Request" }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("show error message", async () => {
    const { result } = renderHook(() => useFetchGetReq());

    await waitFor(() => {
      expect(result.current.error).toBe("Bad Request");
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("catch error", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("Network error"));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("sets error when fetch throws", async () => {
    const { result } = renderHook(() => useFetchGetReq());

    await waitFor(() => {
      expect(result.current.error).toBe("Network error");
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.products).toBe(null);
  });
});

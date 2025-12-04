import { renderHook, waitFor } from "@testing-library/react";
import useFetchGetReq from "../../hooks/useFetchGetReq";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("useFetchGetReq", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("initial with loading", () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
    );

    const { result } = renderHook(() => useFetchGetReq());

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(true);
  });

  test("return data correctly", async () => {
    const mockData = { id: 1, title: "test 1" };
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({ ok: true, json: () => Promise.resolve(mockData) })
    );

    const { result } = renderHook(() => useFetchGetReq());

    await waitFor(() => {
      expect(result.current.data).toBe(mockData);
    });

    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
  });

  test("return error", async () => {
    globalThis.fetch = vi.fn(() => Promise.reject(new Error("error")));

    const { result } = renderHook(() => useFetchGetReq());

    await waitFor(() => {
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe("error");
      expect(result.current.loading).toBe(false);
    });
  });
});

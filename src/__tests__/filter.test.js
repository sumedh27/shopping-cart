import { beforeEach, describe, expect, test } from "vitest";

function filterMethod(prev, { type, value }) {
  const prevMethod = prev.prevMethod.type;
  const prevValue = prev.methods[type];

  const isMethodChange = !(type === prevMethod);
  const isValueChange = !(value === prevValue);

  const anyValueChanged = isMethodChange || isValueChange;
  if (!anyValueChanged) return prev;

  return {
    ...prev,
    methods: {
      ...prev.methods,
      [type]: value,
    },
    prevMethod: {
      type,
    },
  };
}

describe("Filter State Change", () => {
  let prev;
  beforeEach(() => {
    prev = {
      methods: { search: "", category: "" },
      prevMethod: { type: "search" },
    };
  });

  test("does not update on same input", () => {
    const input = filterMethod(prev, { type: "search", value: "" });

    expect(input).toBe(prev);
  });

  test("same method diff val", () => {
    const input = filterMethod(prev, { type: "search", value: "test" });
    expect(input).not.toBe(prev);
    expect(input.methods.search).toBe("test");
  });

  test("diff method diff val", () => {
    const input = filterMethod(prev, { type: "category", value: "shirts" });
    expect(input).not.toBe(prev);
    expect(input.methods.category).toBe("shirts");
  });
});

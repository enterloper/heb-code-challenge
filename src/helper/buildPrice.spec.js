import buildPrice from "./buildPrice";

describe("buildPrice", () => {
  it("should return a string", () => {
    const output = buildPrice(9.99);
    expect(typeof output).toBe("string");
  });
});

const StringCalculator = require("./index");
describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });
  test("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
  test("returns the number itself if only one number", () => {
    expect(calculator.add("5")).toBe(5);
  });
  test("returns sum of two comma-separated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });
  test("handles an unknown amount of numbers", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });
  test("handles spaces as delimiters", () => {
    expect(calculator.add("1 2 3")).toBe(6);
  });
  test("handles new lines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  test("supports custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });
  test("throws error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow(
      "Negatives not allowed: -2, -4"
    );
  });
  test("ignores numbers greater than 1000", () => {
    expect(calculator.add("2,1001,3")).toBe(5);
  });
});

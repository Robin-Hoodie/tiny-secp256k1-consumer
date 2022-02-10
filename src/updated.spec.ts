import { testFn } from "./original";

it("should not crash", () => {
  expect(testFn()).toBe(false);
});

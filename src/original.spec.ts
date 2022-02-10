import { testFn } from "./updated";

it("should not crash", () => {
  expect(testFn()).toBe(false);
});

import { C } from "./index";

describe("class C", (): void => {
  it("should have x as 10", (): void => {
    expect(new C().getX()).toBe(10);
  });
});

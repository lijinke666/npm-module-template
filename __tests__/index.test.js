/*eslint-disable */
import assert from "power-assert";
import helloWorld from "../src";

describe("Tests", () => {
  it("should return true", () => {
    assert(helloWorld() === true);
  });
});

import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const result = register("abc", "123456");
    await expect(result).resolves.toEqual({ mock: "post" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const result = register("abc", "123");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});

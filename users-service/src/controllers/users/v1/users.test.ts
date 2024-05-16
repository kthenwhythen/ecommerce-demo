import { describe, expect, it } from "bun:test";
import { usersV1Controller } from "./users";

const path = "http://localhost/v1";

describe("[USERS V1]", () => {
  const app = usersV1Controller();

  describe("[GET /users]", () => {
    it("get list of users", async () => {
      const response = await app
        .handle(new Request(path + "/users", { method: "GET" }))
        .then((res) => res.text());
      expect(response).toBe("list of users");
    });
  });

  describe("[GET /users/:id]", () => {
    it("get user 1", async () => {
      const response = await app
        .handle(new Request(path + "/users/1", { method: "GET" }))
        .then((res) => res.text());
      expect(response).toBe("Hello 1");
    });
  });

  describe("[POST /users/:id]", () => {});

  describe("[PUT /users/:id]", () => {});

  describe("[DELETE /users/:id]", () => {});
});

import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello from user-service").listen(3001);

console.log(
  `user-service is running at ${app.server?.hostname}:${app.server?.port}`,
);

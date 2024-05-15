import { Elysia } from "elysia";

const plugin = new Elysia().onError(({ code }) => {
  if (code === "NOT_FOUND") return "Route not found :(";
});

export { plugin as errorHandlerPlugin };

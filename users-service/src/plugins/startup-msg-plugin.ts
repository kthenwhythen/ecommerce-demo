import { Elysia } from "elysia";

const plugin = new Elysia();

console.log(
  `[${plugin.server?.hostname}] Starting up on port ${plugin.server?.port}...}`,
);

export { plugin as startupMsgPlugin };

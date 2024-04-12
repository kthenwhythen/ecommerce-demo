import { Elysia } from "elysia";

export const usersV1Controller = (
  { version }: { version: number } = { version: 1 },
) => {
  let controller = new Elysia({ prefix: `v${version}` });

  // Controllers
  controller.get("users", () => "list of users");
  controller.get("users/:id", (ctx) => `Hello ${ctx.params.id}`);
  controller.post("users/:id", (ctx) => `Hello ${ctx.params.id}`);
  controller.put("users/:id", (ctx) => `Hello ${ctx.params.id}`);
  controller.delete("users/:id", (ctx) => `Hello ${ctx.params.id}`);

  controller.get("test", async (ctx) => {
    const db = ctx.store.db;

    try {
      const client = await db.connect();
      const result = await client.query("SELECT * FROM tests");
      const results = { results: result ? result.rows : null };
      client.release();

      return {
        message: "Hello World",
        data: results,
      };
    } catch (err) {
      console.error(err);

      return {
        message: "Hello Error",
        data: err,
      };
    }
  });

  return controller;
};

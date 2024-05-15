import { Elysia } from "elysia";

export const usersV1Controller = (
  { version }: { version: number } = { version: 1 },
) => {
  return (
    new Elysia({ prefix: `/v${version}` })
      // Controllers
      .get("/users", () => "list of users")
      .get("/users/:id", (ctx) => `Hello ${ctx.params.id}`)
      .post("/users/:id", (ctx) => `Hello ${ctx.params.id}`)
      .put("/users/:id", (ctx) => `Hello ${ctx.params.id}`)
      .delete("/users/:id", (ctx) => `Hello ${ctx.params.id}`)
      .get("/test", async (ctx) => {
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
      })
  );
};

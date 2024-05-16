import { Elysia } from "elysia";
import { sequelizePlugin } from "../../../plugins/sequelize-plugin";
import { userModel } from "../../../models/user.model";

export const usersV1Controller = (
  { version }: { version: number } = { version: 1 },
) => {
  return (
    new Elysia({ prefix: `/v${version}` })
      // Services
      .use(sequelizePlugin)
      .use(userModel)

      // Controllers
      .get("/users", () => "list of users")

      .get("/users/:id", (ctx) => `Hello ${ctx.params.id}`)

      .post("/users/:id", (ctx) => `Hello ${ctx.params.id}`)

      .put("/users/:id", (ctx) => `Hello ${ctx.params.id}`)

      .delete("/users/:id", (ctx) => `Hello ${ctx.params.id}`)

      .get("/test", async (ctx) => {
        const sq = ctx.sq;

        try {
          const result = await sq.query("SELECT * FROM users");
          return {
            data: result[0],
          };
        } catch (err) {
          console.error(err);

          return {
            message: "Hello Error",
            data: err,
          };
        }
      })

      .get("/test/create", async (ctx) => {
        const UserModel = ctx.UserModel;

        UserModel.create({
          name: "John Doe",
          email: "lol@mail.com",
          password: "123321",
        });
      })
  );
};

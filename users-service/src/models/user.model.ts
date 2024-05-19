import { DataType } from "sequelize-typescript";
import { Elysia } from "elysia";
import { sequelizePlugin } from "../plugins/sequelize-plugin";

export const userModel = new Elysia()
  // Services
  .use(sequelizePlugin)

  .use(async (ctx) => {
    const sq = ctx.decorator.sq;

    let User = sq.define("user", {
      id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataType.STRING,
      },
      email: {
        type: DataType.STRING,
      },
      password: {
        type: DataType.STRING,
      },
    });

    await User.sync({ force: true });
    console.log("User model created successfully.");

    return ctx.decorate("UserModel", User);
  });

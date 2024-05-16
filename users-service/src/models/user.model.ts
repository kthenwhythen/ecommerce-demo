import { DataTypes } from "sequelize";
import { Elysia } from "elysia";
import { sequelizePlugin } from "../plugins/sequelize-plugin";

let User;

export const userModel = new Elysia()
  // Services

  .use(async (ctx) => {
    const sq = ctx.decorator.sq;

    User = sq.define("user", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    });

    await User.sync({ force: true });
    console.log("User model created successfully.");

    return new Elysia();
  })

  .decorate("UserModel", User);

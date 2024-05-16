import { Elysia } from "elysia";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "users-service-db",
  "users-service-pg",
  "12345",
  {
    host: "users-service-db",
    dialect: "postgres",
    port: 5432,
  },
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const plugin = new Elysia().decorate("sq", sequelize);

export { plugin as sequelizePlugin };

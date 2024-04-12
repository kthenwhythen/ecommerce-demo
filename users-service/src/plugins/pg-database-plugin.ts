import { Elysia } from "elysia";
import { Pool } from "pg";

const plugin = new Elysia();

const pool = new Pool({
  user: "users-service-pg",
  host: "users-service-db",
  database: "users-service-db",
  password: "12345",
  port: 5432,
});

plugin.state("db", pool);

export { plugin as pgDatabasePlugin };

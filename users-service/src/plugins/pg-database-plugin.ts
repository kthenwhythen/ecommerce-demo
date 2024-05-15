import { Elysia } from "elysia";
import { Pool } from "pg";

const pool = new Pool({
  user: "users-service-pg",
  host: "users-service-db",
  database: "users-service-db",
  password: "12345",
  port: 5432,
});

const plugin = new Elysia().state("db", pool);

export { plugin as pgDatabasePlugin };

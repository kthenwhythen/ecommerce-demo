import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { errorHandlerPlugin } from "./plugins/error-handler-plugin";
import { usersV1Controller } from "./controllers/v1/users";
import { pgDatabasePlugin } from "./plugins/pg-database-plugin";
import { startupMsgPlugin } from "./plugins/startup-msg-plugin";
import { Logestic } from "logestic";

const app = new Elysia()
  // Plugins
  .use(swagger())
  .use(Logestic.preset("common"))
  .use(errorHandlerPlugin)
  .use(pgDatabasePlugin)
  .use(startupMsgPlugin)

  // Controllers
  .use(usersV1Controller())

  .listen(80);

export type App = typeof app;

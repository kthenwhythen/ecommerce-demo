import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { errorHandlerPlugin } from "./plugins/error-handler-plugin";
import { startupMsgPlugin } from "./plugins/startup-msg-plugin";
import { Logestic } from "logestic";
import { sequelizePlugin } from "./plugins/sequelize-plugin";
import { userModel } from "./models/user.model";
import { usersV1Controller } from "./controllers/users/v1/users";

const app = new Elysia()
  // Plugins
  .use(swagger())
  .use(Logestic.preset("common"))
  .use(errorHandlerPlugin)
  .use(sequelizePlugin)
  .use(startupMsgPlugin)

  // Models
  .use(userModel)

  // Controllers
  .use(usersV1Controller())

  .listen(80);

export type App = typeof app;

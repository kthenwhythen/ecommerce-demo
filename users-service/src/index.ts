import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { errorHandlerPlugin } from "./plugins/error-handler-plugin";
import { usersV1Controller } from "./controllers/v1/users";
import { pgDatabasePlugin } from "./plugins/pg-database-plugin";

// App
const app = new Elysia();

// Plugins
app.use(swagger());
app.use(errorHandlerPlugin);
app.use(pgDatabasePlugin);
// add logs
// add verison

// Controllers
app.use(usersV1Controller());

app.listen(80);

export type App = typeof app;

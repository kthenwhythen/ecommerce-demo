import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia();

const names = ["Alik", "Lisa"];

app.use(swagger());

app.onError(({ code }) => {
  if (code === "NOT_FOUND") return "Route not found :(";
});

app.get("/", () => "Hello Elysia");
app.get("/hello", () => "Hello World");
app.get("/who", () => `${names[Math.floor(Math.random() * 2)]} is Popa`);
app.get("/hello/:id", (ctx) => `Hello ${ctx.params.id}`);
app.get("/strict/:id", ({ params: { id } }) => id, {
  params: t.Object({
    id: t.Numeric(),
  }),
});
app.get("/id/:id/:name", ({ params: { id, name } }) => id + " " + name);
app.get("/set", ({ set }) => {
  set.status = 418;
  set.headers["Content-Type"] = "text/plain";

  return "hi";
});

app.listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

// app.handle(new Request("http://localhost/")).then(console.log);

export type App = typeof app; // TODO eden on front

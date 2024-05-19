import Elysia from "elysia";

export const plugin = <T extends string>(config: { prefix: T }) =>
  new Elysia({
    seed: config,
  }).get(`${config.prefix}/hi`, () => "Hi");

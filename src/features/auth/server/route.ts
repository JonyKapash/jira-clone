import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";

import { loginSchema } from "../schemas";

const app = new Hono().post("/login", zValidator("json", loginSchema), (c) => {
  return c.json({ success: 1234 });
});

export default app;

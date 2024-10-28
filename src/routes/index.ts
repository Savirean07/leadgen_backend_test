/*import express from "express";
import user from "./user/index";
import path from "path";
import rolesRouter from "./lead-roles";
import fileManager from "./file-manager";
import { EMAIL_MANAGER_ROUTER } from "./email-manager";
import authRouter from "./auth";

export default async (app: express.Application) => {
  app.use("/doc", express.static(path.join(__dirname, "../../public")));
  app.use("/role", rolesRouter);
  app.use("/user", user);
  app.use("/file", fileManager);
  app.use("/mail-manager", EMAIL_MANAGER_ROUTER);
  app.use("/auth", authRouter);
};

export { user };*/

import express from "express";
import user from "./user/index";
import path from "path";
import rolesRouter from "./lead-roles";
import fileManager from "./file-manager";
import { EMAIL_MANAGER_ROUTER } from "./email-manager";
import authRouter from "./auth";

export default (app: express.Application) => {
  app.use("/api/doc", express.static(path.join(__dirname, "../../public")));
  app.use("/api/role", rolesRouter);
  app.use("/api/user", user);
  app.use("/api/file", fileManager);
  app.use("/api/mail-manager", EMAIL_MANAGER_ROUTER);
  app.use("/api/auth", authRouter);

  // Optionally, set up a root /api endpoint to test the API
  app.get("/api", (req, res) => {
    res.send("API is working!");
  });
  
};

import { Router } from "express";
const userRoutes = Router();
import UserController from "../controllers/user-controller";

userRoutes
  .get("/", UserController.getUsers)
  .post("/", UserController.createUser)
  .get("/:id", UserController.getUser)
  .put("/:id", UserController.updateUser)
  .delete("/:id", UserController.deleteUser);

export default userRoutes;

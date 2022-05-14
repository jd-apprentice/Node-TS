import { Router } from "express";
import userRoutes from "./user-route";
const Routes = Router();

Routes.use("/users", userRoutes);

export default Routes;

import { Router } from "express";
const routes = Router();

// CONTROLLERS
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";

routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);

export { routes };

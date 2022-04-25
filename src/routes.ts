import { UpdateCategoryController } from "./controllers/UpdateUserController";
import { Router } from "express";
const routes = Router();

// CONTROLLERS
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";

routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateCategoryController().handle);

export { routes };

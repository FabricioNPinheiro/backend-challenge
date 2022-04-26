import { Router } from "express";
import validate from "../src/middlewares/validator";
const routes = Router();

// USERS //
// Controller
import { CreateUserController } from "./controllers/user/CreateUserController";
import { GetAllUsersController } from "./controllers/user/GetAllUsersController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateCategoryController } from "./controllers/user/UpdateUserController";

// Validations
import createUserValidator from "../src/controllers/user/validators/createUser.validator";

routes.post(
  "/users",
  validate(createUserValidator),
  new CreateUserController().handle
);
routes.get("/users", new GetAllUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateCategoryController().handle);

export { routes };

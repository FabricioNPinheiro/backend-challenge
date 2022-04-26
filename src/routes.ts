import { Router } from "express";
import validate from "../src/middlewares/validator";
const routes = Router();

// USERS //
// Controller
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateCategoryController } from "./controllers/UpdateUserController";

// Validations
import createUserValidator from "./controllers/validators/createUser.validator";

// PRODUCTS //
// Controller
import { CreateProductController } from "./controllers/CreateProductController";

routes.post(
  "/users",
  validate(createUserValidator),
  new CreateUserController().handle
);
routes.get("/users", new GetAllUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateCategoryController().handle);

routes.post("/products", new CreateProductController().handle);

export { routes };

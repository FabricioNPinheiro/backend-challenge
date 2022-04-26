import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/user/UpdateUserService";

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password, phone, type }: any = request.body;

    const service = new UpdateCategoryService();

    const result = await service.execute({
      id,
      name,
      email,
      password,
      phone,
      type,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

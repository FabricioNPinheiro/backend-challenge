import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, code, characteristics, image } = request.body;

    const service = new CreateProductService();

    const result = await service.execute({
      name,
      price,
      code,
      characteristics,
      image,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

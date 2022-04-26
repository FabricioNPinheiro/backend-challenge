import { PrismaClient } from "@prisma/client";
import { Product } from "../entities/Product";

const prisma = new PrismaClient();

export class CreateProductService {
  async execute(data): Promise<Product | Error> {
    const product = await prisma.product.create({
      data: data,
    });

    return product;
  }
}

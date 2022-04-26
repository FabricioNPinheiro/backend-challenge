import { PrismaClient } from "@prisma/client";
import { Product } from "../entities/Product";

const prisma = new PrismaClient();

export class CreateProductService {
  async execute({
    name,
    price,
    code,
    characteristics,
    image,
  }): Promise<Product | Error> {
    if (await prisma.product.findUnique({ where: { code: code } })) {
      return new Error("Product already exists");
    }

    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
        code: code,
        characteristics: characteristics,
        image: image,
      },
    });

    return product;
  }
}

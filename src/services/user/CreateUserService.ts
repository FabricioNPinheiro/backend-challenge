import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";

const prisma = new PrismaClient();

export class CreateUserService {
  async execute({
    name,
    email,
    password,
    phone,
    type,
    address,
  }): Promise<User | Error> {
    if (await prisma.user.findUnique({ where: { email: email } })) {
      return new Error("User already exists");
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        phone: phone,
        type: type,
        address: {
          create: address,
        },
      },
      include: {
        address: true,
      },
    });

    return newUser;
  }
}

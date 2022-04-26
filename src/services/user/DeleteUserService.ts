import { User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class DeleteUserService {
  async execute(id: string) {
    if (!(await prisma.user.findUnique({ where: { id: id } }))) {
      return new Error("User does not exists!");
    }

    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}

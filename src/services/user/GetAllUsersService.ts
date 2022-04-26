import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class GetAllUsersService {
  async execute() {
    const users = prisma.user.findMany();

    const usersMappingResult = (await users).map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        type: user.type,
      };
    });

    return usersMappingResult;
  }
}

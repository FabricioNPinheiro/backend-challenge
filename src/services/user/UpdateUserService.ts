import { User } from "../../entities/User";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UpdateCategoryService {
  async execute({ id, name, email, password, phone, type }) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return new Error("User does not exists!");
    }

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;
    user.phone = phone ? phone : user.phone;
    user.type = type ? type : user.type;

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        type: user.type,
      },
    });

    return updatedUser;
  }
}

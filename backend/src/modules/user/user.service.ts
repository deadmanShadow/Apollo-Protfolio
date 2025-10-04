import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../helpers/AppError";
export class UserService {
  async aboutMe() {
    const userInfo = await prisma.user.findFirst({
      select: {
        name: true,
        email: true,
        picture: true,
        phone: true,
        bio: true,
        skills: true,
        experiences: true,
      },
    });

    return userInfo;
  }

  async updateUser(userId: number, payload: Prisma.UserUpdateInput) {
    if (payload.password) {
      throw new AppError(
        StatusCodes.BAD_REQUEST,
        "Remove password from payload and use specific endpoint for password update"
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: payload,
      select: {
        name: true,
        email: true,
        picture: true,
        phone: true,
        bio: true,
        skills: true,
      },
    });

    return updatedUser;
  }
}

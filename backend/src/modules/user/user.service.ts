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
        experiences: {
          orderBy: { startDate: "desc" },
        },
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

  async dashboard() {
    const totalProject = await prisma.project.count();
    const totalExperience = await prisma.workExperience.count();
    const totalBlogs = await prisma.blog.count();
    const totalPublishedBlog = await prisma.blog.count({
      where: { published: true },
    });

    const totalUnpublishedBlog = await prisma.blog.count({
      where: { published: false },
    });

    const recentBlogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 2,
    });

    return {
      projects: {
        total: totalProject,
      },
      experiences: {
        total: totalExperience,
      },
      blogs: {
        total: totalBlogs,
        published: totalPublishedBlog,
        unpublished: totalUnpublishedBlog,
        recentBlogs,
      },
    };
  }
}

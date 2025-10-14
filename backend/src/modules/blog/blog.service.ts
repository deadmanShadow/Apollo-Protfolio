import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../helpers/AppError";

function parseBoolean(value: any): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    return value.trim().toLowerCase() === "true";
  }
  return Boolean(value);
}

export class BlogService {
  async getAllBlogs(query: Record<string, string>) {
    const where: any = {
      published: query.published && parseBoolean(query?.published),
    };

    const result = await prisma.blog.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      meta: { total: result.length },
      data: result,
    };
  }

  async getSingleBlog(id: number) {
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) throw new AppError(StatusCodes.NOT_FOUND, "Blog not found!");

    //increase view
    await prisma.blog.update({
      where: { id },
      data: { view: { increment: 1 } },
    });

    return blog;
  }

  // create blog
  async createBlog(userId: number, payload: Prisma.BlogCreateWithoutUserInput) {
    const blogData = {
      ...payload,
      userId,
    };

    const blog = await prisma.blog.create({
      data: blogData,
      include: {
        user: {
          select: {
            name: true,
            email: true,
            picture: true,
          },
        },
      },
    });

    return blog;
  }

  //update blog
  async updateBlog(blogId: number, payload: Prisma.BlogUpdateInput) {
    const blog = await prisma.blog.findUnique({ where: { id: blogId } });

    if (!blog) {
      throw new AppError(StatusCodes.NOT_FOUND, "Blog not found!");
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: blog.id },
      data: payload,
    });
    return updatedBlog;
  }

  //delete blog
  async deleteBlog(blogId: number) {
    const blog = await prisma.blog.findUnique({ where: { id: blogId } });

    if (!blog) {
      throw new AppError(StatusCodes.NOT_FOUND, "Blog not found!");
    }

    await prisma.blog.delete({
      where: { id: blog.id },
    });

    return null;
  }
}

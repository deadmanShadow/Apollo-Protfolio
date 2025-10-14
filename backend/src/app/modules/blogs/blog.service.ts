import { prisma } from "../../../config/db";

const createBlog = async (payload: any) => {
  console.log("Payload received:", payload);

  if (!payload || Object.keys(payload).length === 0) {
    throw new Error("Blog data is required");
  }

  return await prisma.blog.create({
    data: payload,
  });
};

const getAllBlogs = async () => {
  return await prisma.blog.findMany();
};

const getSingleBlog = async (id: number) => {
  return await prisma.blog.findUnique({
    where: { id },
  });
};

const updateBlog = async (id: number, payload: any) => {
  return await prisma.blog.update({
    where: { id },
    data: payload,
  });
};

const deleteBlog = async (id: number) => {
  return await prisma.blog.delete({
    where: { id },
  });
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};

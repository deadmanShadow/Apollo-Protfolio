import { prisma } from "../../../config/db";

const createExperience = async (payload: any) => {
  return await prisma.workExperience.create({
    data: payload,
  });
};

const getAllExperiences = async () => {
  return await prisma.workExperience.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
};

const getSingleExperience = async (id: number) => {
  return await prisma.workExperience.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
};

const updateExperience = async (id: number, payload: any) => {
  return await prisma.workExperience.update({
    where: { id },
    data: payload,
  });
};

const deleteExperience = async (id: number) => {
  return await prisma.workExperience.delete({
    where: { id },
  });
};

export const ExperienceService = {
  createExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};

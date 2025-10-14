import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../helpers/AppError";

export class ExperienceService {
  async create(
    userId: number,
    payload: Prisma.WorkExperienceCreateWithoutUserInput
  ) {
    const experienceData = {
      ...payload,
      userId,
    };

    const result = await prisma.workExperience.create({ data: experienceData });
    return result;
  }

  //get single experience
  async getSingleExperience(id: number) {
    const experience = await prisma.workExperience.findUnique({
      where: { id },
    });
    if (!experience)
      throw new AppError(StatusCodes.NOT_FOUND, "Experience not found!");

    return experience;
  }
  //get all experience
  async getAllExperiences() {
    const experiences = await prisma.workExperience.findMany({
      orderBy: { startDate: "desc" },
    });

    return {
      data: experiences,
      meta: {
        total: experiences.length,
      },
    };
  }

  //update
  async updateExperience(
    id: number,
    payload: Prisma.WorkExperienceUpdateInput
  ) {
    const experience = await prisma.workExperience.findUnique({
      where: { id },
    });
    if (!experience)
      throw new AppError(StatusCodes.NOT_FOUND, "Experience not found!");

    const updatedData = {
      ...payload,
      endDate: payload.endDate ? payload.endDate : null,
    };
    const updatedExperience = await prisma.workExperience.update({
      where: { id: experience.id },
      data: updatedData,
    });

    return updatedExperience;
  }

  //delete
  async deleteExperience(id: number) {
    const experience = await prisma.workExperience.findUnique({
      where: { id },
    });
    if (!experience)
      throw new AppError(StatusCodes.NOT_FOUND, "Experience not found!");

    await prisma.workExperience.delete({
      where: { id: experience.id },
    });

    return null;
  }
}

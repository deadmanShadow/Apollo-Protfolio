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

    const updatedExperience = await prisma.workExperience.update({
      where: { id: experience.id },
      data: payload,
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

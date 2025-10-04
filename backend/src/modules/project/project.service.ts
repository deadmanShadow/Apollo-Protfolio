import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/db";
import AppError from "../../helpers/AppError";

export class ProjectService {
  //get all projects
  async getAllProjects() {
    const result = await prisma.project.findMany();

    return {
      meta: { total: result.length },
      data: result,
    };
  }

  //get single projects
  async getSinglelProject(projectId: number) {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project)
      throw new AppError(StatusCodes.NOT_FOUND, "Project not found!");

    return project;
  }

  //create project
  async create(userId: number, payload: Prisma.ProjectCreateWithoutUserInput) {
    const projectData = {
      ...payload,
      userId,
    };

    const result = await prisma.project.create({ data: projectData });

    return result;
  }

  //update project
  async updateProject(projectId: number, payload: Prisma.ProjectUpdateInput) {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project)
      throw new AppError(StatusCodes.NOT_FOUND, "Project not found!");

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: payload,
    });

    return updatedProject;
  }

  //delete project
  async deleteProject(projectId: number) {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project)
      throw new AppError(StatusCodes.NOT_FOUND, "Project not found!");

    await prisma.project.delete({
      where: { id: projectId },
    });

    return null;
  }
}

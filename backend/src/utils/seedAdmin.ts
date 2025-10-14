import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "../config/db";
import { envVars } from "../config/env";

export const seedAdmin = async () => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: envVars.SUPER_USER_EMAIL },
    });

    if (user) {
      console.log("Super User already exists!");
      return;
    }

    console.log("Creating Admin.....");

    console.log(envVars.SUPER_USER_PASSWORD, envVars.HASH_SALT_ROUND);
    const hashedPassword = await bcrypt.hash(
      envVars.SUPER_USER_PASSWORD as string,
      Number(envVars.HASH_SALT_ROUND)
    );

    const payload: Prisma.UserCreateInput = {
      name: envVars.SUPER_USER_NAME as string,
      email: envVars.SUPER_USER_EMAIL as string,
      password: hashedPassword,
    };

    const superUser = await prisma.user.create({ data: payload });

    console.log("Super User Created.... \n ");
    console.log(superUser);
  } catch (err) {
    console.log(err);
  }
};

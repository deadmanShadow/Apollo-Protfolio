import dotenv from "dotenv";

dotenv.config({ quiet: true });

const loadEnvVars = () => {
  const requiredVars: string[] = [
    "PORT",
    "DATABASE_URL",
    "NODE_ENV",

    "SUPER_USER_NAME",
    "SUPER_USER_EMAIL",
    "SUPER_USER_PASSWORD",

    "HASH_SALT_ROUND",

    "JWT_SECRET",
    "JWT_ACCESS_TOKEN_EXPIRES",
    "JWT_REFRESH_TOKEN_EXPIRES",

    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ];

  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });

  return Object.assign(
    {},
    ...requiredVars.map((key) => ({
      [key]: process.env[key] as string,
    }))
  );
};

export const env = loadEnvVars();

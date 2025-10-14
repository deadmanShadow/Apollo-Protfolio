import { Response } from "express";
import { envVars } from "../config/env";

interface IAuthTokens {
  accessToken?: string;
  refreshToken?: string;
}

export const setAuthCookies = (res: Response, token: IAuthTokens) => {
  if (token.accessToken) {
    res.cookie("accessToken", token.accessToken, {
      httpOnly: true,
      secure: envVars.NODE_ENV === "production",
      sameSite: envVars.NODE_ENV === "production" ? "none" : "lax",
    });
  }

  if (token.refreshToken) {
    res.cookie("refreshToken", token.refreshToken, {
      httpOnly: true,
      secure: envVars.NODE_ENV === "production",
      sameSite: envVars.NODE_ENV === "production" ? "none" : "lax",
    });
  }
};

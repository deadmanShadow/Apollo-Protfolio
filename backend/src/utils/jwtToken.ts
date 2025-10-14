import jwt from "jsonwebtoken";

// export const generateToken = (
//   payload: JwtPayload,
//   secret: string,
//   expiresIn: string | number | undefined
// ) => {
//   const token = jwt.sign(payload, secret, { expiresIn });

//   return token;
// };

export const verifyToken = (token: string, secret: string) => {
  const verifiedToken = jwt.verify(token, secret);
  return verifiedToken;
};

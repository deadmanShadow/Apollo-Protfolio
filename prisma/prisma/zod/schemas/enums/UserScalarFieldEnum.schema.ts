import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'picture', 'password', 'phone', 'bio', 'skills', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;
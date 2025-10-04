import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'title', 'thumbnail', 'projectLink', 'liveSite', 'description', 'features', 'userId'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;
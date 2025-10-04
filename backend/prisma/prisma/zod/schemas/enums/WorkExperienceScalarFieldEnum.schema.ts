import * as z from 'zod';

export const WorkExperienceScalarFieldEnumSchema = z.enum(['id', 'company', 'position', 'startDate', 'endDate', 'userId'])

export type WorkExperienceScalarFieldEnum = z.infer<typeof WorkExperienceScalarFieldEnumSchema>;
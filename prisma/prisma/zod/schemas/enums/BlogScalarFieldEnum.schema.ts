import * as z from 'zod';

export const BlogScalarFieldEnumSchema = z.enum(['id', 'title', 'content', 'view', 'published', 'createdAt', 'updatedAt', 'userId'])

export type BlogScalarFieldEnum = z.infer<typeof BlogScalarFieldEnumSchema>;
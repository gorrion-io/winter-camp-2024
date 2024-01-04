import { z } from 'zod';

export const crewMemberSchema = z.object({
    fullName: z.string(),
    nationality: z.string(),
    age: z.number().min(30).max(40),
    profession: z.string(),
});

export type CrewMemberSchema = z.infer<typeof crewMemberSchema>;

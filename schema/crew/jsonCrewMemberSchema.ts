import { z } from 'zod';

export const jsonCrewMemberSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    nationality: z.string(),
    age: z.number(),
    profession: z.string(),
});

export const jsonCrewMembersArraySchema = z.array(jsonCrewMemberSchema);

export type JsonCrewMemberSchema = z.infer<typeof jsonCrewMemberSchema>;

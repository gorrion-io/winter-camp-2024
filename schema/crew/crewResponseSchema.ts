import { z } from 'zod';
import { crewMemberSchema } from './crewMemberSchema';

export const crewResponseSchema = z.object({
    crewmates: z.array(crewMemberSchema),
    crewAmmount: z.number(),
});

export type CrewResponseSchema = z.infer<typeof crewResponseSchema>;

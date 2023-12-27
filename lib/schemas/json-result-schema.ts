import { z } from 'zod';

export type JsonCrewMember = z.infer<typeof jsonCrewMemberSchema>;
export type JsonResult = z.infer<typeof jsonResultSchema>;

const jsonCrewMemberSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  nationality: z.string(),
  age: z.number().int().positive(),
  profession: z.string(),
});

export const jsonResultSchema = z.array(jsonCrewMemberSchema);

import { z } from 'zod';

export type YamlResult = z.infer<typeof yamlResultSchema>;

const yamlCrewMemberSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  years_old: z.number().int().positive(),
  nationality: z.string(),
});

export const yamlResultSchema = z.array(yamlCrewMemberSchema);

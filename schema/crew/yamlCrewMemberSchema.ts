import { z } from "zod";

export const yamlCrewMemberSchema = z.object({
  name: z.string(),
  nationality: z.string(),
  years_old: z.number(),
  occupation: z.string(),
});

export const yamlCrewMembersArraySchema = z.array(yamlCrewMemberSchema);

export type YamlCrewMemberSchema = z.infer<typeof yamlCrewMemberSchema>;

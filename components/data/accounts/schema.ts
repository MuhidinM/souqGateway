import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const accountSchema = z.object({
  name: z.string(),
  account: z.string(),
  phoneNo: z.string(),
  primary: z.string(),
});

export type Task = z.infer<typeof accountSchema>;

import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const transactionSchema = z.object({
  transactionID: z.string(),
  CREDITACCTNO: z.string(),
  DEBITACCTNO: z.string(),
  STATUS: z.string(),
  DEBITAMOUNT: z.string(),
  TRANSACTION_DATE: z.string(),
  TRANSACTIONTYPE: z.string(),
});

export type Task = z.infer<typeof transactionSchema>;

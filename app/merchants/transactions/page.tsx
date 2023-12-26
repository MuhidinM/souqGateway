import React from "react";
import { z } from "zod";
import { transactionSchema } from "@/components/data/transaction/schema";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/data/transaction/columns";
import { transactionData } from "@/components/data/transaction/transactionData";

async function getTransaction() {
  const transaction = transactionData;
  return z.array(transactionSchema).parse(transaction);
}

const page = async () => {
  const transaction = await getTransaction();
  return (
    <div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={transaction} columns={columns} />
      </div>
    </div>
  );
};

export default page;

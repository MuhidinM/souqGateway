import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "@/components/data/transaction/schema";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/data/transaction/columns";
import { transactionData } from "@/components/data/transaction/transactionData";

async function getTasks() {
  const tasks = transactionData;
  return z.array(taskSchema).parse(tasks);
}

const page = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
};

export default page;

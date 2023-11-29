import React from "react";
import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import { z } from "zod";
import { taskSchema } from "@/components/ui/data/schema";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/ui/columns";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/ui/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const page = async () => {
  const tasks = await getTasks();
  return (
    <div>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
};

export default page;

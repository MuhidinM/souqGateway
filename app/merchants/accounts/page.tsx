import React from "react";
import { z } from "zod";
import { accountSchema } from "@/components/data/accounts/schema";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/data/accounts/columns";
import { accountData } from "@/components/data/accounts/acountsData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectMenu from "@/components/SelectMenu";
import { Options } from "@/constants";

async function getaccount() {
  const account = accountData;
  return z.array(accountSchema).parse(account);
}
const page = async () => {
  const account = await getaccount();
  return (
    <div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Input placeholder="Add Account" />
        </div>
        <div className="">
          <Button >Verify</Button>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-4">
        <SelectMenu placeholder="Category" options={Options} />
        </div>
      </div>
        <DataTable data={account} columns={columns} />
      </div>
    </div>
  );
};

export default page;

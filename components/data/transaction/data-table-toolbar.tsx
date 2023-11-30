"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
// import { DataTableViewOptions } from "@/app/examples/tasks/components/data-table-view-options"

import { priorities } from "../sample/data";
import { DataTableFacetedFilter } from "../../ui/data-table-faceted-filter";
import { DataTableViewOptions } from "../../ui/data-table-view-options";
import { types, statuses } from "./data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  console.log(table.getFilteredSelectedRowModel().rows);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Transaction Id..."
          value={
            (table.getColumn("transactionID")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("transactionID")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("STATUS") && (
          <DataTableFacetedFilter
            column={table.getColumn("STATUS")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("TRANSACTIONTYPE") && (
          <DataTableFacetedFilter
            column={table.getColumn("TRANSACTIONTYPE")}
            title="Type"
            options={types}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}

"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../../ui/badge";
import { Checkbox } from "../../ui/checkbox";

import { primary } from "./data";
import { Task } from "./schema";
import { DataTableColumnHeader } from "../../ui/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Holder Name" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "account",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account Number" />
    ),
    cell: ({ row }) => {
      const type = primary.find((type) => type.value === row.original.primary);

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">
            {row.getValue("account")}
          </span>
          {type && <Badge className="bg-cyan-500">{type.label}</Badge>}
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">
            {row.getValue("phoneNo")}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

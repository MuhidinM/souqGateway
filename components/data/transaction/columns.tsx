"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../../ui/badge";
import { Checkbox } from "../../ui/checkbox";

import { statuses, types } from "./data";
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
    accessorKey: "transactionID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("transactionID")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "CREDITACCTNO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credit Account" />
    ),
    cell: ({ row }) => {
      const type = types.find(
        (type) => type.value === row.original.TRANSACTIONTYPE
      );

      return (
        <div className="flex space-x-2">
          {type && <Badge variant="outline">{type.label}</Badge>}
          <span className="max-w-[500px] truncate">
            {row.getValue("CREDITACCTNO")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "DEBITACCTNO",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Debit Account" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">
            {row.getValue("DEBITACCTNO")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "STATUS",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("STATUS")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "DEBITAMOUNT",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("DEBITAMOUNT"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ETB",
      }).format(amount);
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">{formatted}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "TRANSACTION_DATE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate">
            {row.getValue("TRANSACTION_DATE")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "TRANSACTIONTYPE",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Type" />
    ),
    cell: ({ row }) => {
      const type = types.find(
        (type) => type.value === row.getValue("TRANSACTIONTYPE")
      );

      if (!type) {
        return null;
      }

      return (
        <div className="flex w-[50px] items-center">
          <span>{type.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];

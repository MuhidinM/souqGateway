"use client";
import { CSVLink } from "react-csv";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
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

  const headers = [
    { label: "Transaction ID", key: "details.transactionID" },
    { label: "Credit Account Number", key: "details.CREDITACCTNO" },
    { label: "Debit Account Number", key: "details.DEBITACCTNO" },
    { label: "Status", key: "details.STATUS" },
    { label: "Debit Amount", key: "details.DEBITAMOUNT" },
    { label: "Transaction Date", key: "details.TRANSACTION_DATE" },
    { label: "Transaction Type", key: "details.TRANSACTIONTYPE" },
  ];
  // console.log(table.getFilteredSelectedRowModel().rows);
  // console.log(table.getRowModel().rows)
  const rowData = table.getRowModel().rows.map((row) => ({
    details: {
      transactionID: row.original.transactionID,
      CREDITACCTNO: row.original.CREDITACCTNO,
      DEBITACCTNO: row.original.DEBITACCTNO,
      STATUS: row.original.STATUS,
      DEBITAMOUNT: row.original.DEBITAMOUNT,
      TRANSACTION_DATE: row.original.TRANSACTION_DATE,
      TRANSACTIONTYPE: row.original.TRANSACTIONTYPE,
    },
  }));
  // Define CSV headers

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
      <Button variant="outline" size="sm" className="mr-4 hidden h-8 lg:flex">
        <CSVLink
          data={rowData}
          headers={headers}
          filename={"transactions.csv"}
          className="btn btn-primary"
          target="_blank"
        >
          Export All
        </CSVLink>
      </Button>
      <DataTableViewOptions table={table} />
      {/* <MixerHorizontalIcon className="mr-2 h-4 w-4" /> */}
    </div>
  );
}

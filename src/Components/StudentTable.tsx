import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";
import {CheckIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import React, {useState} from "react";
import {Student} from "./StudentList.tsx";
import {columns} from "./table/columns.tsx";

interface Props {
    students: Student[];
}

const StudentTable = ({students}: Props) => {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [data,] = useState<Student[]>(students as Student[]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        initialState: {
            pagination: {pageSize: 5}
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className={"flex justify-between items-center gap-x-2 md:gap-x-0 px-2 md:px-7"}>
                <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-400"
                            />
                        </div>
                        <input
                            value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("firstName")?.setFilterValue(event.target.value)
                            }
                            id="search"
                            name="search"
                            type="search"
                            placeholder="Search"
                            className="block w-full rounded-md border-b-2 focus:outline-0 shadow bg-white py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50">
                            Columns
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400"/>
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                            {
                                table.getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <MenuItem key={column.id}>
                                                <label
                                                    className=" group capitalize flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                >

                                                    <input id={"check-icon"} checked={column.getIsVisible()}
                                                           onChange={(e) => column.toggleVisibility(e.target.checked)}
                                                           type="checkbox" aria-hidden="true"
                                                           className="sr-only mr-3 h-5 w-5 text-black bg-transparent border-gray-300 focus:ring-0 checked:bg-transparent checked:text-black"
                                                    />
                                                    <div className={"w-4 h-4 mr-2"}>
                                                        <label htmlFor="check-icon"
                                                               className="flex  items-center cursor-pointer group peer-checked:bg-gray-800 rounded-full">
                                                            <span
                                                                className="text-3xl text-yellow-500 group-hover:opacity-80 group-[:has(input:checked)]:hidden"></span>
                                                            <span
                                                                className="text-3xl text-blue-500 hidden group-[:has(input:checked)]:inline"><CheckIcon
                                                                className={"w-4 h-4 text-black"}/></span>
                                                        </label>
                                                    </div>
                                                    {column.id}
                                                </label>
                                            </MenuItem>
                                        )
                                    })
                            }
                        </div>
                    </MenuItems>
                </Menu>
            </div>

            <div className="inline-block min-w-full  align-middle sm:px-6 lg:px-8">

                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return <React.Fragment key={cell.id}>{flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}</React.Fragment>
                                })}
                            </tr>
                        ))
                    ) : null}
                    </tbody>
                </table>
                <nav
                    aria-label="Pagination"
                    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                >
                    <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span
                            className="font-medium">{table.getState().pagination.pageIndex + 1}</span> of{' '}
                            <span className="font-medium">{table.getPageCount()}</span> results
                        </p>
                    </div>
                    <div className="flex flex-1 justify-between sm:justify-end">
                        <button
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className=" disabled:cursor-not-allowed relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="relative disabled:cursor-not-allowed ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                        >
                            Next
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    </div>
};

export default StudentTable;





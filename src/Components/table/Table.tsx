import {Student} from "../StudentList.tsx";
import {flexRender, getCoreRowModel, getFilteredRowModel, SortingState, useReactTable} from "@tanstack/react-table";
import {useState} from "react";
import StudentItem from "../StudentItem.tsx";
import Search from "./Search.tsx";
import {columns} from "./columns.tsx";
import {ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/16/solid";

interface Props {
    data: Student[];
}

const Table = ({data}: Props) => {
    const [searchTerm, setSearchTerm,] = useState("");
    const [sorting, setSorting] = useState<SortingState>([])
    console.log(sorting)
    // const [filterColumn,setFilterColumn] = useState("name")
    const [_data,] = useState<Student[]>(data);
    const table = useReactTable({
        data: _data,
        columns: columns,
        state: {
            globalFilter: searchTerm,
            sorting,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setSearchTerm,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                {/*Search form*/}
                <Search searchValue={searchTerm} onSearchChange={(searchValue) => setSearchTerm(searchValue)}/>
                <div className="inline-block min-w-full  align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                        {table.getHeaderGroups().map(headerGroup => (<tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}
                                    scope="col"

                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >
                                    <button {...{
                                        onClick: header.column.getToggleSortingHandler(),
                                        className: "flex gap-x-1 items-center"
                                    }} >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc: <ArrowUpIcon className={"w-3 h-3 mt-1"}/>,
                                            desc: <ArrowDownIcon className={"w-3 h-3 mt-1"}/>
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </button>
                                </th>))}
                        </tr>))}
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {table.getRowModel().rows.map((row) => (
                                <tr>
                                    <StudentItem student={row.original}/>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
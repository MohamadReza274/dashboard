import {createColumnHelper} from "@tanstack/react-table";
import {Student} from "../StudentList.tsx";
import StudentItem from "../StudentItem.tsx";

const columnHelper = createColumnHelper<Student>()

export const columns = [
    columnHelper.accessor("firstName", {
        header: () => "Name",
        cell: (info) => <StudentItem student={info.row.original} value={info.getValue()}/>
    }), columnHelper.accessor("privance", {
        header: () => "City & Field",
        cell: (info) => <StudentItem student={info.row.original} value={info.getValue()}/>
    }), columnHelper.accessor("phone", {
        header: () => "Phone Number",
        cell: (info) => <StudentItem student={info.row.original} value={info.getValue()}/>
    }), columnHelper.accessor("age", {
        header: () => "Age",
        cell: (info) => <StudentItem student={info.row.original} value={info.getValue()}/>
    }),
]
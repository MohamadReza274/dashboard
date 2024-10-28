import {createColumnHelper} from "@tanstack/react-table";
import {Student} from "../StudentList.tsx";
import React from "react";
import {Link} from "react-router-dom";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {ArrowsUpDownIcon, EllipsisVerticalIcon} from "@heroicons/react/16/solid";

const columnHelper = createColumnHelper<Student>()

export const columns = [
    columnHelper.accessor("firstName", {
        header: ({column}) => {
            return <button className="flex items-center" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Email
                <ArrowsUpDownIcon className={"ml-2 h-4 w-4"}/>
            </button>
        },
        cell: (info) => {
            const {firstName, email, avatar, id} = info.row.original;
            return <React.Fragment>
                <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <Link to={`/students/${id}`}>
                        <div className="flex items-center">
                            <div className="h-11 w-11 flex-shrink-0">
                                <img
                                    alt=""
                                    src={avatar}
                                    className="h-11 w-11 rounded-full"
                                />
                            </div>
                            <div className="ml-4">
                                <div className="font-medium text-gray-900">{firstName}</div>
                                <div className="mt-1 text-gray-500">{email}</div>
                            </div>
                        </div>
                    </Link>
                </td>
            </React.Fragment>
        }
    }), columnHelper.accessor("privance", {
        header: () => "City & Field",
        cell: (info) => {
            const {privance, field} = info.row.original;
            return <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div className="text-gray-900">{privance}</div>
                <div className="mt-1 text-gray-500">{field}</div>
            </td>
        }
    }), columnHelper.accessor("phone", {
        header: () => "Phone Number",
        cell: (info) => <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <span
            className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ">
          {info.getValue()}
        </span>
        </td>
    }), columnHelper.accessor("age", {
        header: () => "Age",
        cell: (info) => <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
            {info.getValue()}
        </td>
    }), columnHelper.display({
        enableHiding: false,
        id: "actions",
        header: () => "Actions",
        cell: () => <td
            className="relative whitespace-nowrap py-5 pl-3 pr-4 text-sm font-medium sm:pr-0">
            <Menu as="div" className="relative ml-3 ">
                <div>
                    <MenuButton
                        className="relative flex rounded-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"/>
                        <span className="sr-only">Open action menu</span>
                        <EllipsisVerticalIcon className="h-4 w-4"/>
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            View
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            Edit
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            Delete
                        </a>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </td>
    })
]



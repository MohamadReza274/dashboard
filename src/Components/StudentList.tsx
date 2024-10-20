import {Link, useSearchParams} from "react-router-dom";
import StudentItem from "./StudentItem";
import {sort} from "fast-sort";
import AddStudent from "./AddStudent";
import {students} from "../data.ts";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  fatherName: string;
  email: string;
  avatar: string;
  age: number;
  phone: string;
  maritalStatus: "single" | "married";
  privance: string;
  field: string;
}



const StudentList = () => {
  const [searchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder");

  const sortedStudents = sort(students).asc(
    sortOrder === "privance" ? (st) => st.privance : (st) => st.firstName
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* add student */}
          <AddStudent />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    <Link to="/?sortOrder=firstName">Name</Link>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <Link to="/?sortOrder=privance">City & Field</Link>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Age
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {sortedStudents.map((student) => (
                  <StudentItem key={student.id} student={student} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;

import AddStudent from "./AddStudent.tsx";
import {students} from "../data.ts";
import StudentTable from "./StudentTable.tsx";

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

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        Students
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the students in system including their name, email,
                        photo,phone and more...
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    {/* add table */}
                    <AddStudent/>
                </div>
            </div>

            {/*Table*/}
            <StudentTable students={students} />
        </div>
    );
};

export default StudentList;

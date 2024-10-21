import {Student} from "./StudentList";
import {Link} from "react-router-dom";

interface Props {
  student: Student;
}

const StudentItem = ({ student }: Props) => {
  return (
    <tr>
      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
          <Link to={`/students/${student.id}`}>
              <div className="flex items-center">
                  <div className="h-11 w-11 flex-shrink-0">
                      <img
                          alt=""
                          src={student.avatar}
                          className="h-11 w-11 rounded-full"
                      />
                  </div>
                  <div className="ml-4">
                      <div className="font-medium text-gray-900">{student.firstName}</div>
                      <div className="mt-1 text-gray-500">{student.email}</div>
                  </div>
              </div>
          </Link>
      </td>
        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
            <div className="text-gray-900">{student.privance}</div>
            <div className="mt-1 text-gray-500">{student.field}</div>
        </td>
        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <span
            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Active
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {student.age}
      </td>
      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit<span className="sr-only">, {student.firstName}</span>
        </a>
      </td>
    </tr>
  );
};

export default StudentItem;

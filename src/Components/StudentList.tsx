import StudentItem from "./StudentItem";

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

const students: Student[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    fatherName: "Michael Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    age: 21,
    phone: "555-1234",
    maritalStatus: "single",
    privance: "California",
    field: "Computer Science",
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Smith",
    fatherName: "Robert Smith",
    email: "sarah.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    age: 23,
    phone: "555-5678",
    maritalStatus: "single",
    privance: "Texas",
    field: "Mathematics",
  },
  {
    id: 3,
    firstName: "David",
    lastName: "Johnson",
    fatherName: "William Johnson",
    email: "david.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 22,
    phone: "555-8765",
    maritalStatus: "married",
    privance: "New York",
    field: "Physics",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Brown",
    fatherName: "George Brown",
    email: "emily.brown@example.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    age: 20,
    phone: "555-4321",
    maritalStatus: "single",
    privance: "Florida",
    field: "Chemistry",
  },
  {
    id: 5,
    firstName: "Michael",
    lastName: "Davis",
    fatherName: "Henry Davis",
    email: "michael.davis@example.com",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    age: 24,
    phone: "555-1111",
    maritalStatus: "married",
    privance: "Ohio",
    field: "Biology",
  },
  {
    id: 6,
    firstName: "Sophia",
    lastName: "Miller",
    fatherName: "Charles Miller",
    email: "sophia.miller@example.com",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    age: 19,
    phone: "555-2222",
    maritalStatus: "single",
    privance: "Georgia",
    field: "Art",
  },
  {
    id: 7,
    firstName: "James",
    lastName: "Garcia",
    fatherName: "Anthony Garcia",
    email: "james.garcia@example.com",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    age: 22,
    phone: "555-3333",
    maritalStatus: "married",
    privance: "Nevada",
    field: "Engineering",
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Martinez",
    fatherName: "Richard Martinez",
    email: "olivia.martinez@example.com",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    age: 21,
    phone: "555-4444",
    maritalStatus: "single",
    privance: "Arizona",
    field: "History",
  },
  {
    id: 9,
    firstName: "Daniel",
    lastName: "Hernandez",
    fatherName: "Edward Hernandez",
    email: "daniel.hernandez@example.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    age: 23,
    phone: "555-5555",
    maritalStatus: "single",
    privance: "Colorado",
    field: "Psychology",
  },
  {
    id: 10,
    firstName: "Emma",
    lastName: "Lopez",
    fatherName: "David Lopez",
    email: "emma.lopez@example.com",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    age: 20,
    phone: "555-6666",
    maritalStatus: "married",
    privance: "Washington",
    field: "Sociology",
  },
];

const StudentList = () => {
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
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <a href="">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                  </a>
                  <a href="">
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      City & Field
                    </th>
                  </a>
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
                {students.map((student) => (
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

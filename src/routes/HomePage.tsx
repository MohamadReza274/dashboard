import AddStudent from "../Components/AddStudent";
import StudentList from "../Components/StudentList";

const HomePage = () => {
  return (
    <div>
      <StudentList />
      <AddStudent />
    </div>
  );
};

export default HomePage;

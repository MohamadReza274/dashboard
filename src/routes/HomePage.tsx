import StudentList from "../Components/StudentList.tsx";
import StatusCard from "../Components/StatusCard.tsx";
import {BookOpenIcon, UserIcon, UsersIcon} from "@heroicons/react/16/solid";


const HomePage = () => {
    return (
        <div>
            <div className={"flex items-center gap-x-4 px-2 md:px-8 mb-4"}>
                <StatusCard title={"Active Students"} count={200}
                            Icon={UsersIcon}/>
                <StatusCard title={"Active Teachers"} count={36}
                            Icon={UserIcon}/>
                <StatusCard title={"Active Fields"} count={3}
                            Icon={BookOpenIcon}/>
            </div>

            <StudentList/>
        </div>
    );
};

export default HomePage;

import {ElementType} from "react";

interface Props {
    title:string;
    count:number;
    Icon:ElementType;
}


const StatusCard = ({title,count,Icon}:Props) => {
    return (
        <div className="flex flex-col py-2 px-4 max-w-48 md:max-w-md w-full bg-gray-50 rounded-lg shadow gap-y-4">
            <h2 className={"text-gray-700"}>{title}</h2>
            <div className={"flex gap-x-2"}>
                <Icon className={"h-6 w-6 outline p-1 outline-1 rounded-full"} />
                <span>{count}</span>
            </div>
        </div>
    );
};


export default StatusCard;
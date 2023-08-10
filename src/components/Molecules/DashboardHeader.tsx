import { Link } from "react-router-dom";
import { Username } from "../Atoms/Username";

interface DashboardHeaderProps {
  title: string | null,
}

export const DashboardHeader = ({title} : DashboardHeaderProps) => {
  return (
    <div>
      <Username username={title} />
      <Link 
        to="/edit-user" 
        className="mt-1 text-xs hover:text-sky-700 duration-300 cursor-pointer"
      >
        edit my info
      </Link>
    </div>
  )
};
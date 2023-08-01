import { Link } from "react-router-dom"
import { DashboardTitle } from "../Atoms/DashboardTitle"

interface DashboardHeaderProps {
  title: string | null,
}

export const DashboardHeader = ({title} : DashboardHeaderProps) => {
  return (
    <div>
      <DashboardTitle username={title} />
      <Link to="/edit-user" className="mt-1 text-xs hover:text-sky-700 duration-300 cursor-pointer">
        edit my info
      </Link>
    </div>
  )
}
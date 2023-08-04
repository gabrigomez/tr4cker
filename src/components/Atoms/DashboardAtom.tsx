import { Link } from "react-router-dom"

export const DashboardAtom = () => {
  return (
    <Link to="/dashboard" className='group-hover:text-sky-700 duration-300 cursor-pointer'>
      Dashboard
    </Link>
  )
}
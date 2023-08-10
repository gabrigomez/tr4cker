import { Link } from "react-router-dom";

export const LoginAtom = () => {
  return (
    <Link to="/login" className='group-hover:text-sky-700 duration-300 cursor-pointer'>
      Login
    </Link>
  )
};
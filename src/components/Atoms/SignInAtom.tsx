import { Link } from "react-router-dom"

export const SignInAtom = () => {
  return (
    <Link to="/sign-in" className='group-hover:text-sky-700 duration-300 cursor-pointer'>
      Sign in
    </Link>
  )
}
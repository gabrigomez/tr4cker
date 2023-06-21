import { useEffect, useContext } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"

export const Dashboard = () => {
  const { username, authToken } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }
  })  

  return (
    <div className="w-screen">      
      <p className="text-3xl font-semibold">
        Hello, {username}!
      </p>
      <Link to="/edit-user" className="mt-2 text-xs hover:text-sky-700 duration-300 cursor-pointer">
        edit my info
      </Link>      
    </div>
  )
}
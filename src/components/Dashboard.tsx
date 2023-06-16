import { useEffect, useContext } from "react"
import { useNavigate } from "react-router"
import AuthContext from "../context/AuthContext"

export const Dashboard = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const { username } = useContext(AuthContext)

  useEffect(() => {
    if (username === '') {
      navigate("/login")
    }
  })  

  return (
    <div className="w-screen">     
      <p>
        Dashboard Component
      </p>
      <p>
        {username}
      </p>
    </div>
  )
}
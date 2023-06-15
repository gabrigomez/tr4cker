import { useEffect } from "react"
import { useNavigate } from "react-router"

export const Dashboard = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
    
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  })
  

  return (
    <div className="w-screen">
      Dashboard Component
    </div>
  )
}
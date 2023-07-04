import axios from "axios"
import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

import AuthContext from "../context/AuthContext"
import { API_URL, Artists, User } from "../utils"
import { Spinner } from "@phosphor-icons/react"

export const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [artists, setArtists] = useState<Artists>(null)
  
  const { username, setUsername, authToken, id } = useContext(AuthContext)
  const headers = { Authorization: `Bearer ${authToken}` }
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }

    async function fetchData() {      
      const response = await axios.get(`${API_URL}/user/${id}`, {headers: {...headers}})
      const data: User = response.data.username
      
      try {
        const artistsData = await axios.get(`${API_URL}/artist/${id}`)
        const artistsList: Artists = artistsData.data
        setArtists(artistsList)
      } catch {
        setArtists(null)
      }     
      
      setUsername(data)
      setLoading(true)
    }

    fetchData()    
  })  

  return (
    <div className="w-screen">
      {loading ? (
        <div>
          <div>
            <p className="text-3xl font-semibold">
              Hello, {username}!
            </p>
          </div>
          <div>
            {artists !== null && (
              artists.map((artist) => {
                return (
                  <div key={artist.name}>
                    {artist.name}
                  </div>
                )
              })
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-3xl font-semibold">
          <Spinner className="animate-spin-forever" size={36} />
        </div>
      )}      
      <Link to="/edit-user" className="mt-2 text-xs hover:text-sky-700 duration-300 cursor-pointer">
        edit my info
      </Link>      
    </div>
  )
}
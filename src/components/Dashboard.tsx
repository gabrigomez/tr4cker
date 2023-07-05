import axios from "axios"
import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

import AuthContext from "../context/AuthContext"
import { API_URL, Artists, User } from "../utils"
import { Spinner } from "@phosphor-icons/react"
import { Card } from "./Card"

export const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [artists, setArtists] = useState<Artists>(null)
  
  const { username, setUsername, authToken, id } = useContext(AuthContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    const headers = { Authorization: `Bearer ${authToken}` }
    
    if (!authToken) {
      navigate("/login")
    }

    async function fetchData() {      
      const response = await axios.get(`${API_URL}/user/${id}`, {headers: {...headers}})
      const data: User = response.data.username
      
      try {
        const artistsData = await axios.get(`${API_URL}/artist-list/${id}`)
        const artistsList: Artists = artistsData.data
        setArtists(artistsList)
      } catch {
        setArtists(null)
      }    
      setUsername(data)
      setLoading(true)
    }

    fetchData()    
  }, [authToken, id, navigate, setUsername])  

  return (
    <div className="w-screen">
      {loading ? (
        <div>
          <div>
            <p className="text-3xl font-semibold">
              Hello, {username}!
            </p>
          </div>
          <Link to="/edit-user" className="mt-1 text-xs hover:text-sky-700 duration-300 cursor-pointer">
            edit my info
          </Link> 
          <div>
            {artists !== null && (
              artists.map((artist) => {
                return (
                  <Link to={`/artist-details/${artist.id}`} key={artist.id}>
                    <Card name={artist.name} image={artist.image} genre={artist.genre} id={artist.id} />
                  </Link>
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
    </div>
  )
}
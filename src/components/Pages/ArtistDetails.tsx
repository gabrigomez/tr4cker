import axios from "axios"
import AuthContext from "../../context/AuthContext"

import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { API_URL } from "../../utils"
import { ArtistDetailsTemplate } from "../Templates/ArtistDetailsTemplate"
import { Loading } from "../Atoms/Loading"

export const ArtistDetails = () => {
  const [name, setName] = useState<string>('')
  const [genre, setGenre] = useState<string>('')  
  const [image, setImage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { authToken } = useContext(AuthContext)
  const id = parseInt(window.location.href.split('/').reverse()[0]);
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }

    async function fetchData() {      
      setLoading(true)
      try {
        const response = await axios.get(`${API_URL}/artist/${id}`)

        setName(response.data.name)
        setImage(response.data.image)
        setGenre(response.data.genre)
        setLoading(false)
      } catch {
        setLoading(true)
      }
    }

    fetchData()    
  }, [authToken, id, navigate])  

  return (
    <div className="w-screen">
      {!loading ? (
        <ArtistDetailsTemplate 
          {...{
            name,
            genre,
            image,
            loading,
            id
          }}
        />
      ) : (
        <Loading className="flex justify-center items-center text-3xl font-semibold" />
      )}
    </div>
  )
}
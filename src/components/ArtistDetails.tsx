import AuthContext from "../context/AuthContext"
import axios from "axios"

import { useContext, useEffect, useState } from "react"
import { Artist } from "./Artist"
import { useNavigate } from "react-router"
import { API_URL } from "../utils"
import { Spinner } from "@phosphor-icons/react"

export const ArtistDetails = () => {
  const [name, setName] = useState<string>('')
  const [genre, setGenre] = useState<string>('')  
  const [image, setImage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()
  const { authToken } = useContext(AuthContext)

  const id = window.location.href.split('/').reverse()[0];

  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }

    async function fetchData() {      
      try {
        const response = await axios.get(`${API_URL}/artist/${id}`)
        console.log(response)

        setName(response.data.name)
        setImage(response.data.image)
        setGenre(response.data.genre)
        setLoading(true)

      } catch {
        console.log('Não foi possível concluir a requisição')
        setLoading(true)
      }

    }

    fetchData()    
  }, [])  

  return (
    <div>
      {loading ? (
        <Artist name={name} image={image} genre={genre} />
      ) : (
        <div className="flex justify-center items-center text-3xl font-semibold">
          <Spinner className="animate-spin-forever" size={36} />
        </div>
      )}
    </div>
  )
}
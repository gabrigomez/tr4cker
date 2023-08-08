import axios from "axios"
import AuthContext from "../../context/AuthContext"

import { FC, useContext, useState } from "react"
import { ArtistProps } from "../../interfaces"
import { API_URL } from "../../utils"
import { useNavigate } from "react-router"
import { FloppyDiskBack } from "@phosphor-icons/react"
import { toast } from "react-hot-toast"
import { Loading } from "../Atoms/Loading"
import { Tracks } from "./Tracks"
import { ArtistOptions } from "./ArtistOptions"
import { ArtistInfo } from "./ArtistInfo"
import { ArtistImage } from "../Atoms/ArtistImage"

export const Artist: FC<ArtistProps> = ({...props}) => {
  const [tracks, setTracks] = useState<Array<string>>([])
  const [loading, setLoading] = useState<boolean>(false)
  
  const { id } = useContext(AuthContext)
  const navigate = useNavigate()

  const saveArtist = async() => {
    const payload = {
      name: props.name,
      image: props.image,
      genre: props.genre ? props.genre : 'no genre' ,
      user: id
    }
    const response = await axios.post(`${API_URL}/artist`, {...payload});

    if(response.status === 201) {
      toast.success("Artista salvo com sucesso!");
    } else {
      toast.error("Ocorreu um erro, tente novamente.");
    }
  }

  const deleteArtist = async() => {
    try {
      await axios.delete(`${API_URL}/artist/${props.id}`)
      toast.success('Artista excluído com sucesso')    
      setTimeout(() => {
        navigate("/dashboard")
      }, 2000)                  
    } catch (error) {
      toast.error('Não foi possivel excluir o artista')    
    }    
  }

  const getTracks = async() => {
    setLoading(true)
    const response = await axios.post(`${API_URL}/spotify`, {artist: props.name, limit: 1})
   
    setTracks(response.data[0].songs)
    setLoading(false)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mb-8">
      <div className="w-3/4 md:w-2/4 flex flex-col justify-center items-center mt-4 p-4 bg-black border border-pink-900 rounded-md">
        <div className="flex flex-col items-center mb-2">
          <ArtistImage 
            className="h-44 w-44 md:w-2/4 md:h-2/4 rounded-full overflow-hidden mb-2 border-2 border-pink-800"
            image={props.image}
          />
          <ArtistInfo
            name={props.name}
            genre={props.genre}
            deleteMode={props.deleteMode}
            followers={props.followers}
            link={props.link}
          />
          {props.deleteMode ? (
            <ArtistOptions getTracks={getTracks} deleteArtist={deleteArtist} />                                     
          ) : (
            <button onClick={saveArtist}>
              <FloppyDiskBack className='text-2xl mr-1 cursor-pointer hover:text-sky-700 duration-300' />
            </button>
          )}          
        </div>      
        {props.songs && (
          <Tracks tracks={props.songs} />
        )}              
        {loading ? (
          <Loading className="flex justify-center items-center text-3xl font-semibold" />      
          ) : (
          <Tracks tracks={tracks} />
        )}      
      </div>
    </div>
  )
}
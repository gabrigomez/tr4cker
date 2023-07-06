import axios from "axios"
import AuthContext from "../context/AuthContext"

import { FC, useContext, useState } from "react"
import { ArtistProps } from "../interfaces"
import { API_URL } from "../utils"
import { useNavigate } from "react-router"
import { Eye, FloppyDiskBack, Spinner, Trash, UsersThree } from "@phosphor-icons/react"

export const Artist: FC<ArtistProps> = ({...props}) => {
  const [tracks, setTracks] = useState<Array<string>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)
  
  const { id } = useContext(AuthContext)
  const navigate = useNavigate()

  const saveArtist = async() => {
    const payload = {
      name: props.name,
      image: props.image,
      genre: props.genre,
      user: id
    }
    await axios.post(`${API_URL}/artist`, {...payload})
  }

  const deleteArtist = async() => {
    try {
      await axios.delete(`${API_URL}/artist/${props.id}`)
      setMessage('Artista excluído com sucesso')    
      setTimeout(() => {
        setMessage(null)
        navigate("/dashboard")
      }, 3000)                  
    } catch (error) {
      setMessage('Não foi possivel excluir o artista')    
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }    
  }

  const getTracks = async() => {
    setLoading(true)
    const response = await axios.post(`${API_URL}/spotify`, {artist: props.name})
    
    setTracks(response.data[1])
    setLoading(false)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-3/4 md:w-2/4 flex flex-col justify-center items-center mt-4 bg-black p-4 rounded-md">
        <div className="flex flex-col items-center mb-2">
          <div className="h-44 w-44 overflow-hidden mb-2 rounded-sm border border-sky-800">
            <img src={props.image} alt="" />
          </div>
          <div className="flex flex-col items-center py-2">
            <a className="hover:text-sky-700 duration-300 cursor-pointer" href={props.link} target="blank">
              <p className="text-2xl font-bold">
                {props.name}
              </p>
            </a>
            <div>
              <p className="font-bold text-xs text-slate-400">
                {props.genre}
              </p>
            </div>
            {!props.deleteMode && (
              <div className="flex">
                <UsersThree className='text-2xl mr-1 cursor-pointer' />
                <p className="font-semibold text-sky-500">
                  {props.followers}
                </p>
              </div>
            )}
          </div>
          {props.deleteMode ? (
            <div className="flex flex-col justify-center items-center">
              <button onClick={deleteArtist}>
                <Trash className='text-xl mr-1 cursor-pointer hover:text-sky-700 duration-300' />
              </button>
              <button className="flex justify-center items-center group" onClick={getTracks}>
                <Eye className='text-md mr-1 cursor-pointer mt-2 group-hover:text-sky-700 duration-300' />
                <p className="text-xs mt-2 group-hover:text-sky-700 duration-300">
                  view list
                </p>
              </button>
            </div>                                     
          ) : (
            <button onClick={saveArtist}>
              <FloppyDiskBack className='text-2xl mr-1 cursor-pointer hover:text-sky-700 duration-300' />
            </button>
          )}          
        </div>             
        <div>
          {props.songs?.map((song) => {
            return (
              <p className="bg-slate-900 rounded-md mb-3 p-2" key={song}>
                {song}
              </p>
            )
          })}
        </div>
        {message && (
          <div className="mb-2">
            <p className="text-sm mb-2">
              {message}
            </p>
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center text-3xl font-semibold">
            <Spinner className="animate-spin-forever" size={36} />
          </div>      
          ) : (
          <div>
            {tracks.map((track) => {
              return (                            
                <p className="bg-slate-900 rounded-md mb-3 p-2" key={track}>
                  {track}
                </p>                
              )
            })}               
          </div>
        )}      
      </div>
    </div>
  )
}
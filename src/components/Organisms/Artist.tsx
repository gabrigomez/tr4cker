import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ArtistProps } from "../../interfaces";
import AuthContext from "../../context/AuthContext";

import { ArtistImage } from "../Atoms/ArtistImage";
import { ArtistInfo } from "./ArtistInfo";
import { ArtistOptions } from "./ArtistOptions";
import { Loading } from "../Atoms/Loading";

import { deleteArtistCall, getArtistList, getTracksCall, saveArtistCall } from "../../services/apiService";
import { FloppyDiskBack } from "@phosphor-icons/react";
import { toast } from "react-hot-toast";
import { Tracks } from "./Tracks";

export const Artist = ({...props}: ArtistProps) => {
  const [tracks, setTracks] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const { id } = useContext(AuthContext);
  const navigate = useNavigate();

  const saveArtist = async() => {
    const payload = {
      name: props.name,
      image: props.image,
      genre: props.genre ? props.genre : 'no genre',
      user: id,
      spotify_id: props.spotify_id
    };

    try {
      const artistsData = await getArtistList(id!);                                                 // get a copy of saved artists
      const exists = artistsData.data.find((artist: ArtistProps) => artist.name === props.name);  // check if artist was saved before
      
      // if is not, then try to save the artist. This is not the better way to do 
      // this, but i want to make it simple, without a management library, like redux.
      if(!exists) {
        const response = await saveArtistCall({...payload});
    
        if(response.status === 201) {
          toast.success("Artista salvo com sucesso!");
        } else {
          toast.error("Ocorreu um erro, tente novamente.");
        }

      } else {
        toast.error("Artista já salvo!");
      }
    } catch (error: any) {
      if(error.response.status === 404) {                                                     // in this case, the user has no artists saved
        const response = await saveArtistCall({...payload});    
        
        if(response.status === 201) {
          toast.success("Artista salvo com sucesso!");
        } else {
          toast.error("Ocorreu um erro, tente novamente.");
        }         
        
      } else {
        toast.error("Ocorreu um erro. Tente novamente");
      }
    }
  };

  const deleteArtist = async() => {
    try {
      await deleteArtistCall(props.id!);
      toast.success('Artista excluído com sucesso');    
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000)                  
    } catch (error) {
      toast.error('Não foi possivel excluir o artista');   
    }    
  };

  const getTracks = async() => {
    setLoading(true);
    const response = await getTracksCall({id: props.spotify_id!});
   
    setTracks(response.data.songs);
    setLoading(false);
  };

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
            genre={props.genre!}
            deleteMode={props.deleteMode}
            followers={props.followers}
            link={props.link}
          />
          {props.deleteMode ? (
            <ArtistOptions 
              getTracks={getTracks} 
              deleteArtist={deleteArtist} 
            />                                     
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
};
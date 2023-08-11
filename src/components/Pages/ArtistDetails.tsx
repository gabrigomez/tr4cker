import { useContext, useEffect, useState } from "react";
import { ArtistDetailsTemplate } from "../Templates/ArtistDetailsTemplate";
import { Loading } from "../Atoms/Loading";
import { useNavigate } from "react-router";

import { getArtist } from "../../services/apiService";
import AuthContext from "../../context/AuthContext";

export const ArtistDetails = () => {
  const [name, setName] = useState<string>('');
  const [genre, setGenre] = useState<string>('');  
  const [image, setImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [spotifyId, setSpotifyId] = useState<string>(''); 
  const { authToken } = useContext(AuthContext);
  const id = parseInt(window.location.href.split('/').reverse()[0]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }

    async function fetchData() {      
      setLoading(true);
      try {
        const response = await getArtist(id);

        setName(response.data.name);
        setImage(response.data.image);
        setGenre(response.data.genre);
        setSpotifyId(response.data.spotify_id)
        setLoading(false);
      } catch {
        setLoading(true);
      }
    }

    fetchData();    
  }, [authToken, id, navigate]);  

  return (
    <div className="w-screen">
      {!loading ? (
        <ArtistDetailsTemplate 
          {...{
            name,
            spotifyId,
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
};
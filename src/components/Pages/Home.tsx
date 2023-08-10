import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import * as yup from "yup";
import { ArtistProps } from "../../interfaces";

import { getArtistsFromSpotify } from "../../services/apiService";
import { HomeTemplate } from "../Templates/HomeTemplate";
import { imgs, initialValues, validateFormValues } from "../../utils";

export const Home = () => {
  const [artistsPreview, setArtistPreview] = useState<Array<ArtistProps> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { authToken } = useContext(AuthContext);

  const imgArray = imgs; 

  const validationSchema = yup.object({
    artist: yup.string().required('obrigatório'),
  });

  const onSubmit = async(values = { ...initialValues }) => {
    setArtistPreview(null);
    setLoading(true);

    const response = await getArtistsFromSpotify({...values, limit: 10});
    let artists: Array<ArtistProps> = [];
    
    response.data.map((result: ArtistProps) => {
      artists.push(result);
    })
       
    setArtistPreview(artists);
    setLoading(false);
  }

  const validate = validateFormValues(validationSchema);

  return (
    <HomeTemplate 
      {...{
        authToken,
        artistsPreview,
        imgArray,
        loading,              
        onSubmit: onSubmit,
        validate: validate,     
      }}
    />
  )
}

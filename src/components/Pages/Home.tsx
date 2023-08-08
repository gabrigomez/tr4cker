import axios from "axios";
import AuthContext from "../../context/AuthContext";
import * as yup from "yup";

import { useContext, useState } from "react";
import { API_URL, imgs, initialValues, validateFormValues } from "../../utils";
import { HomeTemplate } from "../Templates/HomeTemplate";
import { ArtistPreviewProps } from "../../interfaces";

export const Home = () => {
  const [artistsPreview, setArtistPreview] = useState<Array<ArtistPreviewProps> | null>(null)
  const { authToken } = useContext(AuthContext)

  const imgArray = imgs 

  const validationSchema = yup.object({
    artist: yup.string().required('obrigatório'),
  });

  const onSubmit = async(values = { ...initialValues }) => {
    const response = await axios.post(`${API_URL}/spotify`, {...values, limit: 10});
    let artists: Array<ArtistPreviewProps> = [];
    
    response.data.map((result: ArtistPreviewProps) => {
      artists.push(result);
    })

    setArtistPreview(artists)
  }

  const validate = validateFormValues(validationSchema);

  return (
    <HomeTemplate 
      {...{
        authToken,
        artistsPreview,
        imgArray,              
        onSubmit: onSubmit,
        validate: validate      
      }}
    />
  )
}

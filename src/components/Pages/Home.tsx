import axios from "axios";
import AuthContext from "../../context/AuthContext";
import * as yup from "yup";

import { useContext, useState } from "react";
import { API_URL, initialValues, validateFormValues } from "../../utils";
import { HomeTemplate } from "../Templates/HomeTemplate";

export const Home = () => {
  const [name, setName] = useState<string>('')
  const [followers, setFollowers] = useState<number>(0)
  const [songs, setSongs] = useState<Array<string>>([])
  const [genre, setGenre] = useState<string>('')
  
  const [image, setImage] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const [errors] = useState<string>('')  
  
  const { authToken } = useContext(AuthContext)

  const validationSchema = yup.object({
    artist: yup.string().required('obrigatório'),
  });

  const onSubmit = async(values = { ...initialValues }) => {
    const response = await axios.post(`${API_URL}/spotify`, {...values})

    setName(response.data[0].name)
    setImage(response.data[0].images[0].url)
    setGenre(response.data[0].genres[0])
    
    setFollowers(response.data[0].followers.total)
    setSongs(response.data[1])
    setLink(response.data[0].external_urls.spotify)
  }

  const validate = validateFormValues(validationSchema);

  return (
    <HomeTemplate 
      {...{
        authToken,
        name,
        followers,
        songs,
        image,
        genre,
        link,
        errors,
        onSubmit: onSubmit,
        validate: validate      
      }}
    />
  )
}

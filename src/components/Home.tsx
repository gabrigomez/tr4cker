import * as yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { Field, Form } from "react-final-form"

import { API_URL, validateFormValues } from "../utils";
import { Binoculars } from "@phosphor-icons/react";
import { Artist } from "./Artist";
import AuthContext from "../context/AuthContext";

import tracker from '../assets/tracker.png'

export const Home = () => {
  const [name, setName] = useState<string>('')
  const [followers, setFollowers] = useState<number>(0)
  const [songs, setSongs] = useState<Array<string>>([])
  const [genre, setGenre] = useState<string>('')
  
  const [image, setImage] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const [errors] = useState<string>('')  
  
  const { authToken } = useContext(AuthContext)

  const initialValues = {
    artist: '',
  }

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
    <div className='w-screen'>
      <div className="flex justify-center h-12">
        <img className="h-10 w-10 my-2 animate-updown" src={tracker}></img>
        <p className='text-5xl'>
          TR4CKER
        </p>
      </div>
      {authToken && (
        <div className="mt-8">
          <div className="mb-4">
            <p>
              Search for artist
            </p>
          </div>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
            <form action="submit" className="flex flex-col items-center" onSubmit={handleSubmit}>
              <Field name="artist">
                {({ input, meta }) => (
                  <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="ex: Black Sabbath" 
                      className="bg-black p-2 rounded-md"
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>            
              <button className="bg-black hover:bg-gray-900 duration-300 p-2 rounded-md group">
                <Binoculars className='text-2xl mr-1 cursor-pointer' />
              </button>
              {songs.length > 0 && (
                <Artist name={name} image={image} genre={genre} followers={followers} songs={songs} link={link}  />
              )}
              {errors && (
                <div className="h-10 text-xs text-red-600 mt-2 font-semibold">
                  <p>
                    {errors}
                  </p>
                </div>
              )}
            </form>
            )}
          />
        </div>
      )}      
    </div>
  )
}

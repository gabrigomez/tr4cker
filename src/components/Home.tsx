import { useState } from "react";
import { Field, Form } from "react-final-form"
import { API_URL, validateFormValues } from "../utils";
import { Binoculars } from "@phosphor-icons/react";

import * as yup from "yup";
import axios from "axios";

export const Home = () => {
  const [errors, setErrors] = useState<string>('')  
  const initialValues = {
    artist: '',
  }

  const validationSchema = yup.object({
    artist: yup.string().required('obrigatório'),
  });

  const onSubmit = async(values = { ...initialValues }) => {
    const response = await axios.post(`${API_URL}/spotify`, {...values})
    console.log(response)
  }

  const validate = validateFormValues(validationSchema);

  return (
    <div className='w-screen'>
      <div>
        <p className='text-5xl'>
          TR4CKER
        </p>
      </div>
      <div className="mt-10">
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
    </div>
  )
}

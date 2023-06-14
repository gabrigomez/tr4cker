import { Keyhole } from "@phosphor-icons/react";
import axios from "axios";
import { Form, Field } from 'react-final-form'

const API_URL = "https://python-app.up.railway.app/api"

export const Login = () => {
  const initialValues = {
    username: '',
    password: ''
  }

  const onSubmit = async (values = { ...initialValues }) => {    
    const response = await axios.post(`${API_URL}/token`, {...values})
    console.log(response.data)    
  }

  const validate = (values = { ...initialValues }) => {
    const errors = {username: '', password: ''}
    
    if (!values.username) {
      errors.username = 'Obrigatório'
      return errors              
    }
    if (!values.password) {
      errors.password = 'Obrigatório'
      return errors
    }            
    return
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4">
          LOGIN
        </p>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
          <form action="submit" className="flex flex-col items-center" onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 h-14">
                  <input 
                    type="text"
                    {...input} 
                    placeholder="Username" 
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
            <Field name="password">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 h-14">
                  <input 
                    type="password"
                    {...input} 
                    placeholder="Senha" 
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
              <Keyhole className='text-2xl mr-1 group-hover:animate-spin cursor-pointer' />
            </button>
          </form>
          )}
        />
      </div>
    </div>
  )
}
import axios from "axios";
import { API_URL } from "../Utils";
import { Form, Field } from 'react-final-form'
import { Keyhole } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();    
  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = async (values = { ...initialValues }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {...values})
      localStorage.setItem("token", response.data.access)
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }    
  }

  const validate = (values = { ...initialValues }) => {
    const errors = {email: '', password: ''}
    
    if (!values.email) {
      errors.email = 'Obrigatório'
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
            <Field name="email">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 h-14">
                  <input 
                    type="text"
                    {...input} 
                    placeholder="E-mail" 
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
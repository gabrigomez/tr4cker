import { Form, Field } from 'react-final-form'
import { Keyhole } from "@phosphor-icons/react";
import { useContext } from "react";

import { useNavigate } from 'react-router';
import AuthContext from "../context/AuthContext";

export const Login = () => {
  const { loginUser, loginErrors, username } = useContext(AuthContext)
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = async (values = { ...initialValues }) => {
    loginUser?.({...values})
    
    if(username !== '') {
      navigate("/dashboard")
    }  
  }

  const validate = (values = { ...initialValues }) => {
    const errors = {email: '', password: ''}
    
    if (!values.email) {
      errors.email = 'obrigatório'
      return errors              
    }
    if (!values.password) {
      errors.password = 'obrigatório'
      return errors
    }            
    return
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4 font-bold">
          LOGIN
        </p>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
          <form action="submit" className="flex flex-col items-center" onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
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
                <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
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
            {loginErrors && (
              <div className="h-10 text-xs text-red-600 mt-2 font-semibold">
                <p>
                  {loginErrors}
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
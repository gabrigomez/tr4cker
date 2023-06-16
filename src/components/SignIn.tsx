import { SignIn as SignInIcon } from  "@phosphor-icons/react";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { API_URL } from "../utils";
import { useNavigate } from "react-router";
import { useState } from "react";


export const SignIn = () => {
  const [errors, setErrors] = useState<string>('')

  const navigate = useNavigate();    
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const onSubmit = async (values = { ...initialValues }) => {   
    try {
      const response = await axios.post(`${API_URL}/register`, {...values})
      console.log(response)
      navigate("/login")
    } catch (error) {
      console.log(error)      
      setErrors('não foi possível realizar o registro')
      setTimeout(() => {
        setErrors('')
      }, 4000)
    }     
  }

  const validate = (values = { ...initialValues }) => {
    const errors = {username: '', email: '', password: '', confirmPassword: ''}
    
    if (!values.username) {
      errors.username = 'obrigatório'
      return errors              
    }
    if (!values.email) {
      errors.email = 'obrigatório'
      return errors
    }
    if (!values.password) {
      errors.password = 'obrigatório'
      return errors
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'obrigatório'
      return errors
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Senhas não conferem'
      return errors
    }             
    return
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4 font-bold">
          SIGN IN
        </p>
      </div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form action="submit" className="flex flex-col items-center" onSubmit={handleSubmit}>
            <Field name="username">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
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
            <Field name="email">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
                  <input 
                    type="text"
                    {...input} 
                    placeholder="Email" 
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
            <Field name="confirmPassword">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
                  <input 
                    type="password"
                    {...input} 
                    placeholder="Confirme a senha" 
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
            <button className="bg-black hover:bg-gray-900 duration-300 mt-4 p-2 rounded-md group">
              <SignInIcon className='text-2xl mr-1 group-hover:animate-pulse cursor-pointer' />
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
  )
}
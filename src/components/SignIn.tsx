import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import * as yup from "yup";

import { SignIn as SignInIcon } from  "@phosphor-icons/react";
import { Form, Field } from "react-final-form";
import { API_URL, initialValues, validateFormValues } from "../utils";

export const SignIn = () => {
  const [errors, setErrors] = useState<string>('')
  const navigate = useNavigate();    

  const validationSchema = yup.object({
    username: yup.string().min(4, '4 caracteres ou mais').required('obrigatório'),
    email: yup.string().email('e-mail inválido').required('obrigatório'),
    password: yup.string().min(5, 'senha muito curta').required('obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'senhas não conferem').required('obrigatório')
  });


  const onSubmit = async (values = { ...initialValues }) => {   
    try {
      await axios.post(`${API_URL}/register`, {...values})      
      navigate("/login")
    } catch (error) {
      setErrors('não foi possível realizar o registro')
      setTimeout(() => {
        setErrors('')
      }, 4000)
    }     
  }

  const validate = validateFormValues(validationSchema);
  
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
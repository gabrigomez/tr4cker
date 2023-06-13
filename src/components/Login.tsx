import { Keyhole } from "@phosphor-icons/react";
import { useState } from "react"
import { Form, Field } from 'react-final-form'

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {   
    console.log(username, password);
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4">
          LOGIN
        </p>
        <Form
          onSubmit={onSubmit}
          validate={values => {
            const errors = {username, password, confirm: ''}
            if (!values.username) {
              errors.username = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            }
            if (!values.confirm) {
              errors.confirm = 'Required'
            } else if (values.confirm !== values.password) {
              errors.confirm = 'Must match'
            }
            return errors
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form action="submit" onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Username" 
                      className="bg-black m-2 p-2 rounded-md"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            <div>
              <input 
                type="password" 
                placeholder="Senha"
                className="bg-black m-4 p-2 rounded-md"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
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
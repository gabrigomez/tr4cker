import { SignIn as SignInIcon } from  "@phosphor-icons/react";
import { Form, Field } from "react-final-form";


export const SignIn = () => {
  const onSubmit = (values: { username: string; email:string; password: string; confirmPassword: string }) => {    
    console.log(values.username, values.email, values.password);
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-20">
        <p className="mb-4">
          SIGN IN
        </p>
      </div>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {username: '', email: '', password: '', confirmPassword: '' }
          if (!values.username) {
            errors.username = 'Obrigatório'
            return errors              
          }
          if (!values.email) {
            errors.email = 'Obrigatório'
            return errors
          }
          if (!values.password) {
            errors.password = 'Obrigatório'
            return errors
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Obrigatório'
            return errors
          }
          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Senhas não conferem'
            return errors
          }             
          return
        }}
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
            <Field name="email">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 h-14">
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
            <Field name="confirmPassword">
              {({ input, meta }) => (
                <div className="mb-3 flex flex-col w-3/4 h-14">
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
          </form>
        )}
      />
    </div>
  )
}